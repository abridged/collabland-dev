---
sidebar_position: 7
title: Royalties Detection Rule (RDR)
---

import img1 from '@site/static/img/tutorial/command-center/rdr1.png';
import img2 from '@site/static/img/tutorial/command-center/rdr2.png';

Collab.Land's Royalty Detection Rule (RDR) is an experimental feature that helps communities check if a member has paid royalties when purchasing an NFT from an NFT marketplace. The RDR uses the Alchemy API to check certain NFT marketplaces like OpenSea, Blur, X2Y2, and LooksRare for evidence of royalties paid. The RDR can return one of three possible results: true, unknown, or false.

When creating a Token-Gating Rule (TGR) using an ERC-721 NFT, you can use the new metadata trait `royaltyPaid` to track if the current owner of the NFT paid royalties to the creator on their purchase. This allows communities to require paying NFT creator royalties to grant roles. The metadata trait `royaltyPaid` can return one of three possible values: true, unknown, or false.

1. True: If the NFT was purchased from any of the supported marketplaces and royalties were paid, the RDR returns true.

2. Unknown: If the NFT was purchased from an unsupported marketplace with an additional transaction sent, the RDR assumes royalties were paid and returns unknown. Note that this assumes royalties were paid, but the RDR cannot be sure.

3. False: If the NFT was purchased from a marketplace with no additional send transaction, the RDR knows royalties were not paid and returns false. Note that the RDR will also return false for private sales or simple token transfers as it only checks the single address provided by the connected wallet.

This is the logic flow for Collab.Land’s Royalty Detection Rule:

   <div class="text--center">
        <img  src={img1} alt="Royalties Detection Rule Logic Flow" />
   </div>

Note: It is recommended to specify both unknown and true cases and specify an OR condition to account for members who may have purchased the community's NFT from alternative marketplaces. Keep in mind that this feature is experimental and may behave unexpectedly.

   <div class="text--center">
        <img  src={img2} alt="Royalties Detection Rule TGR" />
   </div>
