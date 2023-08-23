---
sidebar_position: 1
sidebar_label: Token Gating Tutorial
---

# Collab.Land Token Gating Tutorial

Collab.Land offers a token gating feature that allows you to restrict access to elements or pages of your site based on ownership of certain blockchain assets. This tutorial walks you through the process of creating your own token gate for your website using the Collab.Land API.

You can follow this tutorial in a video format here: <https://www.youtube.com/watch?v=EUVdGQuD_kw>

<!-- Embed YouTube video -->

<iframe webkitallowfullscreen="webkitallowfullscreen" width="560" height="315" src="https://www.youtube.com/embed/EUVdGQuD_kw" allowfullscreen="allowFullScreen" frameBorder="0" title="Token Gating with Collab.Land" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

### Website Gating Logic Flow

1. Define Token Gating Rules (TGRs) for your website.
2. User visits your website.
3. Collect user's wallet address.
4. Call Collab.Land API to check if the user has the required tokens to fulfil your rules.
5. Display gated content if the user has the required tokens.

![TGR Workflow](imgs/tgr-flow.png)
To check if a user has the required tokens via the Collab.Land API, you need:

- The user's wallet address.
- Token Gating Rules for your site.

This tutorial implements the gating logic by calling the Collab.Land [`access-control/check-roles`](../downstream-integrations/api/token-gating) endpoint with the user's wallet address and the [token gating rules](#define-token-gating-rules) as the payload for the request. Collab.Land returns `true/false` for each rule to indicate if the given address fits the provided criteria or not.

### Get Collab.Land API keys

