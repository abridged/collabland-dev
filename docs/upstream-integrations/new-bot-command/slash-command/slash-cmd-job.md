---
sidebar_position: 9
---

# Creating A Slash Command That Calls A Job

# Creating the Hello Goodbye Slash Command Job

![Screen Shot 2022-06-16 at 2.51.58 PM.png](./imgs/img20.png)

![Screen Shot 2022-06-16 at 11.08.11 AM.png](./imgs/img21.png)

## Step 1: Understand why we need a Job Server

Why:
The job server is useful for long running tasks and for tasks that spawn other tasks. For example checking a block chain balance takes time.  If a first balance check is completed successfully a second balance check job could be spawned to ensure a user has both assets. If they do not have the first asset then the 2nd job will never be created.
Our example is super simple because we're not actually running any long running processes.  We just want to show that a round trip can be completed from discord, through the job server, and back to discord.
The only difference between this command and a discord command that returns immediatley is that this command will import the Job service and will send a request to the SQS queue
The queue will allow this request to be picked up by the job server. The job server will then use the discord application id and token to send a response directly to discord once the process is completed.

This is an example of the request sent to the SQS Queue:

```json
{
  "type": "hello-goodbye-job-server-request",
  "headers": {
    "trigger": "bkg_bal_check"
  },
  "body": {
    "userId": "DIS#USER#330736597584576514",
    "yourName": "test1",
    "context": {
      "timestamp": "2022-06-22T15:29:05.560Z",
      "applicationId": "988126468599058432",
      "token": "aW50ZXJhY3Rpb246OTg5MTkwMjk2MzE3MzMzNTc0OlBQSnVHV0RQczNCWmxTWHpKek50NHVJQ0ptSzJKak15TGtHcERMWE45dVpiWDRJRlV5Y3h5WlJMWndnSGlFSGJQblJPSW9VbXgwTkRONWgySVcySG4wNUNwNGpkTHM2ZkxzTDlOV1ZzMUgwZllYUWZOTXc3N2h2U1Zad2k4aWsy"
    }
  },
  "id": "NP28TVJtRvbmKcmhck6fa"
}
```

Lets Show how we get there

This will show how to create and register a job from the ground up, how to call that job from a discord command, and how to return a response. This is discord command heavy and will not cover the nuances of creating custom jobs.

## Step 2: Creating the file hierarchy

run the following commands from the project root to create the files we'll need
You can also create these files manually on the VS Code folder editor if you'd like to better understand the structure

```tsx
cd examples
mkdir hello-goodbye
cd hello-goodbye

touch .mocharc.js
touch LICENSE
touch package.json
touch README.md

mkdir src
cd src

touch hello-goodbye.components.ts
touch index.ts
touch keys.ts
touch types.ts

mkdir __tests__
mkdir __tests__/acceptance
mkdir __tests__/acceptance/hello-goodbye-job-server-job.acceptance.ts
mkdir __tests__/unit

mkdir jobs
touch jobs/hello-goodbye-job-server.job.ts
touch jobs/index.ts

mkdir models
touch models/hello-goodbye.model.ts
touch models/index.ts

mkdir services
touch services/hello-goodbye.service.ts
touch services/index.ts

mkdir commands
touch commands/hello-goodbye-job-server.command.ts
touch commands/helper.ts
```

These are all the empty folders, I'll show what content goes in each, how they interact, etc.

But first we're going to step over to the discord command

Lets go back to the projects root directory

## Step 3: Creating a discord command that calls a job

### 1. Populate Example Discord Command File `examples/hello-goodbye/src/commands/hello-goodbye-job-server.command.ts`

Next use your IDE or command line to open the file `examples/hello-goodbye/src/commands/hello-goodbye-job-server.command.ts` and paste in the following contents
Note: Since there is already documentation on how to create a slash command we will not cover the purpose of all the functions. That documentation can be found here[HERE LINK]

