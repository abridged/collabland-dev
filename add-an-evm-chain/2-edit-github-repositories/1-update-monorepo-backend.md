---
sidebar_position: 1
sidebar_label: Update the Monorepo Backend
sidebar_class_name: nav-normal-page
---

# Update the Monorepo Backend

```mdx-code-block
<div
  style={{
    position: "relative",
    paddingBottom: "64.5933014354067%",
    height: 0
  }}
>
  <iframe
    src="https://www.loom.com/embed/da43c9d1c52943ab8a216b7ffd18615c"
    frameBorder={0}
    webkitallowfullscreen=""
    mozallowfullscreen=""
    allowFullScreen=""
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  />
</div>
```

# API Server

## Step 1: Open the File on Github

[https://github.com/abridged/collabland-monorepo/blob/master/connectors/ethereum/src/config.ts](https://github.com/abridged/collabland-monorepo/blob/master/connectors/ethereum/src/config.ts) 

## Step 2: Add network with an RPC

Add a record to the object `EthereumNetworkConfig` following this format

```bash

{
  chainId: [CHAIN_ID],
  description: '[CHAIN_NAME]',
  names: ['[CHAIN_NAME_AS_SLUG]', '[CHAIN_NAME_AS_SLUG]'],
  rpcs: [
    '[RPC_URL]',
  ],
  explorers: ['[BLOCK_EXPLORER_URL]'],
},
```

Preview for reference:

```bash
...
export const EVM_NETWORK_CONFIGS: EthereumNetworkConfig[] = [
  {
    chainId: 2020,
    description: 'Ronin network for Axie Infinity',
    names: ['ronin'],
    rpcs: ['https://api-partner.roninchain.com/rpc'],
    explorers: ['https://explorer.roninchain.com/'],
  },
  {
    chainId: 137,
    description: 'Polygon mainnet',
    names: ['matic', 'polygon', 'polygon-mainnet'],
    maxBlocks: 2000, // 3500,
    providers: ['infura', 'alchemy'],
    explorers: ['https://polygonscan.com/'],
  },
  {
    chainId: 100,
    description: 'Gnosis chain',
    names: ['xdai', 'gnosischain'],
    rpcs: [
      'https://rpc.gnosischain.com/',
      'https://rpc.ankr.com/gnosis',
      'https://gnosischain-rpc.gateway.pokt.network/',
      'https://gnosis-mainnet.public.blastapi.io/',
    ],
    explorers: ['https://blockscout.com/xdai/mainnet'],
  },
...
```

## Step 3: Commit Your Changes

1. Scroll down
2. Give the commit a title and body.  Follow this format

```bash
**title:**
Add EVM Chain [CHAIN_ID] - [CHAIN_NAME]

**body:**
Add EVM Chain [CHAIN_ID] - [CHAIN_NAME]

Signed-off-by: [YOUR_FULL_NAME] <[DEVELOPER_EMAIL]>
```

1. Select “Create a new branch for this commit and start a pull request”
2. Name your branch. Follow this format

```bash
**branch name:**

add-evm-chain-[CHAIN_ID]
```

1. Click “Propose Changes”

![Propose Changes](./imgs/img1.png)

1. Create the actual pull request
    1. Make sure your merging into `main`
    2. select at least one reviewer.  You can use the gear to pick from a drop down.  Select `alokt`
    3. Click “Create pull request”

![Create PR](./imgs/img2.png)

1. Recognize that you cannot merge until your change has been reviewed.

![Review is required](./imgs/img3.png)

1. Copy the URL for your pull request so that you can track it’s progress
    1. [https://github.com/abridged/collabland-connect/pull/156](https://github.com/abridged/collabland-connect/pull/156)
