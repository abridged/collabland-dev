---
sidebar_position: 4
id: collab-tipping
title: Community Tipping
---

import img1 from '@site/static/img/tip_commands_dis.png';
import img2 from '@site/static/img/tg_tip_dm_cmds.png';
import img3 from '@site/static/img/tg_tip_grp_cmds.png';

## Overview

Collab.Land's tipping system allows members of Discord and Telegram communities to show appreciation and support by tipping tokens. Transactions are executed through Smart Accounts, ensuring security and efficiency. This decentralized system enhances community engagement by offering a safe and easy way for members to interact and support one another.

:::caution
To refill tips in your Smart Account, ONLY deposit supported tokens on the designated chain for each community. To discover which tokens are supported, type /tip tokens in your community.
Do not send other tokens on unsupported chains!
:::

## What's a Smart Account?

A Smart Account is a type of Web3 programmable wallet driven by smart contracts, eliminating the need for private keys or seed phrases. These accounts use code for security and recovery of wallet information.

:::tip
Your Smart Account wallet will hold the tokens received from tips and deposits - all visible and trackable onchain.
:::

## How to Get Started on Discord

After logging into Discord, you can activate your Smart Account within the [Collab.Land Discord Server](https://discord.gg/collabland) or any [Premium](https://docs.collab.land/help-docs/key-features/bot-subscription) Collab.Land community by using any `/tip` command.

Once activated, you can start tipping other members by using the `/tip to` command, specifying the recipient `{@username}`, the desired `{amount}` and the `{token_symbol}` you wish to send to them.

**Example:**
`/tip to @john_doe 12.345 COLLAB`

:::tip
Along with the Discord Username, you can also use Discord UserID to send tips.
:::

:::caution
Tips are onchain transactions. Always verify that you are tipping the right person! Onchain transactions CANNOT be reverted or canceled.
:::

Here is a list of all the Discord `/tip` commands and how they work:

<div class="text--center">
    <img src={img1} alt="Collab.Land tipping commands" />
</div>

| Command       | Description                                                  |
| ------------- | -------------------------------------------------------------|
| /tip balance  | Displays your Smart Account balance                          |
| /tip deposit  | Displays your Smart Account address to deposit tokens        |
| /tip help     | Displays all /tip commands and info                          |
| /tip to       | Give tips to community members. Only 1 recipient is allowed. |
| /tip tokens   | List of supported tokens in each community                   |
| /tip withdraw | Command to withdraw your tip balances                        |

## How to Get Started on Telegram

After logging into Telegram, you can activate your Smart Account within the any [Premium](https://docs.collab.land/help-docs/key-features/bot-subscription) Collab.Land group  by using any /tip command.

Once activated, you can start tipping other members within Telegram groups by using the `/tip to` command, specifying the recipient `{@username}`, the desired `{amount}` and the `{token_cashtag}` you wish to send to them.

**Example:**
`/tip to @john_doe 12.345 $COLLAB`

:::tip
The {token_cashtag} must be capitalized.
:::

### Telegram Commands to use in DM with the @collablandbot:

<div class="text--center">
    <img src={img2} alt="Collab.Land tipping commands" />
</div>

| Command       | Description                                                  |
| ------------- | -------------------------------------------------------------|
| /tip chains   | Shows the chains supported by Collab.Land for tipping        |
| /tip help     | Tip commands allow you to send, review and manage your tips  |
| /tip withdraw | Command to withdraw your tip balances                        |

### Telegram Commands to use in your Groups:

<div class="text--center">
    <img src={img3} alt="Collab.Land tipping commands" />
</div>

| Command       | Description                                                  |
| ------------- | -------------------------------------------------------------|
| /tip balance  | Displays your Smart Account balance in each community        |
| /tip deposit  | Displays your Smart Account address to deposit tokens        |
| /tip help     | Displays all /tip commands and info                          |
| /tip to       | Give tips to community members. Only 1 recipient at a time   |
| /tip tokens   | List of supported tokens in this community                   |

## Supported Tipping Chains and Tokens

| Chain Name        | Token Symbol | Token Name | Token Address                                      |
|-------------------|--------------|------------|----------------------------------------------------|
| Arbitrum Mainnet  | ARB          | Arbitrum   | 0x912CE59144191C1204E64559FE8253a0e49E6548         |
| Arbitrum Mainnet  | USDC         | USD Coin   | 0xaf88d065e77c8cC2239327C5EDb3A432268e5831         |
| Base              | DEGEN        | Degen      | 0x4ed4e862860bed51a9570b96d89af5e1b0efefed         |
| Base              | USDC         | USD Coin   | 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913         |
| Optimism Mainnet  | COLLAB       | Collab.Land| 0x8b21e9b7daf2c4325bf3d18c1beb79a347fe902a         |
| Optimism Mainnet  | OP           | Optimism   | 0x4200000000000000000000000000000000000042         |
| Optimism Mainnet  | USDC         | USD Coin   | 0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85         |
| Polygon Mainnet   | USDC         | USD Coin   | 0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359         |