```tsx
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-goodbye
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {debugFactory} from '@collabland/common';
import {
  APIInteractionResponse,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  DiscordCommandHandler,
  DiscordService,
  DISCORD_COMMAND_HANDLER_EXTENSION_POINT,
  DISCORD_SERVICE
} from '@collabland/component-discord';
import {JobService, jobTriggers, JOB_SERVICE} from '@collabland/component-job';
import {BindingScope, extensionFor, inject, injectable} from '@loopback/core';
import {CommandInteraction, MessageOptions} from 'discord.js';
import {buildApiInteractionResponse, publishHelloGoodbyeJob} from './helper';

const debug = debugFactory('collabland:example:hello-goodbye');

@injectable(
  {
    scope: BindingScope.SINGLETON,
  },
  extensionFor(DISCORD_COMMAND_HANDLER_EXTENSION_POINT),
)
export class HelloGoodbyeJobServerSlashCommandHandler
  implements DiscordCommandHandler {
  constructor(
    @inject(JOB_SERVICE) private jobService: JobService,
    @inject(DISCORD_SERVICE) private service: DiscordService,
  ) { }

  name = 'hello-goodbye-job-server';
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
      token: interaction.token /** Valid for 15 mins */,
    };

    debug('Discord Context: %O', context);

    const publishJobResponse = await publishHelloGoodbyeJob(
      this.jobService,
      interaction.user.id,
      yourName,
      jobTriggers.BACKGROUND_CHECK /** To run the job within the background job server */,
      context,
    );
    debug('publishJobResponse: %O', publishJobResponse);

    const content = 'Sending Your Name through the job server, please wait.';
    const reply: MessageOptions = {
      content: content,
      components: [],
    };
    return buildApiInteractionResponse(reply);
  }
}
```

### 2. Understand how the job server is triggered

Lets Show how we get there

In this line above `requestToHelloGoodbyeJobServer` is called from `helper.ts`

```tsx
const publishJobResponse = await requestToHelloGoodbyeJobServer(
```

Next we will add this function to `helper.ts`

### 3. Populate `examples/hello-goodbye/src/commands/helper.ts`

in your IDE open

```bash
examples/hello-goodbye/src/commands/helper.ts
```

Copy this code into the file:

```tsx
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-goodbye
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {AnyType, debugFactory} from '@collabland/common';
import {
  APIInteractionResponse,
  APIInteractionResponseCallbackData,
  InteractionResponseType,
  MessageFlags
} from '@collabland/component-discord';
import {jobHeaders, JobService, jobTriggers} from '@collabland/component-job';
import type {MessageOptions} from 'discord.js';
import {HELLO_GOODBYE_JOB_REQUEST} from '../types';
const debug = debugFactory('collabland:discord:commands:hello-goodbye');

/**
 * Publish a job request to `HelloWorld`
 * @param jobService - Job service
 * @param userId - User id
 * @param yourName - Name
 * @param trigger - Trigger for the job
 * @param context - Extra context for the job
 * @returns
 */
export function publishHelloGoodbyeJob(
  jobService: JobService,
  userId: string,
  yourName: string,
  trigger = jobTriggers.BACKGROUND_CHECK,
  context?: Record<string, AnyType>,
) {
  debug('Publishing a job to say hello to %s and goodbye to %s', userId, yourName);
  return jobService.publish({
    type: HELLO_GOODBYE_JOB_REQUEST,
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

export function buildApiInteractionResponse(reply: MessageOptions) {
  const response: APIInteractionResponse = {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      ...reply,
      flags: MessageFlags.Ephemeral,
    } as APIInteractionResponseCallbackData,
  };
  return response;
}
```

The above function is passed the input values from discord including the users Discord ID which can be used to reference or @ mention the user, the name we passed as a variable which will show that data can be passed to the job server and returned, and the `context` which includes the `applicationId` and `token` these values from the discord interaction will allow the job server access to update the specific messages content.
Also notice `type: 'hello-goodbye-job-server-request'`.  When jobs are pushed to the queue the job server examines the job type and matches it with a job handler that claims it can handle the request type

