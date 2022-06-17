---
sidebar_position: 8
---

# Reddit Integration Overview

- [Introduction](#introduction)
- [Debugging an Integration](#debugging-an-integration)
- [Authenticating User with CollabLand Bot](#authenticating-user-with-collabland-bot)
- [Set and Verify Community Config](#set-and-verify-community-config)
- [Set Up Job to Check TPC Rules](#set-up-job-to-check-tpc-rules)

---

## Introduction

- We have familiarized ourselves with the different components that make up CollabLand and Loopback. Now we can take a look at how those components work together in a concrete use case.
- We are going to walk through a high level overview of setting up a Reddit integration with CollabLand. Before we get started with the integration we need to understand the technologies outside of CollabLand that we will need to leverage as well as the limitations with using these technologies. This will require using the Reddit api which has a very low rate limit at only 600 requests for every 10 minutes, and will require us to use a separate set of api credentials for every community. We also will only be able to gate users from joining a private subreddit. Due to Reddit’s api we are not able to gate access to public subreddits or provide more complex permissions.

![reddit integration](./images/reddit-integration.png)

- Our integration will be implemented like the image above. There are two types of users in our integration a Reddit user and a Reddit moderator.
- A moderator will need to create a [reddit app](https://www.reddit.com/prefs/apps), set the bot callback to https://api.collab.land/reddit/authorize, and have the bot id and secret on hand to input later. After logging into the command center a moderator will need to authenticate with the CollabLand Reddit bot so we can display the subrredits the moderator moderates. Once they select one of these subbreddits they will need to input the bot id and secret. We will validate and then store a refresh token to allow users to join their private subreddit. We can now provide a link to the moderator to share with their users to join their private subreddit.
- On the user side they will join a waiting room for a private subreddit which will typically exist in a public subreddit. They will authorize the moderators Reddit bot which will check if the user has the required tokens to join the main private subreddit.
- We will need a lot of different pieces to implement this flow. We will highlight these pieces at a high level in order to avoid dealing with the Reddit specific complexities
  - We will need to authenticate with Reddit
  - We will need to store a moderators bot’s credentials
  - And set up a job to check TPC rules

## Debugging an Integration

- When developing our Reddit integration and we need to debug issues we should use the debugFactory and log issues like the example below.

```tsx
import {debugFactory} from '@collabland/common';
const debug = debugFactory('collabland:reddit');

...
debug('Something in a function');
...
```

## Authenticating User with CollabLand Bot

- We will need two endpoints for our OAuth with Reddit inside of a controller. We will need an authorize endpoint and a callback endpoint.

```tsx
....
  @get('/reddit/authorize')
  async login(
    @param.query.string('state', {
      required: true,
      description: 'State object from the client. This should be subreddit id',
    })
    state: string,
    @param.query.string('subreddit', {
      required: true,
      description: 'Subreddit id',
    })
    subreddit: string,
    @param.query.string('flow', {
      description: 'Reddit login flow for difference users',
    })
    flow: string,
    @param.query.string('redirect_uri', {
      description: 'Redirect URI after connecting to Reddit',
    })
    redirectUri: string,
    @inject(RestBindings.Http.CONTEXT) requestCtx: RequestContext,
  ): Promise<Response> {
    // check if the subreddit id matches its name
    const subName = await this.reddit.getSubredditNameById(state);
    if (subName !== subreddit) {
      throw new HttpErrors.BadRequest(`Invalid URL`);
    }
    // CollabLand community id is t5_2t2yz7
    const params: Record<string, string | undefined> = {
      state,
      redirectUri,
      client_id: state,
      response_type: 'code',
      duration:
        state.toLowerCase() !== 't5_2t2yz7' && flow && flow === 'admin'
          ? 'permanent'
          : 'temporary',
      scope: flow && flow === 'admin' ? '*' : 'identity',
      flow: flow,
    };
    if (!flow) delete params.flow;

    const authClient = await this.getAuthClient(state);
    debug('Oauth client', authClient);
    return authClient.authorize(requestCtx, params);
  }
```

- The authorize endpoint will allow the user to consent to the permissions the Reddit bot needs from the user.

```tsx
....
 @get('/reddit/callback')
  async callback(
    @inject(RestBindings.Http.CONTEXT) requestCtx: RequestContext,
    @param.query.string('state', {required: true}) state: string,
    @param.query.string('code') code: string,
    @param.query.string('error') error?: string, // e.g error=access_denied
    @param.query.string('error_description') errorDescription?: string,
  ) {
    const originalState = (
      state
        ? this.jwt.verifyJWT(state, {
            secret: undefined,
          })
        : {}
    ) as {
      state?: string;
      redirectUri?: string;
      flow?: string;
      subreddit: string;
    };
    debug('Reddit decoded state', originalState);
    const authClient = await this.getAuthClient(
      originalState.state!,
      originalState.flow === 'admin',
    );
    return authClient.callback(requestCtx, {
      code,
      state,
      error,
      errorDescription,
    });
  }
...
```

- The callback will authenticate for us and allow us to store a users access token so we can further interact with them.

## Set and Verify Community Config

- Next we need to setup a couple more endpoints that interact with the Community config repository in order to allow a moderator to store their bot credentials. We will need to verify their credentials and then a spot to store their credentials.

```tsx

....
@post('/reddit/credentials')
  @oas.response(200, {
    type: 'object',
    properties: {
      clientId: {type: 'string'},
      communityName: {type: 'string'},
    },
  })
  async validateAppCredentials(
    @requestBody()
    credentials: {
      clientId: string;
      clientSecret: string;
      redditAppName: string;
      aeToken: string;
    },
    @param.query.string('communityId', {
      required: true,
      description: 'Name of the target community',
    })
    communityId: string,
  ) {
    const states = (await this.kms.verifyAEToken(
      credentials.aeToken,
    )) as UserRecord;
    const commInfo = (await this.reddit.getCommunityInfo(
      communityId,
    )) as unknown as {
      communityId: string;
      communityName: string;
    };
    debug('decode AE token for Reddit', states);
    debug('Reddit subreddit info Auth', commInfo);
    return this.reddit.validateConfig(
      {
        clientId: credentials.clientId,
        clientSecret: credentials.clientSecret,
        appName: credentials.redditAppName,
      },
      commInfo,
      states,
    );
  }
...

```

- We are storing our bot configuration in the Community config repo which we needed to setup specifically for Reddit. This repository handles how we interact with the underlying DynamoDB database for our bot data.

## Set Up Job to Check TPC Rules

- In order to check whether a user can join a private subreddit or not we need to make sure they pass the rules set by the community. This job will take a message from the previous job and check whether the user is qualified or not. If the user is qualified we will make a call to the reddit service and add that user to the private subreddit.

```tsx
import { AnyError, debugFactory } from '@collabland/common';
import {
  buildJobResponseHeaders,
  CHECK_ROLES_RESPONSE,
  JobRequest,
  JobResponse,
  JobRunner,
  JOB_RUNNER_EXTENSION_POINT,
} from '@collabland/job';
import { ContextTags, extensionFor, inject, injectable } from '@loopback/core';
import { REDDIT_JOB_RUNNER, REDDIT_SERVICE } from '../keys';
import type { RedditService } from '../services/reddit.service';

export interface ApplyMembershipRequest {
  communityId: string;
  userId: string;
  roles?: Record<string, boolean>; // Should be {[DEFAULT_ROLE_ID]: boolean}
  results?: Record<string, boolean>;
  context?: { communityName: string; userName: string };
}

export interface ApplyMembershipResponse {
  communityId: string;
  userId: string;
  roles?: Record<string, boolean>;
  /**
   * Indicate if the membership is applied
   */
  applied: boolean | string;
}

const debug = debugFactory('collabland:job:reddit');

@injectable(
  {
    tags: {
      [ContextTags.KEY]: REDDIT_JOB_RUNNER,
    },
  },
  extensionFor(JOB_RUNNER_EXTENSION_POINT)
)
export class RedditJobRunner
  implements JobRunner<ApplyMembershipRequest, ApplyMembershipResponse>
{
  constructor(@inject(REDDIT_SERVICE) private service: RedditService) {}

  supports(type: string): boolean {
    return type === CHECK_ROLES_RESPONSE;
  }

  async run(request: JobRequest<ApplyMembershipRequest>) {
    debug('Request: %O', request);
    const body = request.body;
    if (
      !(
        body.communityId.startsWith('RED#COMM#') &&
        body.userId.startsWith('RED#USER#') &&
        body.context
      )
    ) {
      // Not Reddit
      return;
    }
    debug(`Reddit results: %O`, body.results);
    if (body.results == null) return;

    const qualified = Object.values(body.results)[0];
    debug('qualified: %O', qualified);
    if (qualified == null) return;

    const guildId = body.communityId.replace('RED#COMM#', '');
    try {
      const result = qualified
        ? await this.service.approveUser(
            guildId,
            body.context.communityName,
            body.context.userName
          )
        : await this.service.removeUser(
            guildId,
            body.context.communityName,
            body.context.userName
          );

      debug(
        `Reddit approve user for comm ${body.context.communityName}: %O`,
        result
      );
      const headers = buildJobResponseHeaders(request);
      const response: JobResponse<ApplyMembershipResponse> = {
        type: 'apply-roles-response',
        headers,
        body: {
          communityId: body.communityId,
          userId: body.userId,
          roles: body.roles,
          applied: result,
        },
      };
      debug('Response: %O', response);
      return response;
    } catch (err: AnyError) {
      debug('Fail to apply reddit roles: %O', err);
      const headers = buildJobResponseHeaders(request);
      const response: JobResponse<ApplyMembershipResponse> = {
        type: 'apply-roles-response',
        headers,
        body: {
          communityId: body.communityId,
          userId: body.userId,
          roles: body.roles,
          applied: `Failed to apply membership: ${err}`,
        },
      };
      debug('Response: %O', response);
      return response;
    }
  }
}
```
