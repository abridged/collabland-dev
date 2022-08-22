---
id: token-gating
title: Token Gating
sidebar_position: 6
---

The `/access-control` endpoint allows client applications to interact with Collab.Land's token gating engine to verify a wallet address or crypto account with a list of rules based on the token ownership.

## Authentication

The endpoint requires an API key to be passed in as the `x-api-key` request header. The client application needs to be approved with `token-gating` scope by Collab.Land.

```
x-api-key: <api-key>
```

## Check roles synchronously

Check roles for an account against a list of token gating rules and get a response from the call for the roles to be assigned or removed.

### Trt it out

- [POST /access-control/check-roles](https://api.collab.land/explorer/#/AccessControlController/AccessControlController.checkRoles)

### Sample request

POST https://api.collab.land/access-control/check-roles

```json
{
  "account": "0x01c20350ad8f434bedf6ea901203ac4cf7bca295",
  "rules": [
    {
      "type": "ERC721",
      "chainId": 1,
      "minToken": "1",
      "contractAddress": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "roleId": "001"
    }
  ]
}
```

### Sample response

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

## Check roles asynchronously

Check roles for an account against a list of token gating rules with a callback URL and get a notification via the URL as a webhook later for the roles to be assigned or removed.

### Trt it out

- [POST /access-control/check-roles](https://api.collab.land/explorer/#/AccessControlController/AccessControlController.checkRoles)

### Sample request

POST https://api.collab.land/access-control/check-roles

```json
{
  "account": "0x01c20350ad8f434bedf6ea901203ac4cf7bca295",
  "rules": [
    {
      "type": "ERC721",
      "chainId": 1,
      "minToken": "1",
      "contractAddress": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "roleId": "001"
    }
  ],
  "callbackUrl": "https://my-server.my-domain.com/check-roles/notifications"
}
```

### Sample response

```json
{
  "requestId": "...",
  "roles": []
}
```

### Sample notification

POST https://my-server.my-domain.com/check-roles/notifications
X-CollabLand-Signature: signature-for-the-request

```json
{
  "requestId": "...",
  "roles": [
    {
      "id": "001",
      "granted": true
    }
  ]
}
```
