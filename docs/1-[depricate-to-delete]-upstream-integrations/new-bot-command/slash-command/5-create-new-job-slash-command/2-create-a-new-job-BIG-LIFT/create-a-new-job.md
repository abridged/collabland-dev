ROUGH DRAFT
TODO: GOALS: SPLIT INTO MULTIPLE FILES AS NEEDED. Learn how to reference other steps already completed in other tutorials, or onboarding.
TODO: Maybe watch the video again and see if I missed any super helpful trouble shooting steps.  I didn't watch the video becuase I wanted a rough draft. Maybe Rodrigo can watch the video
and try to complete this section of the tutorial

# Creating the Hello World Slash Command Job
This will show how to create and register a job from the ground up, how to call that job from a discord command, and how to return a response. This is discord command heavy and will not cover the nunaces of creating custom jobs.

## Creating the file heigherarchy

run the following commands from the project root to create the files we'll need
You can also create these files manually on the VS Code folder editor if you'd like to better understand the structure

(Note there is a copy of hello world for reference, I should change the names of hello world to hello world reference so that users can create hello world themself from the ground up)

``` bash
cd components
mkdir hello-world
cd hello-world

touch .mocharc.js
touch LICENSE
touch package.json
touch README.md
touch tsconfig.json

mkdir src
cd src

touch hello-world.components.ts
touch index.ts
touch keys.ts
touch types.ts
touch utils.ts

mkdir __tests__
mkdir __tests__/acceptance
mkdir __tests__/acceptance/hello-world-job-server-job.acceptance.ts
mkdir __tests__/unit

mkdir jobs
touch jobs/hello-world-job-server.job.ts
touch jobs/index.ts

mkdir models
touch models/hello-world.models.ts
touch models/index.ts

mkdir services
touch services/hello-world.service.ts
touch services/index.ts
```

These are all the empty folders, I'll show what content goes in each, how they interact, etc.

But first we're going to step over to the discord command

Lets go back to the projects root directory

## Creating a discord command that calls a job
Why:
The job server is useful for long running tasks and for tasks that spawn other tasks. For example checking a block chian balance takes time.  If a first balance check is completed successfully a second balance check job could be spawned to ensure a user has both assets. If they do not have the first asset then the 2nd job will never be created.
Our example is super simple because we're not actually running any long running processes.  We just want to show that a round trip can be completed from discord, through the job server, and back to discord.
The only difference between this command and a discord command that returns immediatley is that this command will import the Job service and will send a request to the SQS queue
The queue will allow this request to be picked up by the job server. The job server will then use the discord applicaiton id and token to send a response directly to discord once the process is completed.

This is an example of the request sent to the SQS Queue:
```json
TODO: Generate and paste here - run full stack with sqsd off, then go get from the queueu
```

Lets Show how we get there

### Create a new discord command

To create a new discord command run the folling command from the root directory

```
touch components/discord/src/commands/hello-world-job-server.command.ts
```

Next use your IDE or command line to open the file and paste in the following contents
Note: Since there is already documentation on how to create a slash command we will not cover the purpose of all the functions. That documentation can be found here [HERE LINK]