To call Collab.Land APIs, you need to register an API key for your client application. In addition, your API key needs a specific scope (`token-gating`) to call the token gating endpoint. You can [request API access here](../downstream-integrations/#request-api-access).

This feature is available on the [`access-control/check-roles`](../downstream-integrations/api/token-gating) endpoint.

It is also available in the [Collab.Land SDK](../downstream-integrations/sdk/):

```js
await getCollabClient().accessControl.checkRoles({
    account: <wallet_address>,
    rules: [{...}],
});
```

<!-- TODO: Read <add_docs> to understand how Collab.Land API provides fine-grained control. -->

### Define Token Gating Rules

Token Gating Rules (TGRs) are schemas that describe the required tokens. TGRs usually include token information such as `chain id`, `contract address`, `token types`, `metadata`, etc. The following is an example TGR that requires at least one NFT of contract address `0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d` on mainnet.

```json
"rules": [
  {
    "type": "ERC721",
    "chainId": 1,
    "minToken": "1",
    "contractAddress": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    "roleId": "001"
  }
]
```

Collab.Land supports many fungible and non-fungible tokens on many chains. To gate your website with a certain token, you need to provide the token details in the example above. You can find chain IDs [here](https://chainid.network/) and here's a guide to [find your token details](../common-reference-docs/finding-token-details)

## Tutorial

The following are steps and explanations of our [token gating sample](https://github.com/abridged/collabland-tutorials/tree/master/token-gating-website) implementation.

> You will need a Collab.Land API key to run the demo locally.

### 1. Request an API Key

See [API section](#get-collabland-api-keys)

### 2. Define API payload

The API payload is the data that will be sent to the Collab.Land API. It must include the user's wallet address and the Token Gating Rules.

#### 2.1 Get user's wallet address

Your app will get the user's wallet address and pass it to the endpoint. In the future, Collab.Land may expose the Collab.Land wallet connect UI component for developers to use.

In this demo, we use [Sign-in with Ethereum](https://login.xyz/) to get the user's wallet address. You can use your preferred wallet provider to obtain a user's wallet address. You can also add sessions to logins based on your use case.

If you need some help to get user addresses, here are a few options:

- [Sign-In with Ethereum](https://docs.login.xyz/) Documentation.
- ["Connect Wallet" tutorial](https://blog.thirdweb.com/guides/add-connectwallet-to-your-website/) by ThirdWeb.

#### 2.2 Define Token Gating Rules

TGRs are the rules that the wallet assets will be checked against by the Collab.Land. The API will return boolean `true`/`false` for each rule to indicate if the account address fulfills the defined rules or not.

```json
  rules: [
    {
      chainId: 137,
      minToken: '1',
      contractAddress: '0x1fdf................81166e4ec02',
      roleId: MEMBER_ROLE,
      type: 'ERC721',
      name: 'MemberNFT Holder',
    },
    {
      chainId: 1,
      minToken: '1',
      contractAddress: '0x1fdf................81166e4ec02',
      roleId: PATRON_ROLE,
      type: 'ERC721',
      name: 'PatronNFT Holder',
    },
  ]
```

Please see [Configuring your TGRs](../common-reference-docs/configuring-rules) for rule definition details.

### 3. Call the Collab.Land API

In this demo, we use the [Collab.Land SDK](../downstream-integrations/sdk/) to call the API:

```js
const res = await getCollabClient().accessControl.checkRoles({
  account: addr,
  rules: [
    {
      chainId: 137,
      minToken: '1',
      contractAddress: '0x1fdf................81166e4ec02',
      roleId: MEMBER_ROLE,
      type: 'ERC721',
      name: 'MemberNFT Holder',
    },
    {
      chainId: 1,
      minToken: '1',
      contractAddress: '0x1fdf................81166e4ec02',
      roleId: PATRON_ROLE,
      type: 'ERC721',
      name: 'PatronNFT Holder',
    },
  ],
});
```

However, you can also use `fetch`:

```js
const res = await fetch(`https://api-qa.collab.land/access-control/check-roles`, {
method: 'POST',
headers: new Headers({
    Accept: 'application/json',
    'X-API-KEY': process.env.COLLABLAND_KEY,
    'Content-Type': 'application/json',
}),
body: JSON.stringify({
    account: myWalletAddr,
    rules: [
    ...
    ]
})
});
```

### 4. Handle API response

There are several response options available with the Collab.Land API. Select which method you would like to use.

#### Check roles synchronously

- Receive `true`/`false` from API for each Token Gating Rule

**Sample response:**

```json
{
  "roles": [
    {
      "id": "my-role-001",
      "granted": true
    },
    {
      "id": "another-role-002",
      "granted": false
    }
  ]
}
```

Learn more about [synchronous API responses](../downstream-integrations/api/token-gating/#check-roles-synchronously).

Collab.Land also offer two asynchronous methods for handling API responses.

- [Check roles asynchronously with callback](../downstream-integrations/api/token-gating/#check-roles-asynchronously-with-callback)
- [Check roles asynchronously and poll for the result](../downstream-integrations/api/token-gating/#check-roles-asynchronously-and-poll-for-the-result)

### 5. Render gated content based on API response

Your app can display page content or new pages based on the `true`/`false` response of the Collab.Land API.

#### React example code

This code snippet displays certain content when each rule returns `true`.

```js
// React component
...
const [isPatron, setIsPatron] = useState<boolean>(false);
const [isMember, setIsMember] = useState<boolean>(false);
...

const checkRoles = async () => {
await connectToSDK();
const apiResponse = await getCollabClient().accessControl.checkRoles({
    account: addr,
    rules: [
    {
        chainId: 137,
        minToken: '1',
        contractAddress: '0x1fdf................81166e4ec02',
        roleId: MEMBER_ROLE,
        type: 'ERC721',
        name: 'MemberNFT Holder',
    },
    {
        chainId: 1,
        minToken: '1',
        contractAddress: '0x1fdf................81166e4ec02',
        roleId: PATRON_ROLE,
        type: 'ERC721',
        name: 'PatronNFT Holder',
    },
    ],
});

for (const role of apiResponse.roles) {
    if (role.granted) {
    switch (role.id) {
        case PATRON_ROLE: // set to true if PATRON_ROLE rule returns true
        setIsPatron(true);
        break;
        case MEMBER_ROLE: // set to true if MEMBER_ROLE rule returns true
        setIsMember(true);
        break;
    }
    }
}
}

...

return (
<div>
    {isPatron ? (
    <div>
        Hey Patron NFT Holder! ❤️ 🖤
        ...
    </div>
    ) : (
    <div>
        You can view this content if you own Collab.Land Patron
        NFTs.
    </div>
    )}
    {isMember ? (
    <div>
        Hey Membership NFT Holder!
    </div>
    ) : (
    <div>
        You can view this content if you own Collab.Land
        Membership NFTs.
    </div>
    )}
</div>
)
```

**When both rules are `false`:**

![unchecked image of the website](imgs/token-gating-tutorial.png)

**When both rules are `true`:**

![checked image of the website](imgs/token-gating-tutorial-checked.png)

## Next steps

- Get access to [the source code on Github](https://github.com/abridged/collabland-tutorials/tree/master/token-gating-website)
- Go [build amazing things with Collab.Land!](/docs/downstream-integrations/)
