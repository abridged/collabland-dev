---
sidebar_position: 9
sidebar_label: Setup Command Center
---

# CollabLand-Portal

```bash
git clone git@github.com:abridged/collabland-portal.git
```

## Apple M1 Dependency
This repo has a hard dependency of node version 14. Due to certain dependencies it doesn't work on node version 16. And the native support for M1 apple silicon hardware came natively into node 16 only. So when we try do `yarn install` with node 16 the **wrtc** package fails to compile (an internal dependency). So we will need to install rosetta and do this install with that. Please follow this link [M1 issues with node version](https://dev.to/ibrarturi/how-to-fix-m1-mac-issue-with-installing-node-versions-30ah).

```bash
yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

If getting a build error

```bash

https://stackoverflow.com/questions/62079477/line-0-parsing-error-cannot-read-property-map-of-undefined
```
