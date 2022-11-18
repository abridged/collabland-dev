---
id: token-gating
title: Token Gating
sidebar_position: 4
---
## Overview
The `/access-control` [endpoint](link needed) allows client applications to interact with Collab.Land's token gating engine to verify a wallet address or crypto account with a list of rules based on the blockchain token ownership.
<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/S5jqcu5XzqBrnRtvgrPBj1@2Ux7TurymNLRX4obG1NB"></iframe>

## Authentication
Usage of the Collab.Land API requires prior [approval for and obtaining an API key](https://dev.collab.land/docs/downstream-integrations/#request-api-access).
<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/S5jqcu5XzqBrnRtvgrPBj1@2Ux7TurymNbYUoeE1w3z"></iframe>

The endpoint requires an API key to be passed in as the `x-api-key` request header. The client application needs to be approved with `token-gating` scope by Collab.Land.

```
x-api-key: <api-key>
```

## Check roles synchronously

Check roles for an account against a list of token gating rules and get a callback response if supplied account passes rule checks Y/N.

### Trt it out
<!-- Agnes, do we have a "how to use the API explorer section we can link to?-->
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

Check roles for an account against a list of token gating rules with a callback URL and get a notification via the URL as a webhook later for the roles approved Y/N.

### Try it out

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
## Example POC site
POC Flow
- https://member.collab.land
  <details>
  <summary>user/pw:</summary>
  `collabland` / `slash2048`
  </details>
- Partners need to have account at login-qa site
- Discord or Eth login
  - Site asks for user perms (discord name/id) according to the [UX flow](https://github.com/iSpeakNerd/collabland-dev/edit/patch-3/docs/downstream-integrations/api/token-gating.md?pr=%2Fabridged%2Fcollabland-dev%2Fpull%2F28#overview)
  - Collab.land API approves if user wallet passes rules Y/N
