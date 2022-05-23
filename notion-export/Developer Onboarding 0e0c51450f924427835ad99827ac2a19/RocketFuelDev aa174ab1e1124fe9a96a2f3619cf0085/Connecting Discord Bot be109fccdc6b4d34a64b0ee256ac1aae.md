# Connecting Discord Bot

You can set up a Discord application to the [Collab.Land](http://Collab.Land) `api-server` by setting up the proper env variables

## Prerequisites

### Create a Discord Application

1. Navigate to [https://discord.com/developers/applications](https://discord.com/developers/applications) and select “New Application”
    
    ![Developers applications page](Connecting%20Discord%20Bot%20be109fccdc6b4d34a64b0ee256ac1aae/Screen_Shot_2022-03-29_at_7.44.40_PM.png)
    
    Developers applications page
    
2. Follow the on screen instructions to create the application
3. Navigate to the Bot page and activate all the intents
    
    ![“Privileged Gateway Intents” section on the Bot application page](Connecting%20Discord%20Bot%20be109fccdc6b4d34a64b0ee256ac1aae/Screen_Shot_2022-03-29_at_7.47.17_PM.png)
    
    “Privileged Gateway Intents” section on the Bot application page
    

## Set-Up

### Redis

Instructions can be found [here](Set%20up%20Redis%207692fdb0fc4f407db2399a2774fe2681.md)

### Discord Events

This are the necessary variables for the `api-server` for the Discord Bot to run properly

```bash
export DISCORD_GUILD_ID=912...1678
export DISCORD_CLIENT_ID=9580...793152
export DISCORD_CLIENT_SECRET=MCf5sgk4...7Y197S3e
export DISCORD_BOT_TOKEN=OTU4MDc4MTU...kNpYLNAOcxo3eLxw
export DISCORD_PUBLIC_KEY=c3e29785f39ff...a68dbddac36cf4
```

### Discord Interactions

Interactions are necessary for some functionality of the bot like the join button in the `collabland-join` channel

In order to enable that feature you `api-server` will need to be available publicly online

<aside>
💻 You can do so in local instance by adding the `—-local-tunnel` flag to the start script.
`node --enable-source-maps . --local-tunnel`
This will output on the console the following line indicating the public URL
`Local tunnel is started at https://collabland-xxx.loca.lt`

</aside>

You will need to setup the public URL on the Discord’s developer portal

1. Head to the [https://discord.com/developers/applications](https://discord.com/developers/applications)
2. Select you application
3. Head to the “General Information” menu item on the side bar (if not already)
4. On the field listed as “INTERACTIONS ENDPOINT URL” enter you public’s instance URL and discord’s interaction path (e.g. `https://collabland-xxx.loca.lt/discord/interactions`)
    
    ![“INTERACTIONS ENDPOINT URL” field in “General Information” application page](Connecting%20Discord%20Bot%20be109fccdc6b4d34a64b0ee256ac1aae/Screen_Shot_2022-04-04_at_7.56.09_PM.png)
    
    “INTERACTIONS ENDPOINT URL” field in “General Information” application page
    

## Link a Discord guild to the Bot and your User

### Add the bot to your Discord guild

After obtaining your Discord’s application OAuth 2 Client ID, you can follow the instructions on the following link by replacing the `<CLIENT_ID>` parameter.

`https://discord.com/oauth2/authorize?client_id=<CLIENT_ID>&scope=bot&permissions=8`

### Validate the connection

In order to validate the link between the discord bot and the [Collab.Land](http://Collab.Land) infrastructure, we should check 2 things.

1. After the Discord bot have been added to the guild, the bot should automatically create 2 channels (`collabland-config` , `collabland-join`)
    
    ![Channel list after the bot have joined](Connecting%20Discord%20Bot%20be109fccdc6b4d34a64b0ee256ac1aae/Screen_Shot_2022-03-29_at_8.11.16_PM.png)
    
    Channel list after the bot have joined
    
2. The admin users that access `collabland-config` channel should be able to list their server under `/account/administrated-communities` endpoint of the [Collab.Land](http://Collab.Land) `api-server` by using Authentication (Discord accessToken or AE token)