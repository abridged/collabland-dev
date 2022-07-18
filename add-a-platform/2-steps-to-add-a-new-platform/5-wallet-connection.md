---
sidebar_position: 5
sidebar_label: Wallet Connection
sidebar_class_name: nav-normal-page
---

# Wallet Connection

- [Authentication](#authentication)
- [How we check who is making the API call](#how-we-check-who-is-making-the-api-call)
  - [Authentication strategies we support](#authentication-strategies-we-support)
- [Wallet Connection](#wallet-connection)
  - [Authentication and AE Token](#authentication-and-ae-token)
  - [Collab.Land Wallet Connection Site](#collabland-wallet-connection-site)
- [What will the flow look like on my platform?](#what-will-the-flow-look-like-on-my-platform)
  - [API Key](#api-key)
  - [AE Token](#ae-token)
- [Debugging](#debugging)
- [Questions/Concerns](#questionsconcerns)

---

In this flow, we are looking for the connection between a user, a community, and their wallet address.

![wallet-connectoin.drawio.png](./images/wallet-connectoin.drawio.png)

Your platform will build an encrypted JWT token that contains required user and community info and passes the token to [Collab.Land](http://Collab.Land) wallet connection site. Once the user chooses a wallet to connect, [Collab.Land](http://Collab.Land) API server will set up the connection and launch a balance check over different chains to look over their assets.

To build such encrypted JWT tokens, your platforms will send requests to [Collab.Land](http://Collab.Land) API server. Let’s take a look at how we interact with 3rd party platforms **👇**

## Authentication

[Collab.Land](http://Collab.Land) takes security seriously. When we talk to 3rd party platforms, we need to know which application is sending the request and which user is using that application.

In the wallet connection flow when users connect their wallets, [Collab.Land](http://Collab.Land) server would verify incoming API calls from the 3rd party are valid before creating any tokens.

In the admin configuration flow, the Command Center ( a [Collab.Land](http://Collab.Land) site) should be able to authenticate the user. This requires your platform to provide a way to authenticate the user outside of your websites or applications.

When we start planning the integration. Authentication is the first question we need to answer. The following introduces a possible solution for it.

## How we check who is making the API call

Client applications can be categorized into two types:

- Secret client apps (with backend server): a client app with a backend server can send server-to-server requests to CollabLand server with an API key in the header or a JWT token that Collab.Land is the only provider that has access to the signing key. This way we can verify the API keys or JWT to check if the client application is valid.
- Public client apps (HTTP): as HTTP req can be changed/simulated, we need extra measures to verify HTTP calls. Oauth2 is a common way to do so.

### Authentication strategies we support

- API key
- Client id / Client secret
- AE token (encrypted JWT token): Only [Collab.Land](http://Collab.Land) components would have access to our aws kms key pair. If we can verify the aeToken from client-side, it has to come from a trusted CollabLand component.
- Oauth2 login: a common way to authenticate users outside of the application/website.
- Ethereum login (early version)

## Wallet Connection

To give you some ideas of implementing the wallet connection flow, let’s start with the wallet connect flow on Discord as an example to see how we validate requests and authenticate users.

### Authentication and AE Token

The [Collab.Land](http://Collab.Land) bot is a Discord app that has an application id and a public key created by Discord. In the bot configuration, it is set to point to a Collab.Land endpoint `https://api.collab.land/discord/interactions` .

The public key is exposed to the bot developer that we need to configure the key to [Collab.Land](http://Collab.Land) API server to do the signature verification. When a discord request comes in, it will continue processing if the public key string matches the one we’ve set.

![let's go](./images/wallet-connection-lets-go.png)

When a user clicks the “Let’s go” button, the bot is able to collect some public information (`UserProfile`) about the user and the community and send the request to the Collab.Land endpoint.

```jsx
interface type UserProfile {
	userName: string;
  userId: string;
	communityName: string;
	communityId: string;
}
```

Once we verify the request signature via the public key, the [Collab.Land](http://Collab.Land) API server creates an encrypted JWT token (AE token) that contains information for the wallet connection site to process:

```jsx
interface type AETokenParams{
  id: string;
  userPk: string;
  name: string;
  communityPk: string;
  platform: string;
  communityId: string;
  communityName: string;
}
```

Once the AE token is built, we create a link with the AE token and send this personalized link to the user **👇**

![signing msg](./images/wallet-connection-msg.png)

📕 Let’s take a step back and see what we did so far:

1.  [Collab.Land](http://Collab.Land) API server verifies API calls from our Discord bot by the public key.

1.  [Collab.Land](http://Collab.Land) API server builds an AE token with signing keys that only trusted components have access to. The AE token contains public info about user and community.
1.  [Collab.Land](http://Collab.Land) API server creates a personalized link with the AE token for the user.
1.  Users can launch [Collab.Land](http://Collab.Land) wallet connection UI through the link.

### [Collab.Land](http://Collab.Land) Wallet Connection Site

The “Connect Wallet” button would launch our wallet connection site `https://connect.collab.land?id=<aeToken>&state=...` :

![wallet list](./images/wallet-connection-wallet-list.png)

Since the wallet connection site has access to the encrypted JWT signing key, it is able to decode the AE token and know which user is connecting their wallets.

As long as the AE token contains the required information, the API server will create a connection for the user, community, and the wallet they chose and start a balance check for the user.

<aside>
📕 The goal of the wallet connection flow is to build an AE token for the wallet connection site to process.

</aside>

## What will the flow look like on my platform?

As we see in the example, when the user clicks the “Let’s go” button, [Collab.Land](http://Collab.Land) Discord bot would hit this [endpoin](https://api.collab.land/discord/interations/).

```jsx
@post('/discord/interactions')
  async handleInteractions(
    @param.header.string('X-Signature-Ed25519', {required: true})
    signature: string,
    @param.header.string('X-Signature-Timestamp', {required: true})
    timestamp: string,
    @requestBody({
      content: {
        'application/json': {
          'x-parser': MyTextBodyParser,
          schema: {type: 'string'},
        },
      },
    })
    body: string,
    @inject(RestBindings.Http.CONTEXT) reqCtx: RequestContext,
  ) {
// check if the public key matches
    this.verifyRequest(signature, timestamp, body);
    const interaction: APIInteraction = JSON.parse(body);
    debug('Interaction received: %O', interaction);
// process the user and community info and build AE token
    const response = await this.dispatcher.handle(interaction, reqCtx);
    debug('Interaction response: %O', response);
    return response;
  }

private verifyRequest(signature: string, timestamp: string, body: string) {
    // Your public key can be found on your application in the Developer Portal
    const publicKey = getEnvVar('DISCORD_PUBLIC_KEY')!;
   // ... verifying
    return verified;
  }
```

Your bot should be able to configure an endpoint like `https://api.collab.land/<my-platform>/<wallet-connect>`

### API Key

Your app could provide such a public key for [Collab.Land](http://Collab.Land) to verify the incoming request, or we can provide a registered [Collab.](http://Collab.land)Land client app id.

### AE Token

The data of the ae token need to follow our formatting convention so that the API server can process it properly.

We use prefix `USER` and `COMM` to differentiate users and communities.

We use 3 letters to differentiate platforms. For example:

`DIS` → Discord

`TEL` → Telegram

`RED` → Reddit

Let’s use `ABC` as your platform prefix as an example. With the user id, user name, community id, and community name, the following is what required data in an AE token looks like:

```jsx
const userProfile = {
  id: '9988777', // string
  userPk: 'ABC#USER#9988777'; // <PLATFORM_PREFIX>#USER#<USER_ID>
  name: 'Mango Skin';
  communityPk: 'ABC#COMM#ac_361324',// <PLATFORM_PREFIX>#COMM#<COMM_ID>
  communityId: 'ac_361324',
  communityName: 'Hanbury',
  platform: 'myplatform';
}
```

Once you build the user profile with the user and community info sent from your app, you can generate a AE token with KMS service in our component:

```jsx
import {KMSService, KMS_SERVICE} from '@collabland/component-aws';
...

interface UserRecord {
  id: string; // user id: 12345
  userPk: string; //
  name: string;
  communityPk: string;
  platform: string;
  communityId: string;
  communityName: string;
  accessToken?: string;
  refreshToken?: string;
}

@injectable({scope: BindingScope.SINGLETON})
export class MyPlatformController {
  constructor(
    @inject(JWT_SERVICE) private jwt: JWTService,
    @inject(KMS_SERVICE) private kms: KMSService,
    @inject(MY_PLATFORM_SERVICE) private reddit: myPlatformService,
  ) {}
...
protected async buildResponse(
    userProfile: UserRecord,
    originalState: {state?: string; redirectUri?: string},
  ) {
    const userInfo = {
      ...userProfile, // the user profile you just built
      context: {
        // extra info goes here
      },
    };
    const aeToken = await this.kms.generateAEToken(userInfo, undefined, '1h');
    debug('Reddit aeToken', aeToken);
    const queryParams: Record<string, string> = {
      id: aeToken, // wallet connection site expects id param instead of aeToken
    };
    if (originalState.state) {
      queryParams.state = originalState.state;
    }
    return {queryParams, aeToken};
  }
...
```

Once you have the AE token, you can send back a link that contains the token as a param to the user. And they can launch the wallet connect UI from there.

## Debugging

You can start a local server with debug string you defined in your extension.

## Questions/Concerns

The above is just one possible solution. Platforms vary. If it does not work for your platform, or if you need to do some workarounds due to platform limitations such as low rate-limiting or security concerns, free feel to discuss with us.
