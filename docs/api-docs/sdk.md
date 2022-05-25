---
id: sdk
title: CollabLand SDK
---

CollabLand provides a TypeScript/JavaScript SDK to facilitate invocation of our
REST APIs.

## Installation

```sh
npm install @collabland/sdk
```

## Example usage

```typescript
import {CollabLandClient} from '@collabland/sdk';

async function main() {
  const accessToken = process.argv[2];
  if (accessToken == null) {
    console.error('Discord oAuth2 token is required.');
    return;
  }
  const url = process.argv[3];
  const client = new CollabLandClient(accessToken, url);
  await client.connect();
  const user = await client.account.getUserProfile();
  console.log(user);
  const communities = await client.community.find(10);
  console.log(communities);
}

if (require.main === module) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
```
