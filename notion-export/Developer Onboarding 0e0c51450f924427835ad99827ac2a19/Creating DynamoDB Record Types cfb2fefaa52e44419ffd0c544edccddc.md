# Creating DynamoDB Record Types

## Basic Rules

1. Whenever we decide to add a new type of DB record, first define a classifier for the new type

2. Understand who owns the record, such as a  user or a community, use its id as the pk

3. Come up a sk that make (pk, sk) unique in the whole table. One convention is have <classifier>#<local-id-within-classifier>

If it's 1x1 relation, the sk can be the same as classifier

NEAR#WALLET#DIS#COMM#906208088787419196 implies that we only allow one near wallet per community (not good)

We use classifer + a foreign key (community pk) in the case above

## Example for TipJar

(pk + “EVM” + chainId + TIPJAR)

We use chain agnostic ids such as evm:1:0x.... and near:mainnet:x.near

## CAIP

[https://github.com/ChainAgnostic/CAIPs](https://github.com/ChainAgnostic/CAIPs)

[https://github.com/abridged/collabland-monorepo/tree/master/packages/chain/src/caip](https://github.com/abridged/collabland-monorepo/tree/master/packages/chain/src/caip)