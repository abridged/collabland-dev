---
id: authentication
title: Authentication
sidebar_position: 1
---

Collab.Land APIs support a few schemes of authentications.

## API key
Collab.Land API keys can be used as a convenient way to invoke Collab.Land APIs that don't involve users, such as token-gating services. To get user authorization for data access, you can use any of our [Oauth2 flows](#register-your-oauth2-client-application).

API key must be passed in the HTTP `X-API-Key` (case insensitive) request header:

```
X-API-Key: <api-key-for-your-client-application>
```

<!-- ## Authenticated Encryption (AE) Token

Collab.Land can also generate authenticated encryption tokens for API access. Such AE tokens are JWT tokens encrypted using AWS KMS and encoded as base64 URL strings.

The AE token must be passed in the HTTP `Authorization` (case insensitive) request header.

```
Authorization: AE <ae-token>
```

The AE token is generated on the server when a user has successfully signed in with Collab.Land. The AE token is valid for 1 hour after which it expires and will need to be refreshed. -->

## Login with Collab.Land (LWC) - beta

The Collab.Land API OAuth2 flow provides a secure and standardized method for client applications to authenticate users and access resources on Collab.Land. The flow follows the OAuth2 protocol, allowing applications to obtain an access token that can be used to interact with the Collab.Land API on behalf of the authenticated user.

## Register your OAuth2 Client Application

To begin using the Collab.Land API OAuth2 flow, you must first register your client application via the [Collab.Land Developer Portal](https://dev-portal.collab.land/). After the registration process, you will receive the following credentials:

- **Client ID**: A unique identifier for your client application.
- **Client Secret**: A confidential string used to authenticate your client application with Collab.Land.
- **API Key**: A secret key used used as a convenient way to invoke Collab.Land APIs that don't involve any users, such as `token-gating` services.

These credentials are essential for initiating the OAuth2 flow and obtaining access tokens.

## Login with Collab.Land (LWC) Flow

To initiate the OAuth2 flow, direct users to the Collab.Land OAuth2 authorization endpoint:

```bash
https://api.collab.land/oauth2/authorize
```

Include the following parameters in the URL:

- **`response_type`**: Set this to **`code`** for the authorization code flow or **`token`** for the implicit token flow.
- **`client_id`**: The client ID obtained during the application registration process.
- **`redirect_uri`**: The URI to which Collab.Land will redirect the user after authentication. It must match one of your registered redirect URIs on the devportal. For local development, you can register your local URIs for testing purposes, we allow: `localhost`, `127.0.0.1`, and `[::1] (ipv6)`. The port number does not matter and subdirs are fine. For example, if you register `http://localhost:3000/oauth2` on the dev portal as one of your redirect uris, we consequently allow the following: 
  *  `http://localhost:5000/oauth2/implicit-flow.html`, 
  *  `http://127.0.0.1:3001/oauth2/authorization-code-flow.html`
- **`scope`**: The desired [scopes](https://api-qa.collab.land/scopes) requested by your application, separated by spaces.
- **`state`**: An opaque string that the client application provides, the value will be sent back as-is for the callback through a redirect uri.

For example, to initiate the authorization code flow:

```bash
https://api.collab.land/oauth2/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=scope1+scope2&state=UNIQUE_STATE_STRING
```

Or, for the implicit token flow:

```bash
https://api.collab.land/oauth2/authorize?response_type=token&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=scope1+scope2&state=UNIQUE_STATE_STRING
```

Upon calling the authorization endpoint, users will be prompted to log in with their Collab.Land account and grant the requested permissions to your application.

## Obtain Access Tokens

Collab.Land supports two OAuth2 flows: `Authorization code flow` and `Implicit token flow`. The flow you choose depends on your application's requirements. For example, if your application has a backend that can securely store the client secret, you should use the authorization code flow. If your application is a client-side application, you can use the implicit token flow.

### Authorization Code Flow

If you initiated the authorization code flow, Collab.Land will redirect the user back to the **`redirect_uri`** specified in the authorization request, along with an authorization code. Your application must exchange this code for an access token by making a request to the Collab.Land OAuth2 token endpoint:

```bash
https://api.collab.land/oauth2/token
```

Include the following parameters in the request body:

- **`grant_type`**: Set this to **`authorization_code`**.
- **`code`**: The authorization code received in [the previous step](#login-with-collabland-lwc-flow).
- **`client_id`**: The client ID obtained during the application registration process.
- **`client_secret`**: The client secret obtained during the application registration process.
- **`redirect_uri`**: The same redirect URI used in the authorization request.

The response will be `application/x-www-form-urlencoded` and will include an access token that your application can use to authenticate subsequent API requests on behalf of the user.

The `client_id` and `client_secret` can be passed in as Authorization header with basic auth, or they can be passed as part of the request body.

:::success Authorization code flow is preferred if the client application has a backend that can securely access the `client_secret`. The authorization code can only be used once to exchange for the access token.
:::

### Implicit Token Flow

If you initiated the implicit token flow, Collab.Land will include the access token directly in the URL fragment of the **`redirect_uri`**. Your application can extract the token from the URL fragment using client-side JavaScript.

### Call APIs with Access Token

To access the Collab.Land API on behalf of the authenticated user, include the access token as the Bearer token in the **`Authorization`** header of your API requests:

```bash
GET /api/resource
Authorization: Bearer ACCESS_TOKEN
```

Replace **`ACCESS_TOKEN`** with the actual access token obtained in the previous step.

The Collab.Land API will validate the access token and authorize the requested actions based on the associated user and scopes.

## Understand Scopes

Collab.Land API uses scopes to define the level of access and permissions requested by the client application. Scopes determine the resources and operations that the access token can be used for. It is crucial to understand the available scopes and select the appropriate ones based on your application's requirements.

The following scopes are available:

**user:wallet:write**

- Add a new wallet or remove an existing wallet

**user:wallet:read**
- Read user wallets that they have connected with Collab.Land

**user:community:read**
- Read user communities, communities they belong to and communities they administrate.

**user:read**
- Read basic user profile (name, pfp, username, etc)

**community:read**
- Read community information like roles, stats, tgrs

**community:write**
- Update community information like roles, stats, tgrs

**token-gating**
- Check user wallet holdings

**verifiable-credential:read**
- Read public verifiable credentials

**user:verifiable-credential:read**
- Read users' verifiable credentials

**user:verifiable-credential:write**
- Issue users' verifiable credentials

**user:webauthn-credential:read**
- Read webauthn/passkey credentials

**user:webauthn-credential:write**
- Update or delete your webauthn/passkey credentials

<!-- 
:::success Please be aware that these scopes are currently being revised and will soon be updated to ensure accurate naming conventions and consistency.
::: -->


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
