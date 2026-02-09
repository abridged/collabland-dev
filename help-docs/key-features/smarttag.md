---
title: SmartTag
sidebar_position: 6
id: smarttag
---

# SmartTag

The safest way to tip, reward, or pay in your community. Send, receive, withdraw tokens, and more - fully onchain, right inside your community. Just tag a username. Smart addresses + Discord login = simple, secure, seamless.

SmartTag is available as a **$9.99/month feature add-on** for all plans, or **included with the Exclusive Plan** ($149/month) and higher.
See all Exclusive plan features [here](https://collab.land/pricing).


### Innovations:

* **Smart Addresses for Everyone**
  No external wallets or seed phrases - each Discord member automatically gets a smart address.

* **Transparent Transactions**
  Fully onchain, efficient, and secure.

* **Integrated Fees**
  Use the tipping token itself to cover gas. No second token needed.

* **Frictionless Interactions**
  Tag a username or User ID - no wallet address required.


## Benefits of SmartTag

* **Security & Decentralization**
  Fully onchain with no central custodian holding funds, reducing "honey pot" risk. Every transaction is transparent and auditable.

* **Instant Wallet Access**
  Members can receive tokens immediately with no setup. SmartTag automatically creates a noncustodial smart address for recipients.

* **No Custody Risk**
  Your tokens stay yours until they're sent to your recipient's wallet. No pooled funds for hackers to target.

* **Onchain Activity Boost**
  All activity is visible on public block explorers, increasing token visibility and transaction volume.

* **Multi-Community Support**
  Once a token is added, it's usable across all Collab.Land communities with SmartTag installed.

* **Real-World Use Cases**
  Tips, rewards, payments, onboarding new members, POAP-style participation, point systems, and memecoins.

* **Contests and Competitions**
  Distribute rewards for games, giveaways, tournaments, and more.

* **Admin Rewards**
  Admins with the `TagMaster` role can set a wallet to receive **2% of transaction fees**. This role is:

  * Assigned automatically to whoever installs the SmartTag miniapp
  * Assignable to others manually in Discord

:::caution
The designated fee wallet must be on the same chain as the community's configured chain.
:::

:::info
**Fee Structure:**
- 2% to your community
- 2% to Collab.Land (keeps the ecosystem sustainable)
:::


## What's a Smart Address?

A Smart Address is a type of Web3 programmable wallet driven by smart contracts, eliminating the need for private keys or seed phrases. These accounts use code for security and recovery of wallet information.

:::info
Your Smart Address wallet will hold the tokens received from in-chat transactions and deposits.
:::

## How to Get Started

1. **Choose your subscription:**
   - Add SmartTag as a **$9.99/month feature add-on** to any plan
   - Or upgrade to the **Exclusive Plan** ($149/month) where SmartTag is included
2. Add the SmartTag miniapp to your Discord server
3. That's it! Members can start using SmartTag commands immediately

:::caution
Installing SmartTag creates a `TagMaster` role and assigns it to you.
Ensure the **Collab.Land** role is positioned **above** the roles of anyone receiving the SmartTag role, otherwise it will fail.
:::

## Supported Chains and Tokens

SmartTag currently supports:

**Chains:** Arbitrum, Base, Linea, Optimism

**Stablecoins:** USDC, USDT (on all supported chains)

**Community Tokens:** $COLLAB (on Optimism and Arbitrum)

More chains and tokens coming soon!

:::info
Want to add your chain or community token?
A one-time fee applies to adding new chains and listing custom tokens. Availability is subject to technical review; timelines vary by chain.
[Submit your request here](https://forms.gle/GFVEE3BqRM8Uu7n27)
:::

:::info
Want NFT tipping?
Contact support@collab.land to inquire about NFT tipping capabilities.
:::

:::danger
Always verify that you are sending tokens the right person! If a transaction goes to the wrong place, it CANNOT be reverted or canceled.
:::

## SmartTag Commands

| Command             | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `/tag balance`      | View token balances in your Smart Address             |
| `/tag balance-nft`  | View NFTs in your Smart Address                       |
| `/tag deposit`      | Get your Smart Address address to deposit tokens      |
| `/tag tokens`       | See supported ERC20 tokens in your community          |
| `/tag send`         | Send tokens to another user (1 recipient only)        |
// | `/tag send-nft`     | Send an NFT to another user (contact support@collab.land to enable) | 
| `/tag withdraw`     | Withdraw tokens to an external wallet                 |
// | `/tag withdraw-nft` | Withdraw NFTs to an external wallet                   |
| `/tag raindrops`    | Create a timed token drop claimable by multiple users |

:::caution
Only deposit supported tokens on the server's configured chain. Use `/tag tokens` to check the current configured chain. Make sure the external wallet can receive tokens/NFTs on the community’s chain.
:::


## 🌧️ Mass Token Drops: The `/tag raindrops` Command

Raindrops let you distribute tokens to multiple members at once.
Create a timed reward pool with a cap on participants.

### Here's how it works:

* You define the:

  * Total amount of tokens
  * Claim duration
  * Max number of participants
* Each person gets an equal share, even if fewer people claim.
* Unclaimed tokens are returned to you.


### How to Start a Raindrop on Discord

1. **Check your balance**
   Use `/tag balance` or `/tag deposit` to ensure you have enough tokens.

2. **Create the drop**

```
/tag raindrops [amount] [token] [duration] [max participants]
```

**Example:**

```
/tag raindrops 100 COLLAB 10m 33
```

* Sends 100 \$COLLAB to up to 33 members
* Open for 10 minutes
* Each gets \~3.03 tokens if all slots are filled
* Leftovers return to your Smart Address