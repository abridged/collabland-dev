---
sidebar_position: 5
title: Loopring
---

import img1 from '@site/static/img/tutorial/command-center/loopring-nft1.png';
import img2 from '@site/static/img/tutorial/command-center/loopring-nft2.png';
import img3 from '@site/static/img/tutorial/command-center/loopring-tgr.png';

To create a TGR with a Loopring token, follow these steps:

1. Navigate to the TGRs page of the Collab.Land Command Center (https://cc.collab.land). 
2. Press the "+ Select Role" button and choose the Discord role you want to associate with this TGR.

2. Fill in the Token Details:

   - Description: An optional field where you can enter a brief description of your TGR.
   - Chain Type: Select Loopring.
   - Token Type: Choose either Loopring NFT or Loopring FT.
   - Address:

     - For Loopring FT: Enter the Loopring address of your token. You can find this on Etherscan (https://etherscan.io/).
     - For Loopring NFT: 
       - Go to the Loopring explorer (https://explorer.loopring.io/), search for an L1 wallet that holds the NFT you want to use
           
            <div class="text--center">
                <img  src={img1} alt="Loopring NFT" />
            </div>
         
       - Click on "NFTs" to see the NFTs in that wallet. Click on the desired NFT to view its token details, which will include the Token Address and NFT ID.

            <div class="text--center">
                <img  src={img2} alt="Loopring NFT" />
            </div>

   - NFT id (optional): If desired, enter the NFT ID of the token you want to use. You can add multiple NFT IDs by separating them with commas.

   - Min Amount: Specify the minimum number of tokens required to obtain the role.

   - Max Amount (optional): Enter an optional maximum number of tokens.

3. Finally, click "Save" to create your Loopring TGR.

This is what a Loopring TGR should look like:

   <div class="text--center">
        <img  src={img3} alt="Loopring TGR" />
   </div>