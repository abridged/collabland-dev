---
sidebar_position: 2
sidebar_label: Update the Command Center
sidebar_class_name: nav-normal-page
---

# Update the Command Center

```mdx-code-block
<div
  style={{
    position: "relative",
    paddingBottom: "64.5933014354067%",
    height: 0
  }}
>
  <iframe
    src="https://www.loom.com/embed/7282f59b91de4598b79b4849c2fc04af"
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

# Command Center

## Step 1: Open the File on Github

[https://github.com/abridged/collabland-portal/blob/master/src/constants/community.ts](https://github.com/abridged/collabland-portal/blob/master/src/constants/community.ts)

## Step 2: Open Edit Mode

Click the pencil icon in the upper right hand corner of the file

![Open Edit Mode](./imgs/img4.png)

## Step 3: Verify your token types are supported

Examine `tokenTypes` if your token types are supported proceed.  If not contact support about a custom use case as this tutorial will not be sufficient. 

## Step 4: Add your Chain ID

Scroll down to `chainTypes`. 

![Add chain id](./imgs/img5.png)

Add a new record following this format

```bash
 {
    label: '[CHAIN_NAME]',
    value: '[CHAIN_ID]',
    isDisabled: false,
    dropdownGroup: 'Ethereum Virtual Machine',
  },
```

![Add new record](./imgs/img6.png)

## Step 5: Edit Supported Token Types For Your New Chain

Add a case to the function `getAllowListByChainType`

Determine what types of tokens are supported on your chain.  It’s safe to go with these standards.  Further research may be required before supporting more token types. 

```bash
case '300':
      return [
        'ERC20',
        'ERC721',
        'ERC1155',
      ];

case '[CHAIN_ID]':
      return [
        '[SUPPORTED_TOKEN_TYPE]',
        '[SUPPORTED_TOKEN_TYPE]',
        '[SUPPORTED_TOKEN_TYPE]',
      ];
```

![Edit supported token types](./imgs/img7.png)

# Step 6: Add a Custom Block Explorer

Add a case to `getLinkByChainAndTokenType`

Follow this format

```bash
case '300':
      return 'https://blockscout.com/xdai/optimism';

case '[CHAIN_ID]':
      return '[BLOCK_EXPLORER_BASE_URL]';
```

![Add custom block explorer](./imgs/img8.png)

# Step 7: Commit Your Changes

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
