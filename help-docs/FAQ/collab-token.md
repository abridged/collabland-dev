import img1 from '@site/static/img/tutorial/token/add-collab-token.gif';
import img2 from '@site/static/img/tutorial/token/switch-to-op.png';
import img3 from '@site/static/img/tutorial/token/assets-tab.png';
import img4 from '@site/static/img/tutorial/token/import-token.png';

# How to Acquire $COLLAB tokens

:::info

Check out Collab.Land's [token story](https://wagmi.collab.land/) and the [DAO token docs](../../dao/token/token_overview.md) to learn about _why_ the $COLLAB token exists.

:::

## TLDR

- If you have a completely new wallet without any assets, fund your wallet with Optimism ETH from an existing wallet or a centralised exchange and then swap the Optimism ETH for COLLAB tokens.
- If you have an old wallet but only have Mainnet ETH on it, swap it for Optimism ETH and then swap the Optimism ETH with COLLAB tokens.
- If you have an old wallet with some Optimism ETH in it, directly swap for COLLAB tokens.

:::tip

Check out the [$COLLAB token details](../../dao/token/token_overview.md) page.

:::

If you have recently created a new wallet address and are ready to acquire $COLLAB tokens, follow these steps to successfully add $COLLAB tokens to your new wallet:

## Step 1: Add Optimism Network to Your Wallet

At the moment, the $COLLAB Tokens are only available on Optimism so to begin, you need to add the Optimism network to your wallet.
For instance, you can add the Optimism network to your MetaMask wallet by going to [https://chainlist.org/chain/10](https://chainlist.org/chain/10).

Once you have added the Optimism network, ensure that you have selected it as your active network in your wallet interface.

---

## Step 2: Fund Your Wallet with Optimism ETH

Now it's time to fund your wallet with Optimism Ether (ETH). There are a few methods to acquire Optimism ETH:

##### Option 1: Transfer from Another Address

If you already possess Optimism ETH in another wallet or address, you can initiate a transfer to your new wallet address. Ensure that you have access to the wallet containing the Optimism ETH and follow the appropriate steps to initiate the transfer. Specify your new wallet address as the recipient.

##### Option 2: Purchase from a Centralized Exchange

Another way to obtain Optimism ETH is by purchasing it from a centralized exchange. Identify a reputable exchange that supports Optimism ETH and follow their processes to deposit funds into your exchange account. Once you have successfully deposited funds, execute a trade to acquire the desired amount of Optimism ETH.

##### Option 3: Bridge Mainnet ETH to Optimism

An alternative method is to bridge your Mainnet ETH to the Optimism network. This process involves using a bridge service that facilitates the transfer of Mainnet ETH to the Optimism network. You can utilize bridges like [Optimism bridge](https://app.optimism.io/bridge/deposit) or [Hop Exchange](https://app.hop.exchange/#/send?sourceNetwork=ethereum&destNetwork=optimism&token=ETH). Access the bridge service of your choice and follow their instructions to bridge your Mainnet ETH to Optimism.

---

## Step 3: Swap Optimism ETH for $COLLAB Tokens

Once your wallet is funded with Optimism ETH, it's time to swap them for $COLLAB tokens. This step requires the use of a decentralized exchange (DEX) such as [Uniswap](https://app.uniswap.org/). Follow the steps below to complete the swap:

- Access the Uniswap platform using this URL: https://app.uniswap.org/#/swap.
- Ensure that your wallet is connected to the Optimism network. You can usually find a "Connect Wallet" or similar button on the DEX interface. Select your wallet and authorize the connection.
- In the swap interface, select the Optimism ETH token as the input token.
- Specify the amount of Optimism ETH you wish to swap for $COLLAB tokens.
- Locate and select $COLLAB as the output token. Ensure that the token details match the official $COLLAB token: [`0x8b21e9b7daf2c4325bf3d18c1beb79a347fe902a`](https://optimistic.etherscan.io/token/0x8b21e9b7daf2c4325bf3d18c1beb79a347fe902a).
- Review the transaction details, including the estimated gas fees, before confirming the swap.
- Once you are satisfied with the details, initiate the swap transaction and confirm it using your wallet.

Wait for the transaction to be processed on the Optimism network. You can monitor the progress and view the transaction details on the Optimism block explorer.
Congratulations! You have successfully acquired $COLLAB tokens and they are now stored in your wallet on the Optimism network. You can view your token balance in your wallet interface or explore further opportunities to utilize your $COLLAB tokens within the Optimism ecosystem.

---

## Step 4: Add $COLLAB token to MetaMask

Note: You must be on the Optimism network to start this process.
See [How to add the Optimism network to MetaMask (or preferred EVM wallet)](https://www.notion.so/How-to-add-the-Optimism-network-to-MetaMask-or-preferred-EVM-wallet-61d314fe3dee49909f2000d41388cf5f?pvs=21) if needed.

### GIF Tutorial

Contract address is `0x8B21e9b7dAF2c4325bf3D18c1BeB79A347fE902A` and you can view the contract on [Optimistic Etherscan](https://optimistic.etherscan.io/token/0x8b21e9b7daf2c4325bf3d18c1beb79a347fe902a). You can read more about the token details on the [DAO docs](../../dao/token/token_overview.md).

  <div class="text--center">
    <img  src={img1} alt="How to add COLLAB tokens to EVM wallets like MetaMask" />
  </div>

1. Switch to the Optimism network in your wallet

  <div class="text--center">
    <img  src={img2} alt="Switch to the Optimism network" />
  </div>

2. Select “Assets” tab in MetaMask

  <div class="text--center">
    <img  src={img3} alt="Select the Assets tab in MetaMask" />
  </div>

3. Press the "Import tokens" option at the bottom of the Assets list.
    1. Enter “Token contract address”: `0x8b21e9b7daf2c4325bf3d18c1beb79a347fe902a`
    2. “Token Symbol”: `COLLAB`
    3. “Token Decimal”: `18`

  <div class="text--center">
    <img  src={img4} alt="Click the Import tokens option" />
  </div>

4. Your Collab tokens will now be visible in your MetaMask wallet.
