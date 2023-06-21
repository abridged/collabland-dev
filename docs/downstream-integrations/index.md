---
sidebar_position: 3
title: Using Collab.Land APIs
---

# Collab.Land APIs

Collab.Land provides a list of [REST APIs](https://api.collab.land/explorer) to allow client applications to:

- Check a wallet address or account with a list of token gating rules
- Access a user's information from Collab.Land if the user grants required permissions to the client application
- Manage token granted roles for community administrators

## Collab.Land JavaScript/TypeScript SDK

Collab.Land publishes `@collabland/sdk` npm module that provides a set of APIs you can leverage to interact with Collab.Land. Learn more about the SDK [here](../downstream-integrations/sdk/)

## Collab.Land Miniapps

Collab.Land Miniapps are a set of web3 applications that can be installed on a community to provide additional features and functionalities. Learn How to build Miniapps [here](/docs/upstream-integrations/collab-actions/getting-started-with-collab-actions)

## Request API access

- Register client application with Collab.Land to get an API key
- Fill out this Google Form to request access to Collab.Land APIs:
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfUKGy69dMDz-0MPVfNoPrtvV9ouZNiHqUun5-Z-0XyTOReMg/viewform?embedded=true" width="820" height="2219" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

<!-- Check out [API docs](../%5BShould-This-Move-To-Down-Stream-API-Folder%5D-api-docs). -->

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
