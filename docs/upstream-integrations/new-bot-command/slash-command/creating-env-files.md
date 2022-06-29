---
sidebar_position: 7
---

# Creating ENV Files

# Creating ENV Files

## Step 1: Api Server Setup

### 1. Create the API Server File

```bash
touch start-api-server.sh
```

### 2. Copy the following code into that file

Either open `[start-api-server.sh](http://start-api-server.sh)` with vim or with the Visual Studio IDE

Copy the following code into it.

```bash
#!/bin/bash
echo "Starting API Server"

PATH="$(npm bin):$PATH"
export PATH

export AWS_PROFILE=dev

# Will Be Configured Below
export DISCORD_GUILD_ID=[COPIED-FROM-DISCORD-INTERFACE]
export DISCORD_CLIENT_ID=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_CLIENT_SECRET=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_BOT_TOKEN=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_PUBLIC_KEY=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]

export COLLABLAND_JOB_QUEUE=https://sqs.us-west-1.amazonaws.com/[AWS-ACCOUNT-ID]/collabland-dev-[PROJECT-NAME]-[TEAM-NAME]
export COLLABLAND_JOB_TOPIC=arn:aws:sns:us-west-1:[AWS-ACCOUNT-ID]:collabland-dev-[PROJECT-NAME]-[TEAM-NAME]

export DEBUG=collabland:*
export AWS_ACCOUNT=[AWS-ACCOUNT-ID]

export COLLABLAND_ENV=[PROJECT-NAME]-[TEAM-NAME]-[ENV-NAME]
# i.e. tarmac-dev

export COLLABLAND_SECRET_NAME=collabland-api/qa
# the shared QA secret in sandbox as there yet has to be a process in place to handle individual secrets, this step is not needed if you're using your own aws organization as the secret will be named according to your team-env preference and populated by yourself

# Running Redis Locally
## brew services start redis
export REDIS_HOST=localhost
export REDIS_USERNAME=default
export REDIS_PASSWORD=

echo $COLLABLAND_JOB_QUEUE
echo $COLLABLAND_JOB_TOPIC

export PORT=3000

node --enable-source-maps . --local-tunnel
```

### 3. Starting the API Server (Will Fail Because We Have Not Replaced All The Place Holder Values)

To start the api server first login to the appropriate AWS account

`aws-vault login [PROFILE-NAME]`

For example

`aws-vault login dev`

then run this command.

`bash start-api-server.sh`

However this will fail because we have not filled in the missing variables yet.  Let’s first create the job server ENV file then fill in all the blanks

## Step 2: Job Server Setup

### 1. Create the Job Server File

It requires the same environment variables as the `api-server`

first create the file `start-job-server.sh`

```bash
touch start-job-server.sh
```

### 2. Copy the following code into that file

Then copy in the code below

```bash
#!/bin/bash
echo "Starting Job Server"

PATH="$(npm bin):$PATH"
export PATH

export AWS_PROFILE=dev

# Will Be Configured Below
export DISCORD_GUILD_ID=[COPIED-FROM-DISCORD-INTERFACE]
export DISCORD_CLIENT_ID=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_CLIENT_SECRET=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_BOT_TOKEN=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_PUBLIC_KEY=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]

export COLLABLAND_JOB_QUEUE=https://sqs.us-west-1.amazonaws.com/[AWS-ACCOUNT-ID]/collabland-dev-[PROJECT-NAME]-[TEAM-NAME]
export COLLABLAND_JOB_TOPIC=arn:aws:sns:us-west-1:[AWS-ACCOUNT-ID]:collabland-dev-[PROJECT-NAME]-[TEAM-NAME]

export DEBUG=collabland:*
export AWS_ACCOUNT=[AWS-ACCOUNT-ID]

#  caleb.gates is part of caleb-dev
export COLLABLAND_ENV=[PROJECT-NAME]-[TEAM-NAME]-[ENV-NAME]
# i.e. tarmac-dev
# Alternatively:
# export COLLABLAND_ENV=[TEAM-NAME]-[ENV-NAME]

export COLLABLAND_SECRET_NAME=collabland-api/qa
# the shared QA secret in sandbox as there yet has to be a process in place to handle individual secrets, this step is not needed if you're using your own aws organization as the secret will be named according to your team-env preference and populated by yourself

# Running Redis Locally
## brew services start redis
export REDIS_HOST=localhost
export REDIS_USERNAME=default
export REDIS_PASSWORD=

echo $COLLABLAND_JOB_QUEUE
echo $COLLABLAND_JOB_TOPIC

export PORT=3002

export LOCAL_SQSD=true

node --enable-source-maps packages/job-server
```

