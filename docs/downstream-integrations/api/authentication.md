---
id: authentication
title: Authentication
sidebar_position: 1
---

Collab.Land APIs support a few schemes of authentications.

## API key

The API key must be passed in the HTTP `X-API-Key` (case insensitive) request header.

```
X-API-Key: <api-key-for-your-client-application>
```

## Authenticated Encryption (AE) Token

Collab.Land can also generate authenticated encryption tokens for API access. Such AE tokens are JWT tokens encrypted using AWS KMS and encoded as base64 URL strings.

The AE token must be passed in the HTTP `Authorization` (case insensitive) request header.

```
Authorization: AE <ae-token>
```

The AE token is generated on the server when a user has successfully signed in with Collab.Land. The AE token is valid for 1 hour after which it expires and will need to be refreshed.

## Login with Collab.Land (LWC)

> This is a work in progress. The current implementation is not ready for production use cases.

Client applications registered with Collab.Land can redirect users to `https://login.collab.land` to authenticate themselves with Collab.Land and grant permissions to the client application for requested resources.

For example:

https://login.collab.land/?redirect_uri=https://cc.collab.land/dashboard

The `redirect_uri` parameter is required. This is the URL that the user will be redirected to after the authentication process is complete. The `LWC` flow is not publicly available yet, so it only works in development and with whitelisted domains.

### Sign in with Discord or Telegram

![Sign in with Discord 1](../imgs/login.png)

You should receive a confirmation page when you sign in successfully via your authentication platform of choice. For instance, an authenticated wallet connection confirmation page would look like this:

![Sign in with Discord 2](../imgs/connected.png)

### Sign in with Ethereum (SIWE)

1. Get a challenge

Sample request:

```
POST /ethereum-login/challenges

x-api-key: ...
```

```json
{
  "state": "string",
  "uri": "string",
  "accountId": "string",
  "resources": ["string"]
}
```

Sample response:

```json
{
  "state": "string",
  "requestId": "string",
  "message": "string"
}
```

2. Sign the message

3. Request an AE token

```
POST /ethereum-login/id-tokens

x-api-key: ...
```

```json
{
  "requestId": "string",
  "signatureType": "string",
  "signature": "string",
  "accountId": "string"
}
```

Sample response:

```json
{
  "idToken": "string"
}
```
