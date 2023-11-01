---
sidebar_position: 10
title: Bitcoin
id: bitcoin-tgr
sidebar_label: Bitcoin
---

import img1 from '@site/static/img/tutorial/command-center/bitcoin-stamps-tgr.png';
import img2 from '@site/static/img/tutorial/command-center/bitcoin-ordinals-tgr.png';

Create communities with Collab.Land’s  Token-Gating Rules using Bitcoin NFTs.

## Overview

Bitcoin.

## Bitcoin TGRs

### How to Get the STAMPS Creator Address via Stampchain

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
   <img src={img1} alt="Create a Bitcoin STAMPS TGR" height="250" />
</div>

### How to find the Ordinals Collection Name via Magic Eden

1. **Understanding Ordinals**:
   - Collab.Land uses the Magic Eden APIs to access and token gate Ordinals.
   - Navigate to the [Magic Eden website](https://magiceden.io/ordinals).

2. **Retrieve Collection Name**: Copy the Collection Name from the Magic Eden URL. The Collection Name is at the end of the URL, in the format of `/ordinals/marketplace/{collectionName}`.

### How to Create a Bitcoin Ordinals TGR

To configure an Ordinals TGR, follow these steps:

1. Log in to the [Command Center](../../key-features/command-center) at https://cc.collab.land using Discord.

2. From the left panel, select the server you would like to create the TGR in. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR.
   - Write an informative description for the TGR.

4. Set the `Chain Type` to "Bitcoin".

5. Set the `Token Type` as "Bitcoin Ordinals".

6. Input the [Collection Name](#how-to-find-the-ordinals-collection-name-via-magic-eden) _**exactly**_ as it appears in the URL.

:::info

The Collection Name is at the end of the Magic Eden URL, in the format of /ordinals/marketplace/_**collection-name**_.

:::

7. Optional: Input the Token ID(s) for the TGR.
  
   - Supported [Token ID formats](/help-docs/command-center/create-a-tgr/how-to-create-a-tgr#supported-token-id-formats).

8. Set the Minimum amount of tokens needed to gain the role.
   - Optional: Set a Maximum number of tokens.

9. Click "Save".

The final configuration of an Ordinals TGR should look like this:

<div class="text--center">
   <img src={img2} alt="Create a Bitcoin Ordinals TGR" height="250" />
</div>
