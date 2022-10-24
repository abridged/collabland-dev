---
sidebar_position: 7
sidebar_label: Clone And Setup The Command Center
sidebar_class_name: nav-normal-page
---

# CollabLand-Portal

## Check out source code from git
```bash
git clone git@github.com:abridged/collabland-portal.git
```

## Set up Node.js and Yarn

1. Install `nvm`

   Please follow instructions at
   <https://github.com/nvm-sh/nvm#installing-and-updating> to install `nvm` so
   that we can easily switch between different node versions.

2. Install `node`

   With `nvm`, let's install Node.js 14 as the default version:

   ```sh
   nvm install 14.18.1
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

## Apple M1 Dependency
This repo has a hard dependency of node version 14. Due to certain dependencies it doesn't work on node version 16. And the native support for M1 apple silicon hardware came natively into node 16 only. So when we try do `yarn install` with node 16 the **wrtc** package fails to compile (an internal dependency). So we will need to install rosetta and do this install with that. Please follow this link [M1 issues with node version](https://dev.to/ibrarturi/how-to-fix-m1-mac-issue-with-installing-node-versions-30ah).

Use Node version **`14.18.1`**

## Setting Up Environment Variables
There is a file `.env.development` where certain environment variables has to be setup to login into command centre and create TGRs (token granted roles) there.

```bash
EXTEND_ESLINT=true
SASS_PATH=node_modules:src
SKIP_PREFLIGHT_CHECK=true
REACT_APP_API_URL=http://localhost:3000 # this is the api server url
REACT_APP_LOGIN_URL=http://localhost:3008 # this is the auth UI url created in previous step
REACT_APP_COLLABLAND_KEY=MC_Qzl-mdD2F9guqA1qf-.417G4c1nCtxNmqGWUusbG # this value come from registering a new client app as explained in below section

# These are Discord values which can be copied from `.bin/local-server-env.sh` file
REACT_APP_DISCORD_OAUTH_CLIENT_ID=1014487025291886652 # this is same as DISCORD_CLIENT_ID
REACT_APP_DISCORD_OAUTH_REDIRECT_URI=http://localhost:3008/discord/callback # this is the value from REACT_APP_LOGIN_URL defined above with `/discord/callback` appended
REACT_APP_DISCORD_CLIENT_ID=1014487025291886652 # this is same as DISCORD_CLIENT_ID
REACT_APP_DISCORD_OAUTH_CLIENT_SECRET=XCxnQlaqVSFozx6Ap44_7pY2SVmpFnTR # this is same as DISCORD_CLIENT_SECRET
```

## Register New Client App

You will need to run collabland CLI to register a new client app which will then generate an app key and which will be used by command centre to communicate with API server.

### Run CLI
Use the below command in the root of **`collabland-monorepo`** project.

```bash
./bin/local-cli.sh client-apps
```

It will prompt you with few questions as follows:
```bash
Application Name: test-app # It can be anything you decide

Tenant: collabland # It can be your organization name

URL: http://localhost:3000 # your API server url

Application Type: Public # choose this as default

Allowed Origin: '' # Just press enter without any value

Allowed Scope: '' # Just press enter without any value
```

Then it will generate your new app which will be registered in DYnamo DB table on AWS. Please copy that newly generated api key and replace the value of **`REACT_APP_COLLABLAND_KEY`** in the environment file i.e. **`env.development`** of command centre project i.e. **`collabland-portal`**


## Install dependencies and bootstrap the project

In the project directory, you can run:

```bash
yarn install
```

```bash
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```bash
yarn test
```

Launches the test runner in the interactive watch mode.<br />

```bash
yarn build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

If getting a build error

```bash

https://stackoverflow.com/questions/62079477/line-0-parsing-error-cannot-read-property-map-of-undefined
```
