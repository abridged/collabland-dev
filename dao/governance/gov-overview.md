---
slug: gov-overview
sidebar_position: 1
title: Governance
keywords: [Collab.Land DAO]
pagination_label: Governance
pagination_prev: null
---

## Collab.Land Governance

[COLLAB](../token/token_overview) is the governance token of the Collab.Land Co-op. Every COLLAB token represents a vote in Co-op governance.

The primary duty of COLLAB holder governance is to ensure the growth and stewardship of the Co-op by managing parameters of Collab.Land. This includes:

- [Miniapps](../../help-docs/miniapps/) parameters like submission fees, bug bounties, and more
- Distributions from the Co-op Treasury
- Making changes to the Collab.Land Co-op Charter
- Voting on requests for budgets

Changes to parameters will increasingly undergo Collab.Land Co-op governance process as part of progressive decentralization and are voted on by COLLAB token holders.

### Collab.Land Charter

The [Collab.Land Co-op Charter](https://drive.google.com/file/d/1sjpVGYMMoV-dCBjBc1a9oZ9afjOVqvLE/preview?format=pdf) is the membership agreement for participation in Collab.Land governance. It can be changed through governance proposals.

Individuals' membership may be revoked for violations of the Charter.

#### DAO Pass

The Collab.Land Co-op requires holding a [DAO Pass NFT](https://opensea.io/collection/collab-land-dao-pass) for that wallet to participate in governance. It is also a consideration for defining `circulating supply`, `Quorum requirement`, and `proposal threshold` parameters of the [governor smart contracts](./contracts).

The DAO Pass is a [soul-bound NFT](https://vitalik.ca/general/2022/01/26/soulbound.html) that is a on-chain marker of membership in the Collab.Land Co-op. Membership is defined in the Collab.Land Charter and membership can be revoked for violations of the Co-op Charter.

The DAO Pass smart contract address is [`0xfc130bEA3Caba3e97db9D18c4AC5e2478c4eb996`](https://optimistic.etherscan.io/token/0xfc130bea3caba3e97db9d18c4ac5e2478c4eb996) on Optimism.

:::caution

Currently, DAO Passes can only be minted to [EOAs](https://ethereum.org/en/developers/docs/accounts/#types-of-account), wallets that are _**not**_ smart contracts.

For example,

❌ ~~SAFE~~, ~~friend.tech~~, ~~patch wallet~~

✅ MetaMask, Coinbase Wallet, Ledger, Zengo, Bitski...

Origami is planning to add this functionality later.

:::

#### DAO Members

Only DAO Members (wallets that hold a DAO Pass) are eligible to particpate in governance. Members:

- Hold 10 or more [COLLAB](../token/token_overview) in a wallet
- Have minted a [DAO Pass](#dao-pass) Membership NFT to that same wallet

### Governance Toolkit

The major tools for Collab.Land governance are:

- [Governance Forum](https://gov.collab.land/): The main space for discussion and ideation about changes to Collab.Land and governance proposals.
- [Origami Governance Dashboard](https://app.joinorigami.com/join/258692110553841664): Our platform for on-chain governance. Delegate or vote with [COLLAB tokens](../token/token_overview) held in your [DAO Pass wallet](#dao-pass) or delegated to you.
- [Discord](https://discord.gg/collabland): For informal governance discussion, feedback, and more.

### Governance contracts

Collab.Land governance uses a fork of [Compound's Governor Bravo](https://docs.compound.finance/v2/governance/) smart contracts.

Collab.Land's [deployed governance contracts](./contracts) are on Optimism.

### Treasury

The treasury multisig is a SAFE on Optimism at [`0x3A0xA3E3CE39BD5495af1B026920BAe27C803686c23B`](https://app.safe.global/home?safe=oeth%3A0xA3E3CE39BD5495af1B026920BAe27C803686c23B).