This is defined by the `supports` interface in the job file.
Example:

```tsx
```tsx
supports(type: string): boolean{
  const result = type === 'hello-goodbye-job-server-request';
  debug('Supported by hello-goodbye-job-server-request JobRunner: %s', result);
  return result;
}

```

More on this when we populate all the job files

## Step 4: Populate the Hello Goodbye Component Files

### 1. Populate `hello-goodbye/package.json`

Finally we'll edit  `hello-goodbye/package.json` 

Open `hello-goodbye/package.json`
and paste:

(TODO: probably not all these imports are needed as packages. could clean up if we wanted)

```tsx
{
  "name": "@collabland/component-hello-goodbye",
  "version": "0.1.1",
  "description": "CollabLand Hello Goodbye component",
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
    "directory": "examples/hello-goodbye"
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
    "@collabland/common": "^0.32.0",
    "@collabland/component-discord": "^0.11.0",
    "@collabland/component-job": "^0.9.5",
    "@collabland/job": "^0.11.0",
    "@collabland/repositories": "^0.16.1",
    "@loopback/core": "^4.0.1",
    "discord-api-types": "^0.35.0",
    "discord.js": "^13.8.0",
    "tslib": "^2.0.0"
  },
  "devDependencies": {
    "@collabland/component-redis": "^0.5.5",
    "@loopback/build": "^9.0.1",
    "@loopback/eslint-config": "^13.0.1",
    "@loopback/testlab": "^5.0.1",
    "@types/node": "^16.11.39",
    "typescript": "~4.7.3"
  },
  "copyright.owner": "Abridged, Inc.",
  "author": "Abridged, Inc."
}
```

notice the name and version

```tsx
"name": "@collabland/example-hello-goodbye",
"version": "0.1.0",
```

We'll be referencing the hello goodbye component as it's own package and registering it in the job server next.

### 2. Run NPM Install From the Root Directory

```bash
npm install
```

### 3. Populate `hello-goodbye/src/jobs/hello-goodbye-job-server.job.ts`

Let's start low level.  Lets head back to `components/hello-goodbye`

Start by opening `hello-goodbye/src/jobs/hello-goodbye-job-server.job.ts`

Paste the below code
(TODO: Not sure if having them paste in all the files is helpful vs copying an existing template. I think it's helpful because they are forced to see all the files that are involved & then register them in one another)

```tsx
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-goodbye
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {AnyError, AnyType, debugFactory} from '@collabland/common';
import {
  JobRequest,
  JobResponse,
  JobRunner,
  JOB_RUNNER_EXTENSION_POINT
} from '@collabland/job';
import {BindingScope, extensionFor, inject, injectable} from '@loopback/core';
import {HELLO_GOODBYE_SERVICE} from '../keys';
import {HelloGoodbyeService} from '../services';
const debug = debugFactory('collabland:job:hello-goodbye-job-server');

export interface HelloGoodbyeJobRequest {
  userId: string;
  yourName: string;
  context?: Record<string, AnyType>;
}

export interface HelloGoodbyeJobResponse
  extends HelloGoodbyeJobRequest {
  error?: object;
}

