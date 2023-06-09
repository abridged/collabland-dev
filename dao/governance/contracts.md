---
slug: contracts
sidebar_position: 3
title: Contracts
---

## Governor

Collab.Land's governor contract is a modified variant of [Compound's governor bravo contract](https://docs.compound.finance/v2/governance/), deployed on Optimistic Ethereum for Collab.Land governance voting.

### Governor contract parameters

| Parameter | Details | Explanation |
| --- | --- | --- |
| Governance  Token | `ERC20` [$COLLAB](https://optimistic.etherscan.io/address/0x8b21e9b7daf2c4325bf3d18c1beb79a347fe902a) | `ERC20` token on Optimistic Ethereum |
| Voting Type | simple token-weighted, 1 token = 1 vote | COLLAB tokens must be held in (or delegated to) wallets that hold a membership [DAO Pass](./gov-overview#dao-pass) |
| Voting Cycle | [2/7/5 days](./proposals#proposal-cycle) | Voting delay 2 days, Voting period 7 days, Execution delay 5 days |
| Quorum Requirement | 1.39M COLLAB, 10% of [circulating supply](https://dune.com/queries/2412517), defined as COLLAB held in wallets also holding DAO Pass | 0.139% of `total supply` as of 05/26/23, to be updated seasonally |
| Proposal Threshold | 695,000 COLLAB required to create proposal on governor contract | To be updated seasonally to be 50% of Quorum Requirement |
