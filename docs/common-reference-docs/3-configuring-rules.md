# Configuring TGRs(Token Gating Rules)

TGRs are the rules that the wallet assets will be checked against by Collab.Land. The API will return `true/false` for each rule to indicate if the wallet address fulfils the defined rules or not.

For setting up the Token Gating Rules and sending it in the API request, below are the fields you need to input along with example:

## Define Token Gating Rules

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

Collab.Land supports many fungible and non-fungible tokens on many chains. Please see below for more information on defining TGRs. Example reuest for the token gating API:

Note: * indicates a required field.

```json
{
  "account": "string",
  "rules": [
    {
      "chainId*": 0,
      "type*": "string",
      "contractAddress*": "string",
      "tokenId": "string",
      "minToken": "string",
      "maxToken": "string",
      "roleId": "string",
      "name": "string",
      "description": "string",
      "id": "string",
      "tokenSymbol": "string",
      "collectionName": "string",
      "classifierGroup": "string",
      "eventId": "string",
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

### Token Details Explained

To find the token details, please refer to this article: [Find Token Details](./finding-token-details)

**chainId***: Enter the chain ID that your token is on.The chainID is a unique ID assigned to each chain(L1 and L2) - For example 1 is the the chainID for Ethereum Mainnet 137 is the chainID of Polygon Mainnet. You can find the chainIds here: [Chainlist](https://chainlist.org/)

**type***: Select the token type of your token. For example, for EVM based chains, it can ERC-20, ERC-721, ERC-1155, etc.

**contractAddress***: Input the contract address of your token.

**tokenId (optional)**: For NFT token types such as ERC-721 & ERC-1155, you can add specific token IDs.

*Note*: When using the ERC-1155 token type, you must enter the token IDs for all tokens in your collection in the token ID section. Token IDs should be separated by one comma, and no spaces. You can also input a range of token IDs, for example: 30-90.

**minToken (optional)**: Input the minimum amount of tokens that are required to get the role.

*Note*: If you do not enter a minimum amount of tokens, the default is 1.

**maxToken (optional)**: Input the maximum amount of tokens that are required to get the role.

*Note*: If you do not enter a maximum amount of tokens, the default is infinity.

**roleID (optional)**: Role ID is a unique identifier for the rules. You can use this to identify the rules in the API response.

**Attributes (optional)**: For NFT token types such as ERC-721, you can add specific metadata conditions. For example, you can add a condition that the token must have a specific attribute or trait.

*Note*: You can find the metadata traits and attributes for your token by looking at the properties tab of the token on OpenSea or by using the [Find Token Details](./finding-token-details) article.

## Sample Request & Response

### Sample request

POST https://api.collab.land/access-control/check-roles

```json
{
  "account": "0x01c20350ad8f434bedf6ea901203ac4cf7bca295",
  "rules": [
    {
      "type": "ERC721",
      "chainId": 1,
      "minToken": "1",
      "contractAddress": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "roleId": "001"
    }
  ]
}
```

### Sample response

```json
{
  "roles": [
    {
      "id": "001",
      "granted": true
    }
  ]
}
```

### More examples of TGRs

You can have TGR for Fungible Tokens(ERC-20), for example `$USDC` on Etherum Mainnet, the following example requires at least 1 $USDC token and at most 100 $USDC tokens to qualify for the role ID `001`.

```json
"rules": [
  {
      "roleId": "001",
      "chainId": 1,
      "minToken": "1",
      "maxToken": "100",
      "contractAddress": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "type": "ERC20"
  }
]
```

You can also have TGRs for NFTs(ERC-721 & ERC-1155). In case of ERC-721 for example, the following example requires at least 1 NFT of contract address `0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d` on mainnet to qualify for the role ID `002`.

```json
"rules": [
  {
      "roleId": "002",
      "chainId": 1,
      "minToken": "1",
      "contractAddress": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "type": "ERC721"
  }
]
```

Let's take an example of ERC-1155, for example, the following example requires at least 1 NFT of contract address `0x2953399124F0cBB46d2CbACD8A89cF0599974963` on Polygon Mainnet which has token ID `12382299798866046354843276329909118056248259593254812422227920898302362517754` to qualify for the role ID `003`.

```json
"rules": [
  {
      "name": "Stoned Dawgz WL Pass",
      "roleId": "003",
      "chainId": 137,
      "tokenId": "12382299798866046354843276329909118056248259593254812422227920898302362517754",
      "minToken": "1",
      "contractAddress": "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
      "type": "ERC1155"
  }
]
```

For ERC-1155, since it requires entering each token ID, we also support OpenSea collections which are on Etherum mainnet. For example, the following example requires at least 1 NFT of collection `conanscircle` on Ethereum Mainnet.

```json
"rules": [
  {
      "collectionName": "conanscircle",
      "name": "holder",
      "roleId": "1004407674521276519",
      "chainId": 1,
      "minToken": "1",
      "type": "OPEN_SEA"
  }
]
```

Other than EVM based chains, you can also have TGRs for other chains such as Solana and many others.

Here are some examples of TGRs for Solana:

```json
"rules": [
  {
      "tokenId": "2nPkG7zgW8Edr5eNhbaJ1RqNgx6Ds4ZsRM8qTRBNe2i1",
      "name": "Degen Whale",
      "roleId": "1022118100830802004",
      "chainId": 8000000000101,
      "minToken": "5",
      "contractAddress": "creators",
      "type": "SOLANA_NFT"
    }
]
```

```json
"rules": [
  {
    "name": "Okay Bear holder",
    "roleId": "1000023899439902775",
    "chainId": 8000000000101,
    "minToken": "1",
    "contractAddress": "CJk8TvAXcq1cvC85M9aMQCxPMkTCSuWN5HsFEgAjh4ut",
    "type": "SOLANA_FT"
  }
]
```

For utilizing these Token Gated Rules in your website, please refer to this tutorial: [Website Token Gating Tutorial](../../tutorials/token-gating)