@injectable(
  {scope: BindingScope.SINGLETON},
  extensionFor(JOB_RUNNER_EXTENSION_POINT),
)
export class HelloGoodbyeJobRunner
  implements JobRunner<HelloGoodbyeJobRequest, HelloGoodbyeJobResponse>
{
  constructor(
    @inject(HELLO_GOODBYE_SERVICE)
    private helloGoodbyeService: HelloGoodbyeService,
  ) { }

  supports(type: string): boolean {
    const result = type === 'hello-goodbye-job-server-request';
    debug('Supported by hello-goodbye-job-server-request JobRunner: %s', result);
    return result;
  }

  async run(request: JobRequest<HelloGoodbyeJobRequest>) {
    debug('--HelloGoodbyeJobRequest--');
    debug('Request: %O', request);
    const body = request.body;

    await this.HelloGoodbyeJobRequest(body);

    const response: JobResponse<HelloGoodbyeJobResponse> = {
      type: 'hello-goodbye-job-server-response',
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
  async HelloGoodbyeJobRequest(
    req: HelloGoodbyeJobRequest,
  ): Promise<String> {
    debug('HelloGoodbyeJobRequest');

    /**
     *  DO STUFF HERE, Call services ETC
     */

    try {
      await this.helloGoodbyeService.sendHelloGoodbyeJobResponse(req);
    } catch (err: AnyError) {
      debug('Fail to send followup message: %O', err);
    }

    //PLACE HOLDER
    const result =
      'Hello Goodbye Job Server (Pretty sure this response is unused)';

    return result;
  }
}
```

### 4. Populate `hello-goodbye/src/jobs/index.ts`

Next open `hello-goodbye/src/jobs/index.ts`
And paste

```tsx
export * from './hello-goodbye-job-server.job';
```

The Job File above is the entry point for the job server. The `supports` interface defines the type of job this file can process.  The type of job matches the job we are emitting from our discord command `const result = type === 'hello-goodbye-job-server-request';`
The job is actually calling a function in the job service. So we'll go there next.

### 5. Populate `hello-goodbye/src/services/hello-goodbye.service.ts`

Next open `hello-goodbye/src/services/hello-goodbye.service.ts`
And paste

```tsx
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-goodbye
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {debugFactory} from '@collabland/common';
import {
  APIMessage,
  DiscordService,
  DISCORD_SERVICE
} from '@collabland/component-discord';
import {BindingScope, ContextTags, inject, injectable} from '@loopback/core';
import {MessageEmbed} from 'discord.js';
import {HelloGoodbyeJobRequest} from '../jobs/hello-goodbye-job-server.job';
import {HELLO_GOODBYE_SERVICE} from '../keys';

const debug = debugFactory('collabland:service:hello-goodbye');

@injectable({
  scope: BindingScope.SINGLETON,
  tags: {[ContextTags.KEY]: HELLO_GOODBYE_SERVICE},
})
export class HelloGoodbyeService {
  constructor(
    @inject(DISCORD_SERVICE)
    private service: DiscordService,
  ) { }

  /**
   * Formats a check balance request into the discord required output
   * @param request
   * @param result
   * @param error
   * */
  async sendHelloGoodbyeJobResponse(
    request: HelloGoodbyeJobRequest,
  ): Promise<APIMessage | undefined> {
    if (request.context?.token != null) {
      const description = `Hello Goodbye Job Service: Hello ${request.yourName}. Goodbye ${request.yourName}`;
      const embed = new MessageEmbed()
        .setColor('#86B049')
        .setTitle('Hello Goodbye Job Service Response')
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
          embeds: [embed.toJSON()],
        },
      );
      return followUpMessage;
    } else {
      debug(
        'Error: No Discord interaction token. Cannot send follow-up messages.',
      );
    }
  }
}
```

Notice that we're importing the Discord Service in the constructor. We'll see later that that actually involves including the discord component as a required package in package.json

Our function `sendHelloGoodbyeJobServerResponse` takes the job request object and extracts the variable `yourName` the `context.token` and uses the method `createFollowupMessage` from the discord service to create a reply which is sent to the user.

But before this can all work we need to register the `hello-goodbye.service.ts`

### 6. Populate `hello-goodbye/src/services/index.ts`

Next open `hello-goodbye/src/services/index.ts`
And paste

```tsx
export * from './hello-goodbye.service';
```

We'll skip `__tests__` and `models` for now you can view their contents in the `tutorials/components/hello-world` example. However they are not needed for this demo.

### 7. Populate `hello-goodbye/src/hello-goodbye.component.ts`

Next open `hello-goodbye/src/hello-goodbye.component.ts`
and paste

```tsx
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-goodbye
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Component} from '@loopback/core';
import {HelloGoodbyeJobServerSlashCommandHandler} from './commands/hello-goodbye-job-server.command';
// import {HelloGoodbyeSlashCommandHandler} from './commands/hello-goodbye.command';
import {HelloGoodbyeJobRunner} from './jobs/hello-goodbye-job-server.job';
import {HelloGoodbyeService} from './services/hello-goodbye.service';

