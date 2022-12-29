# Configuring TGRs

For setting up the Token Gating Rules and sending it in the API request, below are the fields you need to input along with example:

TGRs are the rules that the wallet assets will be checked against by the Collab.Land. The API will return boolean true/false for each rule to indicate if the account address fulfills the defined rules or not.

### Define Token Gating Rules


Token Gating Rules (TGRs) are schemas that describe the required tokens. TGRs usually include token information such as `chain id`, `contract address`, `token types`, `metadata`, etc. The following is an example TGR that requires at least one NFT of contract address `0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d` on mainnet.

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

Collab.Land supports many fungible and non-fungible tokens on many chains. Please see below for more information on defining TGRs.

```
{
  "account": "string",
  "rules": [
    {
      "id": "string",
      "classifierGroup": "string",
      "name": "string",
      "description": "string",
      "roleId": "string",
      "minToken": "string",
      "maxToken": "string",
      "chainId*": 0,
      "tokenSymbol": "string",
      "tokenId": "string",
      "collectionName": "string",
      "eventId": "string",
      "contractAddress*": "string",
      "type*": "string",
      "scheme": "string",
      "query": "string",
      "variables": {
        "_dummyFieldForGraphQL": "string",
        "additionalProp1": {}
      },
      "asset": "string",
      "requiresMetadata": true,
      "version": "string"
    }
  ],
  "callbackUrl": "string",
  "async": true
}
```

### Token Details Explained:

To find the token details, please refer to this article: [Find Token Details](./4-finding-token-details)

**chainId***: Enter the chain ID that your token is on.The chainID is a unique ID assigned to each chain(L1 and L2) - For example 1 is the the chainID for Ethereum Mainnet 137 is the chainID of Polygon Mainnet. You can find the chainIds here: https://chainlist.org/

**Type***: Select the token type of your token from the dropdown list.

**contractAddress***: Input the contract address of your token

Note: When using the ERC-1155 token type, you must enter the token IDs for all tokens in your collection in the token ID section. Token IDs should be separated by one comma, and no spaces.

Balance: Input the minimum amount, and maximum (optional) amount of tokens that are required to get the role.

Attributes (optional): For NFT token types such as ERC-721, you can add specific metadata conditions. If your NFT contains metadata traits and values you can enter them by clicking on the Attributes button, and clicking on + Add metadata. 

Note: You can find the metadata traits and attributes for your token by looking at the properties tab of the token on OpenSea.

Once you have finished adding your metadata, click the Add Traits button or it will not be saved.