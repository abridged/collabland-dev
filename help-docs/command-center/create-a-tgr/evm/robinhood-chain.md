---
sidebar_position: 3
title: Robinhood Chain
---

Robinhood Chain works the same way as any other EVM chain supported by Collab.Land. If you've created a TGR or TGA before for an EVM chain like Ethereum, Polygon, Base, or Arbitrum, this process will look familiar. The only difference is selecting **Robinhood Chain** as the Chain Type.

### Creating a Robinhood Chain TGR (Discord)

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

### Creating a Robinhood Chain TGA (Telegram)

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

For Telegram, you can also reach the Command Center by DMing `@collablandbot` with `/start` and clicking the **"Group Admin (Command Center)"** link.

:::

:::info

**NOTE**

Robinhood Chain TGRs and TGAs support the same Token ID formats as other chains: ranges (`11-99`), lists (`1,2,3,4`), combined lists and ranges (`1,2,42-69,90,101-105`), or a hosted URL linking to a plaintext list of Token IDs.

:::
