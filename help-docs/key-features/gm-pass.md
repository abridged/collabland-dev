---
sidebar_position: 4
id: gm-pass
title: gmPASS
---

## gmPASS

:::info

**tl;dr** gmPASS is a smart account for members to use and interact with Collab.Land-supported blockchains and dapps using their social accounts on Discord and Telegram.

:::

The gmPASS is a [privacy-preserving (1)](#privacy-preserving), [non-custodial (2)](#non-custodial) [web3 identity (3)](#web3-identity) for [blockchain execution (4)](#blockchain-execution) from [social platforms (5)](#social-platforms). Let's break down what that means.

### Privacy-Preserving

A member's gmPASS is the canonical identity for that member within the Collab.Land ecosystem of products. It controls new blockchain smart accounts without revealing members' previously connected wallets.

Members can interact with Collab.Land miniapps and services that do blockchain transactions without revealing their private wallets.

### Non-Custodial

A member's gmPASS acts as the default signer on `ERC4337` smart accounts across multiple blockchains. <!--gmPASS leverages Programmable Key Pairs, `PKP`s, [from LIT Protocol](https://developer.litprotocol.com/v2/concepts/pkpsAsWallet)-->. Members no longer have to go through the difficult onboarding of self-custodying their private keys or trust an entity to guard the keys for them!

The seed phrase is split up (sharded) across the nodes of the [LIT Protocol](https://litprotocol.com/) signer network so no single entity controls the private key.

The LIT Protocol network uses the shards to sign and authorize transactions for the smart account(s) controlled by a member's gmPASS.

<!--:::note

The sharding of the private keys to sign transactions is called [Multi-Party Computation](https://developer.litprotocol.com/v2/resources/howItWorks#mpc-wallets) `MPC`.

:::-->

Collab.Land's gmPASS is a noncustodial wallet solution because private key shards are spread out over the network so one entity never controls (custodies) the complete key and account for members.

In a later update, members who wish to later take self-custody of their keys will be able to export the private key of their gmPASS and import it into self-custodial wallets such as Rainbow, Metamask, and others.

### web3 Identity

A member's gmPASS is their canonical identity within Collab.Land; it connects web2 onboarding with web3 execution. Members can send tips to each other, accumulate reputation, send vibes, and trade crypto all using their gmPASS.

The gmPASS is blockchain-agnostic, meaning it can be used to sign transactions on any blockchain that uses [ECDSA](https://ethereum.org/en/glossary/#ecdsa) for digital signatures. With the gmPASS, Collab.Land functions as a service aggregator across [Collab.Land's supported blockchains](/help-docs/key-features/token-gate-communities#supported-blockchains--tokens)!

### Blockchain Execution

After a member authorizes a transaction, Collab.Land facilitates execution on a blockchain. Collab.Land serves as a bridge, aggregator, and interface for members to interact with blockchain technology through familiar social platform interfaces.

Collab.Land uses [Biconomy](https://www.biconomy.io/) to power its bundler/paymaster for `ERC4337` smart accounts.

### Social Platforms

Members interact with the gmPASS using their social accounts. They use it in a familiar environment of Discord and Telegram, abstracting away the difficult UX of blockchain technology. We will onboard the next 1B users!

Collab.Land's gmPASS is controlled by members' social accounts, Discord and Telegram. Members will have access to social recovery and security settings via the [Member Portal](/help-docs/key-features/member-portal).

## How it works

:::note

Technical details on the `gmPASS` and how to leverage it will be added to the [developer documentation](/docs/downstream-integrations/index).

:::

The flowcharts linked below are meant to give a high-level overview of how gmPASS works.

gmPASS [member onboarding flow](https://whimsical.com/gmpass-onboarding-8knTfdF4FVCxBegUtpSJWn@2Ux7TurymN5ii8TLLKwC)

<details> <summary> onboarding flow </summary>
password `gmgmgm`
</details>

---

gmPASS [member transaction flow](https://whimsical.com/gmpass-txn-flow-TSuDgQTboPMq3SKVnJWpQy@2Ux7TurymMn4SpzrssMS)

<details> <summary> transaction flow </summary>
password `gmgmgm`
</details>

### Security

When creating their gmPASS, uses register a [passkey](https://blog.1password.com/what-are-passkeys/) with Collab.Land. Their on-device authorization is the key to unlock their gmPASS and the functions of its blockchain smart account(s).

<!-- Collab.Land uses [passkeys](https://blog.1password.com/what-are-passkeys/) to safely pass authorization between the Member and various services. 

:::note

Developers can read technical details about passkeys from [Google's documentation](https://developers.google.com/identity/passkeys).

:::
-->

<!-- As a PKP, gmPASS can provide users of web3 with seamless ”seed-phraseless" onboarding experiences and facilitate transaction execution on blockchains.

Notably, as a PKP, gmPASS has the following features:
1. It is blockchain agnostic, meaning it can be used to sign transactions on any blockchains using ECDSA for digital signatures.
2. It is programmable and contains application logic that it should follow, allowing for functionalities like defining signing automations.
3. It is fault-tolerant, meaning it is generated collectively by Collab.Land’s Lit nodes through a process called Distributed Key Generation (DKG). This allows Collab.Land to generate a new key-pair where the private key never exists in its entirety. -->
