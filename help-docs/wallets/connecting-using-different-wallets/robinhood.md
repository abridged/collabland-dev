---
sidebar_position: 11
title: Robinhood Wallet
---

Robinhood Wallet is a mobile-only crypto wallet. You connect it to Collab.Land using WalletConnect. It works with nine blockchain networks: Ethereum, Bitcoin, Solana, Dogecoin, Polygon, Arbitrum, Optimism, Base, and Robinhood Chain. Check out the [Robinhood Wallet docs](https://robinhood.com/us/en/support/articles/robinhood-wallet/) to learn more.

### Robinhood verification guide

#### Before you start

- You'll need the Robinhood Wallet app on your phone.
- This wallet only works on mobile, it does *not* work in a desktop browser.

The steps below are the same on Discord and Telegram. The only differences are where you start and what you see at the end, both are called out below.

1. **Initiate Verification:**
   - **Discord:** Go to the `#collabland-join` channel on your server and click **"Let's Go!"**
   - **Telegram:** Open your chat with `Collablandbot`. You'll see the same message there.
2. Click **"Add a New Wallet"**.
3. Read the message that appears, then click **"Connect Wallet"**. This takes you to `connect.collab.land`.
4. From the list of wallets, select **WalletConnect2**.
5. From the WalletConnect2 list, select **Robinhood Wallet**.
6. Open the **Robinhood Wallet** app on your phone. Tap the scanner icon in the browser search bar, on the right side. Use it to scan the QR code shown by Collab.Land.
7. Robinhood Wallet will ask you to connect. Tap **"Connect"**.
8. Now go back to the browser tab or app you were using before, the Wallet Connection page (or the Wallets page, if you're using the Member Portal). This part is important: Robinhood Wallet won't do this for you automatically, so you need to switch back yourself. See the caution below for more on this.
9. Once you're back, Robinhood Wallet will ask you to sign a message.

   Signing this message gives Collab.Land read-only access to your wallet address. This means Collab.Land can see your address, but cannot move funds, sign transactions, or make any changes to your wallet.
10. **Final Step:**
    - **Discord:** Go back to Discord. You'll see a message confirming which roles you've been given.
    - **Telegram:** Go back to Telegram. Telegram doesn't use roles, instead, you'll get direct access to the token gated chat once verification is done.

:::caution

**CAUTION — You have to switch back yourself**

Robinhood Wallet doesn't support something called deep linking. In plain terms, this means the app cannot automatically send you back to the Wallet Connection page after you tap "Connect." You have to do this manually. If you forget, you won't get the second prompt (the one to sign), and your verification won't finish.

:::

:::info

**NOTE — Mobile only**

Robinhood Wallet only works on your phone. If you started this process on a computer, you'll need to switch to your phone and finish there using the Robinhood mobile app.

:::

:::info

**NOTE — Member Portal**

The Member Portal isn't available everywhere yet. It's currently offered to a limited number of communities, chosen to help improve the experience for all members. If your community has it, the steps above work the same way on the Wallets page there.

:::

### Creating Robinhood Chain TGRs and TGAs

Robinhood Chain works the same way as any other EVM chain supported by Collab.Land. If you've created a TGR or TGA before for an EVM chain like Ethereum, Polygon, Base, or Arbitrum, this process will look familiar. The only difference is selecting **Robinhood Chain** as the Chain Type.

#### Creating a Robinhood Chain TGR (Discord)

TGRs (Token Gating Rules) determine which Discord roles a member is assigned based on token-related criteria you define.

1. Log in to the Command Center at [cc.collab.land](https://cc.collab.land) using Discord.
2. From the left panel, select the server where you want to create the TGR. Then click **"TGRs"**.
3. Click **"+ Select Role"** and choose the Discord role you want to use for your TGR.
4. On the TGR configuration page, fill in the fields:
   - **Description (optional):** A reference note, only visible in the Command Center.
   - **Chain Type:** Select **Robinhood Chain**.
   - **Token Type:** The type of token used for the TGR.
   - **Address:** The contract address of your token.
   - **Token ID (optional):** Specific token IDs required to obtain the role.
   - **Balance:** The minimum and maximum (optional) amount of tokens required.
   - **Attributes (conditional):** For NFTs with metadata traits, add trait and value conditions.
5. Click **"Save"** to create your TGR.

That's it, your Robinhood Chain TGR is ready. From here, the same TGR types apply as with any other chain:

- **Balance-Based TGR:** Grants the role to members holding a minimum number of tokens (or a range).
- **Attributes-Based TGR (NFT only):** Grants the role based on specific NFT traits, such as holding an NFT with a particular trait and value.

:::caution

**CAUTION**

Token ID is required for TGRs using ERC1155 tokens, this applies on Robinhood Chain the same as on any other EVM chain.

:::

#### Creating a Robinhood Chain TGA (Telegram)

TGAs (Token Gated Access) work the same way as TGRs, but instead of granting a Discord role, they grant access to a token gated Telegram chat.

1. Go to the Command Center at [cc.collab.land](https://cc.collab.land) and log in with Telegram.
2. Select your group from the left panel.
3. Click **"TGAs"**.
4. Click **"+ Select Role"** and choose the access level.
5. On the TGA configuration page, fill in the same fields as a TGR:
   - **Description (optional)**
   - **Chain Type:** Select **Robinhood Chain**.
   - **Token Type**
   - **Address**
   - **Token ID (optional)**
   - **Balance**
   - **Attributes (conditional)**
6. Click **"Save"** to create your TGA.

Members who meet the criteria will get the access level you set. There are no roles on Telegram, access is either granted or it isn't.

:::tip

**TIP**

You can also reach the Command Center by DMing `@collablandbot` with `/start` and clicking the **"Group Admin (Command Center)"** link.

:::

:::info

**NOTE**

Robinhood Chain TGRs and TGAs support the same Token ID formats as other chains: ranges (`11-99`), lists (`1,2,3,4`), combined lists and ranges (`1,2,42-69,90,101-105`), or a hosted URL linking to a plaintext list of Token IDs.

:::
