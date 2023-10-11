---
sidebar_position: 8
title: Gitcoin Passport
id: gtc-passport
---

import img1 from '@site/static/img/tutorial/command-center/create-passport-tgr.png';

Passport is the citizenship pass for the decentralized internet.

With Passport’s Unique Humanity Scorer tool, you can protect your community from bots and Sybils by requiring and enabling members to present evidence that they are real, unique humans and signal their trustworthiness.

## Overview

Gitcoin Passport is an identity verification application that allows members to add web2 and web3 verifiable credentials (called Stamps) to their Passport that proves that they are human.

Each Stamp comes with a score, and as members add more Stamps to their Passport, the Stamp scores add up to the make the Unique Humanity Score.

We can then require members have a Unique Humanity Score more than a defined minimum score as a TGR. For example, if we require a minimum score of 20, only those users that have a Passport score of 20 or above will be able to gain the role.

Read more about Passport on the [Gitcoin support docs](https://support.gitcoin.co/gitcoin-knowledge-base/gitcoin-passport/what-is-gitcoin-passport) and the [Passport dev docs](https://docs.passport.gitcoin.co/building-with-passport/introduction#what-is-passport).

### How to Create a Passport TGR

To configure a Passport TGR, follow these steps:

1. Log in to the [Command Center](../../key-features/command-center) at https://cc.collab.land using Discord.

2. From the left panel, select the server you would like to create the TGR in. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR.
   - Write an informative description for the TGR.

4. Set the `Chain Type` to Gitcoin Passport.

5. Set `Token Type` to Humanity Score.

6. Set the Minimum score a member must have to get the Discord role. Gitcoin recommends a score of 20 for the best defense against Sybils and bots.
   - Optional: Set a Maximum score.

7. Click "Save".

The final configuration of a Passport TGR should look like this:

<div class="text--center">
   <img  src={img1} alt="Create a Gitcoin Passport TGR" />
</div>

### How to Create Your Passport

1. Go to the [Gitcoin Passport app](https://passport.gitcoin.co/).

2. Sign in with and Ethereum wallet.

3. Verify as many Stamps as needed to build up your Passport score.
   - Learn more about [verifying Stamps](https://support.gitcoin.co/gitcoin-knowledge-base/gitcoin-passport/what-are-stamps).

4. Use your Passport to fulfill Collab.Land's [Token Gating Rules](/help-docs/key-features/token-gate-communities#what-is-token-gating) and other web3 applications.

Visit the [Gitcoin support docs](https://support.gitcoin.co/gitcoin-knowledge-base/gitcoin-passport/creating-a-gitcoin-passport#sign-into-gitcoin-passport) to learn more.
