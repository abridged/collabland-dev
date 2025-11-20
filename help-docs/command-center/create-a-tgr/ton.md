---
sidebar_position: 7
title: TON
---

import tonkeeperImg from '@site/static/img/TonKeeper.png';

:::info

In order for members to verify their TON tokens, they need to select the **Tonkeeper** option when connecting their wallet.

:::

<div class="text--center">
  <img src={tonkeeperImg} alt="Connect TON wallet - Select Tonkeeper" />
</div>



## TON Coin

To configure a TON Coin TGR (Discord) or TGA (Telegram), follow these steps:

1. Log in to the Command Center at https://cc.collab.land using Discord or Telegram.

2. From the left panel, select the group in which you would like to create the token gated rule. Then, click on "TGRs" (for Discord) or "TGAs" (for Telegram).

3. Click the "+ Select Role" button and choose the Discord role or Telegram access level you would like to use.

4. Enter the token details for your TON Coin TGR/TGA.
   - Description (optional): A description of your TGR/TGA that will only be displayed in the CC for reference purposes.
   - Chain Type: TON.
   - Token Type: TON Coin.
   - Address: The contract address of your TON Coin.
   - The minimum and maximum (optional) amount of TON coins required to obtain the role or access.

5. Click "Save"

## TON Jetton (FT)

To configure a TON Jetton (FT) TGR (Discord) or TGA (Telegram), follow these steps:

1. Log in to the Command Center at https://cc.collab.land using Discord or Telegram.

2. From the left panel, select the group in which you would like to create the token gated rule. Then, click on "TGRs" (for Discord) or "TGAs" (for Telegram).

3. Click the "+ Select Role" button and choose the Discord role or Telegram access level you would like to use.

4. Enter the token details for your TON Jetton TGR/TGA.
   - Description (optional): A description of your TGR/TGA that will only be displayed in the CC for reference purposes.
   - Chain Type: TON.
   - Token Type: TON Jetton (FT).
   - Jetton Master Address: The contract address of your TON Jetton token.
   - Balance: The minimum and maximum (optional) amount of tokens required to obtain the role or access.

5. Click "Save"

## TON NFT

To configure a TON NFT TGR (Discord) or TGA (Telegram), follow these steps:

1. Log in to the Command Center at https://cc.collab.land using Discord or Telegram.

2. From the left panel, select the group in which you would like to create the token gated rule. Then, click on "TGRs" (for Discord) or "TGAs" (for Telegram).

3. Click the "+ Select Role" button and choose the Discord role or Telegram access level you would like to use.

4. Enter the token details for your TON NFT TGR/TGA.
   - Description (optional): A description of your TGR/TGA that will only be displayed in the CC for reference purposes.
   - Chain Type: TON.
   - Token Type: TON NFT.
   - Collection Address: The contract address of your TON NFT collection.
   - Token ID (optional): Give the specific `tokenId`s of the tokens required to obtain the role or access. You can find token IDs using a TON block explorer like [TONViewer](https://tonviewer.com/) or [TONScan](https://tonscan.org/).
   - The minimum and maximum (optional) amount of NFTs required to obtain the role or access.

5. Click "Save"

:::info

If you are using the `tokenId` field, you must provide Token IDs separated by commas, **with no spaces**. Using ranges with `-` are supported as well. See [supported Token ID formats](/help-docs/command-center/create-a-tgr/how-to-create-a-tgr#supported-token-id-formats) for more information.

:::

