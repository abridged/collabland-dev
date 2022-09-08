---
sidebar_position: 8
sidebar_label: Run Backend Servers
---
# Run Backend Servers

There are three types of Collab.Land servers that can be started from the `collabland-monorepo` project:

1. API Server (exposing REST APIs and webhooks)
2. Job Server (accepting job requests from AWS SQS and invoking job runners to process requests)
3. Discord Server (connecting to Discord using websocket and listening on Discord events)

## Step 1. Start the API Server

To start the api server first login to the appropriate AWS account

`aws-vault login [PROFILE-NAME]`

For example

`aws-vault login dev`

then run this command.

`./bin/local-api-server.sh`

- **Potential Errors:**
  1. ERR Error running script (call to f_a1de965f42e177aa339706bd580f049065eca79a): @user_script:1: @user_script: 1: -MISCONF Redis is configured to save RDB snapshots, but it is currently not able to persist on disk.
     1. You need to start redis
  2. Error [DISALLOWED_INTENTS]: Privileged intent provided is not enabled or whitelisted.
     1. You need to invite the bot to your server, the same server “guild” that you’ve configured in your ENV files.
  3. Error [TOKEN_INVALID]: An invalid token was provided.
     ``` at WebSocketManager.connect (/Users/calebgates/WebstormProjects/CollabLand/dev-x-test-1/collabland-monorepo-dev-x-test-1/node_modules/discord.js/src/client/websocket/WebSocketManager.js:129:26) at Client.login (/Users/calebgates/WebstormProjects/CollabLand/dev-x-test-1/collabland-monorepo-dev-x-test-1/node_modules/discord.js/src/client/Client.js:254:21) at DiscordService.connect (/Users/calebgates/WebstormProjects/CollabLand/dev-x-test-1/collabland-monorepo-dev-x-test-1/components/discord/src/services/discord.service.ts:351:26) at processTicksAndRejections (node:internal/process/task_queues:96:5) { [Symbol(code)]: 'TOKEN_INVALID'}```
     1. If you didn’t update your bot tokens in your ENV files be sure to do so.
      If you did and it still doesnt work be sure you `CMD-S` save the files in VSCode or your changes will not be visible to the terminal


## Step 2: Start Job Server

The job server requires the same environment variables as the `api-server` with the following differences:

1. the last line starts the job server
2. the PORT is different (using 3001 by default)
3. requires SQSD (polling SQS locally)

To start the job server first login to the appropriate AWS account

`aws-vault login [PROFILE-NAME]`

`aws-vault login dev`

then run this command.

`./bin/local-job-server.sh`

### Setup SQSD

Running the job server locally requires you to run SQSD which will poll the AWS queue, pick up requests, and forward them to the  local instance of the job server.

You can use the [https://github.com/mogadanez/sqsd](https://github.com/mogadanez/sqsd) project to simulate Amazon SQS Daemon ("sqsd") used on AWS Beanstalk worker

#### 1. Install SQSD globally

Run the following command in your terminal

```bash
npm i -g sqsd
```

#### 2. Create an ENV file to start SQSD locally:

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
export SQSD_WORKER_HTTP_URL=http://localhost:3001/jobs # This is the job server url. When you run job server (as mentioned above) it gives you a url in the console.
export DEBUG=sqsd,sqsd:*
export SQSD_QUEUE_URL=https://sqs.<AWS_REGION>.amazonaws.com/<AWS_ACCOUNT>/<SQS_QUEUE> # You can copy this url from `bin/local-server-env.sh` file.

sqsd
```

When this file is run it will automatically propagate all SQS jobs to the the `job-server` instance

#### 3. Test Starting SQSD

`bash start-sqsd.sh`

## Step 3: Start Discord Server

The job server requires the same environment variables as the `api-server`.

To start the Discord server first login to the appropriate AWS account

`aws-vault login [PROFILE-NAME]`

`aws-vault login dev`

then run this command.

`./bin/local-discord-server.sh`
