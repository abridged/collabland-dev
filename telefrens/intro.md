---
slug: /intro
sidebar_position: 1
id: intro
title: Telefrens Introduction
---

import img1 from '@site/static/img/telefrens/tf-characters-logo-tg.png';
import img2a from '@site/static/img/telefrens/tf-value-flow.png';
import img2 from '@site/static/img/telefrens/telefrens-rev-share.png';
import gif1 from '@site/static/img/telefrens/join-a-tf-group.gif';
import gif2 from '@site/static/img/telefrens/setup-tf-group-basic.gif';
import gif3 from '@site/static/img/telefrens/setup-tf-group-protect.gif';

import gif4 from '@site/static/img/telefrens/deposit-eth-tf.gif';

Telefrens is the first SocialFi bot in crypto, from the team that built Collab.Land. Get Pass access to Token Gated groups and royalties rewards for Creators on Pass transactions.

  <div class="text--center">
    <img  src={img1} alt="Telefrens logo with Telegram Bot label" width="500" />
  </div>

## Welcome to Telefrens

:::tip

[Join Telefrens](https://telefrens.com/?utm_medium=display&utm_source=tf_docs&utm_campaign=launch) today!

:::

### Why it matters

#### 1. _Form Your Swarm_ - Invite your Telegram contacts to an exclusive, paid group chat

- 1 click invites for your contacts to join an exclusive Telegram group chat, including built-in mechanics and long-term sustainable royalties revenue streams for Creators.

<!-- #### 1. _Form Your Swarm_ - Launch a community on a bonding curve

- Imagine FriendTech with all the native features of Telegram, with built-in mechanics and long term sustainable revenue streams for KOLs and influencers. -->

#### 2. _Actualize Your Alpha_ - Make money from your trading ideas

- ⭐**[Telefrens Pro](#what-is-telefrens-pro)** Monetize your trading ideas by sharing a 1-click copy trade link with your Telefrens in Telegram.

#### 3. _Renew Group Revenue_ - Add a subscription model to your group

- COMING SOON
- Automatically collect a monthly fee from your Telegram group members, those without a working payment method are automatically removed.

<!-- #### 4. Sell Your Space - **Buy users and attention for your group**
    1. Cross promote your community in other Telegram groups and earn when you allow others to cross promote in yours.
-->

## What is Telefrens?

Telefrens enables an individual or brand to create their own Telegram group with [Token Gated Access](/help-docs/key-features/token-gate-communities) automatically. It allows Creators to bootstrap and monetize their followings through the sale of blockchain-based Passes.

Holders can purchase Passes that unlock access to a Creator's exclusive group chat in Telegram.

Telefrens enables p2p communication and community formation within Telegram and groups benefit from Telegram's robust and feature-rich chat platform.

Telefrens leverages Collab.Land's `ERC4337` smart account implementation, the gmPASS.

:::tip

The [gmPASS](/help-docs/key-features/gm-pass) enables non-custodial, user-controlled, and secure blockchain interactions through a smart account wallet.

:::

### The Vision

The gmPASS will be tied into more and more functionality for Collab.Land as time goes on.

Open the Product Map below to view a high-level overview of the product vision.

<details> <summary> Product Map </summary>

- Check out the [high level product prioritization](https://whimsical.com/collab-products-7HgPByTfsEVXiFgcXqJzQi@2Ux7TurymMcvr1WjdR3d)
- password `collabland`

</details>

## The Details

### Bonding Curves

Passes are minted along a bonding curve, resulting in variable prices for Passes.

:::caution

Price slippage will occur if multiple accounts are buying and selling along the bonding curve at the same time.

:::

So, a crypto bonding curve is like a rollercoaster designed by a math nerd. It's this fancy graph that decides how much your Passes are worth. The twist? The more people buy in, the higher its price climbs. But remember, this isn't your grandma's savings bond. The curve can go up or down, making it as unpredictable as Vin Diesel doing standup.

#### Default Bonding Curve

Telefrens is launching with the default bonding curve from Friend.Tech.

$$
f(x)=\frac{x^2}{16000}
$$

Bonding curves will be customizable by Creators in a future update.

### Royalties Revenues + Protocol Share

Telefrens empowers Creators by ensuring they always receive royalties revenue on buys and sells of their Passes.

<!-- - 5% of buys/sells to Creators
- 5% to Collab.Land, split further
    - variable percentage as community incentives 0%-1%
        - points system, gamified leaderboard
    - remaining 4%-5% to Collab.Land Co-op-->

<!-- | Percentage of Total | Protocol Fee Split | Name                             | Recipient         |
|---------------------|--------------------|----------------------------------|-------------------|
| 90%                 |                    |                                  | Bonding curve     |
| 5%                  |                    | Creator Royalties                | Creator gmPASS    |
| 5%                  |                    | Protocol Fee                     |                   |
| ============ | ======= | ================| ========|
|                     | 4%-5%              | Protocol-owned liquidity         | Collab.Land Co-op |
|                     | 1%-0%              | Community incentives and rewards | Community members | -->

  <div class="text--center">
    <img  src={img2a} alt="Telefrens value flow model" width="500" />
  </div>

### Referral Points

Referral rewards will vary between a minimum of 0% and a maximum of 1% of trade value of Telefrens Passes.

The amount and distribution mechanics of community incentives will be adjusted by Collab.Land team. Governance over rewards will be decentralized to $COLLAB token holders at a later point in time.

When community incentives are at their maximum of 1% of trade revenues, the revenue share is depicted in the diagram below. All numerical values are percentages, i.e. 90 ➡ 90% of the whole.

  <div class="text--center">
    <img  src={img2} alt="Telefrens revenue share model with maximum community incentives" width="500" />
  </div>

### Leaderboard

:::info

The Leaderboard tracks everyone's Telefrens referral points versus other claim participants.

:::

Referrers can claim referral rewards at the end of each claim period. Rewards are proportional to an individual's Leaderboard rank, i.e. higher rank == more rewards.

Everyone can see their ranking on the Leaderboard using `/leaderboard` command with the Telefrens bot in Telegram.

### Points Formula

The Points formula will be adjusted at the discretion of the Collab.Land team. The initial Community Points formula is:

1. +1 Point when a user you invite onboards to Telefrens
2. +1000 Points when a user you invite does their first transaction using Telefrens

<!-- - {ONLY IN TWA INITIALLY}

- explain telefrens.com/leaderboard (plus TWA) explains points + seasons/periods claim-->

## What is Telefrens Pro?

Telefrens Pro is the premium offering for Telefrens. Creators can purchase Telefrens Pro by using the "Telefrens Pro" command button within DMs with the `@telefrensbot`.

<!-- Telefrens Pro pricing will increase as more creators purchase Telefrens Pro, [get started now] ().-->

### Telefrens Pro Features

Creators get access to premium features such as:

1. 1-click copy trade links to earn affiliate rewards when your Passholders trade using their link.
   - Passholders can trade crypto within their smart accounts following the intent specified by the Creator's Copy Trade link. ex. sell USD --> buy COLLAB.
   - Creators earn affiliate rewards from any trades made using the Copy Trade link.

2. Protected allowlist waiting period.
    - Exclusive, invite-only period for Passes purchases.
    - Creators get referral fees from all their invites.
    - Pass purchasers get front-running protection during the allowlist waiting period because all accounts must be invited to purchase on a 1-time link basis.
    - Allowlist waiting period is customizable, default length is 30 days.

3. Creator Promotion.
    - Telefrens Pro groups will be featured when users search through groups they can buy into.
    - Telefrens Pro groups will be featured on the [global leaderboard](#leaderboard).

:::info

Creators can purchase Telefrens Pro by using the "Telefrens Pro" command button within DMs with the `@telefrensbot`.

:::

<!-- - Group promotion in global search -->

<!--
4. Customizable bonding curves

    - Creators set the desired group size, initial price, and the price for another Pass and Telefrens calculates the curve to match their settings

        - Small group - exponential curve

        - Medium group - quadratic curve

        - Large group - linear curve
-->
---
---

## How to Get Started with Telefrens

:::info

Follow the [Telefrens](https://twitter.com/telefrens) and [Collab.Land](https://twitter.com/Collab_Land_) Twitter accounts for announcements and alpha leaks 💦💦

:::

### Join Telefrens

[Join Telefrens](https://telefrens.com/kols?utm_medium=display&utm_source=tf_docs&utm_campaign=launch) today!

Click a Telefrens invite link from someone to begin DMs with the `@telefrensbot` in Telegram. Use `/start` and follow the prompts to launch the app!

:::caution

A real invite link will _always_ have the form `https://telegram.me/telefrensbot?start=.......` where `telefrensbot` is part of the URL.

:::

### Deposit ETH to your smart account on Arbitrum One

Telefrens runs on Ethereum Layer 2 [Arbitrum One](https://chainlist.org/chain/42161). Activating your Pass is free but to purchase Passes you will need to have ETH on Arbitrum One.

Find your deposit address by using the `Account` button with the Telefrens bot in DMs or by visiting your profile settings inside the Telefrens app.

You can also follow the in-app guide to bridge ETH to Arbitrum One using the Arbitrum Bridge.

  <div class="text--center">
    <img  src={gif4} alt="How to get your Arbitrum One deposit address" width="400" />
  </div>

#### Purchase a Pass

After depositing ETH on Arbitrum One you are ready to purchase your first Pass. Click on a Creator's profile and select "Buy". Select the number of Passes you wish to purchase and click "Confirm".

#### Join a Group Using a Pass

Click on a Creator's profile whose Pass you hold. Click the Blue "Group Chat" button in the top right of the Creator's profile.

:::tip

If the "Group Chat" button does not appear after purchasing that Creator's Pass, then they have not set up their Group Chat. Direct them to the [How to Setup a Telefrens Group](./create-a-tf-group) page.

:::

  <div class="text--center">
    <img  src={gif1} alt="How to join a Telefrens group chat" width="400" />
  </div>

### I'm a Creator Selling Passes to my Group

Visit the [telefrens website](https://telefrens.com/kols?utm_medium=display&utm_source=tf_docs&utm_campaign=launch) to sign up and then follow the onboarding walkthrough.

#### Activate Your Passes

The in-app walkthrough will guide you to activate your Passes. This Pass Activation is free and will not cost anything. Any other Passes will have a variable cost according to how many Passes have exist on that specific [bonding curve](#default-bonding-curve).

#### Set up your Telegram Group

You need your own Telegram group to sell Passes for. Refer to the guides on [How to Setup a Telefrens Group](/telefrens/create-a-tf-group).

<!-- ---

## FAQ

### Beginner Tutorial

lorem ipsum

### How do I deposit assets into Telefrens?

lorem ipsum

### How do I withdraw assets from Telefrens?

lorem ipsum

### Security

lorem ipsum -->
