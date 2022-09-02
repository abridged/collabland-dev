---
sidebar_position: 10
sidebar_label: Invite the Bot
---

# Invite the Bot

## 1. Inviting the Bot To Your Guild

After obtaining your Discord’s application OAuth 2 Client ID, you can follow the instructions on the following link by replacing the `<CLIENT_ID>` parameter.

`https://discord.com/api/oauth2/authorize?client_id=<CLIENT_ID>&permissions=8&scope=applications.commands%20bot`

You can also generate the url on the OAuth2 URL Generator Tab by selecting the scopes `bot` and `application.commands` and the bot permission `Administrator`

![Screen Shot 2022-06-20 at 4.04.18 PM.png](imgs/img7.png)

![Screen Shot 2022-06-20 at 4.03.37 PM.png](imgs/img8.png)

Paste your link into a browser and select a server to add your bot to.

![Screen Shot 2022-06-19 at 3.12.10 PM.png](imgs/img9.png)


## 2. Find and Add local tunnel to Discord

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

   ![“INTERACTIONS ENDPOINT URL” field in “General Information” application page](imgs/img10.png)

   “INTERACTIONS ENDPOINT URL” field in “General Information” application page

Note: Discord will only let you save the Interaction Endpoint URL if that url is valid. Meaning discord will ping your URL when you click save to see if it gets a valid response. This means you must be running the api server when you go to save the url into discord. Otherwise discord will not save & will continue to tell you you have unsaved changed.
