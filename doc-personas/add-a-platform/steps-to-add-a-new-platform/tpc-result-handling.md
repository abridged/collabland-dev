---
sidebar_position: 6
sidebar_label: Token Permission Checks Result Handling
sidebar_class_name: nav-normal-page
id: tpc-result-handling
---

# Token Permission Checks Result Handling

- [Job Runner](#job-runner)
  - [Job Types](#job-types)
  - [Differentiate Platforms](#differentiate-platforms)
  - [Balance Check Results](#balance-check-results)
  - [Log Results](#log-results)
  - [Code](#code)
- [Debugging](#debugging)

---

## Job Runner

Once users connect their wallets via the wallet connection site, the Wallet Manager would submit a `check-role-request` type job, which includes the user and the community info and the wallet address. This job will be picked up by a specific Job Runner that checks user holding based on token permission rules the community has.

The balance check result needs to be consumed by the corresponding platform. Therefore, your platform will need to implement a Job Runner to handle it.

### Job Types

To handle the results of balance checking (`check-role-request` type job), your platform will need to implement your own job runner to apply any necessary actions to your platform.

Our Reddit extension has a good example.

📕 Reddit does not have _Role_ concepts. Users can be approved to join a subreddit (community) or be removed from it.

In `RedditJobRunner` , we indicate the job type it supports. This job runner would take a request that has user and community info and their check result:

```jsx
export interface ApplyMembershipRequest {
  communityId: string;
  userId: string;
  roles?: Record<string, boolean>;
  results?: Record<string, boolean>;
  context?: {communityName: string; userName: string};
}
...
export class RedditJobRunner
  implements JobRunner<ApplyMembershipRequest, ApplyMembershipResponse>
{
supports(type: string): boolean {
    return type === CHECK_ROLES_RESPONSE; //check-role-response type
  }
...
async run(request: JobRequest<ApplyMembershipRequest>) { // -> get info from JobRequest
...
}
```

### Differentiate Platforms

However, there are many job runners for different platforms. We need to differentiate which job runner is the right one. We can simply use the platform prefix to achieve so:

```jsx
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
...
}
```

### Balance Check Results

If your platforms has _Roles_, you can find the result of role based rules in `roles`. Otherwise for no-role platforms, the result is in `results`.

```jsx
export interface ApplyMembershipRequest {
  communityId: string;
  userId: string;
  roles?: Record<string, boolean>;
  results?: Record<string, boolean>;
  context?: { communityName: string, userName: string };
}
```

Since subreddits do not have roles, we will check if `results[0]` for balance check result:

```jsx
		...
		debug(`Reddit results: %O`, body.results);
    if (body.results == null) return;

    const qualified = Object.values(body.results)[0];
    debug('qualified: %O', qualified);
    if (qualified == null) return;
		...
```

Based on their qualifications, we can then `approveUser` or `removeUser`.

### Log results

Since the job server is running on Beanstalk, it is hard to debug. We mainly use OpenSearch to capture server logs for better visibility. Therefore, once we successfully apply any actions to the user, we will then submit _another_ _job_ to the job server. It may not have any effect. This job is simply a log.

```jsx
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
```

Because there is no `apply-roles-response` type job runner for Reddit (`RED#COMM` and `RED#USER`), this job will only show on OpenSearch as a record with no effect.

### Code

RedditJobRunner **`platforms/reddit/src/jobs/apply-membership.ts`**

```jsx
export interface ApplyMembershipRequest {
  communityId: string;
  userId: string;
  roles?: Record<string, boolean>; // Should be {[DEFAULT_ROLE_ID]: boolean}
  results?: Record<string, boolean>;
  context?: {communityName: string; userName: string};
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
...
@injectable(
  {
    tags: {
      [ContextTags.KEY]: REDDIT_JOB_RUNNER,
    },
  },
  extensionFor(JOB_RUNNER_EXTENSION_POINT),
)
export class RedditJobRunner
  implements JobRunner<ApplyMembershipRequest, ApplyMembershipResponse>
{
  constructor(@inject(REDDIT_SERVICE) private service: RedditService) {}

  supports(type: string): boolean {
    return type === CHECK_ROLES_RESPONSE; //indicates job runner handling type
  }

  async run(request: JobRequest<ApplyMembershipRequest>) {
    debug('Request: %O', request);
    const body = request.body;
    if ( // differenciate platforms
      !(
        body.communityId.startsWith('RED#COMM#') &&
        body.userId.startsWith('RED#USER#') &&
        body.context
      )
    ) {
      // Not Reddit
      return;
    }
    debug(`Reddit results: %O`, body.results); // check role result
    if (body.results == null) return;

    const qualified = Object.values(body.results)[0];
    debug('qualified: %O', qualified);
    if (qualified == null) return;

    const guildId = body.communityId.replace('RED#COMM#', '');
    try { // apply actions
      const result = qualified
        ? await this.service.approveUser(
            guildId,
            body.context.communityName,
            body.context.userName,
          )
        : await this.service.removeUser(
            guildId,
            body.context.communityName,
            body.context.userName,
          );

      debug(
        `Reddit approve user for comm ${body.context.communityName}: %O`,
        result,
      );

/**
After applying any actions, we will submit another
*/
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

## Debugging

Besides local server with debugging string, you should also check the OpenSearch log table for any related job logs
