---
slug: /create-a-tf-group
sidebar_position: 2
id: create-a-tf-group
sidebar_label: How to Setup a Telefrens Group in Telegram
title: How to Create a Telefrens Group and Add the Telefrens Bot
---

import img1 from '@site/static/img/tutorial/set-up-the-bot/telegram-access-group-settings.png';
import img2 from '@site/static/img/tutorial/set-up-the-bot/telegram-edit-group-settings.png';
import img3 from '@site/static/img/tutorial/set-up-the-bot/tg-chat-history-visible.png';

import img4a from '@site/static/img/telefrens/tf-create-group-button.png';
import img4b from '@site/static/img/telefrens/tf-quick-invite.png';
import img4 from '@site/static/img/telefrens/tf-required-bot-permissions.png';
import img5 from '@site/static/img/telefrens/recommended-member-permissions.png';
import img6 from '@site/static/img/telefrens/restrict-content-sharing.png';

import gif2 from '@site/static/img/telefrens/setup-tf-group-basic.gif';
import gif3 from '@site/static/img/telefrens/setup-tf-group-protect.gif';

This article walks you through the steps to create a Telegram Token Gated Access group with Telefrens Telegram bot. So once your group is setup, anyone who buys your Pass in the Telefrens app can see your Group Chat button on your profile and join your group by clicking it.

## Create a Group on Telegram

Before we begin, you will need a Telegram group. If you do not have one, create one now.

:::note

Here's a guide from Telegram explaining [how to create a Telegram Group](https://telegram.org/faq#q-how-do-i-create-a-group).

:::

## Prepare your Telegram Group

This video shows the process of preparing your Telegram group. Read on for details.

<div class="text--center">
    <img  src={gif2} alt="How to set up your Telegram alpha group" width="400" />
  </div>

### Enable Chat History

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

1. Change the "Chat History for New Members" setting to `Visible`.
2. Add the bot to the group again.

:::

### Add the Telefrens Bot and Grant Required Permissions

Invite the Telefrens bot to your group.

##### Option 1: Quick Invite

1. Open Telefrens.

2. Click your pfp or username to open your profile.

3. Click "Create Group" button in Telefrens.

<div class="text--center">
  <img  src={img4a} alt="Click the 'Create Group' button in Telefrens" width="200"/>
</div>

4. Click "Add the Telefrens Bot like a boss!" button in Telegram DMs with the bot.

<div class="text--center">
  <img  src={img4b} alt="Click 'Add the Telefrens Bot like a boss!' button in Telegram DMs" width="200"/>
</div>

5. Select the group you want to add the bot to as Admin.

6. Grant the required permissions to the bot:

   - **Manage Group**
   - **Ban Users**
   - **Invite Users via Link**

<div class="text--center">
  <img  src={img4} alt="Required Telefrens Bot permissions" width="400"/>
</div>

7. Click Done to save your changes.

8. Click "Add as admin" to confirm.

##### Option 2: Manual Invite

1. Search for `@telefrensbot` in the Telegram app and select the bot from the search results.

2. Click on the profile icon of the bot and select 'Add to Group'.

3. Select the group you want to add the bot to as Admin.

4. Grant the required permissions to the bot:

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

To lock down your alpha group, we recommend disabling some member permissions and enabling the "restrict content sharing" setting in Telegram.

:::

<div class="text--center">
    <img  src={gif3} alt="How to lock down your Telefrens alpha group" width="400" />
  </div>

### Member Permissions

1. Edit Your Group Settings.

2. Select "Permissions".

3. Disable these two settings:
   - **Add members**
   - **Change group info**

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
  <img  src={img6} alt="Enable the `Restrict content sharing` setting" width="400"/>
</div>

4. Click Done to save your changes.

:::tip

Conversely, Creators may wish to leave the `Restrict saving content` setting disabled to allow their Passholders to quickly spread their Trading Links and earn additional affiliate fees from trades. Read more about [Trade Links](./trade-links).

:::

Return to Telegram and start making Telefrens!
