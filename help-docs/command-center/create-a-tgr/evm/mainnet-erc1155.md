---
sidebar_position: 2
id: ERC1155
title: ERC1155 collections
---

import img1 from '@site/static/img/tutorial/command-center/erc1155-opensea.png';
import img2 from '@site/static/img/tutorial/command-center/erc1155-no-opensea.png';

The OpenSea shared storefront uses the `ERC1155` standard to mint NFT tokens as they are purchased rather than minting ahead of time. Use Collab.Land's `OpenSea` token type for collections created via OpenSea. For other contracts use the `ERC1155` token type.

## TGRs for Opensea Shared Storefront

:::note

TGRs for `ERC1155` collections via OpenSea are only supported for Ethereum mainnet and Gnosis chain currently.

:::

To create a TGR for an OpenSea shared storefront collection:

1. Log in to the Command Center at https://cc.collab.land.

2. From the left panel, select the server in which you would like to create the TGR. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR.

4. Enter the token details for your NFT.
   - Description (optional): A description of your TGR that will only be displayed in the CC for reference purposes.
   - Chain Type: `Mainnet`
   - Token Type: `Opensea`
   - Collection Name: The collection name of your token
   - Balance: The minimum and maximum (optional) amount of tokens required to obtain the role
5. Click "Save"

:::info

The collection name must match the OpenSea collection _exactly_. Copy the collection name from the URL of the collection on OpenSea.

For example, if the URL of your collection is "opensea.io/collection/liquiddreams2-0", then use `liquiddreams2-0` as the Collection Name.

:::

<div class="text--center">
   <img  src={img1} alt="Create a TGR for an NFT on the Opensea shared storefront" />
</div>

## Other ERC1155 NFT collections

Use these steps for collections not created via OpenSea and on networks other than Ethereum mainnet and Gnosis chain.

To create a TGR for an `ERC1155` collection not listed on OpenSea, follow these steps:

1. Log in to the Command Center at https://cc.collab.land.

2. From the left panel, select the server in which you would like to create the TGR. Then, click on "TGRs".

3. Click the "+ Select Role" button and choose the Discord role you would like to use for your TGR.

4. Enter the token details for your NFT token.
   - Description (optional): A description of your TGR that will only be displayed in the CC for reference purposes.
   - Chain Type: Mainnet or other [EVM chain](/help-docs/key-features/token-gate-communities#supported-blockchains--tokens)
   - Token Type: `ERC1155`
   - Address: The contract address of your token
   - Balance: The minimum and maximum (optional) amount of tokens required to obtain the role
   - Token ID (**required**): All of the Token IDs you want configured.
5. Click "Save"

The configuration of an `ERC1155` TGR should look like this:

<div class="text--center">
    <img  src={img2} alt="Create an ER1155 TGR" />
</div>

:::caution

Token IDs are _**required**_ for `ERC1155` TGRs, the TGR will not work without them.

See [How to Create a TGR](/help-docs/command-center/create-a-tgr/how-to-create-a-tgr#supported-token-id-formats) for supported Token ID formats.

:::

### How to Get the Full List of Token Ids for an ERC1155 Collection

Shoutout to CryptoPortfolio for creating this script.

## Get All ERC1155 tokenIds Via OpenSea API

This Node.js script allows you to fetch data from the OpenSea API for a specific collection and save the token IDs to a text file. It handles rate limiting and pagination automatically.

### Prerequisites

Before using this script, ensure you have the following prerequisites:

1. Node.js installed on your system. (https://nodejs.org/en/download/)
2. An OpenSea collection name. (Tip: Copy colection name directly from OpenSea Url)
3. An API key from OpenSea. (https://docs.opensea.io/reference/api-keys)

### Instructions

Follow these steps to use the script:

1. Replace the following placeholders in the script with your own information:

   - `CollectionName`: Replace `'Your_OpenSea_Collection_Name'` with the name of your OpenSea collection.
   - `API_Key`: Replace `'Your_API_Key'` with your own API Key from OpenSea.

2. Save the changes to the script file.

3. Open your terminal or command prompt.

4. Navigate to the directory where the script is located using the `cd` command.

5. Run the script by executing the following command:

   ```shell
   node Script_Name.js
   ```

6. The script will start fetching data from the OpenSea API. It will save the token IDs to a file named `${CollectionName}-token_ids.txt` in the same directory as the script.

7. If there are multiple pages of data (50 per page), the script will automatically fetch and append them. Progress and error messages will be displayed in the terminal.

8. Once the script completes, you will find the token IDs in the `${CollectionName}-token_ids.txt` file.

### Notes

- The script includes a rate-limiting mechanism to handle HTTP 429 (rate limit exceeded) responses. It will automatically retry the request after a delay (30-second) if a rate-limiting error occurs.

- You can customize the delay between requests by modifying the `await delay(10000);` line (10 seconds in this example). Adjust it as needed to comply with OpenSea's rate limits.

- If you encounter any issues or errors, review the console output for error messages and take appropriate action.

- Make sure to keep your API key confidential and do not share it with others.

### Script

```jsx title="ERC1155 TokenIds Script"
const axios = require('axios');
const fs = require('fs');

const CollectionName = 'Your_OpenSea_Collection_Name'; //Replace  with your OpenSea collection name.
const API_Key = 'Your_API_Key'; // Replace "Your_API_Key" with your own API Key from Opensea.

const options = {
  method: 'GET',
  url: `https://api.opensea.io/v2/collection/${CollectionName}/nfts?limit=50`,
  headers: {
    accept: 'application/json',
    'X-API-KEY': API_Key,
  },
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchData = async (url) => {
  try {
    options.url = url || options.url; // Use the provided URL or fallback to the default URL
    const response = await axios.request(options);
    const tokenIds = response.data.nfts.map((nft) => nft.identifier);

    // Check if it's not the first batch before appending a comma
    const separator = fs.existsSync(`${CollectionName}-token_ids.txt`)
      ? ','
      : '';
    fs.appendFile(
      `${CollectionName}-token_ids.txt`,
      separator + tokenIds.join(','),
      (err) => {
        if (err) {
          console.error('Error saving token IDs:', err);
        } else {
          console.log('Token IDs saved successfully!');
        }
      }
    );

    const next = response.data.next;
    if (next) {
      fs.appendFile(`${CollectionName}-next.txt`, next + '\n', (err) => {
        if (err) {
          console.error('Error saving next value:', err);
        } else {
          console.log('Next value saved successfully!');
        }
      });
      await delay(10000); // 10-second delay between requests
      await fetchData(options.url + '&next=' + next); // Make the next request with the updated URL
    } else {
      console.log('All token IDs fetched successfully!');
    }
  } catch (error) {
    if (
      error.code === 'ERR_SOCKET_CONNECTION_TIMEOUT' ||
      (error.response && error.response.status === 429)
    ) {
      console.log('Rate limit exceeded. Retrying after delay...');
      await delay(30000); // 30-second delay for rate limiting errors
      await fetchData(url); // Retry the request with the same URL
    } else {
      console.error('API request error:', error);
    }
  }
};

fetchData();
```
