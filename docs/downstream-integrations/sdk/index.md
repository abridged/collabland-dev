# Collab.Land SDK

The Collab.Land SDK is a TypeScript/JavaScript library that makes it easy to invoke Collab.Land REST APIs.
It's published to npm as [@collabland/sdk](https://www.npmjs.com/package/@collabland/sdk).

## Use the SDK for Node.js applications

1. Install the sdk to your project

```
npm install @collabland/sdk
```

> Note: the latest version of `@collabland/sdk` is an ESM module.

2. Invoke an API

The first example uses an oAuth2 access token to get user profile and wallets:

```ts
import { CollabLandClient } from '@collabland/sdk';

const accessToken = process.argv[2];
const client = new CollabLandClient(
  { collabLandOAuth2: accessToken },
  process.env.COLLABLAND_API_SERVER_URL || 'https://api.collab.land',
);
await client.connect();

const user = await client.account.getUserProfile();
console.log(user);

const wallets = await client.account.getWallets();
console.log(wallets);
```

The second example uses an API key to invoke token gating services:

```ts
import path from 'path';
import { CollabLandClient, RuleBuilder } from '@collabland/sdk';

async function main(apiKey) {
  // First create an instance of `CollabLandClient` with required credentials
  const sdk = new CollabLandClient(
    {
      apiKey,
    },
    process.env.COLLABLAND_API_SERVER_URL || 'https://api.collab.land',
  );
  // Connect to the API server
  await sdk.connect();

  // Create a token gating rule as a plain JSON object or using the `RuleBuilder`
  /*
  const rule = {
      type: 'ERC721',
      chainId: 1,
      minToken: '1',
      contractAddress: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      roleId: '001',
  };
  */
  const rule = RuleBuilder.erc721(
    '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    1,
  )
    .min(1)
    .roleId('001')
    .build();
  console.log('Rule: %O', rule);
  const result = await sdk.accessControl.checkRoles({
    account: '0x01c20350ad8f434bedf6ea901203ac4cf7bca295',
    rules: [rule],
  });
  console.log('Token gating response: %O', result);
}

const apiKey = process.argv[2];
if (apiKey == null) {
  console.error(
    'Usage: node %s <api-key>',
    path.relative(process.cwd(), process.argv[1]),
  );
  process.exit(1);
}
await main(apiKey);
```

## Use the SDK for frontend applications

1. Install the sdk to your project

```
npm install @collabland/sdk
```

```ts
import { CollabLandClient } from '@collabland/sdk';

// eslint-disable-next-line import/no-mutable-exports
let collabLandClient: CollabLandClient = new CollabLandClient(
  {},
  process.env.REACT_APP_API_SERVER_URL,
);

export const connectToSDK = async (): Promise<void> => {
  try {
    const client = new CollabLandClient(
      {
        apiKey: process.env.REACT_APP_COLLABLAND_KEY,
        // authenticatedEncryption: `AE ${token}`,
      },
      process.env.REACT_APP_API_SERVER_URL,
    );

    await client.connect();
    collabLandClient = client;
  } catch (e) {
    console.log('connection clint error: ', e);
  }
};

export const getCollabClient = (): CollabLandClient => collabLandClient;

export default collabLandClient;
```

## Use the SDK from CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CollabLand SDK Demo</title>
    <script src="https://unpkg.com/@collabland/sdk" charset="utf-8"></script>
    <script>
      async function main() {
        const accessToken = document.getElementById('token').value;
        const url = document.getElementById('local').checked
          ? 'http://localhost:3000'
          : document.getElementById('qa').checked
          ? 'https://api-qa.collab.land'
          : 'https://api.collab.land';
        const sdk = await collabland;
        const client = new sdk.CollabLandClient(accessToken, url);
        await client.connect();
        try {
          const user = await client.account.getUserProfile();
          alert(JSON.stringify(user));
        } catch (err) {
          alert(err);
        }
      }
    </script>
  </head>

  <body>
    <h1>CollabLand SDK Demo</h1>
    <form>
      <input type="radio" name="env" id="local" value="local" checked />
      <label for="local">Local</label><br />
      <input type="radio" name="env" id="qa" value="qa" />
      <label for="qa">QA</label><br />
      <input type="radio" name="env" id="prod" value="production" />
      <label for="prod">Production</label><br />
      <p></p>
      <label for="token">CollabLand AE Token:</label><br />
      <input type="text" id="token" name="accessToken" size="200" />
      <p>
        <input type="button" onClick="main()" value="Submit" />
      </p>
    </form>
  </body>
</html>
```
