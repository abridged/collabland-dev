---
sidebar_position: 4
title: Staked tokens
---

import img1 from '@site/static/img/tutorial/command-center/staking-tgr1.png';
import img2 from '@site/static/img/tutorial/command-center/staking-tgr2.png';
import img3 from '@site/static/img/tutorial/command-center/staking-tgr3.png';

:::info

NFT staking contracts are only supported on Ethereum Mainnet, Polygon sidechain, Blast L2 and Base.

:::

## How to create a staking contract TGR

To set up a TGR for a staking contract on Ethereum Mainnet, Polygon, Blast L2 or Base, follow these steps:

1. Press the + Select Role button, and choose the desired Discord role from the drop-down menu.

2. In the description field (optional), enter a brief description to easily identify the TGR.

3. For the Chain Type, select Ethereum Mainnet, Polygon, Blast L2 or Base.

   <div class="text--center">
     <img  src={img3} alt="Staking Contracts TGR" />
   </div>

4. In the Token Type section, select "Staking Contracts."

   <div class="text--center">
     <img  src={img1} alt="Staking Contracts TGR" />
   </div>
   
5. From the Staking Contract drop-down menu, choose the desired staking contract. 

   <div class="text--center">
     <img  src={img2} alt="Create TGR" />
   </div>

6. Enter the minimum amount of tokens required for the role in the "Balance - Min Amount" field. You may also enter the maximum amount of tokens in the "Balance - Max Amount" field (optional).

7. You can add specific metadata conditions by clicking on the "Attributes" button. To add metadata, click on "+ Add metadata" and enter the desired traits and attributes.


8. Finally, click "Save." 

Congratulations, your staking contract TGR has been created!

## Contract not listed

:::tip

It is still possible to create a TGR for staking contracts not listed on the dropdown menu if the contract has the `balanceOf` function.

:::

To create a TGR for contract not listed on the dropdown menu follow these steps:

1. Input the staking contract address as the `Token Address`

2. Choose the `Token Type` that matches the staking contract, eg. `ERC20`, `ERC721`, or `ERC1155`

3. [Create a balance-based TGR](../how-to-create-a-tgr#create-a-balance-based-tgr) as normal


### How to add a contract to the dropdown menu

:::caution

Adding a new contract to the public github repository requires technical skills. We recommend only developers attempt to add new contracts to the repository.

:::

Follow the directions in the public [Collab.Land staking contracts](https://github.com/abridged/collabland-staking-contracts/blob/master/README.md#add-a-new-staking-contract) github repository.