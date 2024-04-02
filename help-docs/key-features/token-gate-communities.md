---
sidebar_position: 1
id: token-gate-communities
---

# Token-Gated Communities

Collab.Land's bot functionality is built around the concept of Token-Gating. This refers to the ability to create roles on social platforms such as Discord and Telegram, that are only accessible to users who meet certain token-related criteria.

## What is Token-Gating?

At the heart of Token Gating are **Token Gating Rules (TGRs)**. These are the rules that determine which roles a member will be assigned based on the token-related criteria defined by the community admin. For example, a TGR may grant access to a "VIP" role for members who hold a certain number of tokens.

:::info

Collab.Land's [balance check](../command-center/bot-config/balance-check) feature means that members who no longer hold a community's tokens will lose their roles in that community automatically.

:::

## What types of TGRs are there?

When creating TGRs, there are two types to choose from: **Balance-based** and **Attributes-based**. Learn [how to create a TGR](/help-docs/command-center/create-a-tgr/how-to-create-a-tgr#how-to-create-a-tgr).

### Balance-based

[Balance-based TGRs](../command-center/create-a-tgr/how-to-create-a-tgr#create-a-balance-based-tgr) check the quantity of a specific token in the user's wallet. If the user holds more tokens than the lower limit and less than the upper limit (upper limit is optional), then the role is granted. This allows for the creation of roles based on the amount of a specific token that a user holds.

:::tip

This TGR type is commonly used by groups built on fungible tokens, such as `ERC20`.

:::

### Attributes-based

[Attributes-based TGRs](../command-center/create-a-tgr/how-to-create-a-tgr#create-a-metadata-based-tgr) check for the existence of individual tokens that possess one or more "traits" as part of their metadata, specified by the admin. This type of TGR is used to create roles based on ownership of specific kinds of NFTs from a collection.

For example, if an admin wants to create a role for BAYC members who own an ape NFT with specific metadata traits (blue fur), they can use an Attributes-based TGR to check for an ape with blue fur in the member's wallet.

:::info

Attributes-based TGRs are only used for tokens that contain metadata -- NFTs such as `ERC721` and `ERC1155` tokens.

:::

## Supported Blockchains & Tokens

:::note

This blockchain list is intended for community admins. It shows which Token Types can be used with which blockchains.

Community members should reference the [list of supported wallets](/help-docs/wallets/verify-your-wallet#supported-wallets) to know which wallets can be used with which blockchain.

:::

Learn [how to create a TGR](/help-docs/command-center/create-a-tgr/how-to-create-a-tgr#how-to-create-a-tgr).

| Chain Type       | Token Type                                                                          |
|------------------|-------------------------------------------------------------------------------------|
| **EVM chains**   |               ------------------                                                    |
| Mainnet          | ERC20, ERC721, ERC1155, ROLL, POAP, Staking Contracts, Gnosis Safe, Moloch, Opensea |
| Sepolia (testnet) | ERC20, ERC721, ERC1155                                |
| Goerli (testnet) | ERC20, ERC721, ERC1155, Gnosis Safe, Otterspace Badge                               |
| Gnosis           | ERC20, ERC721, ERC1155, Super Token, ROLL, POAP, Gnosis Safe, Moloch, Opensea       |
| Optimism         | ERC20, ERC721, ERC1155, Super Token, Gnosis Safe, Otterspace Badge                  |
| BASE             | ERC20, ERC721, ERC1155                                                              |
| Polygon          | ERC20, ERC721, ERC1155, Super Token, Gnosis Safe                                    |
| Mumbai (Testnet) | ERC20, ERC721, ERC1155                                                              |
| [Ronin](/help-docs/command-center/create-a-tgr/evm/ronin)            | ERC20, ERC721, ERC1155          |
| Arbitrum One     | ERC20, ERC721, ERC1155, Super Token, Gnosis Safe                                    |
| Arbitrum Nova    | ERC20, ERC721, ERC1155                                                              |
| Linea            | ERC20, ERC721, ERC1155                                                              |
| Blast            | ERC20, ERC721, ERC1155                                                              |
| Celo             | ERC20, ERC721, ERC1155                                                              |
| BSC              | BEP20, BEP721, BEP1155, Gnosis Safe, Super Token                                    |
| Moonbeam         | ERC20, ERC721, ERC1155                                                              |
| Avalanche        | ERC20, ERC721, ERC1155, Super Token, Gnosis Safe                                    |
| Palm             | ERC20, ERC721, ERC1155                                                              |
| Q Chain          | ERC20, ERC721, ERC1155                                                              |
| **Non-EVM Chains**  |               ------------------                                                 |
| [Solana](/help-docs/command-center/create-a-tgr/solana)           | Solana FT, Solana NFT              |
| NEAR             | NEAR FT, NEAR NFT                                                                   |
| Eluvio           | ERC721                                                                              |
| Flow             | FLOW FT, FLOW NFT                                                                   |
| Kusama           | RMRK                                                                                |
| Nifty            | NIFTY                                                                               |
| Polkadot         | ERC20                                                                               |
| Tezos            | Tezos FA1.2, Tezos FA2                                                              |
| Immutable X      | Immutable X                                                                         |
| [Loopring](/help-docs/command-center/create-a-tgr/loopring)         | Loopring FT, Loopring NFT        |
| [XRPL](/help-docs/command-center/create-a-tgr/xrpl)             | XRPL FT, XRPL NFT                    |
| [Bitcoin NFTs](/help-docs/command-center/create-a-tgr/bitcoin-tgr)      | Bitcoin Stamps, Bitcoin Ordinals         |
| [Gitcoin Passport](/help-docs/command-center/create-a-tgr/gtc-passport)     | ------------------       |
| [Friend.Tech](/help-docs/command-center/create-a-tgr/friend-tech-tgr)     | ------------------         |

:::tip

If your blockchain or wallet project is not supported, you may [request an integration](https://bit.ly/3HzRmnA), or contact us directly by email at [integrations@collab.land](mailto:integrations@collab.land).

:::
