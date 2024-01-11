---
sidebar_position: 16
title: Proof of Humanity
---

Keep your Discord server bot free using Rarimo’s Proof-of-Humanity plug-in

### About this app

Rarimo’s Proof-of-Humanity miniapp ensures that only verified humans are present either within a server or channel. It keeps the community server spam and scam-free, which saves mods’ time, improves the quality of conversation, and helps protect airdrops.

Members can select between five identity providers to verify their humanity and will receive a verified human credential in their [RariMe extension for MetaMask](https://rarime.com/) that they can use across Web3 for perks and exclusive access. This credential will be used to generate a zero-knowledge proof that permits minting a Proof of Humanity SBT on Polygon. This SBT is then used for token gating.

See [Proof of Humanity](https://docs.rarimo.com/use-cases/proof-of-humanity) to learn more.

### Getting started

To get started, the Admin should follow these steps:

1. Install the Proof of Humanity Miniapp from the [Collab.Land Marketplace](https://cc.collab.land/).
1. Create a Discord role for verified humans.
1. Create the following token-gating rule in the Command Center:

    | Field  | Value |
    |---|---|
    |`Chain`|`Polygon`|
    |`Token Type`|`ERC721`|
    |`Addresses`|`0xaD7De01cb7eaAFf3a419A0a0a3133a964cD90373`|

1. Create a role-exclusive channel for verified humans.
1. Ask members to verify their humanity using the `/verify` command, ideally in the `#collabland-join` channel.

<!-- TODO: replace with the prod link once the miniapp is live -->
For detailed instructions, see [Protecting your Discord server from bots with Proof of Humanity and Collab.Land
](https://staging.docs.rarimo.com/how-to-guides/proof-of-humanity-collabland-discord) guide.

### Verifying your humanity as a member

1. Call the `/verify` command and follow the instructions.
1. Complete the verification process at [Verify Your Humanity](https://robotornot.rarimo.com).
1. Claim the role by verifying your assets in the `#collabland-join` channel.

## Commands

| Command               | Description                                                                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/rarimo verify`  | Redirects members to Proof of Humanity DApp for verification.                                                                                                                          |

## Support

- Discord: [Rarimo](https://discord.gg/cfrH3Fe7ke)
- Telegram: [@rarimoprotocol](https://t.me/rarimoprotocol)
- Email: [support@rarimo.com](mailto:support@rarimo.com)
- Website: [rarimo.com](https://rarimo.com/)
