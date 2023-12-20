---
slug: /create-a-tf-group
sidebar_position: 2
id: create-a-tf-group
sidebar_label: How to Setup a Telefrens Group in Telegram
title: How Create a Telefrens Group and add Telefrens Bot
---

import img1 from '@site/static/img/tutorial/set-up-the-bot/telegram-access-group-settings.png';
import img2 from '@site/static/img/tutorial/set-up-the-bot/telegram-edit-group-settings.png';
import img3 from '@site/static/img/tutorial/set-up-the-bot/tg-chat-history-visible.png';
import img4 from '@site/static/img/telefrens/tf-required-bot-permissions.png';
import img5 from '@site/static/img/telefrens/recommended-member-permissions.png';

import gif2 from '@site/static/img/telefrens/setup-tf-group-basic.gif';
import gif3 from '@site/static/img/telefrens/setup-tf-group-protect.gif';

This article walks you through the steps to create a Telegram Token Gated Access group with Telefrens Telegram bot. So once your group is setup, anyone who buys your pass in Telefrens app can see your group link on your profile and join it.

## How to Create a Token Gated Group on Telegram

Before we begin, you will need a Telegram group. If you do not have one, create one now.

:::note

Here's a guide from Telegram explaining [how to create a Telegram Group](https://telegram.org/faq#q-how-do-i-create-a-group).

:::

### Setup your Telegram Group

<div class="text--center">
    <img  src={gif2} alt="How to set up your Telegram alpha group" width="500" />
  </div>

#### Enable Chat History

1. Edit Your Group Settings.

2. Access your group settings by selecting your group icon in the upper left hand corner of the menu bar.

   - Or select the 3 dots and then click "Info".

<div class="text--center">
  <img  src={img1} alt="Access Telegram group settings" width="400" />
</div>

1. Click "Edit" to edit the group settings.

<div class="text--center">
  <img  src={img2} alt="Edit Telegram group settings" width="400"/>
</div>

4. Click on "Chat History for New Members" and select `Visible`, click Done to save your changes.

   - This allows new members who join to view the full message history and will upgrade your group into a supergroup.

<div class="text--center">
  <img  src={img3} alt="Make Chat History visible in your Telegram group" width="400"/>
</div>

:::caution

The bot will leave the group if you haven’t enabled chat history before inviting the bot.

To fix:

1. Change the "Chat History for New Members" to `Visible`.
2. Add the bot to the group again.

:::

### Add the Telefrens Telegram Bot

Invite the Telefrens bot to your group.

1. Search for `@telefrensbot` in the Telegram app and select the bot from the search results.

2. Click on the profile icon of the bot and select 'Add to Group'.

3. Select the group you want to add and add the bot as an administrator with prefilled permissions.

## Adding the Telefrens bot to your group on Phone

After creating your group [according to link](https://telegram.org/faq#q-how-do-i-create-a-group), follow the steps below to add the Telefrens bot to your group.

1. Edit Your Group Settings.

2. Access your group settings by selecting your group icon in the upper left hand corner of the menu bar.

    - Click the pencil icon to edit the group settings.

    - Click on "Chat History for New Members" and select `Visible`.

    - Click Done to save your changes.

### Give the Telefrens Bot Required Permissions

Invite the Telefrens bot to your group.

1. Search for `@telefrensbot` in the Telegram app and select the bot from the search results.

2. Click on the profile icon of the bot and select 'Add to Group'.

3. Select the group you want to add and add the required permissions to the bot:

   - **Manage Group**
   - **Ban Users**
   - **Invite Users via Link**

<div class="text--center">
  <img  src={img4} alt="Required Telefrens Bot permissions" width="400"/>
</div>

4. Click Done to save your changes.

<!--You will receive a notification from the `@telefrensbot` when your group is configured correctly.-->

## Recommended Group Settings

:::tip

To lock down their alpha group, Creators should disable some member permissions and restrict content sharing.

:::

### Member Permissions

<div class="text--center">
    <img  src={gif3} alt="How to lock down your Telefrens alpha group" width="500" />
  </div>

1. Edit Your Group Settings.

2. Select "Permissions".

3. Disable "Add Users" and "Change Chat Info".

- The final Permissions will look like this:

<div class="text--center">
  <img  src={img5} alt="Recommended alpha group member permissions" width="400"/>
</div>

4. Click Done to save your changes.

### Restrict Content Sharing

Telegram allows group members to forward posts to other groups and other users by default. To protect your alpha Creators may want to restrict Content Sharing.

1. Edit Your Group Settings.

2. Select "Group Type".

3. Scroll down to "Content protection" and enable `Restrict saving content`.

   - `Restrict saving content` will prevent group members leaking content from your alpha group using Telegrams Forward feature.

<div class="text--center">
  <img  src={img5} alt="Recommended alpha group member permissions" width="400"/>
</div>

4. Click Done to save your changes.

:::info

Conversely, Creators may wish to leave the `Restrict saving content` setting disabled to allow their users to quickly spread their Copy Trading links and earn additional affiliate fees from trades. Read more about [Copy Trading](./intro#telefrens-pro-features).

:::
