---
sidebar_position: 1
title: Background Balance Checks
sidebar_label: Balance Checks
---

Collab.Land's background balance check, enabled by default, ensures users holding specific roles in a community meet the token requirements. If a member no longer holds the required tokens, their role is automatically revoked.

Balance check frequency varies by plan:

- Starter: every 7 days
- Basic, Premium, Exclusive, Enterprise: every 24 hours.

:::info 
 Balance checks do not assign new roles, they only remove them. If a user becomes eligible for a new role (e.g. by acquiring a qualifying token or meeting updated requirements), they must manually verify again in the community to receive the role.
:::

## Real-Time Role Syncing with Event Listener
In addition to scheduled balance checks, Collab.Land supports real-time role updates using blockchain event listeners. This allows roles to be updated as soon as tokens move into or out of a member’s wallet—without requiring manual verification or waiting for the next balance check cycle.

- Event listener support is available based on plan tier:
- Premium and above: Ethereum Mainnet event listener
- Exclusive and above: Ethereum and Solana event listeners

For more details, visit: [https://pricing.collab.land](https://pricing.collab.land/)

:::caution

If the balance check setting is disabled, then the bot will not be able to revoke roles when a member no longer holds the required tokens.

In that case, the bot will only revoke a role when the member verifies their wallet again in that community.

:::