### 3. Major Differences Between the API server and Job Server

1. the last line starts the job server
2. the PORT is different
3. requires SQSD

### 4. Starting the Job Server

To start the api server first login to the appropriate AWS account

`aws-vault login [PROFILE-NAME]`

`aws-vault login dev`

then run this command.

`bash start-job-server.sh`

However we have not filled in the missing variables yet.  We’ll find those in the next section

## Step 3: Save all Discord Credentials into [ENV].sh’s

### 1. Identify the Variables to Replace

This are the necessary variables for the `api-server` for the Discord Bot to run properly

```bash
export DISCORD_GUILD_ID=[COPIED-FROM-DISCORD-INTERFACE]
export DISCORD_CLIENT_ID=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_CLIENT_SECRET=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_BOT_TOKEN=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_PUBLIC_KEY=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
```

Here's where to find them:

### 2. Finding Discord Bot Values

1. Go to [https://discord.com/developers/applications](https://discord.com/developers/applications)
2. Select your bot
3. On the “General Information” tab copy and save into both ENVs the value of `PULBIC KEY` 
    1. TIP: We recommend copying them all into 1 ENV file then copying all the values to the other file
4. On the “OAuth2” tab copy and save into both ENVs the values of `CLIENT ID` and `CLIENT SECRET`
5. On the “Bot” tab select “Reset Token” and then copy and save into both ENVs the value of `TOKEN`

### 3. Finding **Discord Channel Values**

1. open the Discord Web App or Desktop app.  To copy the guild id (or “server id”) right click the server id icon in the left nav bar and select “Copy ID”.  If you do not see this option you’ll need to enable developer mode.  Save the value into both ENV files.
    
    ![Screen Shot 2022-06-19 at 1.27.46 PM.png](./imgs/img3.png)
    
    1. How to enable Developer Mode: [https://www.youtube.com/watch?v=e_UoIwmS8Xk&t=35s](https://www.youtube.com/watch?v=e_UoIwmS8Xk&t=35s) 

## Step 4: Finding your AWS Account Values

### 1. Logging into AWS

To login to AWS from the command line use: 

```bash
aws-vault login [CREDENTIAL NAME]
aws-vault login dev
```

### 2. Finding your Account ID

Then copy your account ID in the upper right hand corner

![Screen Shot 2022-06-19 at 2.41.48 PM.png](./imgs/img4.png)

Paste this value into your ENV files

### 3. Finding your Project and Team Name To Config the ENV Queue

Your project and team name required for the SQS Queue and Topic should have been returned in an email from [Collab.Land](http://Collab.Land) dev support along with your credentials.  If not you can go to SQS in AWS and look for your resource names.

Copy the two boxed values into your ENV files for the values `COLLABLAND_JOB_QUEUE` and `COLLABLAND_JOB_TOPIC`

**SQS:**

![Screen Shot 2022-06-19 at 2.49.36 PM.png](./imgs/img5.png)

![Screen Shot 2022-06-19 at 2.51.24 PM.png](./imgs/img6.png)

## Step 5: Link a Discord guild to the Bot and your User

### 1. Inviting the Bot To Your Guild

Before starting the API server you’ll need to invite the bot to your guild

After obtaining your Discord’s application OAuth 2 Client ID, you can follow the instructions on the following link by replacing the `<CLIENT_ID>` parameter.

`https://discord.com/api/oauth2/authorize?client_id=<CLIENT_ID>&permissions=8&scope=applications.commands%20bot`

You can also generate the url on the OAuth2 URL Generator Tab by selecting the scopes `bot` and `application.commands` and the bot permission `Administrator`

![Screen Shot 2022-06-20 at 4.04.18 PM.png](./imgs/img7.png)

![Screen Shot 2022-06-20 at 4.03.37 PM.png](./imgs/img8.png)

Paste your link into a browser and select a server to add your bot to.

![Screen Shot 2022-06-19 at 3.12.10 PM.png](./imgs/img9.png)

### 2. Start Monorepo API Server

To Start the API Server run

```bash
aws-vault login dev
bash start-api-server.sh
```

- **Potential Errors:**
    1. ERR Error running script (call to f_a1de965f42e177aa339706bd580f049065eca79a): @user_script:1: @user_script: 1: -MISCONF Redis is configured to save RDB snapshots, but it is currently not able to persist on disk.
        1. You need to start redis
    2. Error [DISALLOWED_INTENTS]: Privileged intent provided is not enabled or whitelisted.
        1. You need to invite the bot to your server, the same server “guild” that you’ve configured in your ENV files.
    3. Error [TOKEN_INVALID]: An invalid token was provided.
    at WebSocketManager.connect (/Users/calebgates/WebstormProjects/CollabLand/dev-x-test-1/collabland-monorepo-dev-x-test-1/node_modules/discord.js/src/client/websocket/WebSocketManager.js:129:26)
    at Client.login (/Users/calebgates/WebstormProjects/CollabLand/dev-x-test-1/collabland-monorepo-dev-x-test-1/node_modules/discord.js/src/client/Client.js:254:21)
    at DiscordService.connect (/Users/calebgates/WebstormProjects/CollabLand/dev-x-test-1/collabland-monorepo-dev-x-test-1/components/discord/src/services/discord.service.ts:351:26)
    at processTicksAndRejections (node:internal/process/task_queues:96:5) {
    [Symbol(code)]: 'TOKEN_INVALID'
    }
        1. If you didn’t update your bot tokens in your ENV files be sure to do so.  
        If you did and it still doesnt work be sure you `CMD-S` save the files in VSCode or your changes will not be visible to the terminal 

### 3. Find and Add local tunnel to Discord

Discord Interactions are necessary for some functionality of the bot like the join button in the `collabland-join` channel

In order to enable that feature you `api-server` will need to be available publicly online

<aside>
💻 You can do so in local instance by adding the `—-local-tunnel` flag to the start script.
`node --enable-source-maps . --local-tunnel`
This will output on the console the following line indicating the public URL
`Local tunnel is started at https://collabland-xxx.loca.lt`

</aside>

**To find your URL**

1. Go to the terminal where you started the API server
2. CTRL-F search for “https://collabland-"
3. Copy the complete url you find in your terminal logging

**You will need to setup the public URL on the Discord’s developer portal**

1. Head to the [https://discord.com/developers/applications](https://discord.com/developers/applications)
2. Select you application
3. Head to the “General Information” menu item on the side bar (if not already)
4. On the field listed as “INTERACTIONS ENDPOINT URL” enter you public’s instance URL and discord’s interaction path (e.g. `https://collabland-xxx.loca.lt/discord/interactions`)
    
    ![“INTERACTIONS ENDPOINT URL” field in “General Information” application page](./imgs/img10.png)
    
    “INTERACTIONS ENDPOINT URL” field in “General Information” application page
    

Note: Discord will only let you save the Interaction Endpoint URL if that url is valid.  Meaning discord will ping your URL when you click save to see if it gets a valid response.  This means you must be running the api server when you go to save the url into discord. Otherwise discord will not save & will continue to tell you you have unsaved changed.

- Potential Errors
    1. AccessDeniedException: User: arn:aws:iam::220623082201:user/caleb is not authorized to perform: xray:PutTraceSegments because no identity-based policy allows the xray:PutTraceSegments action
        1. Its possible that my access keys do not have permission to post this.  But it’s also not asking for my AWS credentials vault. Probably becasue .aws/credentials still exists so I will renamve the .aws/credentials dev to something else in the hope of triggering the AWS Vault.
    2. I changed the name of the [dev] credentials in .aws/credentials and now when I go to start the api server I get `Cannot start the application. CredentialsProviderError: Could not load credentials from any providers`
        1. So it’s not picking up my aws vault credentials. Maybe I truely need to change the name of the `credentials` file so that it doenst look there at all and is forced to check the vault?
        2. Well that didnt work.
        3. All I can think is that I’m failing to login with `aws-vault login dev` so I need to get that to work before I can even hope that my code can use those credentials
    3. BLOCKED: Can not deploy the slash command if cannot update the interaction URL & Cannot update that url if cannot start the api server, and cannot start the api server if AWS credentials are invalid
        1. Cannot start the application. AccessDeniedException: Access to KMS is not allowed
        at deserializeAws_json1_1GetSecretValueCommandError (/Users/calebgates/WebstormProjects/CollabLand/dev-x-test-1/collabland-monorepo-dev-x-test-1/node_modules/@aws-sdk/client-secrets-manager/dist-cjs/protocols/Aws_json1_1.js:596:24)
        2. Error: Dev Support needs to add user to KMS (should be done during onboarding)
        3. Sharing KMS with every team is not sustainable in the long run.  Need to have a way for users to overwrite all secrets with ENV variables.  For the time being add new users to KMS QA and KMS [What ever the team infra has been named ex. caleb-dev]
        4. TODO: Make a section on how to over ride these if needed in the future.  
        Q: what are the very minimum variables to get started?
        5. This is an insane and blocking number of values for a new dev to get started.  KMS is a good onboarding for now.
        
        ```bash
        * JSON data
        {
          "AIRTABLE_API_KEY": "***",
          "AIRTABLE_JOB_ERROR_REPORT": "***",
          "AIRTABLE_WALLET_RESETS_REPORT": "***",
          "ALCHEMY_API_KEY": "***",
          "ALCHEMY_POLYGON_API_KEY": "***",
          "ALCHEMY_FLOW_API_KEY_PROD": "***",
          "ALCHEMY_FLOW_API_KEY_QA": "***",
          "ALGORAND_API_KEY": "***",
          "AXIE_INFINITY_JWT_SECRET": "***",
          "COINBASE_CLIENT_ID": "***",
          "COINBASE_CLIENT_SECRET": "***",
          "COLLABLAND_GITHUB_APP": {
            "appId": "***",
            "privateKey": "***",
            "secret": "***",
            "clientId": "***",
            "clientSecret": "***"
          },
          "COLLABLAND_JWT_PRIVATE_KEY": "***",
          "COLLABLAND_JWT_PUBLIC_KEY": "***",
          "COLLABLAND_JWT_SECRET": "***",
          "COLLABLAND_MINTER_PRIVATE_KEY": "***",
          "COLLABLAND_METRICS_USERNAME": "***",
          "COLLABLAND_METRICS_PASSWORD": "***",
          "COLLABLAND_NFT_DROP_CONTRACT_ADDRESS": "***",
          "COLLABLAND_NFT_DROP_MINTER_PRIVATE_KEY": "***",
          "COLLABLAND_SUPPORT_TEAM": [
            {"platform": "***", "id": "***"},
            {"platform": "***", "id": "***"}
          ],
          "COLLABLAND_TIP_JAR_PRIVATE_KEY": "***",
          "DAPPER_CLIENT_ID": "***",
          "DAPPER_CLIENT_SECRET": "***",
          "DISCORD_BOT_TOKEN": "***",
          "DISCORD_CLIENT_ID": "***",
          "DISCORD_CLIENT_SECRET": "***",
          "DISCORD_PUBLIC_KEY": "***",
          "ELUVIO_CLIENT_ID": "***",
          "ELUVIO_CLIENT_SECRET": "***",
          "ETHERSCAN_API_KEY": "***",
          "ETHPLORER_API_KEY": "***",
          "FLOW_NETWORK": "***",
          "GITHUB_CLIENT_ID": "***",
          "GITHUB_CLIENT_SECRET": "***",
          "INFURA_PROJECT_ID": "***",
          "INFURA_PROJECT_SECRET": "***",
          "INSTAGRAM_CLIENT_ID": "***",
          "INSTAGRAM_CLIENT_SECRET": "***",
          "KCHANNEL_TEST_RECEIVER_MNEMONIC": "***",
          "KCHANNEL_TEST_SENDER_MNEMONIC": "***",
          "MAGIC_LINK_SECRET_API_KEY": "***",
          "MORALIS_API_KEY": "***",
          "NEAR_MINTER_ACCOUNTS": [
            {
              "account_id": "***",
              "private_key": "***"
            },
            {
              "account_id": "***",
              "tenant_id": "***",
              "private_key": "***"
            },
            {
              "account_id": "***",
              "private_key": "***",
              "sponsored_amount": 0.1
            }
          ],
          "NEAR_TESTNET_ACCOUNT_ID": "***",
          "NEAR_TESTNET_ACCOUNT_PRIVATE_KEY": "***",
          "NEAR_TIPPING_CONFIG": {
            "contractId": "***",
            "publicKey": "***",
            "privateKey": "***",
            "ethereumPrivateKey": "***"
          },
          "NIFTY_CLIENT_ID": "***",
          "NIFTY_CLIENT_SECRET": "***",
          "OPENSEA_API_KEY": "***",
          "OPEN_SEARCH_DOMAIN": "***",
          "OREID_API_KEY": "***",
          "OREID_APP_ID": "***",
          "POCKET_APPLICATION_KEY": "***",
          "PRIVY_API_KEY": "***",
          "PRIVY_API_SECRET": "***",
          "PROMETHEUS_PUSH_GATEWAY": "***",
          "REDDIT_BOT_APP_ID_COLLABLAND": "***",
          "REDDIT_BOT_APP_SECRET_COLLABLAND": "***",
          "REDIS_HOST": "***",
          "REDIS_PASSWORD": "***",
          "REDIS_PORT": 6379,
          "REDIS_USERNAME": "***",
          "ROLL_REFRESH_TOKEN": "***",
          "SLACK_CLIENT_ID": "***",
          "SLACK_CLIENT_SECRET": "***",
          "SLACK_SIGNING_SECRET": "***",
          "SOLANA_RPC_URL": "***",
          "STRIPE_API_KEY": "***",
          "STRIPE_SIGNING_SECRET": "***",
          "TELEGRAM_BOT_NAME": "***",
          "TELEGRAM_BOT_TOKEN": "***",
          "TEZOS_SECRET_KEY": "***",
          "TWITTER_CONSUMER_KEY": "***",
          "TWITTER_CONSUMER_SECRET": "***",
          "VERAMO_AGENT_URL": "***",
          "VERAMO_API_KEY": "***"
        }
        ```
        
    4. BUG
    Describing index keys for [ 'collabland-table-caleb-dev', 'collabland-api-table-caleb-dev' ] +2s
    Cannot start the application. ResourceNotFoundException: Requested resource not found: Table: collabland-table-caleb-dev not found
    at deserializeAws_json1_0ResourceNotFoundExceptionResponse (/Users/calebgates/WebstormProjects/CollabLand/dev-x-test-1/collabland-monorepo-dev-x-test-1/node_modules/@aws-sdk/client-dynamodb/dist-cjs/protocols/Aws_json1_0.js:3036:23)
        1. Tarmac team needs to rebuild caleb-dev infrastructure because it was created on an old version

## Step 6: Deploy Test Slash Command with CLI to Guild

### 1. Create the Deploy Command ENV file

To deploy commands create the following ENV file

```bash
touch deploy-commands.sh
```

Open file and paste in the following config

```bash
#!/bin/bash
echo "Deploying Discord Commands To A Custom Bot"

PATH="$(npm bin):$PATH"
export PATH

export AWS_PROFILE=dev-devx-1

export DISCORD_GUILD_ID=[COPIED-FROM-DISCORD-INTERFACE]
export DISCORD_CLIENT_ID=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_CLIENT_SECRET=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_BOT_TOKEN=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]
export DISCORD_PUBLIC_KEY=[COPIED-FROM-DISCORD-DEVELOPER-PORTAL]

export DEBUG=collabland:discord

export AWS_ACCOUNT=[AWS-ACCOUNT-ID]

export COLLABLAND_ENV=[PROJECT-NAME]-[TEAM-NAME]-[ENV-NAME]

export COLLABLAND_SECRET_NAME=collabland-api/qa

npm run cli -- discord-application-commands
```

Copy in the values from `start-api-server.sh`

### 2. Run the file

```bash
bash deploy-commands.sh
```

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

Use the space bar to select commands you’d like to deploy.  For this tutorial let’s select the `hello-world` command

```bash
 ◯ 👤 Guest Pass () 
 ◯ /join (Connect to wallets) 
 ◯ 👤 Verify user () 
❯◉ /hello-world (A command for new developers to test the discord command response) *
 ◯ /hello-world-job-server (A command for new developers to test that discord commands hit their local job server) 
 ◯ 👤 Check roles () 
 ◯ /tip (tip slash application command)
```

Press `Enter`

```bash
Register/update "hello-world" command? (Y/n)
```

Type `Y`

Press `Enter`

You should see 

```bash
  Register/update "hello-world" command? Yes
  collabland:discord Registering command hello-world (A command for new developers to test the discord command response) +51s
  collabland:discord Application command registered: {
  collabland:discord   id: '988540914584670238',
  collabland:discord   application_id: '988126468599058432',
  collabland:discord   version: '988540914584670239',
  collabland:discord   default_permission: true,
  collabland:discord   default_member_permissions: null,
  collabland:discord   type: 1,
  collabland:discord   name: 'hello-world',
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

- Potential Errors
    
    ```bash
    Guild id (* for global commands): 950843846311444520
    ? Main menu Register/update new commands
        ForbiddenError: Fails to access https://discord.com/api/v10/applications/988126468599058432/guilds/950843846311444520/commands
    ? Main menu Delete existing commands
        ForbiddenError: Fails to access https://discord.com/api/v10/applications/988126468599058432/guilds/950843846311444520/commands
    ? Main menu (Use arrow keys)
    ❯ Delete existing commands 
      Register/update new commands 
      Exit
    ```
    
    1. Why is this failing to deploy?
        1. I think it’s because either my bot creddntials are incorrect or I invited the bot with the wrong permissions (I invited as admin… i there as way to compare to my other bot?)
            
            <aside>
            💡 Solution: Was not invited with the correct scopes.  Need to have the `bot` and `application.commands` scopes.  The above docs were updated.  If you have this issue it’s likely that the bot was not invited properly.  Try re inviting the bot.
            
            </aside>
            

## Step 7: Test the Slash Command (Hello World)

### 1. Start the API server again

To Start the API Server run

```bash
aws-vault login dev
bash start-api-server.sh
```

### 2. Test the command from Discord

Open Discord

Go to the server you deployed the command into.

type `/hello-world`

You should see the hello world command appear

input your name as the first variable field `/hello-world your-name:caleb`

press `Enter`

**Expected Output**

![Screen Shot 2022-06-20 at 5.00.34 PM.png](./imgs/img11.png)

- Potential UX Bugs
    1. Discord: The application did not respond
    API Server: Request POST /discord/interactions failed with status code 500. DiscordAPIError: Unknown interaction
        1. I changed nothing and it worked the next time. (I tried to update the interaction end point but it was correct, then waited 10 minutes, then just worked)
        2. Debugging: Check the command line API server logs for potential errors. Check our developer Forum for those errors and if needed create a new ticket.