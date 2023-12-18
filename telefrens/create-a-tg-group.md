---
slug: /telefrens/create-a-tg-group
sidebar_position: 2
id: create-a-tg-group
title: How Create a Telegram Group and add Telefrens Bot
---

import img1 from '@site/static/img/tutorial/set-up-the-bot/telegram-access-group-settings.png';
import img2 from '@site/static/img/tutorial/set-up-the-bot/telegram-edit-group-settings.png';
import img3 from '@site/static/img/tutorial/set-up-the-bot/tg-chat-history-visible.png';
import img4a from '@site/static/img/tutorial/set-up-the-bot/tg-bot-invite.png';
import img4 from '@site/static/img/tutorial/set-up-the-bot/tg-collabland-bot.png';
import img5 from '@site/static/img/tutorial/set-up-the-bot/tg-admin-permissions.png';
import img6 from '@site/static/img/tutorial/set-up-the-bot/tg-bot-admin-permissions.png';

This article walks you through the steps to create a Telegram Token Gated Access group with Telefrens Telegram bot. So once your group is setup, anyone who buys your pass in Telefrens app can see your group link on your profile and join it.

## How to Create a Token Gated Group on Telegram

Before we begin, you will need a Telegram group. If you do not have one, create one now.

:::note

Here's a guide for [how to create a Telegram Group](https://telegram.org/faq#q-how-do-i-create-a-group).

:::

### Setup your Telegram Group

1. Edit Your Group Settings.

2. Access your group settings by selecting your group icon in the upper left hand corner of the menu bar.

    - Or select the 3 dots and then click "Info".

<div class="text--center">
  <img  src={img1} alt="Access Telegram group settings" width="400" />
</div>

3. Click "Edit" to edit the group settings.

<div class="text--center">
  <img  src={img2} alt="Edit Telegram group settings" width="400"/>
</div>

4. Click on "Chat History for New Members" and select `Visible`, click Done to save your changes.

    - This allows new members who join to view the full message history and will upgrade your group into a supergroup.

<div class="text--center">
  <img  src={img3} alt="Make Chat History visible in your Telegram group" width="400"/>
</div>

:::caution

If you don’t enable the chat history before inviting the bot, bot will leave the group.

To fix:
1. Change the "Chat History for New Members" to `Visible`.
2. Add the bot to the group again.

:::

### Add the Telefrens Telegram Bot
1. Invite the Telefrens bot to your group.

    - Search for `@telefrensbot` in the Telegram app and select the bot from the search results.

    - Click on the profile icon of the bot and select 'Add to Group'.

    - Select the group you want to add and add the bot as an administrator with prefilled permissions.

## Adding the Telefrens bot to your group on Phone

After creating your group referring to [link](https://telegram.org/faq#q-how-do-i-create-a-group), follow the steps below to add the Telefrens bot to your group.

1. Edit Your Group Settings.

2. Access your group settings by selecting your group icon in the upper left hand corner of the menu bar.

    - Click the pencil icon to edit the group settings.

    - Click on "Chat History for New Members" and select `Visible`, click Done to save your changes.


### Add the Telefrens Telegram Bot

1. Invite the Telefrens bot to your group.

    - Search for `@telefrensbot` in the Telegram app and select the bot from the search results.

    - Click on the profile icon of the bot and select 'Add to Group'.

    - Select the group you want to add and add the required permissions to the bot:

        - **Manage Group**
        - **Ban Users**
        - **Invite Users via Link**
