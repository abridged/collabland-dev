---
slug: signature-verification-in-miniapps
title: Signature Verification for Collab.Land Miniapp Developers
image: /static/img/sigverify.png
authors: kenny
tags: [collabland, developers, security, verification, miniapp]
date: 2023-08-30
---

Security is a top priority for us here at Collab.Land. We not only ensure the safety of our members and admins but also take great care in securing the connections and data shared by developers through our APIs. One essential aspect of this security is signature verification. Today, we'll explore the importance of signature verification and guide you through the process of implementing it in your Miniapps on Collab.Land.

## Why Signature Verification Matters

Imagine sending a valuable package through the mail. To ensure it arrives intact and untampered with, you'd use a sealed envelope. In the digital world, that envelope is a digital signature. It guarantees the authenticity and integrity of your data in an environment where anyone can intercept and manipulate it if not properly secured.

Digital signatures involve two fundamental operations:

1. **Signing:** Using a private key to produce a digital signature for raw data.
2. **Verification:** Using a public key to confirm the authenticity and integrity of data against the received raw data.

Web2 and Web3 technologies heavily rely on digital signatures to preserve data integrity and protection, but they serve slightly different purposes.

### Web2: Data Integrity and Security

In Web2, digital signatures are commonly used to verify data integrity and secure open API endpoints from common denial-of-service attacks. They provide integrity, authentication, and non-repudiation. We see this commonly used in email authentication, WhatsApp, Imessage, etc where a digital signature is used to verify the sender's identity and ensure the data's integrity.

### Web3: Everyday Transactions

In Web3, digital signatures are everywhere, they are used for signing transactions, messages, and verifying wallet ownership. For instance, Collab.Land uses your wallet's digital signature to verify your wallet address, ensuring secure connections.

## How Digital Signatures Work

Let's look at a simple flow of how digital signatures work between two parties, Alice and Bob:

1. Alice wants to send data to Bob.
2. Alice possesses a private key (known only to her) and a public key (visible to anyone).
3. She signs her message with her private key and sends both the message and the signature to Bob.
4. Bob, to verify that the message came from Alice, uses her public key to check the signature against the received message.

Digital signatures are particularly crucial when sharing data over the public internet, which can be a daunting place. If you run an exposed API server on the internet, implementing security measures becomes essential. This is where Collab.Land's API and signature verification come into play.

## Defending Against DDoS Attacks

One common threat on the internet is Distributed Denial of Service (DDoS) attacks. In these attacks, malicious actors flood a network or server with payloads until it becomes unresponsive. To mitigate these attacks, consider:

- **Rate-limiting API calls**
- **Whitelisting or blacklisting IPs**
- **Implementing Digital Signature Verification Algorithms**
- **Using a Web Application Firewall**

## Implementing Signature Verification in Miniapps

Now, let's dive into how you can implement signature verification for your Collab.Land Miniapps:

1. Always check for signature headers in your `/interactions` endpoint before processing any data.
2. Verify the signature against Collab.Land's API public key and the received raw data. You can find Collab.Land API public keys at `https://api.collab.land/config`.
3. Only trust and process the data when the signature is successfully verified. This ensures that the data was sent by Collab.Land and can be trusted.

### Hands-On with Code

To experiment with implementing signature verification, you can use Collab.Land's [Miniapp templates](https://docs.collab.land/docs/upstream-integrations/collab-actions/getting-started-with-collab-actions). Here's a step-by-step guide:

