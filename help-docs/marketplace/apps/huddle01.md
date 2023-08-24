### About this app

Your one app to meet, work or hang out. Enjoy exciting features like wallet and social login, token-gating, live streaming, recording, NFTs as PFPs, DIDs as display names, and more on Huddle01.

### Getting Started 

1. Install the Huddle01 MiniApp from [Collab.land Marketplace](https://cc.collab.land)

2. Once you have installed Huddle01 MiniApp, go to the Discord and use the command <br/> `/create-huddle01-meet`

    - This command accepts list of `wallet_addresses` which will be used as host wallets. 
    - If you don't want to give any host wallet you can write `na`. 

3. You can also create Token Gated Meeting using Huddle01 MiniApp. For that use the command <br/> `create-huddle01-tokengated-meet`

    - This command will open a form where you have to fill up details to create token gated meet
      - `host_wallet_addresses` -> You can provide list of host wallet addresses seperated by commas. This field is optional. 
      - `chain` -> You have to enter the name of chain where you token/contract is deployed. As of now we support `ETHEREUM`, `POLYGON`, and `BSC` chain for token gating. 
      - `tokenType` -> Enter a `tokenType` using which you want to token gate. We support `ERC721`, `ERC1155`, `ERC20`, `BEP20` and `BEP721`. 
      - `tokenAddress` -> You have to enter token/contract address. 
      - `tokenId` -> If you choose `ERC1155` as a `tokenType`, you need to provide `tokenId` of the corresponding `ERC1155` token. 

## Commands available:

| Command | Additional Parameters | Description |
| --- | --- | --- |
| /create-huddle01-meet | Host Wallet Addresses (comma seperated values) | Create a standard Huddle01 meeting with specified host wallets. |
| /create-huddle01-tokengated-meet | Host Wallet Addresses, chain, tokenType, tokenAddress, and tokenId | Create token gated meetings on Huddle01. Supported token standards include `ERC20`, `ERC721`, `ERC1155`, `BEP20` and `BEP721` on `ETHEREUM`, `POLYGON` and `BSC` chains. 