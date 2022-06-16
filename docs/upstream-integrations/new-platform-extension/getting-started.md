# Getting Started

# Platform Extensions

## Conventions and Platform Interface

Platform extensions are in `platforms` directory. Code is under `src` .

![getting started](./images/getting-started-code.png)

Your extension will implement a common platform interface `Platform`, which contains the most basic functions an extension might need.

`**packages/platform-manager/src/platform-base.ts**`

```jsx
export interface Platform {
  /**
   * Platform name
   */
  readonly platform: PlatformType | string;

  /**
   * Wallet connection
   * @param account
   */
  // required attributes vary for different platforms
  connectWallet(attributes: object): Promise<void>;

  /**
   * fetch user identity
   * @param accessToken
   */
  getUserProfile(
    accessToken: string,
    options?: Record<string, string>,
  ): Promise<object>;
  ...
}
```

`**platforms/reddit/src/services/reddit.service.ts**`

```jsx

import {Platform, Role} from '@collabland/platform-manager';
...
@injectable({tags: {[ContextTags.KEY]: REDDIT_SERVICE}})
export class RedditService implements Platform {
  constructor(
    @inject(ADMIN_REDDIT_SERVICE)
    private redditAdminService: RedditAdminService,
  ) {}

  readonly platform = 'reddit';

	async getUserProfile(
	    accessToken: string,
	    options: {communityId: string},
	  ): Promise<Partial<UserRecord>> {
	    let modName = '';
	    const identity = await fetch(`${REDDIT_AUTH}/api/v1/me`, {
	      method: 'GET',
	      headers: {
	        Authorization: `Bearer ${accessToken}`,
	        'Content-Type': 'application/x-www-form-urlencoded',
	        Accept: 'application/json',
	        'User-Agent': `Mozilla/5.0 Chrome/98.0.4758.80 by ${modName}`,
	      },
	    });
	    const userStatusCode = identity.status;
	    const userData = (await identity.json()) as UserData;
	    debug('Reddit /api/vi/me status code', userStatusCode);
	    if (userData.error) {
	      throw new HttpErrors[userStatusCode](`${userData.message}`);
	    }
	    const user = {
	      id: userData.id,
	      userPk: `RED#USER#${userData.id}`,
	      platform: 'reddit',
	      name: userData.name,
	    };
	    return user;
	  }
	...
}
```

For binding and dependency injection, please read [Basic concepts of LoopBack](Basic%20concepts%20of%20LoopBack%20cdafa74dc2f54d0f9ab2f2896ee57f8b.md).

By convention, we put most of types in `./src/types.ts`and binding keys and constant under `./src/keys`

## Wrap the Extension

The controllers, services, and other artifacts in the extension will be injected to other components. You can wrap them into a component and export the class.

Take our Reddit extension as an example, we have a few services and controllers to be exported.

`**platforms/reddit/src/reddit.component.ts**`

```jsx
import { Application, Component, CoreBindings, inject } from '@loopback/core';
import { RedditController } from './controllers/reddit.controller';
import { RedditJobRunner } from './jobs/apply-membership';
import { RedditAdminService, RedditService } from './services';

export class RedditComponent implements Component {
  services = [RedditService, RedditAdminService, RedditJobRunner];
  controllers = [RedditController];

  constructor(@inject(CoreBindings.APPLICATION_INSTANCE) app: Application) {}
}
```

To add our `RedditController` to the API server, we need to add the module to the `package.json`first. We can then simply add `RedditComponent` to the controller list of `CollabLandApiApplication`:

`**packages/api-server/src/application.ts**`

```jsx
...
import {RedditComponent} from '@collabland/reddit';
...
export class CollabLandApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
constructor(
    options: ApplicationConfig & {skipOptionalComponents?: boolean} = {},
  ) {
    ...
		this.component(RedditComponent);
		this.component(AuthenticationComponent); // other components
    this.component(DiscordComponent);
...
}
```

`CollabLandApiApplication` would include all controllers from all its component at the runtime.

Other Reddit services can be added the same way. `CollablandJobServerApplication` is another example:

```jsx
...
import {RedditComponent} from '@collabland/reddit';
...
export class CollablandJobServerApplication extends RepositoryMixin(
  RestApplication,
) {
  constructor(options: ApplicationConfig & {job?: JobServiceOptions} = {}) {
    super(options);
		...
		this.component(RedditComponent);
		...
}
```

`CollablandJobServerApplication` has an extension point `JOB_RUNNER_EXTENSION_POINT`. By adding `RedditComponent`, the extension point `JOB_RUNNER_EXTENSION_POINT`will have access to the `JobRunner` extension we implemented in our Reddit extension `RedditJobRunner` .

See [Basic concepts of LoopBack](Basic%20concepts%20of%20LoopBack%20cdafa74dc2f54d0f9ab2f2896ee57f8b.md) to learn more about extension point/extensions.

# Basic Components/Services in Collab.Land

## KMS

We use AWS Key Management Service (KMS) to manage secrets. Once you have set up your [Collab.Land](http://Collab.Land) AWS account, you should be able to load secrets from env vars:

```jsx
clientId: getEnvVar('DISCORD_CLIENT_ID');
```

We also use KMS to generate, verify, and decode JWT/AE token:

```jsx
const userInfo = {
  name: '4160 Tuesdays',
  id: 'abcde12345',
};

// encode
const aeToken = await this.kms.generateAEToken(userInfo, undefined, '1h');
// decode
const state = this.jwt.verifyJWT(aeToken, {
  secret: undefined,
});
```

## Job Server & Job Runner

Job Server manages different job runners for different job types and platforms. There are two main job types: `check-roles-request` and `check-roles-response`.

`check-roles-request`: this type of job would user check holding based on the user, community, and wallet address information.

`check-roles-response`: this type of job would handle the result from balance checking. i.e add/remove members or apply/remove roles. Platform extension will need to implement their own job service to apply the result to their platform.

The job server selects the right job runner to process different types of jobs. And again, Job Server and Job Runners use the extension point/extensions design pattern.

Your platform extension will need to provide a job runner to handle `check-roles-response` results.

## Wallet Manager

Wallet manages handles all connections from different platforms. When a user connects their wallet, the Wallet manager will create and submit a `check-roles-request` type job to the job queue.

## Asset Manager

Asset Manager manages different Asset Loaders and Asset Authorizer for different chains and assets providers ( OpenSea, Verifiable Credentials, etc). When a `check-roles-request` type job is being processed, the asset manager would find the right asset loader/authorizer to read assets on-chain/off-chain based on the request.
