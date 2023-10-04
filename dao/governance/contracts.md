---
slug: contracts
sidebar_position: 4
title: Contracts
---

## Governor

Collab.Land's governor contract is a modified variant of [Compound's governor bravo contract](https://docs.compound.finance/v2/governance/), deployed on Optimistic Ethereum for Collab.Land governance voting.

### Governor contract parameters

| Parameter | Details | Explanation |
| --- | --- | --- |
| Governance  Token | `ERC20` op:`0x8b21e9b7daf2c4325bf3d18c1beb79a347fe902a` $COLLAB | [`ERC20` token](https://optimistic.etherscan.io/address/0x8b21e9b7daf2c4325bf3d18c1beb79a347fe902a) on Optimistic Ethereum |
| Voting Type | simple token-weighted, 1 token = 1 vote | COLLAB tokens must be held in (or delegated to) wallets that hold a membership [DAO Pass](./gov-overview#dao-pass) |
| Voting Cycle | [2/7/5 days](./proposals#proposal-cycle) | Voting delay 2 days, Voting period 7 days, Execution delay 5 days |
| Quorum Requirement | 1.39M COLLAB, 10% of [circulating supply](#circulating-supply) | 0.139% of `total supply` as of 05/26/23, to be updated seasonally |
| Proposal Threshold | 695,000 COLLAB required to create proposal on governor contract | To be updated seasonally to be 50% of Quorum Requirement |
| Governor contract | op:`0xb18c10E49bC7C5f09A564f3A8DaF28Df54dc6672` | [Governor contract](https://optimistic.etherscan.io/address/0xb18c10E49bC7C5f09A564f3A8DaF28Df54dc6672) deployed on Optimism Mainnet
| Timelock controller | op:`0x43F6Df8E94F9029805C8eE6c11a06Cc801E8C586` | [Timelock controller](https://optimistic.etherscan.io/address/0x43F6Df8E94F9029805C8eE6c11a06Cc801E8C586) deployed on Optimism Mainnet

#### Circulating Supply

Circulating Supply is defined to be the amount of COLLAB held in wallets that also hold [DAO Passes](./gov-overview#dao-pass).

Circulating Supply is 0.139% of `total supply` as of May 26, 2023. This number will be updated seasonally.

:::tip

To check the **current** circulating supply Members should:
1. Fork this [DUNE analytics query](https://dune.com/queries/2676795)
2. Change `evt_block_number` to the **current** Ethereum L1 block number

:::

Collab.Land uses two factors as part of the contract to achieve the Quorum Requirement and Proposal Threshold as defined from circulating supply.
- Factor 1 `1/100`
- Factor 2 `139/1000`

These factors will be adjusted to match as the Circulating Supply changes.
