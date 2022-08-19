---
sidebar_position: 3
title: Using Collab.Land APIs
---

# Collab.Land APIs

Collab.Land provides a list of REST APIs to allow client applications to:

- Check a wallet address or account with a list of token gating rules
- Access a user's information from Collab.Land if the user grants required permissions to the client application
- Manage token granted roles for community administrators

# Collab.Land JavaScript/TypeScript SDK

Collab.Land publishes `@collabland/sdk` to npm.

## Request API access

- Register client application with Collab.Land to get an API key
- Fill out this Google Form to request access to Collab.Land APIs:
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfUKGy69dMDz-0MPVfNoPrtvV9ouZNiHqUun5-Z-0XyTOReMg/viewform?embedded=true" width="820" height="2219" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

# Try APIs

- https://api.collab.land/explorer

## Invoke APIs

<!-- Check out [API docs](../%5BShould-This-Move-To-Down-Stream-API-Folder%5D-api-docs). -->

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