export class HelloGoodbyeComponent implements Component {
  controllers = [];
  services = [
    HelloGoodbyeService,
    HelloGoodbyeJobRunner,
    HelloGoodbyeJobServerSlashCommandHandler,
    // HelloGoodbyeSlashCommandHandler,
  ];
}
```

We just registered the job and service  

`HelloGoodbyeJobRunner` & `HelloGoodbyeService`

Soon we'll register the entire component with the `job-server`.  but first let's quickly populate `hello-goodbye/src/index.ts`

### 8. Populate `hello-goodbye/src/index.ts`

Open `hello-goodbye/src/index.ts`
and paste

```tsx
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-goodbye
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export * from './hello-goodbye.components';
export * from './keys';
export * from './models';
export * from './services';
```

### 9. Populate `hello-goodbye/src/keys.ts`

Then open `hello-goodbye/src/keys.ts`
and paste

```tsx
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-goodbye
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {BindingKey} from '@loopback/core';
import type {HelloGoodbyeService} from './services';

export const HELLO_GOODBYE_SERVICE = BindingKey.create<HelloGoodbyeService>(
  'services.HelloGoodbyeService',
);
```

### 10. Populate `hello-goodbye/src/types.ts`

```bash
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-goodbye
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const HELLO_GOODBYE_JOB_REQUEST = 'hello-goodbye-job-request';
export const HELLO_GOODBYE_JOB_RESPONSE = 'hello-goodbye-job-response';
```

### 11. Populate `hello-goodbye/src/models/hello-goodbye.model.ts`

```bash
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-goodbye
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {model, property} from '@collabland/repositories';

/** This model is not used, for reference only */
@model()
export class HelloGoodbyeExample {
  @property({type: 'string'})
  helloWorld?: string;

  @property({type: 'any', graphql: () => Object})
  error?: object;
}
```

### 12. Populate `hello-goodbye/src/models/index.ts`

```bash
// Copyright Abridged, Inc. 2022. All Rights Reserved.
// Node module: @collabland/component-hello-goodbye
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export * from './hello-goodbye.model';
```

## Step 5: Registering your job with the Job server

### 1. Require `@collabland/component-hello-goodbye` in Package.json

From the root directory open
`packages/job-server/package.json`

We'll need to require `@collabland/component-hello-goodbye`

in the dependencies section add

```tsx
"@collabland/component-hello-goodbye": "^0.1.0",
```

### 2. Import `component-hello-goodbye` into the Job-server

Next open
`packages/job-server/src/applications.ts`

add this import

```tsx
import {HelloGoodbyeComponent} from '@collabland/component-hello-goodbye';
```

And register it below in the constructor

```tsx
this.component(HelloGoodbyeComponent);
```

Note: This will throw a reference error until you rerun npm install

## Step 6: Registering your component with the CLI

### 1. Require `@collabland/component-hello-goodbye` in Package.json

From the root directory open
`packages/cli/package.json`

We'll need to require `@collabland/component-hello-goodbye`

in the dependencies section add

```tsx
"@collabland/component-hello-goodbye": "^0.1.0",
```

### 2. Import `component-hello-goodbye` into `packages/cli/src/commands/discord-application-commands.ts`

Next open
`packages/cli/src/commands/discord-application-commands.ts`

add this import

```tsx
import {HelloGoodbyeComponent} from '@collabland/component-hello-goodbye';
```

And register it below in the constructor

```tsx
this.extraComponents = [VeramoComponent, HelloGoodbyeComponent];
```

## Step 7: Save and Rebuild Everything

To get the references to work we'll need to rebuild the Discord folder, the Hello goodbye component folder, and the job-server package.

Execute these commands in your terminal from the project root

```bash
npm install
# May Fail - Can you build before installing, will it find packages before you build (I think so, should succeed)

