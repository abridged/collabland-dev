---
sidebar_position: 3
---

# Launch Collab.Land API/Job Servers

After completing the first step [Setting up the environment](../../0-onboading/2-build-environment/set-up-aws-env.md) You'll be ready to launch the different apps.

## Prerequisites 
 - node 16

There's a set of scripts in the `collabland-monorepo` that will make running the apps easier.

Edit the `bin/api-server` file and replace

```bash
export DISCORD_GUILD_ID=<discord_guild_id>
export DISCORD_CLIENT_ID=<discord_client_id>
export DISCORD_CLIENT_SECRET=<discord_client_secret>
export DISCORD_BOT_TOKEN=<discord_bot_token>
export DISCORD_PUBLIC_KEY=<discord_public_key>
```

Refer to [Connecting discord bot](../../../../../legacy-notion-export-for-reference/rocketfueldev/connecting-discord-bot.md) to create a discord bot and populate those values

Make sure you have a local redis server running check [Set up Redis](../../1-build-the-backend/2-set-up-redis/set-up-redis.md) and then you can run


```bash
bash /bin/api-server.sh
```

Which will get the Api server started.

Depending on your use case you might also want to launch the job-server , there's again a useful script at `bin/job-server` that you can run after replacing the values for the discord environment variables the same way you did when running the api server

running

```bash
bash /bin/job-server.sh
```

should get the Job server running while

```bash
bash /bin/sqsd.sh
```
will get the SQSD service provided you've previously installed via NPM

If you don't have a credentials file in `~/.aws/credentials` you'll have to edit this file and add your aws credentials manually there


```bash
npm -i sqsd -g
```
