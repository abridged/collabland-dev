# EVM chain

# 1) Adding a new EVM chain

## Here are steps to add a new EVM chain

- Open file index.js at `/src/hooks/Connectors/index.js` and add new chain id for your evm chain

```
const supportedChainIds = [
  1, 3, 4, 5, 42, 100, 56, 137, 11297108109, 11297108099, 42161, 10, 69, 43114,
  43113, 43112,
];
```
