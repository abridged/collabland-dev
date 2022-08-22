---
id: account
title: Account
sidebar_position: 3
---

The `/account` resource provides information for an authenticated user of the
api call.

The base url is https://api.collab.land/account/.

The following HTTP request headers are required.

## Get the current user profile

### Try it out

[GET /account/me](https://api.collab.land/explorer/#/AccountController/AccountController.getUserProfile)

### Sample request

```
GET /account/me

accept: application/json
x-api-key: ...
Authorization: AE <ae-token>
```

### Sample response

```json
{
  "id": "...",
  "username": "...",
  "avatar": "...",
  "avatar_decoration": null,
  "discriminator": "0001",
  "public_flags": 0,
  "name": "...",
  "platform": "discord",
  "accessToken": "<discord-oauth2-access-token>",
  "iat": 1661209363,
  "exp": 1661212963,
  "iss": "https://api.collab.land"
}
```

## Get administrated communities

Sample request:

```
GET /account/administrated-communities

accept: application/json' \
authorization: AE <ae-token>
x-api-key: <api-key>
```

Sample response:

```json
{
  "items": [
    {
      "status": "active",
      "timestamp": 1634937866220,
      "communityId": "779512068155768852",
      "name": "CyberFeng",
      "ownerId": "779511607172530196",
      "network": "mainnet",
      "platform": "discord",
      "isGoodbyeMsgEnabled": true,
      "sk": "COMMUNITY",
      "isWelcomeMsgEnabled": true,
      "pk": "DIS#COMM#779512068155768852",
      "classifier": "COMMUNITY",
      "id": "DIS#COMM#779512068155768852",
      "serverImage": "https://cdn.discordapp.com/icons/779512068155768852/c88d7391d5c0b970ddb5b61710666c7a.png?size=256",
      "tpcs": [
        {
          "chainId": 137,
          "minToken": "1",
          "sk": "TPC#931406610767679499#905857524543127632#137",
          "contractAddress": "931406610767679499",
          "pk": "DIS#COMM#779512068155768852",
          "classifier": "TPC",
          "roleId": "905857524543127632",
          "type": "ERC721",
          "name": "CollabLand Member",
          "roleName": "CollabLand Member",
          "roleColor": 0
        }
      ],
      "roles": [
        { "id": "905857524543127632", "name": "CollabLand Member", "color": 0 }
      ]
    }
  ]
}
```