```tsx
// Copyright Abridged, Inc. 2021. All Rights Reserved.
// Node module: @collabland/component-discord
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {BindingScope, extensionFor, injectable, inject} from '@loopback/core';
import {
  APIInteractionResponse,
  ApplicationCommandType,
  InteractionResponseType,
  ApplicationCommandOptionType,
  MessageFlags,
} from 'discord-api-types/v10';
import {CommandInteraction} from 'discord.js';
import {
  DiscordCommandHandler,
  DISCORD_COMMAND_HANDLER_EXTENSION_POINT,
} from '../types';
import {requestToHelloWorldJobServer} from './helper';
import {JOB_SERVICE, JobService, jobTriggers} from '@collabland/component-job';
import {debugFactory} from '@collabland/common';
import {DISCORD_SERVICE} from '../keys';
import {DiscordService} from '../services';
const debug = debugFactory(
  'collabland:discord:commands:hello-world-job-server',
);

@injectable(
  {
    scope: BindingScope.SINGLETON,
  },
  extensionFor(DISCORD_COMMAND_HANDLER_EXTENSION_POINT),
)
export class HelloWorldJobServerSlashCommandHandler
  implements DiscordCommandHandler
{
  constructor(
    @inject(JOB_SERVICE) private jobService: JobService,
    @inject(DISCORD_SERVICE) private service: DiscordService,
  ) {}

  name = 'hello-world-job-server';
  commandType = ApplicationCommandType.ChatInput;
  description =
    'A command for new developers to test that discord commands hit their local job server';
  options = [
    {
      name: 'your-name',
      description: "Name of person we're greeting",
      type: ApplicationCommandOptionType.String as number,
      required: true,
    },
  ];

  async handle(
    interaction: CommandInteraction,
  ): Promise<APIInteractionResponse> {
    debug('interaction:');

    const yourName = interaction.options.getString('your-name')!;
    debug('Your Name: %s', yourName);

    await interaction.deferReply({ephemeral: true});

    const context = {
      timestamp: new Date().toISOString(),
      applicationId: interaction.applicationId,
      token: interaction.token, /** Valid for 15 mins */
    };

    debug('Discord Context:');
    debug(JSON.stringify(context, null, 2));

    const publishJobResponse = await requestToHelloWorldJobServer(
      this.jobService,
      interaction.user.id,
      yourName,
      jobTriggers.BACKGROUND_CHECK /** raymond says use this trigger */,
      context,
    );
    debug('publishJobResponse:');
    debug(JSON.stringify(publishJobResponse, null, 2));

    const content = 'Sending Your Name through the job server, please wait.';
    const reply = {
      content: content,
      components: [],
    };
    await interaction.editReply(reply);

    const response: APIInteractionResponse = {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: `Unused Response never reaches output`,
        flags: MessageFlags.Ephemeral,
        components: [],
      },
    };
    return response;
  }
}
```

//helper

In this line above `requestToHelloWorldJobServer` is called from `helper.js`

```
const publishJobResponse = await requestToHelloWorldJobServer(
```

Next we will add this function to `helper.js`

in your IDE open 
```
components/discord/src/commands/helper.ts
```

Add the following function to the end of the file

