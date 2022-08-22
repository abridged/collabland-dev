---
id: authentication
title: Authentication
sidebar_position: 1
---

CollabLand API server supports a few schemes of authentications.

## oAuth2 authentication

### Request client id/secret

### oAuth2 implicit flow

### oAuth2 authorization code flow

### oAuth2 client credentials flow

### oAuth2 resource owner password flow

## Discord oAuth2 authentication

CollabLand API endpoints accept
[oAuth2 access tokens from Discord](https://discord.com/developers/docs/topics/oauth2).
A discord token must be passed in via the HTTP `Authorization` request header.

```
Authorization: Bearer <discord-oauth2-access-token>
```

[CollabLand App](https://app.collab.land) leverages Discord oAuth2 login to
request an access token from Discord and uses it for API calls.

## Ethereum wallet authentication

If a user already has a wallet address registered with CollabLand, the wallet
private key can be used to sign a message as the authentication to our API
server.

```typescript
import {Wallet} from 'ethers';
import jwt from 'jsonwebtoken';

// const wallet = ...; // The API client has access to a wallet

// Sign the challenge message ('api.collab.land') using the wallet private key
const challenge = 'api.collab.land';
const signature = await wallet.signMessage(challenge);

// Generate a JWT token
const token = jwt.sign(
  {
    address: wallet.address,
    signature,
  },
  challenge,
  {
    subject: wallet.address,
  },
);
return jwt;
```

Now the JWT token can be used for API calls:

```
Authorization: Ethereum <jwt>
```
