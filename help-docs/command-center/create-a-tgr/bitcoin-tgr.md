---
sidebar_position: 3
title: Bitcoin
id: bitcoin-tgr
sidebar_label: Bitcoin
---

import img1 from '@site/static/img/tutorial/command-center/bitcoin-stamps-tgr.png';
import img2 from '@site/static/img/tutorial/command-center/bitcoin-ordinals-tgr.png';

## Overview

Use Collab.Land’s Token-Gating Rules in the [Command Center](../../key-features/command-center) to gate Discord roles on Bitcoin **STAMPS** and **Ordinals** NFTs. The sections below walk through setup for each type.

## Bitcoin STAMPS

### How to Get the STAMPS Creator Address via Stampchain {#how-to-get-the-stamps-creator-address-via-stampchain}

1. **Accessing Stampchain**:
   - Navigate to the [Stampchain website](https://stampchain.io/). This is where you can view all the stamps data and specifications.
   - Stampchain allows you to search by various parameters including Stamp ID, Creator, transaction, CPI, etc.

2. **Searching for Your Stamp**:
   - If you know your Stamp ID (or IDs if you have multiple), enter it in the search bar.
   - Once you initiate the search, you should see the relevant stamp details, including the creator's information.

### How to Create a Bitcoin STAMPS TGR

To configure a STAMPS TGR, follow these steps:

1. Log in to the [Command Center](../../key-features/command-center) at https://cc.collab.land using Discord.

2. From the left panel, select the server you would like to create the TGR in. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR.
   - Write an informative description for the TGR.

4. Set the `Chain Type` to "Bitcoin".

5. Set the `Token Type` as "Bitcoin Stamps".

6. **Inputs for the TGR**: Fill in one or both of the fields 'Stamp Creator' and 'Stamp ID'.

:::info

   - You can input both or choose only one. However, if both fields are left empty, you'll get an error.

   - Inputting the Stamp [Creator Address](#how-to-get-the-stamps-creator-address-via-stampchain) will consider all stamps made by that particular creator.

:::

7. Set the Minimum amount of tokens needed to gain the role.
   - Optional: Set a Maximum number of tokens.

8. Click "Save".

The final configuration of a Stamps TGR should look like this:

<div class="text--center">
   <img src={img1} alt="Create a Bitcoin STAMPS TGR" />
</div>

## Bitcoin Ordinals

### How to Find Ordinals Inscription Numbers and Collection Names {#how-to-find-ordinals-inscription-numbers-and-collection-names}

1. **Inscription number range (recommended)**:
   - Use this if your collection is not listed on Ordiscan, or if you want the most reliable setup.
   - In the TGR, set **From** to the starting inscription number and **To** to the ending inscription number.
   - On Ordinals marketplaces such as [Satflow](https://www.satflow.com), search for your collection, then sort by **Inscription: Low to High** to find the starting number and **Inscription: High to Low** to find the ending number.

2. **Collection name (Ordiscan only)**:
   - Use this only if your collection is indexed on [Ordiscan](https://ordiscan.com/collections).
   - Enter the **Collection Name** exactly as it appears there. If your collection is not listed, use inscription numbers instead.

### How to Create a Bitcoin Ordinals TGR

To configure a Bitcoin Ordinals TGR, follow these steps:

1. Log in to the [Command Center](../../key-features/command-center) at https://cc.collab.land using Discord.

2. From the left panel, select the server you would like to create the TGR in. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR.
   - Write an informative description for the TGR.

4. Set the `Chain Type` to "Bitcoin".

5. Set the `Token Type` as "Bitcoin Ordinals".

6. **Holder identification**: Apply one of the methods in [How to Find Ordinals Inscription Numbers and Collection Names](#how-to-find-ordinals-inscription-numbers-and-collection-names): either the inscription **From** / **To** range or the Ordiscan **Collection Name**.

7. Set the Minimum amount of tokens needed to gain the role.
   - Optional: Set a Maximum number of tokens.

8. Click "Save".

:::info

If your Bitcoin Ordinals TGR was created before March 2026, it may no longer work as expected. Changes in third-party infrastructure (including Magic Eden deprecating Bitcoin support, which previously powered collection-based verification) mean you should update your TGR to use **inscription number ranges** (recommended) or **Ordiscan collections** (if available).

:::

#### Best practice

If you are unsure which identification method to use, prefer **inscription number ranges**. They are the most reliable and future-proof setup.

The final configuration of an Ordinals TGR should look like this:

<div class="text--center">
   <img src={img2} alt="Create a Bitcoin Ordinals TGR" />
</div>
