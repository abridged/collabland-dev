---
sidebar_position: 13
title: Give by SKALE
id: give
sidebar_label: Give
---

import img1 from '@site/static/img/tutorial/marketplace/poap.png';

## Overview

Send and receive tokens on the [SKALE blockchain](https://skale.space/).

### About this app

Give allows community members to give and receive tokens onchain<!-- on the SKALE blockchain. Tokens are sent between members' [gmPASS-controlled smart accounts](/help-docs/key-features/gm-pass), creating a personal web of onchain connections between community members-->.

Give is initially available for partner communities who had previously used Kchannel `/tip` commands.

Give replaces the sunset Kchannel `/tip` commands.

:::note

Deposit and withdraw commands for Give are not currently enabled.

:::

### Getting Started

1. Install the Give Miniapp from the [Collab.Land Marketplace](https://cc.collab.land).

2. In your community's Discord server check your balance with `/give balance`.
   1. See which tokens are available to give using `/give token-list`.
   2. If you want to give your community's token, contact us by [creating a ticket](https://collabland.freshdesk.com/support/tickets/new).
3. Start sending tokens on SKALE with the `/give to` command. Make sure to specify the member(s) you are sending to `[{@user1}, {@user2}, ...]`, which tokens you are sending `{tokenSymbol}`, and how many to each person `{amount}`.

### Commands available:

There is one command `/give` with four total subcommands.

| Command | Additional Parameters | Description |
|--------------------|-----------------------------------------------|----------------------------------------------------------|
| `/give balance`    | -                                             | Display your balance of supported tokens.               |
| `/give to`         | `[{@user1}, {@user2}, ...]`, `{tokenSymbol}`, `{amount}` | Give the specified amount of tokens to each mentioned community member. |
| `/give token-list` | -                                             | Show the supported token list.                           |
| `/give help`       | -                                             | Display the available commands.                          |

## Supported Tokens

| Token Symbol | Ethereum Mainnet Token Address                                                                                                 | SKALE Chain Token Address                                                                                                                                              |
|--------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `INDEX`      | [`0x0954906da0Bf32d5479e25f46056d22f08464cab`](https://etherscan.io/token/0x0954906da0Bf32d5479e25f46056d22f08464cab) | [`0xFbbDF9aC97093b1E88aB79F7D0c296d9cc5eD0d0`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0xFbbDF9aC97093b1E88aB79F7D0c296d9cc5eD0d0) |
| `POOL`       | [`0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e`](https://etherscan.io/token/0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e) | [`0xB6471DE869aBb02D5D4cfAf45a892F3c9807979F`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0xB6471DE869aBb02D5D4cfAf45a892F3c9807979F) |
| `FMB`        | [`0x23AE14e9576B2272AeCF969A04f949109b6A49b4`](https://etherscan.io/token/0x23AE14e9576B2272AeCF969A04f949109b6A49b4) | [`0xe695e0309a43b39B4C85d54EFd0096e41ddFB6d7`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0xe695e0309a43b39B4C85d54EFd0096e41ddFB6d7) |
| `BANK`       | [`0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198`](https://etherscan.io/token/0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198) | [`0xC1ecfb19a5E9D513ed776fea255FCE9d32c8f38b`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0xC1ecfb19a5E9D513ed776fea255FCE9d32c8f38b) |
| `KIDS`       | [`0x2f749E96CD185fB4da666821AB01b0731d03c188`](https://etherscan.io/token/0x2f749E96CD185fB4da666821AB01b0731d03c188) | [`0x074a152a46A4F39c4093A704cEC80365e3D84027`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x074a152a46A4F39c4093A704cEC80365e3D84027) |
| `SQUIG`      | [`0x373acdA15Ce392362e4b46ED97a7feEcD7EF9EB8`](https://etherscan.io/token/0x373acdA15Ce392362e4b46ED97a7feEcD7EF9EB8) | [`0x41F6C97b665F9dA12C945A4f60145D3604019989`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x41F6C97b665F9dA12C945A4f60145D3604019989) |
| `PAGE`       | [`0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e`](https://etherscan.io/token/0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e) | [`0x3c7C37b72D0AfC2d89a554D67d5905A2AF4b084C`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x3c7C37b72D0AfC2d89a554D67d5905A2AF4b084C) |
| `GCR`        | [`0x6307B25A665Efc992EC1C1bC403c38F3dDd7c661`](https://etherscan.io/token/0x6307B25A665Efc992EC1C1bC403c38F3dDd7c661) | [`0x0159506b0C7748ce074EC2828db5F0B89B0F663C`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x0159506b0C7748ce074EC2828db5F0B89B0F663C) |
| `$BASED`     | [`0x68A118Ef45063051Eac49c7e647CE5Ace48a68a5`](https://etherscan.io/token/0x68A118Ef45063051Eac49c7e647CE5Ace48a68a5) | [`0xcb2b82c6d54d0914Cf8078ed7E7D807048eE7f07`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0xcb2b82c6d54d0914Cf8078ed7E7D807048eE7f07) |
| `YAPE`       | [`0x757BC268bd50DA88b2d0cf1966652B18e56CA803`](https://etherscan.io/token/0x757BC268bd50DA88b2d0cf1966652B18e56CA803) | [`0x741D5d0eFE5Bac351244980BC6fFDEAAbD471e23`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x741D5d0eFE5Bac351244980BC6fFDEAAbD471e23) |
| `FF`         | [`0x7E9D8f07A64e363e97A648904a89fb4cd5fB94CD`](https://etherscan.io/token/0x7E9D8f07A64e363e97A648904a89fb4cd5fB94CD) | [`0x2AaC75C0C67f62E819294A0A17898e39E7AbB616`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x2AaC75C0C67f62E819294A0A17898e39E7AbB616) |
| `FWB`        | [`0x7d91e637589EC3Bb54D8213a9e92Dc6E8D12da91`](https://etherscan.io/token/0x7d91e637589EC3Bb54D8213a9e92Dc6E8D12da91) | [`0xC0e35359f2144Fc8513cCa32399D223440f14E3C`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0xC0e35359f2144Fc8513cCa32399D223440f14E3C) |
| `PUP`        | [`0x81dBc1c8e40C3095071949Eda9800C2209a7279A`](https://etherscan.io/token/0x81dBc1c8e40C3095071949Eda9800C2209a7279A) | [`0xEd8002e1A1d32aBBaDd47Df74A97f808dBaf25dB`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0xEd8002e1A1d32aBBaDd47Df74A97f808dBaf25dB) |
| `KCHAN`      | [`0x844b991d6e82a95A3127D2B8ffB550aa14425Fea`](https://etherscan.io/token/0x844b991d6e82a95A3127D2B8ffB550aa14425Fea) | [`0x75a88F950786Fd4B77fa2438f70a292191e04f00`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x75a88F950786Fd4B77fa2438f70a292191e04f00) |
| `HOTZ`       | [`0x85D23038c44658fd5fdBDae7CF202213F8e7010f`](https://etherscan.io/token/0x85D23038c44658fd5fdBDae7CF202213F8e7010f) | [`0x656A9095Dfaa8aFBbab72F7e3E06cC555017D492`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x656A9095Dfaa8aFBbab72F7e3E06cC555017D492) |
| `HERO`       | [`0x862caA11AbE48c945D5361E80EaF19348C479240`](https://etherscan.io/token/0x862caA11AbE48c945D5361E80EaF19348C479240) | [`0x9A0B684F0D1e00909e811d0bA192B79e6340cd1f`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x9A0B684F0D1e00909e811d0bA192B79e6340cd1f) |
| `ALEX`       | [`0x8BA6DcC667d3FF64C1A2123cE72FF5F0199E5315`](https://etherscan.io/token/0x8BA6DcC667d3FF64C1A2123cE72FF5F0199E5315) | [`0x4EF367d62AF8DD0b91Facd39E6D6eF1802ec7D26`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x4EF367d62AF8DD0b91Facd39E6D6eF1802ec7D26) |
| `FRAK`       | [`0xA6a5DEEa66550772d4A2D77ecBE0187451A4f19E`](https://etherscan.io/token/0xA6a5DEEa66550772d4A2D77ecBE0187451A4f19E) | [`0x77A68B7A9A42E0753783b16F7312A214Ce0eCc18`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x77A68B7A9A42E0753783b16F7312A214Ce0eCc18) |
| `BANANA`     | [`0xE2311ae37502105b442bBef831E9b53c5d2e9B3b`](https://etherscan.io/token/0xE2311ae37502105b442bBef831E9b53c5d2e9B3b) | [`0xD997204Baa2949FD11e61B049aB30A7050A5dC28`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0xD997204Baa2949FD11e61B049aB30A7050A5dC28) |
| `$TNK`       | [`0xE5C5F364cfbF29924cB35FA680f8d913F1367761`](https://etherscan.io/token/0xE5C5F364cfbF29924cB35FA680f8d913F1367761) | [`0xbF1af502a12F4Db313ebe1a0Ba2df7E47fB339a7`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0xbF1af502a12F4Db313ebe1a0Ba2df7E47fB339a7) |
| `$JUMP`      | [`0xE650b007529F445EaE83bc931Abaa9bb1eFECA6f`](https://etherscan.io/token/0xE650b007529F445EaE83bc931Abaa9bb1eFECA6f) | [`0x3358c0A3348B5350395241E083af46Ca7Adcae83`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x3358c0A3348B5350395241E083af46Ca7Adcae83) |
| `STMX`       | [`0xbE9375C6a420D2eEB258962efB95551A5b722803`](https://etherscan.io/token/0xbE9375C6a420D2eEB258962efB95551A5b722803) | [`0xA8A3a0eb590F4eB1fff4aEcC87985acCe9c0C76d`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0xA8A3a0eb590F4eB1fff4aEcC87985acCe9c0C76d) |
| `WARP`       | [`0xc14338C0eaa4bf7E4473C9DD7226001C8ae3B454`](https://etherscan.io/token/0xc14338C0eaa4bf7E4473C9DD7226001C8ae3B454) | [`0x926e0056039A822d5e0fB8E613E21Bf9B6FC73C7`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x926e0056039A822d5e0fB8E613E21Bf9B6FC73C7) |
| `ROX`        | [`0xf4284A849C918eF676f54Ed938703F2EeeD3e058`](https://etherscan.io/token/0xf4284A849C918eF676f54Ed938703F2EeeD3e058) | [`0x9231d9542457Fb007069Ad174eb544e175AF10F0`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x9231d9542457Fb007069Ad174eb544e175AF10F0) |
| `VOLT`       | [`0xfFbF315f70E458e49229654DeA4cE192d26f9b25`](https://etherscan.io/token/0xfFbF315f70E458e49229654DeA4cE192d26f9b25) | [`0x581A3453BAfd3e860c489898084260c80603C4F1`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x581A3453BAfd3e860c489898084260c80603C4F1) |
| `DAI`        | [`0x6B175474E89094C44Da98b954EedeAC495271d0F`](https://etherscan.io/token/0x6B175474E89094C44Da98b954EedeAC495271d0F) | [`0x941C0Dd6055787aE9D417620E8F4F540d8B9D9E5`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x941C0Dd6055787aE9D417620E8F4F540d8B9D9E5) |
| `USDC`       | [`0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`](https://etherscan.io/token/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48) | [`0x7Cf76E740Cb23b99337b21F392F22c47Ad910c67`](https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/address/0x7Cf76E740Cb23b99337b21F392F22c47Ad910c67) |
