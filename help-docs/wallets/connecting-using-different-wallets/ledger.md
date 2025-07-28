---
sidebar_position: 7
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

:::info

Phantom + Ledger used to support off-chain message signing, but this changed in late 2023. Ledger released a firmware update that removed the ability to sign arbitrary off-chain messages (like wallet ownership proofs) for Phantom.
 
As a result, while you can still use Ledger with Phantom to sign on-chain transactions, you can no longer use this combination to sign off-chain messages, including those needed for Collab.Land verification (or any service that requires off-chain message signing).

:::