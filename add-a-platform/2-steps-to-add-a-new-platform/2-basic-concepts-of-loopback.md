---
sidebar_position: 2
sidebar_label: Basic concepts of LoopBack
sidebar_class_name: nav-normal-page
---

# Basic concepts of LoopBack

- [Data Access](#data-access)
- [Naming Convention](#naming-convention)
- [Extension Point / Extensions](#extension-point--extensions)
- [Dependency Injection / Binding](#dependency-injection--binding)
- [Example of Dependency Injection, Binding, and Extension Point / Extensions](#example-of-dependency-injection-binding-and-extension-point--extensions)
  - [Extension Point](#extension-point)
  - [Extensions](#exttensions)
- [Debug Strings](#debug-strings)

---

[Collab.Land](http://Collab.Land) is built on top of an open-source framework [LoopBack](http://loopback.io). Loopback is a highly extensible Node.js & Tsc framework for building APIs.

## Data Access

Here are some basic concepts of Loopback, which you will see in the Collab.Land codebase:

- Model: describes the shape of data. It usually defines a list of properties with name, type, and other constraints. For example, model `Community` has properties `id`, `name`, `platform`, etc.
- Repository: represents a specialized interface that provides strongly-typed data access (for example, CRUD) operations of a model against the underlying database or service. For example, in the `CommunityRepository`, it has `findCommunity`, `createCommunity` functions that talk to the DB or other services.
- Controller: where endpoints live

## Naming Convention

We use kebab-case and suffix for file names. For example, a **service** file would be `my-platform.service.ts`. A controller file would be `my-platform.controller.ts`

We put files under their directories. For example, all controller files would be under `src/controllers` directory, and all service files under `src/services`.

We use PascalCase for ClassNames, camelCase for functionNames, and variableNames. For example `AssetManager`, `checkBalance`, `responseData`

## Extension Point / Extensions

The power of Loopback comes from the idea of Extension/Extension point and dependency injection. Such a design pattern allows applications to extend and scale easily. It is used a lot in [Collab.Land](http://Collab.Land).

💡 For example, Collab.Land has an `AssetManager` service that can read/load assets from different chains. This is done by many different `Authorizer`s. When a request comes in, `AssetManager` would load assets with a certain `Authorizer` based on the chain type in the request.`Authorizer` is an interface that describes common behaviors of different chains (for example `checkBalance`).

💡 In this case, the `AssetManager` is an extension point. Different `Authorizer`s can be implemented and injected to this extension point as **extensions**.

![extension.drawio.png](./images/extension.drawio.png)

## Dependency Injection / Binding

In LoopBack, there is a concept called `Context`. It is an abstraction of all state and dependencies in your application. `Context` is used as a global registry for anything/everything in your app (all configs, state, dependencies, classes, etc). `Context` uses `binding` and dependency injection to manage its dependencies.

A `binding` connects its value to a unique key as the address to access the entry in a context.

[Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection) is a technique where the construction of dependencies of a class or function is separated from its behavior, in order to keep the code [loosely coupled](https://en.wikipedia.org/wiki/Loose_coupling).

Have no clue what this is about? Don’t worry! Check out the example below 👇

## Example of Dependency Injection, Binding, and Extension Point / Extensions

The following is an example of using binding / DI with extension/extension point pattern in Collab.Land

📕 In Collab.Land, we have an **interface** called `JobRunner`, which processes `Job` coming from different platforms. i.e There are `DiscordJobRunner` , `RedditJobRunner`, etc. Class `JobDispatcherService` aggregates all different `JobRunner`s. When a job comes in, `JobDispatcherService` would decide which `JobRunner` to process it.

**This is a typical use case for extension point/extensions.** `JobDispatcherService` has the extension point, and those different `JobRunner`s are extensions.

### Extension Point

**Extension point `job-dispatcher.service.ts`**

```jsx
import {JOB_DISPATCHER_SERVICE, JOB_SERVICE} from '../keys';
import {JobService} from './job.service';
...

@injectable({
  scope: BindingScope.SINGLETON,
  tags: {
    [ContextTags.KEY]: JOB_DISPATCHER_SERVICE,
  },
})
export class JobDispatcherService {
  constructor(
    @inject(JOB_SERVICE) readonly jobService: JobService,
    @extensions.list(JOB_RUNNER_EXTENSION_POINT) // -> extension point for JobRunner
    readonly runners: JobRunner[],
  ) {
    ...
  }
...
}
```

`JobDispatcherService` is able to access different `JobRunner`s via the extension point `JOB_RUNNER_EXTENSION_POINT` where

`JOB_RUNNER_EXTENSION_POINT` is a binding key:

```jsx
 *const* JOB_RUNNER_EXTENSION_POINT = 'collabland.jobRunners';
```

In the constructor, `@extensions.list` will allow us to have access to all `JobRunner` through the extension point `JOB_RUNNER_EXTENSION_POINT`

---

### Extensions

**Extensions** `**/reddit/jobs/apply-membership.ts**`

```jsx
import {REDDIT_JOB_RUNNER, REDDIT_SERVICE} from '../keys';
import type {RedditService} from '../services/reddit.service';
...
@injectable(
  {
    tags: {
      [ContextTags.KEY]: REDDIT_JOB_RUNNER, // binding key for this JobRunner
    },
  },
  extensionFor(JOB_RUNNER_EXTENSION_POINT), //indictates which EP it is for
)
export class RedditJobRunner
  implements JobRunner<ApplyMembershipRequest, ApplyMembershipResponse>
{
  constructor(@inject(REDDIT_SERVICE) private service: RedditService) {}

  supports(type: string): boolean {
    ...
  }
...
}
```

You may also notice there is an `@injectable` tag decorating those classes and a `@inject` tag inside of their constructors. This is how you can manage your dependencies easily with DI and binding:

In `RedditJobRunner`, the tag `@injectable` makes the class injectable and can be injected to the extension point `JOB_RUNNER_EXTENSION_POINT` as one of its extensions with binding key `REDDIT_JOB_RUNNER`.

Inside its constructor, it injects a `RedditService` via the binding key `REDDIT_SERVICE`. If we take a look at the `RedditService` class:

**`/reddit/services/reddit.service.ts`**

```jsx
@injectable({tags: {[ContextTags.KEY]: REDDIT_SERVICE}})
export class RedditService implements Platform {
  constructor(
    @inject(ADMIN_REDDIT_SERVICE)
    private redditAdminService: RedditAdminService,
  ) {} ...
}
```

`@injectable`makes `RedditService` injectable via the binding key it registered(`REDDIT_SERVICE`). And again, this class can inject other dependencies as long as they are injectable and have binding keys.

These code snippets show how you can manage dependencies with DI and Binding and how Extension point/extension strategy is implemented with DI and Binding.

---

A few things to keep in mind:

- if a dependency is not in the same module, it needs to be imported to the target module (`package.json`)
- when you implement a component/extension, make sure it does not have **circular dependency** issues in your module.

## Debug Strings

If you get an error but it doesn’t provide enough information, you can turn on debug mode by starting your application using `DEBUG=<DEBUG_STRING> npm start`

This is how you can set the debug string:

```jsx
import {debugFactory} from '@collabland/common';
...
const debug = debugFactory('collabland:my-module');
...
export class MyModule {
  ...
async fetchData () {
	const result = ....;
	debug('Fetch data result: %O', result);
}

```

and run `DEBUG=collabland:my-module npm start`

To include multiple debug strings, use `DEBUG=<string1>,<string2>,.. npm start`