```tsx
/**
 * Hello World Job Server
 * @param client - Discord bot client
 * @param data - API interaction data received from webhook calls
 * @returns
 */
export function requestToHelloWorldJobServer(
  jobService: JobService,
  userId: string,
  yourName: string,
  trigger = jobTriggers.BACKGROUND_CHECK,
  context?: Record<string, AnyType>,
) {
  debug(
    'Publishing a job to check balance for user:%s, token:%s ',
    userId,
    yourName,
  );
  return jobService.publish({
    type: 'hello-world-job-server-request',
    headers: {
      [jobHeaders.JOB_TRIGGER]: trigger,
    },
    body: {
      userId: `DIS#USER#${userId}`,
      yourName,
      context,
    },
  });
}
```

The above function is passed the input values from discord including the users Discord ID which can be used to reference or @ mention the user, the name we passed as a variable which will show that data can be passed to the job server and returned, and the `context` which includes the `applicationId` and `token` these values from the discord interaction will allow the job server access to update the specific messages content.  
Also notice `type: 'hello-world-job-server-request'`.  When jobs are pushed to the queue the job server examines the job type and matches it with a job handler that claims it can handle the request type 

This is defined by the `supports` interface in the job file.

Example:
```tsx
supports(type: string): boolean {
  const result = type === 'hello-world-job-server-request';
  debug('Supported by hello-world-job-server-request JobRunner: %s', result);
  return result;
}
```

More on this when we populate all the job files

//register new command

To register a discord command with the project we'll include the command in `discord/src/commands/index.ts` as well as `discord/src/discord.components.ts`

First lets edit `discord/src/commands/index.ts`
Open this file and paste at the bottom
```tsx
export * from './hello-world-job-server.command';
```

Next let's edit `discord/src/discord.components.ts`
Open this file and paste at this import in the imports section
```tsx
import {HelloWorldJobServerSlashCommandHandler} from './commands/hello-world-job-server.command';
```
And register this service in the class export section
```tsx
...
export class DiscordComponent implements Component {
  services = [
    HelloWorldJobServerSlashCommandHandler
...
```

//TODO: Rebuild and deploy this command to Discord. It will not work until we create the job.  The build and deploy code is referenced here [Link to previous deployment of the basic hello-world non Job Server command]

## Populate the Hello World Component

Let's start low level.  Lets head back to `components/hello-world`

Start by opening `hello-world/src/jobs/hello-world-job-server.job.ts`

Paste the below code
(TODO: Not sure if having them paste in all the files is helpful vs copying an existing template. I think it's helpful becuase they
are forced to see all the files that are involved & then register them in one another)
```tsx
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {AnyError, AnyType, debugFactory} from '@collabland/common';
import {
  JobRequest,
  JobResponse,
  JobRunner,
  JOB_RUNNER_EXTENSION_POINT,
} from '@collabland/job';
import {BindingScope, extensionFor, inject, injectable} from '@loopback/core';
import {HelloWorldService} from '../services';
import {HELLO_WORLD_SERVICE} from '../keys';
const debug = debugFactory('collabland:job:hello-world-job-server');

export interface HelloWorldJobServerRequest {
  userId: string;
  yourName: string;
  context?: Record<string, AnyType>;
}

export interface HelloWorldJobServerResponse
  extends HelloWorldJobServerRequest {
  error?: object;
}

@injectable(
  {scope: BindingScope.SINGLETON},
  extensionFor(JOB_RUNNER_EXTENSION_POINT),
)
export class HelloWorldJobServerJobRunner
  implements JobRunner<HelloWorldJobServerRequest, HelloWorldJobServerResponse>
{
  constructor(
    @inject(HELLO_WORLD_SERVICE)
    private helloWorldService: HelloWorldService,
  ) {}

  supports(type: string): boolean {
    const result = type === 'hello-world-job-server-request';
    debug('Supported by hello-world-job-server-request JobRunner: %s', result);
    return result;
  }

  async run(request: JobRequest<HelloWorldJobServerRequest>) {
    debug('--HelloWorldJobServerRequest--');
    debug('Request: %O', request);
    const body = request.body;

    await this.helloWorldJobServerRequest(body);

    const response: JobResponse<HelloWorldJobServerResponse> = {
      type: 'hello-world-job-server-response',
      headers: {
        requestId: request.id!,
      },
      body: {
        ...body,
      },
    };
    debug('Response: %O', response);
    return response;
  }

  /**
   * Greets a new dev from the job server
   * @param userId - Sender user pk
   * @param yourName - A name that will be greeted
   * @param value - Transaction value
   */
  async helloWorldJobServerRequest(
    req: HelloWorldJobServerRequest,
  ): Promise<String> {
    debug('helloWorldJobServerRequest');

    /**
     *  DO STUFF HERE, Call services ETC
     */

    try {
      await this.helloWorldService.sendHelloWorldJobServerResponse(req);
    } catch (err: AnyError) {
      debug('Fail to send followup message: %O', err);
    }

    //PLACE HOLDER
    const result =
      'Hello World Job Server (Pretty sure this response is unused)';

    return result;
  }
}
```

Next open `hello-world/src/jobs/index.ts`
And paste
```
export * from './hello-world-job-server.job';
```

The Job File above is the entry point for the job server. The `supports` interface defines the type of job this file can process.  The type of job matches the job we are emitting from our discord command `const result = type === 'hello-world-job-server-request';`
The job is actually calling a function in the job service. So we'll go there next.

Next open `hello-world/src/services/hello-world.service.ts`
And paste

```jsx
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {debugFactory} from '@collabland/common';

import {DiscordService, DISCORD_SERVICE} from '@collabland/component-discord';
import {BindingScope, ContextTags, inject, injectable} from '@loopback/core';
import {APIEmbed, APIMessage} from 'discord-api-types/v10';
import {MessageEmbed} from 'discord.js';
import {HELLO_WORLD_SERVICE} from '../keys';
import {HelloWorldJobServerRequest} from '../jobs/hello-world-job-server.job';

const debug = debugFactory('collabland:service:hello-world');

@injectable({
  scope: BindingScope.SINGLETON,
  tags: {[ContextTags.KEY]: HELLO_WORLD_SERVICE},
})
export class HelloWorldService {
  constructor(
    @inject(DISCORD_SERVICE)
    private service: DiscordService,
  ) {}

  /**
   * Formats a check balance request into the discord required output
   * @param request
   * @param result
   * @param error
   * */
  async sendHelloWorldJobServerResponse(
    request: HelloWorldJobServerRequest,
  ): Promise<true | APIMessage | undefined> {
    if (request.context?.token != null) {
      const description = `Hello World Job Service: Hello ${request.yourName}`;
      const embed = new MessageEmbed()
        .setColor('#86B049')
        .setTitle('Hello World Job Service Response')
        .setAuthor({
          name: 'Collab.Land',
          iconURL:
            'https://cdn.discordapp.com/app-icons/904785894161141851/98ee86eced003e381e3240d81247ca0d.png?size=512',
        })
        .setDescription(description);
      const followUpMessage = await this.service.createFollowupMessage(
        request.context.applicationId,
        request.context.token,
        {
          embeds: [embed.toJSON() as APIEmbed],
        },
      );
      return followUpMessage;
      return true;
    } else {
      debug('Error: No Discord Token. Cannot send Balance Check Follow Up.');
    }
  }
}
```

Notice that we're importing the Discord Service in the constructor. We'll see lather that that actualy involves including the discord component as a required package in package.json

Our function `sendHelloWorldJobServerResponse` takes the job request object and extracts the variable `yourName` the `context.token` and uses the method `createFollowupMessage` from the discord service to create a reply which is sent to the user.

But before this can all work we need to register the `hello-world.service.ts`

Next open `hello-world/src/services/index.ts`
And paste
```
export * from './hello-world.service';
```

We'll skip `__tests__` and `models` for now you can view their contents in the `tutorials/components/hello-world` example. However they are not needed for this demo.

Next open `hello-world/src/hello-world.component.ts`
and paste

```tsx
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Component} from '@loopback/core';

import {HelloWorldJobServerJobRunner} from './jobs/hello-world-job-server.job';

import {HelloWorldService} from './services';

export class HelloWorldReferenceComponent implements Component {
  controllers = [];
  services = [HelloWorldService, HelloWorldJobServerJobRunner];
}
```

We will register the job and service here `HelloWorldService` & `HelloWorldJobServerJobRunner`
And then we'll register the entire component with the `job-server`.  but first let's quickly populate `hello-world/src/index.ts`

Next open `hello-world/src/index.ts`
and paste

```
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-tip-jar
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

// export * from './__tests__/application';
export * from './keys';
//export * from './models';
export * from './hello-world.components';
export * from './services';
// export * from './types';
```

Then open `hello-world/src/keys.ts`
and paste

(I don't think this file is really needed though it is imported into the job as the inject type in the constructor @inject(HELLO_WORLD_SERVICE))
```
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-tip-jar
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {BindingKey} from '@loopback/core';

import type {HelloWorldService} from './services';
export const HELLO_WORLD_SERVICE = BindingKey.create<HelloWorldService>(
  'services.HelloWorldService',
);
```

We'll leave `hello-world/src/types.ts` and `hello-world/src/utils.ts` empty for now.

Finally we'll edit the package.json in the hello-world component

Open `hello-world/package.json`
and paste:

(TODO: probably not all these imports are needed as packages. could clean up if we wanted)
```json
{
  "name": "@collabland/component-hello-world",
  "version": "0.1.0",
  "description": "CollabLand Hello World component",
  "keywords": [
    "loopback-extension",
    "loopback"
  ],
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "lb-tsc -b",
    "build:watch": "lb-tsc -b --watch",
    "build:full": "npm ci && npm run rebuild && npm run test:dev",
    "pretest": "npm run build",
    "test": "lb-mocha --allow-console-logs --timeout 1000000 \"dist/__tests__\"",
    "rebuild": "npm run clean && npm run build",
    "clean": "lb-clean dist *.tsbuildinfo .eslintcache"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:abridged/collabland-monorepo.git",
    "directory": "components/hello-world"
  },
  "private": true,
  "publishConfig": {
    "access": "public"
  },
  "license": "MIT",
  "files": [
    "README.md",
    "dist",
    "src",
    "!*/__tests__"
  ],
  "dependencies": {
    "@collabland/api-base": "^0.6.4",
    "@collabland/api-security": "^0.8.0",
    "@collabland/aws": "^0.27.4",
    "@collabland/common": "^0.31.0",
    "@collabland/component-authorization": "^0.8.0",
    "@collabland/component-aws": "^0.7.4",
    "@collabland/component-discord": "^0.10.0",
    "@collabland/component-ethereum": "^0.8.0",
    "@collabland/component-platform": "^0.10.4",
    "@collabland/component-wallet-manager": "^0.1.0",
    "@collabland/job": "^0.10.4",
    "@collabland/near": "^0.19.4",
    "@collabland/near-indexer": "^0.12.0",
    "@collabland/repositories": "^0.16.0",
    "@gnosis.pm/safe-core-sdk": "^2.1.0",
    "@loopback/authentication": "^9.0.0",
    "@loopback/core": "^4.0.0",
    "@loopback/repository": "^5.0.0",
    "@loopback/rest": "^12.0.0",
    "@loopback/security": "^0.8.0",
    "borsh": "^0.7.0",
    "discord-api-types": "^0.33.0",
    "near-api-js": "^0.44.2",
    "tslib": "^2.0.0"
  },
  "devDependencies": {
    "@collabland/component-job": "^0.9.4",
    "@collabland/component-redis": "^0.5.4",
    "@loopback/build": "^9.0.0",
    "@loopback/eslint-config": "^13.0.0",
    "@loopback/testlab": "^5.0.0",
    "@types/node": "^16.11.24",
    "typescript": "~4.6.4"
  },
  "copyright.owner": "Abridged, Inc.",
  "author": "Abridged, Inc."
}
```

notice the name and version 
```json
"name": "@collabland/component-hello-world",
"version": "0.1.0",
```

We'll be referencing the hello world component as it's own package and registering it in the job server next.

## Registering your job with the Job server

From the root directory open
`packages/job-server/package.json`

We'll need to require `@collabland/component-hello-world`

in the dependencies section add

```
"@collabland/component-hello-world": "^0.1.0",
```

Next open 
`packages/job-server/src/applications.ts`

add this import
```
import {HelloWorldComponent} from '@collabland/component-hello-world';
```

And register it below in the constructor
```
this.component(HelloWorldComponent);
```

## Rebuild Everything

To get the references to work we'll need to rebuild the Discord folder, the Hello world component folder, and the job-server package.

Execute these commands in your terminal from the project root

```bash
npm install
#May Fail

cd components/discord
npm run build

cd ../../
cd components/hello-world
npm run build

cd ../../
cd packages/job-server
npm run build

npm install
```

Note that because the job-server references the new package exported from `componets/hello-world` you may have to run npm install multiple times, and `npm run build` multiple times until they succeed. 

If you are truely having trouble building the project you can run `npm install` and `npm run build` from the root directory.  You can also run `npm run rebuild` which will delete all previous builds.
This may be necesary if you get errors like "file already exists" or "package does not exist".
It may also be helpful to manually delete the `node_modules` folder from any component or package that is causing an `npm install` or `npm run build` error.

# Starting all services and testing the discord command hits the job server

TODO: reference previous documentation on how to start the project, job server, sqsd, redis, etc. 

When all is working your output should look like this:
(TODO: image of discord prompt and response)

