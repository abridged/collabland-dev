---
sidebar_position: 10
title: Huddle01
---

### About this app

Your one app to meet, work or hang out. Enjoy exciting features like wallet and social login, token-gating, live streaming, recording, NFTs as PFPs, DIDs as display names, and more on Huddle01.

### Getting Started

1. Install the Huddle01 MiniApp from [Collab.land Marketplace](https://cc.collab.land).

2. Once you have installed Huddle01 MiniApp, go to the Discord and use the command: <br/>
    ```
    /create-huddle01-meet
    ```
    - This command accepts list of `wallet_addresses` which will be used as host wallets.

    - Write `na` if there is no host wallet.

3. You can also create a Token Gated Meeting using Huddle01 MiniApp. For that use the command: <br/>
    ```
    /create-huddle01-tokengated-meet
    ```

    - This command will open a form where you have to fill up details to create token gated meet.
      - [optional] `host_wallet_addresses` -> You can provide list of host wallet addresses seperated by commas. This field is optional.

      - `chain` -> Enter the name of chain where you token/contract is deployed. As of now we support `ETHEREUM`, `POLYGON`, and `BSC`.
      
      - `tokenType` -> Enter a `tokenType` to use to token gate. We support `ERC721`, `ERC1155`, `ERC20`, `BEP20` and `BEP721`.
      
      - `tokenAddress` -> Enter token/contract address.
      
      - `tokenId` -> Required for `ERC1155` tokens. Provide `tokenId` of the corresponding `ERC1155` token.

## Commands available:

| Command | Additional Parameters | Description |
| --- | --- | --- |
| `/create-huddle01-meet` | Host Wallet Addresses (comma seperated values) | Create a standard Huddle01 meeting with specified host wallets. |
| `/create-huddle01-tokengated-meet` | Host Wallet Addresses (csv), chain, tokenType, tokenAddress, and tokenId | Create token gated meetings on Huddle01. Supported token standards include `ERC20`, `ERC721`, `ERC1155`, `BEP20` and `BEP721`. Supported chains are `ETHEREUM`, `POLYGON` and `BSC`.

## Support

- Twitter: [@huddle01com](https://twitter.com/huddle01com)
- Email: [support@huddle01.com](mailto:support@huddle01.com)
- Website: [huddle01.com](https://huddle01.com)
