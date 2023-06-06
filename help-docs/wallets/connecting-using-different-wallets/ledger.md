---
sidebar_position: 5
---

# Ledger

## Blind Signing

Blind signing refers to confirming a blockchain-based smart contract transaction without knowing its full details. Both hardware and software wallets have limitations in displaying the details of smart contracts, leaving users relying on trust rather than verification. Ledger aims to provide transparency in transactions by enabling "clear signing" through its integrated apps within Ledger Live.

However, in non-integrated transactions, users may be prompted to "enable blind signing," which allows their device to approve a smart contract transaction without being able to display its full details. When using blind signing, users should be wary and take extra precautions such as verifying the URL of the website and the website's reputation.

### Enable Blind Signing

:::note

Follow [this guide](https://support.ledger.com/hc/en-us/articles/4405481324433-Enable-blind-signing-in-the-Ethereum-ETH-app) to enable blind signing.

:::

## Using Ledger devices with Collab.Land

:::caution

Ledger Live will not work when verifying with Collab.Land! Ledger users must use wallets such as MetaMask or Phantom to verify with Collab.Land.

:::

### MetaMask

:::tip

You can set up a MetaMask interface for your Ledger device by following the Ledger user guide to [connect your Ledger to MetaMask](https://support.ledger.com/hc/en-us/articles/4404366864657-Set-up-and-use-MetaMask-to-access-your-Ledger-Ethereum-ETH-account?docs=true).

:::

If you want to confirm the verification process through a Ledger device that is integrated with Metamask, follow these steps:

1. Open the MetaMask browser extension and click the three dots in the top right corner.
2. Select the "Connect Hardware Wallet" option.
3. Connect your Ledger device to your computer using a USB cable.
4. Unlock your Ledger device by entering your pin code.
5. Select the Ethereum app on your Ledger device.
6. In the MetaMask extension, select "Ledger" as the hardware wallet type.
7. Follow the on-screen instructions to complete the connection process.

### Phantom

Solana community members can now utilize their Ledger hardware devices with Phantom wallet for verification on Collab.Land. 

:::tip

Follow the [Ledger guide for setting up Phantom wallet](https://support.ledger.com/hc/en-us/articles/4408131265169-Set-up-and-use-Phantom-to-access-your-Ledger-Solana-SOL-account?docs=true) to access Solana assets in Ledger hardware wallets.

:::

To get started, please follow these steps:

1. Ensure your Ledger device is unlocked and the Solana app is open on the device.
2. In the Discord server you would like to verify in, click the "Let's Go!" button and follow the link provided by Collab.Land.
3. On the verification page, click on "+ Verify with a New Wallet" and then click "Show All" to display all wallet options.
4. From the list of supported wallets, select the Solana option.
5. In the wallet type options, choose Solana (Phantom).
6. A popup will appear explaining the type of message you are signing. After reading the message, click OK. Please note that Collab.Land utilizes a MEMO transaction type for Ledger verification on Solana. This is a read-only transaction type and no funds will be transferred, with no network fees involved. It is also important to ensure that blind signing is enabled on the Ledger device.
7. Click the "Sign Message" button.
8. Approve the transaction in the Phantom wallet popup.
9. Approve the transaction on your Ledger device. Please make sure the device is unlocked, the Solana app is open, and blind signing is enabled.

By following these steps, you will be able to successfully connect your Ledger hardware device with Phantom wallet for verification on Collab.Land.
