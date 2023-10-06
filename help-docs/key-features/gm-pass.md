---
sidebar_position: 4
id: gm-pass
title: gmPASS
---

# gmPASS

:::info

**tl;dr** The gmPASS is a privacy-preserving(1), non-custodial(2) web3 identity(3) for blockchain execution(4) from social platforms(5). Let's break down what that means.

:::

### Privacy-preserving

A member's gmPASS functions as the canonical identity for that member within the Collab.Land ecosystem of products. Members can interact and use the web3 functions of Collab.Land miniapps and transactions

### Non-Custodial

gmPASS leverages Programmable Key Pairs, `PKP`s, from LIT Protocol to act as the default signer on an `ERC4337` smart account. Members no longer have to go through the arduous onboarding of self-custodying their private keys or trust an entity to guard the keys for them!

The seed phrase is split up (sharded) across the nodes of the LIT Protocol signer network so no single entity controls the private key.

The LIT Protocol network recombines the shards of the private key of the gmPASS to sign and authorize transactions of the smart account(s) controlled by a member's gmPASS.

:::info

The splitting and recombining of the private keys to sign transactions is called Multi-Party Computation `MPC`.

:::

gmPASS is a noncustodial wallet solution because private key shards are shared over the network so one entity is never controls (custodies) the account for members. Members who wish to later choose to take self-custody of their keys can export the full private key of their gmPASS and import it into self-custodial wallets such as Rainbow, Metamask, and others.

### web3 Identity

A member's gmPASS is their canonical identity within Collab.Land that connects web2 onboarding with web3 execution. Members can send tips to each other, accumulate reputation, send vibes, and trade crypto all using their gmPASS.

The gmPASS is blockchain agnostic, meaning it can be used to sign transactions on any blockchain that uses ECDSA for digital signatures. Members will eventually have the same functionality for all of [Collab.Land's supported blockchains](/help-docs/key-features/token-gate-communities#supported-blockchains--tokens)!

### Blockchain Execution



### Social Platforms


As a PKP, gmPASS can provide users of web3 with seamless ”seed-phraseless" onboarding experiences and facilitate transaction execution on blockchains.

Notably, as a PKP, gmPASS has the following features:
1. It is blockchain agnostic, meaning it can be used to sign transactions on any blockchains using ECDSA for digital signatures.
2. It is programmable and contains application logic that it should follow, allowing for functionalities like defining signing automations.
3. It is fault-tolerant, meaning it is generated collectively by Collab.Land’s Lit nodes through a process called Distributed Key Generation (DKG). This allows Collab.Land to generate a new key-pair where the private key never exists in its entirety.
