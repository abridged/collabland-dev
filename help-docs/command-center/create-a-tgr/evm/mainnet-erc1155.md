---
sidebar_position: 1
id: ERC1155
title: ERC1155 collections
---

import img1 from '@site/static/img/tutorial/command-center/erc1155-opensea.png';
import img2 from '@site/static/img/tutorial/command-center/erc1155-no-opensea.png';

The OpenSea shared storefront uses the `ERC1155` standard to mint NFT tokens as they are purchased rather than minting ahead of time. Use Collab.Land's `OpenSea` token type for collections created via OpenSea. For other contracts use the `ERC1155` token type.

## TGRs for Opensea Shared Storefront

:::note

TGRs for `ERC1155` collections via OpenSea are only supported for Ethereum mainnet and Gnosis chain currently.

:::

To create a TGR for an OpenSea shared storefront collection:

1. Log in to the Command Center at https://cc.collab.land.

2. From the left panel, select the server in which you would like to create the TGR. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR.

4. Enter the token details for your NFT.
   - Description (optional): A description of your TGR that will only be displayed in the CC for reference purposes.
   - Chain Type: `Mainnet`
   - Token Type: `Opensea`
   - Collection Name: The collection name of your token
   - Balance: The minimum and maximum (optional) amount of tokens required to obtain the role
5. Click "Save"

:::info

The collection name must match the OpenSea collection _exactly_. Copy the collection name from the URL of the collection on OpenSea.

For example, if the URL of your collection is "opensea.io/collection/liquiddreams2-0", then use `liquiddreams2-0` as the Collection Name.

:::

<div class="text--center">
   <img  src={img1} alt="Create a TGR for an NFT on the Opensea shared storefront" />
</div>

## Other ERC1155 NFT collections

Use these steps for collections not created via OpenSea and on networks other than Ethereum mainnet and Gnosis chain.

To create a TGR for an `ERC1155` collection not listed on OpenSea, follow these steps:

1. Log in to the Command Center at https://cc.collab.land.

2. From the left panel, select the server in which you would like to create the TGR. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR. 

4. Enter the token details for your NFT token.
   - Description (optional): A description of your TGR that will only be displayed in the CC for reference purposes.
   - Chain Type: Mainnet or other [EVM chain](/help-docs/key-features/token-gate-communities#supported-blockchains--tokens)
   - Token Type: `ERC1155`
   - Address: The contract address of your token
   - Balance: The minimum and maximum (optional) amount of tokens required to obtain the role
   - Token ID (**required**): All of the Token IDs you want configured.
5. Click "Save"

The configuration of an `ERC1155` TGR should look like this:

<div class="text--center">
    <img  src={img2} alt="Create an ER1155 TGR" />
</div>

:::caution

Token IDs are _**required**_ for `ERC1155` TGRs, the TGR will not work without them.

See [How to Create a TGR](/help-docs/command-center/create-a-tgr/how-to-create-a-tgr#supported-token-id-formats) for supported Token ID formats.

:::
