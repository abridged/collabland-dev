---
sidebar_position: 4
title: Telegram Groups
sidebar_label: Telegram
id: telegram-setup
---

import img1 from '@site/static/img/tutorial/set-up-the-bot/telegram-access-group-settings.png';
import img2 from '@site/static/img/tutorial/set-up-the-bot/telegram-edit-group-settings.png';
import img3 from '@site/static/img/tutorial/set-up-the-bot/tg-chat-history-visible.png';
import img4 from '@site/static/img/tutorial/set-up-the-bot/tg-collabland-bot.png';
import img5 from '@site/static/img/tutorial/set-up-the-bot/tg-admin-permissions.png';
import img6 from '@site/static/img/tutorial/set-up-the-bot/tg-bot-admin-permissions.png';

This article walks you through the steps to create a Telegram Token Gated Access group with Collab.Land's Telegram bot.

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
  <img  src={img2} alt="Edit Telegram group settings" />
</div>

4. Click on "Chat History for New Members" and select `Visible`, click Done to save your changes.

    - This allows new members who join to view the full message history and will upgrade your group into a supergroup.

<div class="text--center">
  <img  src={img3} alt="Make Chat History visible in your Telegram group" width="400"/>
</div>

:::caution

If you don’t enable the chat history before inviting the bot, it will not show in the Dashboard.

To fix:
1. Remove the bot from the group.
2. Change the "Chat History for New Members" to `Visible`.
3. Add the bot to the group again.

:::

### Add the Collab.Land Telegram Bot

1. From the group info screen, select "+Add".

2. In the search bar that opens, type `collablandbot`.

<div class="text--center">
  <img  src={img4} alt="The correct Collab.Land bot `@collablandbot`" width="400"/>
</div>

:::danger

Make sure you enter the username _**exactly**_. There are many imposters with similar names.

:::

3. Select the `@collablandbot` bot.

4. Click "OK" to add it to the group.

### Grant Collab.Land bot Admin Permissions

Collab.Land requires administrator permissions for Telegram groups.

1. From the Group Info screen, click "Edit" on the top right corner.

<div class="text--center">
  <img  src={img5} alt="Access Telegram group Administrator settings" width="400"/>
</div>

2. Click on "Administrators"

3. Click on Add Admin and select the Collab.Land bot.

    - The bot should have the following permissions enabled:

      - Ban Users

      - Invite Users via Link

4. Once finished click "Done" to save.

<div class="text--center">
  <img  src={img6} alt="Grant Collab.Land Telegram bot Administrator permissions" width="400"/>
</div>

### Configure Token Gating Rules for Telegram Group Access

All configuration and management of Collab.Land Token Granted Access is done in the [Command Center](/help-docs/key-features/command-center).

You can edit the Token Granted Access for your group by going directly to the Command Center or sending a direct message to `@thecollablandbot` with the `/start` command and following the "Group Admin (Command Center)" link.
