---
sidebar_position: 1
title: ERC1155
---

import img1 from '@site/static/img/tutorial/command-center/erc1155-opensea.png';
import img2 from '@site/static/img/tutorial/command-center/erc1155-no-opensea.png';

## Opensea

To create a TGR for an OpenSea collection on Ethereum Mainnet:

1. Log in to the Command Center at https://cc.collab.land.
2. From the left panel, select the server in which you would like to create the TGR. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR. 
4. Enter the token details for your Solana FT token.
   - Description (optional): A description of your TGR that will only be displayed in the CC for reference purposes.
   - Chain Type: Mainnet.
   - Token Type: Opensea.
   - Collection Name: The collection name of your token.
   - Balance: The minimum and maximum (optional) amount of tokens required to obtain the role.
5. Click "Save"

*Note*: It is important to copy the collection name from the URL of the collection on OpenSea.

For example, if the URL of your collection is "opensea.io/collection/liquiddreams2-0", then the name you should use in the configuration is "liquiddreams2-0".

<div class="text--center">
   <img  src={img1} alt="Create an Opensea TGR" />
</div>

## ERC1155 collection not listed on Opensea (Mainnet or not)

To create a TGR for an ERC1155 collection not listed on OpenSea, follow these steps:

1. Log in to the Command Center at https://cc.collab.land.
2. From the left panel, select the server in which you would like to create the TGR. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR. 
4. Enter the token details for your Solana FT token.
   - Description (optional): A description of your TGR that will only be displayed in the CC for reference purposes.
   - Chain Type: Mainnet or other EVM chain.
   - Token Type: ERC1155.
   - Address: The contract address of your token.
   - Balance: The minimum and maximum (optional) amount of tokens required to obtain the role.
   - Token ID: All of the Token IDs you want configured. (required)
5. Click "Save"

>***Note:***
> - When configuring an ERC1155 TGR, it is **required** to list all Token IDs, otherwise the TGR won't work.
> - When entering token IDs if they are in sequential order you can use a range '0-5000'.
> - If you have to enter many token IDs you can enter a url that links to a list of token IDs in txt format:
>  1. ​You can create the list locally as a .txt file, with each token id separated by a single comma
>  2. ​then upload it to a hosting service such as pinata, github, ipfs, or s3, etc to generate the link
>  3. Paste this link in the token id field in Collab.Land Dashboard Command Center

The configuration of an ERC1155 TGR should look like this:

<div class="text--center">
    <img  src={img2} alt="Create an ER1155 TGR" />
</div>
