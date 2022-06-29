# Running Discord Commands Locally

It requires the same environment variables as the `api-server`

That's why in the background both services uses the same components (e.g. `DiscordService`)

```bash
#!/bin/bash

export DISCORD_GUILD_ID=xxx
export DISCORD_CLIENT_ID=xxx
export DISCORD_CLIENT_SECRET=xxx
export DISCORD_BOT_TOKEN=xxx
export DISCORD_PUBLIC_KEY=xxx

export REDIS_HOST=localhost

export PORT=3000

node --enable-source-maps . --local-tunnel
```

## Example Bash File to Start Job Server

`vim start-project.sh`

```bash
#!/bin/bash
## WORKS WITH MY CONFIG BUT NOT GEORGES. LOOK AT WHATS DIFFERENT.

echo "Starting project"

PATH="$(npm bin):$PATH"
export PATH

export AWS_PROFILE=dev

export DISCORD_GUILD_ID=950843xxxxxxx444520
export DISCORD_CLIENT_ID=95629xxxxxxx764349
export DISCORD_CLIENT_SECRET=AN7xQxxxxxxxxxxxxxxxxxxxxx-bR617
export DISCORD_BOT_TOKEN=OTU2MjkyNxxxxxxxxxxxxxxxxxxxxxw.glAdIEK5DF8RmFn5fUoCfaQOmrs
export DISCORD_PUBLIC_KEY=ca7e671bxxxxxxxxxxxxxxxxxxxxx3a2f4364fe3c344527215246f2319dc1036

export COLLABLAND_JOB_QUEUE=https://sqs.us-west-1.amazonaws.com/220623082201/collabland-dev-caleb
export COLLABLAND_JOB_TOPIC=arn:aws:sns:us-west-1:220623082201:collabland-dev-caleb

export DEBUG=collabland:*
export COLLABLAND_ENV=qa
export AWS_ACCOUNT=2206xxxxxx201

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

`bash start-project.sh`

## Local Tunnel

After running this command the logging will output your local tunnel address.  

Search for a url similar to this format [`https://collabland-XXXXXXX.loca.lt`](https://collabland-calebgates.loca.lt/)

This url can be used in Discord instead of Ngrok to forward requests to your local computer.