---
sidebar_position: 1
title: How to create a TGR
---

import img1 from '@site/static/img/tutorial/command-center/balance-based-tgr.png';
import img2 from '@site/static/img/tutorial/command-center/attributes-based-tgr.png';
import img3 from '@site/static/img/tutorial/command-center/attributes-based-tgr2.png';
import img4 from '@site/static/img/tutorial/command-center/create-tgr4.png';
import img5 from '@site/static/img/tutorial/command-center/create-metadata-tgr1.png';
import img6 from '@site/static/img/tutorial/command-center/create-metadata-tgr2.png';

**TGRs** are Token Gating Rules, the rules that determine which roles a member will be assigned based on the token-related criteria defined by the community admin.

For example, a TGR may grant access to a "VIP" role for members who hold a certain number of tokens.

:::info

Learn more about the different TGR types and Collab.Land's supported blockchains in the [Key Features](/help-docs/key-features/token-gate-communities#what-types-of-tgrs-are-there).

:::

:::tip

Use the [Role Composition miniapp](/help-docs/marketplace/apps/role-composition) to create TGRs that require holding a combination of different tokens. For example, you could require the possession of both a fungible token (`ERC20`) and an NFT (`ERC721` or `ERC1155`) for access to a role.

:::

## How to Create a TGR

To create a TGR in Discord, follow these steps:

1. Log in to the [Command Center](../../key-features/command-center) at https://cc.collab.land using Discord.

2. From the left panel, select the server in which you would like to create the TGR. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR.

4. You will be taken to the TGR configuration page. Fill in the fields to create your TGR. If any information provided is incorrect, an error message will appear. The fields include:

   - Description (optional): A description of your TGR that will only be displayed in the CC for reference purposes.

   - Chain Type: The blockchain network that the token for this TGR is on. See the [full list of Collab.Land-supported chains](/help-docs/key-features/supported-blockchains-wallets) and corresponding token types.

   - Token Type: The type of token used for the TGR.

   - Address: The contract address of your token.

   - Token ID (optional): Give the specific `tokenId`s of the tokens required to obtain the role.

:::caution

`tokenId` is **required** for TGRs that use `ERC1155` tokens. Check out the [`ERC1155` TGR creation tutorial](https://www.youtube.com/watch?v=NngqwW0lQNQ&list=PLQbEq7a9kYPlvjfdJp3msChLJ7kFufyI2&index=2) on the Collab.Land YouTube channel.

:::

   - Balance: The minimum and maximum (optional) amount of tokens required to obtain the role.

   - Attributes (conditional): For specific tokens, such as NFTs, you can add metadata conditions that must be met in order for the member to receive the role. If your NFT contains metadata traits and values, you can enter them by clicking on the "Attributes" button and then "Add metadata".

5. If you need to start over, click "Reset". This action is not reversible.

6. Once you have filled in the fields, click "Save" to create your TGR.

Congratulations, you've created a TGR!

:::info

If you are using the `tokenId` field, you must provide Token IDs separated by commas, **with no spaces**. Using ranges with `-` are supported as well.

:::

### Supported Token ID formats

- Range: `11-99`

- List: `1,2,3,4`

- List combined with range(s): `1,2,42-69,90,101-105`

:::tip

If you have to enter many Token IDs or the list of IDs will change, you can enter a URL that links to a list of Token IDs in plaintext format.

:::

- URL list of Token ID(s):
  
  1. Create the list locally as a `.txt` file, using the same formats as above.

  2. Upload the `.txt` file to a hosting service such as [Pinata](https://www.pinata.cloud/), [GitHub](https://github.com/), [IPFS](https://ipfs.tech/), or [S3](https://aws.amazon.com/s3/) to generate the URL.

  3. Paste the host URL in the Token ID field.

### Create a Balance-Based TGR

:::info

Balance-Based TGRs mean that a member will receive a role if they hold the minimum number of tokens or more.

This TGR type is commonly used for `ERC20` gating and for holding a number of any tokens from an NFT collection.

:::

1. Follow the normal steps of [creating a TGR](#how-to-create-a-tgr) as listed above

2. Set the minimum amount of tokens (required)

3. Set the maximum amount of tokens (not required)

4. Click “Save”

Your balance-based TGR is ready! A complete balance-based TGR should look like this:

<div class="text--center">
   <img  src={img1} alt="Create a balance-based TGR" />
</div>

### Create a Attributes-Based TGR (NFT only)

This type of TGR is used to create roles based on ownership of specific kinds of NFTs from a collection.

For example, an admin can use an Attributes-Based TGR to check for a BAYC ape _with blue fur_ in the member's wallet.

:::tip

Check out the tutorial for [creating ERC721 Token Gating Rules using NFT Metadata](https://www.youtube.com/watch?v=pYhBPm7ixak&list=PLQbEq7a9kYPlvjfdJp3msChLJ7kFufyI2) on the Collab.Land YouTube channel.

:::

1. Follow the normal steps of [creating a TGR](#how-to-create-a-tgr) as listed above

2. Since you have chosen to create an Attributes-based TGR, when you picked the Token Type, an “Attributes” button has appeared next to the “Balance” option.

:::caution

The "Attributes" button will only appear if you are using an NFT TGR type. Selected type must be `ERC721`, `ERC1155`, or equivalent NFT standard.

:::

3. Select “Attributes”.

4. Click on the “+ Add Metadata” button.

5. A window will appear, allowing you to enter the `Trait` and its `Value`.

   <div class="text--center">
     <img  src={img3} alt="Create metadata-based TGR" />
   </div>

:::danger

Attributes-based TGRs _must_ be **EXACT matches** to the `Trait`s and `Value`s specified in the contract's metadata.

:::

6. If you want to add multiple Traits:

   - Select AND if all the traits should match. If you choose the AND option (default) then the member will have to hold one NFT with all of the trait value pairs which have been listed here.

   - Select OR if at least one of the traits should match. If you choose the OR option, the member will have to hold one NFT with at least one of the trait value pairs which have been listed.

7. Click on the “Add Trait” button.

8. Click “Save”

Your Attributes-based TGR is ready! This is what it should look like:

   <div class="text--center">
     <img  src={img2} alt="Create an attributes-based TGR" />
   </div>

### How to find NFT Metadata Traits

:::tip

Check out our YouTube tutorial for [how to find NFT metadata traits using OpenSea](https://youtu.be/pYhBPm7ixak?list=PLQbEq7a9kYPlvjfdJp3msChLJ7kFufyI2&t=122).

:::
