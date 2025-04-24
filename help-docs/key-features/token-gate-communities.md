---
title: Token Gating and TGRs
sidebar_position: 1
id: token-gate-communities
---

# Token Gated Communities

Collab.Land's bot functionality is built around the concept of Token Gating. This refers to the ability to create roles on social platforms such as Discord and Telegram, that are only accessible to users who meet certain token-related criteria.

## What is Token Gating?

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
