---
slug: miniapp-user-authorization
title: User Authorization for Miniapp Developers
image: /static/img/sigverify.png
authors: kenny
tags: [collabland, developers, security, verification, miniapp]
date: 2023-09-01
---

<script>
  const title = document.querySelector('meta[property="og:title"]');
  const description = document.querySelector('meta[property="og:description"]');
  const image = document.querySelector('meta[property="og:image"]');

  title.setAttribute('content', 'User Authorization for Miniapp Developers');
  description.setAttribute('content', 'This is the description that will appear on the SEO card for indexing purposes');
  image.setAttribute('content', '/static/img/sigverify.png');
</script>

Token gating (AKA Token Granted Access) is a concept that has gained significant traction in recent years, particularly within decentralized autonomous organizations (DAOs) and non-fungible token (NFT) communities. At its core, token gating involves using on-chain assets to grant or restrict access to a community or a resource.

The concept of token gating was first popularized by the [Collab.Land](https://collab.land) team, who made it possible for DAOs and other tokenized communities to verify membership through the possession of on-chain assets. A good example of this is how communities like [Axie Infinity](https://axieinfinity.com/) use Collab.Land to authenticate new users who are joining their community. New members are required to go through a one-time wallet connection flow, after which they will be assigned roles based on their asset holdings. These roles will give them a tailored experience in the community, like access to exclusive messaging permissions, private channels etc.

The success of this approach grew the Collab.Land ecosystem to over 50k communities with a reach of over 100MM. That is huge, but we’re not stopping there! We are moving to the next stage - exposing our infrastructure to developers. What if developers had the ability to gate or grant access to their websites or specific parts of their projects based on the possession of some specified on-chain assets? Well, they can, with our website token gating APIs.