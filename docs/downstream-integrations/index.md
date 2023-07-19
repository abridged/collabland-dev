---
sidebar_position: 3
title: Using Collab.Land APIs
---

# Collab.Land APIs

Collab.Land provides a list of [REST APIs](https://api.collab.land/explorer) to allow client applications to:

- Check a wallet address or account with a list of token gating rules
- Access a user's information from Collab.Land if the user grants required permissions to the client application
- Manage token granted roles for community administrators
- Check out [API docs](/docs/downstream-integrations/api/).

## Collab.Land JavaScript/TypeScript SDK

Collab.Land publishes `@collabland/sdk` npm module that provides a set of APIs you can leverage to interact with Collab.Land. Learn more about the SDK [here](../downstream-integrations/sdk/)

## Collab.Land Miniapps

Collab.Land Miniapps are a set of web3 applications that can be installed on a community to provide additional features and functionalities. Learn How to build Miniapps [here](/docs/upstream-integrations/collab-actions/getting-started-with-collab-actions)

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
