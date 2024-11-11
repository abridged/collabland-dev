---
sidebar_position: 4
title: Solana
---

import img1 from '@site/static/img/tutorial/command-center/solana-nft1.png';
import img3 from '@site/static/img/tutorial/command-center/solana-nft3.png';
import img4 from '@site/static/img/tutorial/command-center/solana-nft4.png';

import img5 from '@site/static/img/tutorial/command-center/solana-ft.png';

## Solana FT

To configure a Solana FT TGR, follow these steps:

1. Log in to the Command Center at https://cc.collab.land using Discord.
2. From the left panel, select the server in which you would like to create the TGR. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR.

4. Enter the token details for your Solana FT token.
   - Description (optional): A description of your TGR that will only be displayed in the CC for reference purposes.
   - Chain Type: Solana.
   - Token Type: Solana FT.
   - Address: The contract address of your token.
   - Balance: The minimum and maximum (optional) amount of tokens required to obtain the role.
5. Click "Save"

The configuration of a Solana FT TGR should look like this:

<div class="text--center">
  <img  src={img5} alt="Solana FT TGR" />
</div>

## Solana NFT

When creating a TGR for a Solana NFT follow the same process as before, but you will be required to select a filter in the token details screen. The filter field is exclusive to the Solana NFT token type. Collab.Land offers three different filters to help identify your NFT tokens, which can be chosen from the dropdown list. The corresponding public key or address for the filter can be found in the token's metadata on a Solana block explorer, like [Solscan](https://solscan.io/). If you would like to set up TGRs for multiple addresses, you can list them separated by a comma, without any spaces.

   <div class="text--center">
     <img  src={img1} alt="Solana NFT TGR" />
   </div>

The two filters available in Collab.Land are:

1. Creators - This filter is the most commonly used when working with a collection of NFTs. You can find the verified creators filter address by viewing any token from your collection on Solscan. Look for the "creators" section under the metadata tab, and the verified creators address will be the one that says "verified" : int 1 beneath the address.

   <div class="text--center">
     <img  src={img3} alt="Solana creators section " />
   </div>

2. Master Editions - Use this filter when specifying a group of limited editions. The mint address is used in this case. If it doesn’t work as expected, please try using the collection key address.

   <div class="text--center">
     <img  src={img4} alt="Solana Master Editions section" />
   </div>