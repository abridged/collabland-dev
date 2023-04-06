# Configuring TGRs(Token Gating Rules)

This documentation provides detailed information on how to configure Token Gating Rules (TGRs) in Collab.Land. TGRs are the rules against which wallet assets are checked. The API returns a `true/false` response for each rule to indicate whether a wallet address fulfills the defined rules or not. This documentation covers the different properties used to define TGRs and provides examples of TGR schemas for different types of tokens.

## Supported Chains and Tokens:

Collab.Land supports fungible and non-fungible tokens on many chains. You can find a list of supported chains and tokens on the [Collab.Land support page](https://collabland.freshdesk.com/support/solutions/articles/70000641603-supported-chains-and-tokens-by-collab-land).

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

### TGR Properties Explained

To find token details, please refer to this article [Find Token Details](./finding-token-details).

> (\*) indicates a required field.

**chainId\***: The unique ID assigned to each chain. For example, Ethereum Mainnet's chainID is 1, and Polygon Mainnet's chainID is 137. ChainIDs for different chains can be found on [Chainlist](https://chainlist.org/).

**type\***: The token type of the token. For EVM based chains, it can be ERC20, ERC721, or ERC1155, etc. For non-EVM chains, it can be Solana, Flow, etc. If unsure, use the [Find Token Details](./finding-token-details) article to find the token type.

**contractAddress \***: The contract address of the token.

**tokenId (optional)**: For NFT token types such as `ERC721` & `ERC1155`, specific token IDs can be added.

> When defining Token Gating Rules for ERC1155 token types, the token ID must be specified. When defining TGRs for a collection, Multiple token IDs should be separated by one comma, and no spaces. In addition, a range of token IDs can also be inputted by using a hyphen between the start and end of the range. For example, "30-90" would indicate a range of token IDs from 30 to 90. Following these guidelines ensures that all relevant tokens are included in the defined Token Gating Rules.

**minToken (optional)**: The minimum amount of tokens required to qualify for the role.

> If a minimum token amount is not specified when defining Token Gating Rules, `minToken` defaults to 1.

**maxToken (optional)**: The maximum amount of tokens required to qualify for the role.

> If a maximum token amount is not specified when defining Token Gating Rules, `maxToken` defaults to infinity.

**roleID (optional)**: The unique identifier assigned to the role that will be granted to the user. If no roleID is specified, the roleID defaults to `001`.

**Attributes (optional)**: Developers can add specific metadata conditions to NFT token types such as `ERC721`. For example, it is possible to require that the token has a particular attribute or trait.

> You can find the metadata traits and attributes for your token by looking at the properties tab of the token on OpenSea or by using the [Find Token Details](./finding-token-details) article.

## Define Token Gating Rules

Token Gating Rules (TGRs) are schemas that describe the required tokens. They usually include information about the token such as `chain id`, `contract address`, `token types`, `metadata`, etc. However, different tokens require different schemas.

## Token Schemas

The following are examples of TGR schemas for different types of tokens:

### ERC721 Tokens

The following is an example TGR that requires at least one ERC721 NFT of contract address `0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d` on mainnet.

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

A successful response for this token schema (and every other granted TGR) will look like this:

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

### Fungible Tokens Schema (ERC20)

You can have TGRs for Fungible Tokens(ERC20), for example `$USDC` on Ethereum Mainnet. The following example requires at least 1 $USDC token and at most 100 $USDC tokens to qualify for the role ID `Millionaire`.

```json
"rules": [
  {
      "roleId": "Millionaire",
      "chainId": 1,
      "minToken": "1",
      "maxToken": "100",
      "contractAddress": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "type": "ERC20"
  }
]
```

### ERC1155 Tokens Schema

Here's a TGR for a ERC1155 token that requires at least 1 NFT of contract address `0x2953399124F0cBB46d2CbACD8A89cF0599974963` on Polygon Mainnet with a token ID `12382299798866046354843276329909118056248259593254812422227920898302362517754`. Holders of this token will qualify for the `Billionaire` role.

```json
"rules": [
  {
      "name": "Stoned Dawgz WL Pass",
      "roleId": "Billionaire",
      "chainId": 137,
      "tokenId": "12382299798866046354843276329909118056248259593254812422227920898302362517754",
      "minToken": "1",
      "contractAddress": "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
      "type": "ERC1155"
  }
]
```

Collab.Land also supports Token Gating with OpenSea collections on Ethereum mainnet. For example, the following TGR requires at least one NFT from the collection `conanscircle` on Ethereum Mainnet, and holders of this token will qualify for the role `circlers`.

```json
"rules": [
  {
      "collectionName": "conanscircle",
      "name": "holder",
      "roleId": "circlers",
      "chainId": 1,
      "minToken": "1",
      "type": "OPEN_SEA"
  }
]
```

### Staked Token Schema

```json
"rules": [
  {
      "version": "1.0.0",
      "collectionName": "Coco",
      "roleId": "Staked Token",
      "chainId": 1,
      "minToken": "0",
      "classifierGroup": "TPC",
      "contractAddress": "0x0Df016Fb18ef4195b2CF9d8623E236272ec52e14",
      "type": "staking"
  }
]
```

### Gnosis Safe Schema

You can also gate resources with the Gnosis Safe token which is supported on multiple chains. The following example requires at least 1 Gnosis Safe token on the BSC chain.

```json
"rules": [
  {
    "scheme": "gnosis",
    "version": "2.1.0",
    "name": "King Kong",
    "roleId": "005",
    "asset": "evm:56/gnosis:0xb0147F1a001c890C7040146D6704CeCf56F10F7F",
    "classifierGroup": "TPC",
    "minToken": "1"
  }
]
```

> For Gnosis Safe tokens, you have to specify the chain along with the token address in the `asset` field. For example, for BSC, the asset field will be `evm:56/gnosis:0xb0147F1a001c890C7040146D6704CeCf56F10F7F`.

### TGR Schema for Non EVM based chains

Collab.Land also supports TGRs for non-EVM based chains such as Solana and others. Below are some examples of TGRs for Solana:

#### NFTs

```json
"rules": [
  {
      "tokenId": "2nPkG7zgW8Edr5eNhbaJ1RqNgx6Ds4ZsRM8qTRBNe2i1",
      "name": "Degen Whale",
      "roleId": "006",
      "chainId": 8000000000101,
      "minToken": "5",
      "contractAddress": "creators",
      "type": "SOLANA_NFT"
    }
]
```

#### Fungible Tokens

```json
"rules": [
  {
    "name": "Okay Bear holder",
    "roleId": "006",
    "chainId": 8000000000101,
    "minToken": "1",
    "contractAddress": "CJk8TvAXcq1cvC85M9aMQCxPMkTCSuWN5HsFEgAjh4ut",
    "type": "SOLANA_FT"
  }
]
```

### TGR Schema for POAP on Gnosis Chain

```json
"rules": [
  {
      "eventId": "63826",
      "name": "POAP Holder",
      "version": "1.0.0",
      "roleId": "007",
      "chainId": 100,
      "contractAddress": "POAP",
      "type": "POAP"
  }
]
```

To learn how to utilize these Token Gated Rules in your website, please refer to our [website Token Gating Tutorial](../../tutorials/token-gating)
