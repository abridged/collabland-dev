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

The LWC flow process offers a way for client applications to authenticate their users through Collab.Land. Applications registered with Collab.Land can redirect users to `https://login.collab.land` to authenticate themselves with Collab.Land and grant permissions to the client application for requested resources.

Once a user has been successfully authenticated, the client app receives an access token that can be used to request user data tailored to the application's requirements.

For example:

https://login.collab.land/?redirect_uri=https://cc.collab.land/dashboard will prompt you to login with Discord, Telegram or any other Collab.Land supported platforms. 


The `redirect_uri` parameter is required. This is the URL that the user will be redirected to after the authentication process is complete. 

> The `LWC` flow is not publicly available yet, so it only works in development and with whitelisted domains. If you want to use this method, be sure to inform the Collab.Land team before development or submit a request via [the API Request Form](https://forms.gle/GbtyiQyBkUH1bwsL8)

<!-- ### Sign in with Discord or Telegram

![Sign in with Discord 1](../imgs/login.png)

You should receive a confirmation page when you sign in successfully via your authentication platform of choice. For instance, an authenticated wallet connection confirmation page would look like this:

![Sign in with Discord 2](../imgs/connected.png) -->

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
