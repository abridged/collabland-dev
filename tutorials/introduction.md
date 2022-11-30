---
sidebar_position: 1
sidebar_label: Token Gating Tutorial
slug: /token-gating-tutorial
---

# Collab.Land Token Gating Tutorial
## Overview
This guide walks you through creating your own token gate for your website using the Collab.Land API. This enables you to restrict access to elements of or pages of your site based on ownership of certain blockchain assets.

### Website Gating Logic Flow
<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/S5jqcu5XzqBrnRtvgrPBj1@2Ux7TurymNLRX4obG1NB"></iframe>

This tutorial implements gating logic by calling Collab.Land API with a user's wallet address. The API checks against the website-defined ⚠ link needed! [Token-Gating Role] definitions and returns `True/False` if the address fits the provided criteria or not.

⚠ Documentation needed 
- json definition of TGRs and an example needed on [this page](https://dev.collab.land/docs/local-development-setup/configuring-tgr)

#### Token Gating Rule (TGR) example

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
The rule above indicates that at least one ERC721 token of contract address `0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d` must be held in the user's wallet address.

### Example Site
Follow along with the [proof of concept example site](https://member.collab.land/).
<details> <summary>Login info</summary>

- user `collabland`
- password `slash2048`
</details>

--- 
# Tutorial Start
## 1.1 Request an API Key 
<!--*This guide assumes you have already received an [API account](https://dev.collab.land/docs/downstream-integrations/) from Collab.Land. [Request an API Key here.](https://docs.google.com/forms/d/e/1FAIpQLSfUKGy69dMDz-0MPVfNoPrtvV9ouZNiHqUun5-Z-0XyTOReMg/viewform)*-->
*If you already have a Collab.Land API Key, [skip to step 2](#2.1-Get-user%E2%80%99s-wallet-address).*

Fill out the [Collab.Land google form](https://dev.collab.land/docs/downstream-integrations/#request-api-access) to request API access.
### 1.2 Define the API scope
Client application must be approved with `token-gating` scope by Collab.Land. [More information here.](https://dev.collab.land/docs/downstream-integrations/api/token-gating#authentication)

## 2.1 Get user's wallet address
The user's wallet `address` will be used as part of the Collab.Land API call to verify if the address holds the defined on-chain assets. In the future, Collab.Land may expose the Collab.Land wallet connect UI component for developers to use.

For this tutorial, you will use your own ["Connect Wallet" button](#2.2-Use-any-frontend-to-obtain-a-user%E2%80%99s-wallet-address) frontend to obtain the user's wallet address.

### 2.2 Use any frontend to obtain a user's wallet address
Integrate a "Connect Wallet" dapp button from your preferred wallet provider to obtain a user's wallet address.

- If you need some help, the [Sign-In with Ethereum](https://docs.login.xyz/) docs are very helpful
- Add “Connect Wallet” button to your website [tutorial from ThirdWeb](https://blog.thirdweb.com/guides/add-connectwallet-to-your-website/)


## 3. Define Token Gating Rules
These are the rules that the wallet assets will be checked against by the Collab.Land API. The API will return boolean `True`/`False` if the account address fulfills the defined rules or not.

#### Token Gating Rule (TGR) example

```json!
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
The rule above indicates that  at least one ERC721 token of contract address `0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d` must be held in the user's wallet address.

⚠ @Agnes - info needed on passing TGR definitions with API call
- need info for how to construct TGRs and feed into the collab API
- data schema json (could be an api link -- I'm not sure which)
- docs could be collected on https://dev.collab.land/docs/local-development-setup/configuring-tgr


## 4. Call the Collab.Land API
Full documentation of the Collab.Land API can be found here


⚠ I don't know how to interpret the api.collab.land site this page links to
- POST request example [API reference](https://dev.collab.land/docs/downstream-integrations/api/token-gating#sample-request)
    - PoC example showing data schema


## 5. Handle API response
There are several response options available with the Collab.Land API. Select which method you would like to use.

### Sync with polling
https://dev.collab.land/docs/downstream-integrations/api/token-gating#check-roles-synchronously
- receive `True`/`False` from API 

### Async via callback URI
https://dev.collab.land/docs/downstream-integrations/api/token-gating#check-roles-asynchronously
- receive callback URL and a notification via webhook at that URL when API data is available

### Async via callback with polling
https://dev.collab.land/docs/downstream-integrations/api/token-gating/#check-roles-asynchronously-and-poll-for-the-result
- receive a `requestId` from API and poll for result

## 6. Render gated content based on API response
⚠ @Agnes to refactor POC site to simplify
- example POC React snippet 
    - text "hello World!" popup

# Example Site Proof of Concept
Follow along with the [proof of concept](https://member.collab.land/) site.

⚠ @Agnes change POC site to only use frontend [wallet connect button](#22-Use-any-frontend-to-obtain-a-user%E2%80%99s-wallet-address) login

⚠ @Agnes,  change the PoC bot to prod version before tutorial goes live