cd examples/hello-goodbye
npm run build

cd ../../
cd packages/job-server
npm run build

cd ../../
cd packages/cli
npm run build

cd ../../
npm install
```

Note that because the job-server references the new package exported from `componets/hello-goodbye` you may have to run npm install multiple times, and `npm run build` multiple times until they succeed.

If you are truly having trouble building the project you can run `npm install` and `npm run build` from the root directory.  You can also run `npm run rebuild` which will delete all previous builds.
This may be necessary if you get errors like "file already exists" or "package does not exist".
It may also be helpful to manually delete the `node_modules` folder from any component or package that is causing an `npm install` or `npm run build` error.

## Step 8: Deploy Test Slash Command with CLI to Guild [DUPLICATE FOR DIFF COMMAND NAME]

## TODO: example commands are not showing up: Need to determine why the registration command doesn’t find them

To deploy commands use `deploy-commands.sh` created above

Run the file

```bash
bash deploy-commands.sh
```

Wait for the process to start.  

🗒️ It can take up to 2 minutes to start.

Select the environment (Choose QA)

```bash
? Environment: (Use arrow keys)
❯ qa 
  production
```

Paste the guild id

```bash
Guild id (* for global commands): 950843846311444520
```

Select “register / update new commands”

```bash
? Main menu 
  Delete existing commands 
❯ Register/update new commands 
  Exit
```

Use the space bar to select commands you’d like to deploy.  For this tutorial let’s select the `hello-goodbye-job-server` command

```bash
 ◯ 👤 Guest Pass () 
 ◯ /join (Connect to wallets) 
 ◯ 👤 Verify user () 
❯◉ /hello-goodbye-job-server (A command for new developers to test creating their first discord command) *
 ◯ /hello-goodbye (A command for new developers to test the discord command response) 
 ◯ /hello-world (A command for new developers to test the discord command response) 
 ◯ /hello-world-job-server (A command for new developers to test that discord commands hit their local job server) 
 ◯ 👤 Check roles () 
 ◯ /tip (tip slash application command)
```

Press `Enter`

```bash
Register/update "hello-goodbye-job-server" command? (Y/n)
```

Type `Y`

Press `Enter`

You should see 

```bash
  Register/update "hello-goodbye-job-server" command? Yes
  collabland:discord Registering command hello-goodbye (A command for new developers to test the discord command response) +51s
  collabland:discord Application command registered: {
  collabland:discord   id: '988540914584670238',
  collabland:discord   application_id: '988126468599058432',
  collabland:discord   version: '988540914584670239',
  collabland:discord   default_permission: true,
  collabland:discord   default_member_permissions: null,
  collabland:discord   type: 1,
  collabland:discord   name: 'hello-goodbye-job-server',
  collabland:discord   name_localizations: null,
  collabland:discord   description: 'A command for new developers to test the discord command response',
  collabland:discord   description_localizations: null,
  collabland:discord   guild_id: '950843846311444520',
  collabland:discord   options: [
  collabland:discord     {
  collabland:discord       type: 3,
  collabland:discord       name: 'your-name',
  collabland:discord       name_localizations: null,
  collabland:discord       description: "Name of person we're greeting",
  collabland:discord       description_localizations: null,
  collabland:discord       required: true
  collabland:discord     }
  collabland:discord   ]
  collabland:discord } +154ms
Command id: 988540914584670238
```

Choose `Exit`

```bash
? Main menu 
  Delete existing commands 
  Register/update new commands 
❯ Exit
```

Nice! You’ve successfully deployed the command

## Step 9: Setup SQSD

Running the job server locally requires you to run SQSD which will poll the AWS queue, pick up requests, and forward them to the  local instance of the job server.

You can use the [https://github.com/mogadanez/sqsd](https://github.com/mogadanez/sqsd) project to simulate Amazon SQS Daemon ("sqsd") used on AWS Beanstalk worker

### 1. Install SQSD globally

Run the following command in your terminal

```bash
npm i -g sqsd
```

### 2. Create an ENV file to start SQSD locally:

touch `start-sqsd.sh`

Open `start-sqsd.sh` in your IDE

```bash
#!/bin/bash
## Need to install sqsd globally: npm i -g sqsd
echo "Starting SQSD"

