# EVM wallet

# Developer's Guide

## Set up Node.js and Yarn

1. Install `nvm`

   Please follow instructions at
   <https://github.com/nvm-sh/nvm#installing-and-updating> to install `nvm` so
   that we can easily switch between different node versions.

2. Install `node`

   With `nvm`, let's install Node.js 16 as the default version:

   ```sh
   nvm install 14
   ```

3. install yarn

   ```sh
   npm install -g yarn
   ```

4. Verify `node` and `yarn`

   You can use the command below to verify that Node.js 14.x and Yarn 1.22.x are
   installed.

   ```sh
   node -v
   yarn -v
   ```

   It should print the version of `node` (such as `v14.x.x`) and `yarn` (such as
   `1.22.17`).

## Check out source code from git

```sh
cd
mkdir Projects
cd Projects
git clone git@github.com:abridged/collabland-connect.git
```

## Install dependencies and bootstrap the project

```sh
cd collabland-connect
yarn install
```

```sh
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```sh
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Add new wallet option to home page

Add wallet to home page, after follwing steps below new wallet option should be visible on home page.

- Open [connectors.ts](../../src/containers/EvmConnect/utils/connectors.ts)
  - Add a logo
  - Update `ConnectorNames` and `connectorsLogo`

- Open [index.js](../../src/containers/EvmConnect/index.js) and update `connectorsByName`

## Adding a new EVM based wallet

1) [Injected wallet](./docs/wallets/injected.md)

# Here are steps to add a new EVM based wallet

## Supporting a new chain

- Open file [index.js](../../src/hooks/Connectors/index.js) and new chain id

```
const supportedChainIds = [
  1, 3, 4, 5, 42, 100, 56, 137, 11297108109, 11297108099, 42161, 10, 69, 43114,
  43113, 43112,
];
```
