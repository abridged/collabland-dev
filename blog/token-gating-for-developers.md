---
slug: token-gating-for-developers
title: Token Gating for Developers
authors: kenny
tags: [collabland, developers, token-gating, api]
date: 2023-08-16
---

Token gating (AKA Token Granted Access) is a concept that has gained significant traction in recent years, particularly within decentralized autonomous organizations (DAOs) and non-fungible token (NFT) communities. At its core, token gating involves using on-chain assets to grant or restrict access to a community or a resource.

The concept of token gating was first popularized by the [Collab.Land](https://collab.land) team, who made it possible for DAOs and other tokenized communities to verify membership through the possession of on-chain assets. A good example of this is how communities like [Axie Infinity](https://axieinfinity.com/) use Collab.Land to authenticate new users who are joining their community. New members are required to go through a one-time wallet connection flow, after which they will be assigned roles based on their asset holdings. These roles will give them a tailored experience in the community, like access to exclusive messaging permissions, private channels etc.

The success of this approach grew the Collab.Land ecosystem to over 50k communities with a reach of over 100MM. That is huge, but we’re not stopping there! We are moving to the next stage - exposing our infrastructure to developers. What if developers had the ability to gate or grant access to their websites or specific parts of their projects based on the possession of some specified on-chain assets? Well, they can, with our website token gating APIs.

## Introducing Collab.Land’s Token Gating APIs

In January, we [announced](https://medium.com/collab-land/announcing-collab-land-token-gating-for-websites-v-1-82f41c7a6ea9) a new `/access-control` endpoint for token gating that allows developers to control access to their applications based on the possession of specific on-chain tokens.
The endpoint accepts two parameters:

- `account` - The wallet address of the user.
- `rules` - The token gating rules that specify the assets that qualify a user.

For each rule, Collab.Land will return a response indicating whether or not the rule has been granted or denied for the user. Here’s a sample request to the Collab.Land `/access-control` endpoint:

```js
POST https://api.collab.land/access-control/check-roles
BODY:
{
  "account": "0x01c20350ad8..............7bca295",
  "rules": [
    {
      "type": "ERC721",
      "chainId": 1,
      "minToken": "1",
      "contractAddress": "0xbc4ca0edaxxx8a936f13d",
      "roleId": "001"
    }
  ]
}
```

_Where_: account represents the user's wallet address and rules is an array of objects representing each rule to be checked against the user's wallet.
This call would return a sample response like this:

```json
{
  "roles": [
    {
      "id": "001",
      "granted": true
    }
  ]
}
```

With this, developers can build simple and if needed, complex token gating configurations that allow them to offer custom experiences to qualified users.
To learn more about the Collab.Land token gating APIs, please read [the official documentation](https://dev.collab.land/docs/downstream-integrations/api/token-gating) or dive into a [practical tutorial](https://dev.collab.land/docs/tutorials/token-gating-tutorial) to build a gated website in minutes. You can also get your hands dirty with the [Github repo](https://github.com/abridged/collabland-tutorials/tree/master#token-gating-website).

## How to Get Started

First, head over to the [Collab.Land DevPortal](https://dev-portal.collab.land) and create a client application. The client app will provide you with the necessary credentials (API Key, secret and client ID) needed to interact with the Collab.Land APIs. With the client app created, you can leverage our token gating tutorial or [this video](https://youtu.be/EUVdGQuD_kw) to gain a better understanding of our implementation detail.
For instance, if you want to build a token gated website with JavaScript, here’s a sample code snippet to call the Collab.Land `/check-roles` endpoint using fetch:

```js
const res = await fetch(`https://api.collab.land/access-control/check-roles`, {
  method: 'POST',
  headers: new Headers({
    Accept: 'application/json',
    'X-API-KEY': process.env.COLLABLAND_KEY,
    'Content-Type': 'application/json',
  }),
  body: JSON.stringify({
    account: myWalletAddr, // pass in the user's wallet address
    rules: [{}, {}], // pass in the rules to be checked
  }),
});
```

With our token gating APIs, we are extending the successful access control patterns in our communities and DAOs to developers. With one endpoint, developers can gate and grant access to websites, web applications, games, mobile applications and so on.

I look forward to seeing what you build, and when you do, I’d be happy to amplify it for you. I've also linked a video tutorial on the [Getting Started section](#how-to-get-started) to show you how to implement this API in a Next.js project specifically.