export AWS_PROFILE=dev
echo $AWS_PROFILE

export AWS_SDK_LOAD_CONFIG=1
export SQSD_RUN_DAEMONIZED=1
export SQSD_WORKER_HTTP_URL=http://localhost:3002/jobs
export DEBUG=sqsd,sqsd:*
export SQSD_QUEUE_URL=https://sqs.<AWS_REGION>.amazonaws.com/<AWS_ACCOUNT>/<SQS_QUEUE>

# export AWS_ACCESS_KEY_ID=xxx
# export AWS_SECRET_ACCESS_KEY=xxx

sqsd
```

When this file is run it will automatically propagate all SQS jobs to the the `job-server` instance

### 3. Finding the Queue URL

You can copy the `SQSD_QUEUE_URL` from the value `COLLABLAND_JOB_QUEUE` in the file `start-job-service.sh`. You can also find the value by logging into aws using `aws-vault login dev` and checking the queue name.  Steps to complete this step were described when finding the value for `start-job-service.sh`.

### 4. Test Starting SQSD

`bash start-sqsd.sh`

- **Potential Bugs**
    1. Bug: Failing to find credentials?
        
        ```json
        Error: connect EHOSTDOWN 169.254.169.254:80 - Local (172.16.48.81:56005)
            at internalConnect (node:net:905:16)
            at defaultTriggerAsyncIdScope (node:internal/async_hooks:435:18)
            at node:net:996:9
            at processTicksAndRejections (node:internal/process/task_queues:78:11) {
          message: 'Missing credentials in config, if using AWS_CONFIG_FILE, set AWS_SDK_LOAD_CONFIG=1',
          errno: -64,
          code: 'CredentialsError',
          syscall: 'connect',
          address: '169.254.169.254',
          port: 80,
          time: 2022-06-22T15:38:05.454Z,
          originalError: {
            message: 'Could not load credentials from any providers',
            errno: -64,
            code: 'CredentialsError',
            syscall: 'connect',
            address: '169.254.169.254',
            port: 80,
            time: 2022-06-22T15:38:05.454Z,
            originalError: {
              message: 'EC2 Metadata roleName request returned error',
              errno: -64,
              code: 'EHOSTDOWN',
              syscall: 'connect',
              address: '169.254.169.254',
              port: 80,
              time: 2022-06-22T15:38:05.454Z,
              originalError: [Object]
            }
          }
        }
        ```
        
    2. SQSD can use the `~/.aws/credentials` file but is failing to use the `aws-vault` if the credentials file is removed.n  How do I resolve this?
        1. Solution: Error message was very intuative.  Added this line `export AWS_SDK_LOAD_CONFIG=1` and sqsd worked.

## Step 10: Test the Slash Command (Hello Goodbye Job Server)

**Start all the Services**

Open 3 different terminals and start all the services.

### 1. Start API Server

```bash
bash start-api-server.sh
```

### 2. Start Job Server

```bash
bash start-job-server.sh
```

### 3. Start SQSD

```bash
bash start-sqsd.sh
```

### 4. Trouble Shooting

You may have to login to the aws-vault in each terminal

```bash
aws-vault login dev
```

### 5. Call the Discord Command

Open Discord

Go to the server you deployed the command into.

type `/hello-goodbye-job-server`

You should see the hello world command appear

input your name as the first variable field `/hello-goodbye-job-server your-name:caleb`

press `Enter`

**Expected Input**

![Screen Shot 2022-06-22 at 12.02.46 PM.png](./imgs/img22.png)

**Expected Output**

![Screen Shot 2022-06-22 at 12.01.41 PM.png](./imgs/img23.png)