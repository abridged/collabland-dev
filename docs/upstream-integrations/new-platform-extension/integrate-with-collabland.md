---
sidebar_position: 4
---

# Integrate with Collab.Land

- [Personas](#personas)
- [Flow Overview](#flow-overview)
  - [Wallet Connection](#wallet-connection)
  - [Admin Configuration](#admin-configuration)

---

## Personas

When we talking about [Collab.Land](http://Collab.Land) platform and token gated communities/groups, here are a few personas:

**_Community owners/mods_** 👩‍🏫**_:_** I would like to manage communities with certain token gated rules. For example, members need to own at least one [Collab.Land](http://Collab.Land) Membership NFT to join “Collab.Land Friends” server. And members can gain certain roles based on other holdings.

**_Community members_** 🙋‍♀️**_:_** I would like to join communities that share the same interests. I can join or gain roles in servers based my holdings. Certain roles would give me access to some fun channels.

**_Developers for the platform integration_** 🧑‍💻: I would like to build a [Collab.Land](http://Collab.Land) extension that can apply token gating to communities/groups on my platform. We provide a way for our users to link their wallet with their account, and mods can modify token gated rules for their communities/groups. Collab.Land server would apply actions based on balance check over different chains behind the scene.

If you want to integrate with [Collab.Land](http://Collab.Land) to build such bots, the following may give you some ideas of where to start and what you would need.

## Flow Overview

Let's take a look at a basic use case:

🏠 A platform has communities. A community has admins and members. Admins are able to approve/remove members to/from the community and set up community roles (`Level-1`, `Level-2` for example). For example, role `Level-1` members have access to `level-1 channel` . Roles are signed by admins.

The flow below demonstrates how to setup token gated community with a [Collab.Land](http://Collab.Land) bot:

1. Admins can set up rules based on ERC-20 ownership, ERC-721 ownership etc.. via the [Collab.Land](http://Collab.Land) bot or on Collab.Land Command Center. For example, to get role `Level-1` , a member would need to have 10 ERC20 tokens in their wallet.
2. The bot generate a link for the user. When the user clicks the link, [Collab.Land](http://Collab.Land) api server will authorize their identity (id, user name, the community they are connecting, etc. public information) through some authentication methods (Oauth2 for example).
3. Once the user is verified, they will select a wallet(`0x123abc...` ) to connect with their account.
4. Upon connection, [Collab.Land](http://Collab.Land) api server would check balance for the user to see if they are qualified for any saved rules in that community.
5. Besides instant balance check after the wallet connection, [Collab.Land](http://Collab.Land) also provides 2 different levels (blockchain event watcher and iterate through the community) of background checking to see if members are still eligible for their roles or membership.

![flow overview](./images/flow-overview.png)

As shown in this diagram, the flow can be described in 2 parts:

- Wallet connection
- Configuration

### Wallet connection

The first step is to connect a users' account with their crypto wallet. Your bot would provide users a link (This can be triggered by a “Connect” button for example). This link would redirect to [Collab.Land](http://Collab.Land) wallet connect site with an encrypted token (AE token) which has necessary public user info for [Collab.Land](http://Collab.Land) to process wallet connection.

You will be calling [Collab.Land](http://Collab.Land)'s API to generate the AE token. This would help Collab.Land to verify if the incoming user is valid.

You will need a client id/secret pair to call [Collab.Land](http://Collab.Land) API. (Please reach out to us)

![wallet connection](./images/wallet-connection-flow.png)

### Admin Configuration

If you used [Collab.Land](http://Collab.Land) bot on Discord or Telegram, you might be familiar how you can configure rules for groups/communities with a bot via commands. To improve our user experience and provide better decentralization, we are moving things to the Collab.Land Command Center.

For admins, they will be able to configure TPC rules for **existing roles** with options for chain type, token, amount, etc. Besides, we are also adding features such as static reports that helps you understand your community and helps you fight against scammers.

To login to the Command Center, your platform would either provide Oauth login, or generate AE tokens (calling our API) for admins for authentication purpose. To able to set up TPC rules for communities, there are several things we need from your platform:

- [Collab.Land](http://Collab.Land) is able to check if the user is an admin.
- [Collab.Land](http://Collab.Land) is able to read a list of existing roles and necessary info from communities
- Your platform would provide API(s) for [Collab.Land](http://Collab.Land) to update roles for users based on community rules.

![User.png](./images/config-flow.png)

Once you explored and confirmed your platform is capable of doing these two flows, let's get started!