1. Clone one of the Collab.Land Miniapp templates.
2. Review the [Editing Response Messages documentation](https://docs.collab.land/docs/upstream-integrations/collab-actions/customize-collab-actions/#editing-the-response-message) to understand the expected request format.
3. Open the `.env` file and set `SKIP_VERIFICATION` to `true`.
4. Build and run the server with `npm run build && npm run start`.
5. Follow the documentation to [test your Miniapp in a Discord server](https://docs.collab.land/docs/upstream-integrations/collab-actions/getting-started-with-collab-actions#test-the-actions-in-a-discord-server).
6. Send a malicious request to the server URL (ACTION URL). You'll notice that the server breaks.

Legitimate requests will fail as well, illustrating the importance of proper verification.

## Protecting Your Miniapp

Collab.Land places a strong emphasis on security for miniapp developers. Here's how we ensure security:

- Collab.Land's API always sends a digital signature in the request headers to the action URLs used by partner Miniapps.
- We expose [public keys](https://api.collab.land/config) that developers can use to verify webhook payloads.
- We strongly recommend implementing signature verification in production to safeguard against attacks and protect user data.

## Updating Your Codebase for Signature Verification

To implement signature verification in your codebase:

1. Remove the `SKIP_VERIFICATION` variable or set it to `false` in the `.env` file.
2. Restart the server.
3. Resend a malicious payload. The API will respond with a denial because the signature verification headers are missing, ensuring that only requests from Collab.Land is accepted and processed.

### Implementing Signature Verification in the Code

Collab.Land simplifies signature verification with an easy-to-use `verify` function. This function pulls in public keys from the `/config` endpoint for different environments (QA and Production). When a request hits the `/interactions` endpoint, the `verify` function runs first, checking verification headers, matching keys, and expiration.

Collab.Land supports two verification algorithms, ECDSA and ED25519, depending on the signature type. Signature verification is already baked into the Collab.Land Miniapp templates and all you need to do to enable it is set the `SKIP_VERIFICATION` env variable to true. However if you'd like to take a look at our implementation or roll your own, here's a sample code snippet:

Initialize the SignatureVerifier:

```js
  static async initVerifier() {
    const apiUrl = `https://api${
      process.env.NODE_ENV === "production" ? "" : "-qa"
    }.collab.land/config`;
    const keysResponse = await fetch(apiUrl);
    const keys = await handleFetchResponse<CollabLandConfig>(
      keysResponse,
      200,
      {
        customErrorMessage: `Error in fetching collab.land config from URL: ${apiUrl}`,
      }
    );
    SignatureVerifier.ECDSAPublicKey = keys.actionEcdsaPublicKey;
    SignatureVerifier.ED25519PublicKey = Buffer.from(
      decode(keys.actionEd25519PublicKey)
    ).toString("hex");
    debug("API URL for Collab.Land Config:", apiUrl);
    debug("SingatureVerifier Initialized");
  }
```

In the snippet above, we fetch the public keys from the `/config` endpoint and store them in the SignatureVerifier class. We also decode the ED25519 public key from base64 to hex.

Next, verify the signature:

```js
  verify(req: Request, res: Response) {
    if (!process.env.SKIP_VERIFICATION) {
      try {
        debug("Verifying signature...");
        const ecdsaSignature = req.header(ActionEcdsaSignatureHeader);
        const ed25519Signature = req.header(ActionEd25519SignatureHeader);
        const signatureTimestamp: number = parseInt(
          req.header(ActionSignatureTimestampHeader) ?? "0"
        );
        const body = JSON.stringify(req.body);
        const signature = ecdsaSignature ?? ed25519Signature;
        if (!signature) {
          throw new HttpErrors[401](
            `${ActionEcdsaSignatureHeader} or ${ActionEd25519SignatureHeader} header is required`
          );
        }
        const signatureType =
          signature === ecdsaSignature ? "ecdsa" : "ed25519";
        const publicKey = this.getPublicKey(signatureType);
        if (!publicKey) {
          throw new HttpErrors[401](`Public key is not set.`);
        }
        this.verifyRequest(
          body,
          signatureTimestamp,
          signature,
          publicKey,
          signatureType
        );
        return true;
      } catch (err) {
        if (HttpErrors.isHttpError(err)) {
          res.status(err.statusCode).json({
            message: err.message,
          });
          return false;
        } else {
          res.status(403).json({
            message: "Unauthorized",
          });
          return false;
        }
      }
    } else {
      return true;
    }
  }
```

In the snippet above, we check if the `SKIP_VERIFICATION` env variable is set to true. If it is, we skip the verification process and return true. Otherwise, we check for the signature headers and verify the signature against the public key. If the signature is valid, we return true, otherwise we return false and send an error response.

Next, we define a function to get the Collab.Land public keys:

```js
 private getPublicKey(signatureType: "ecdsa" | "ed25519") {
    return signatureType === "ecdsa"
      ? SignatureVerifier.ECDSAPublicKey
      : SignatureVerifier.ED25519PublicKey;
  }
```

In the snippet above, we return the appropriate public key based on the signature type.

Next, we define a function to verify the signature using the ED25519 algorithm:

```js
private verifyRequestWithEd25519(
    publicKey: string,
    signature: string,
    body: string
  ) {
    let verified = false;
    try {
      debug("Verifying webhook request with Ed25519 signature...");
      debug(
        "Public key: %s, signature: %s, message: %s",
        publicKey,
        signature,
        body
      );
      verified =
        signature != null &&
        nacl.sign.detached.verify(
          Buffer.from(body, "utf-8"),
          Buffer.from(signature, "hex"),
          Buffer.from(publicKey, "hex")
        );
      debug("Signature verified: %s", verified);
    } catch (err: AnyType) {
      verified = false;
      debug(err.message);
    }

    if (!verified) {
      throw new HttpErrors[403](
        "Invalid request - Ed25519 signature cannot be verified."
      );
    }
    return verified;
  }
```

In the snippet above, we verify the signature using the ED25519 algorithm. We use the `nacl` library to verify the signature.

Consequently, we define a function to verify the signature using the ECDSA algorithm:

```js
 private verifyRequestWithEcdsa(
    publicKey: string,
    signature: string,
    body: string
  ) {
    let verified = false;
    try {
      debug("Verifying webhook request with Ecdsa signature...");
      debug(
        "Public key: %s, signature: %s, message: %s",
        publicKey,
        signature,
        body
      );
      const digest = utils.hashMessage(body);
      verified =
        signature != null &&
        utils.recoverPublicKey(digest, signature) === publicKey;
      debug("Signature verified: %s", verified);
    } catch (err) {
      debug("Fail to verify signature: %O", err);
      verified = false;
    }

    if (!verified) {
      debug("Invalid signature: %s, body: %s", signature, body);
      throw new HttpErrors[403](
        "Invalid request - Ecdsa signature cannot be verified."
      );
    }
    return verified;
  }
```

Here, we verify the signature using the ECDSA algorithm. We use the `ethers` library to verify the signature.

Finally, we define a function to verify the request payload:

```js
private verifyRequest(
    body: string,
    signatureTimestamp: number,
    signature: string,
    publicKey: string,
    signatureType = "ecdsa"
  ) {
    const delta = Math.abs(Date.now() - signatureTimestamp);
    if (delta >= 5 * 60 * 1000) {
      throw new HttpErrors[403](
        "Invalid request - signature timestamp is expired."
      );
    }
    const msg = signatureTimestamp + body;
    if (signatureType === "ed25519") {
      this.verifyRequestWithEd25519(publicKey, signature, msg);
    } else if (signatureType === "ecdsa") {
      this.verifyRequestWithEcdsa(publicKey, signature, msg);
    }
    return JSON.parse(body);
  }
```

In conclusion, implementing signature verification in your Collab.Land Miniapps is crucial for ensuring data security and protecting against potential threats. By following these steps and best practices, you can create a safer and more trustworthy environment for your users while building innovative Miniapps on the Collab.Land Miniapps. Happy coding and stay secure!
