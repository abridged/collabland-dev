---
sidebar_position: 3
title: Discord channels
---

import img1 from '@site/static/img/tutorial/bot-discord/collabland-config.png';
import img2 from '@site/static/img/tutorial/bot-discord/collabland-join.png';
import img3 from '@site/static/img/tutorial/bot-discord/help-command.png';

When the Collab.Land bot is added to your server, two channels will be created: **collabland-config** & **collabland-join**

## collabland-config

<div class="text--center">
  <img  src={img1} alt="collabland-config channel" />
</div>


Access to the collabland-config channel is restricted to administrators only. This channel provides access to the Command Center and its full range of features. The default access is granted to the person setting up the bot and server administrators. 
It is important to note that renaming or deleting this channel is not possible as it will impact the bot's functionality.

:::caution
Any members who have permission to the #collabland-config channel are able to manage Collab.Land through the Command Center with their own Discord credentials!
:::

## collabland-join

<div class="text--center">
  <img  src={img1} alt="collabland-join channel" />
</div>

This channel is used by members to verify their wallets using the "Let's go" button. 
It is important to note that it is possible to rename this channel, but deleting it would break the bot's functionality.

>**Note**  
>Besides using the collabland-join channel, members can use the /join command in any channel

## Commands

With the release of the Command Center, most of the previous bot commands have been deprecated. The only remaining command available to administrators is the "/help" command. This command can be used in any channel and will display the following message:

<div class="text--center">
  <img  src={img3} alt="/help command" />
</div>


### Validate Bot Config

The configuration check function serves to verify the setup of the bot. If the check reveals any errors, an error message will be displayed to the administrator, along with a "Resolve" button, in case they have fixed the issue.

### Setup Let's go!

The setup function is utilized to establish a new "Let's Go" button on the collabland-join channel in situations where the button is either missing due to administrative deletion or was not initially created. This ensures that the "Let's Go" button is always available on the channel.

### Command Center

This button redirects the admin to the Command Center.

### Let's go

This is the same "Let's go" button members can find on the "collabland-join" channel. 

### Docs

This button serves as a redirect for users to the Collab.Land support page.