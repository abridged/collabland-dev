---
sidebar_position: 10
sidebar_label: Setup Auth UI
---

# CollabLand-Login

collabland-login is a standalone login and authentication site to login with various services like Discord, Reddit etc. This is the prerequisite for the next step of setting up command centre.

## Check out source code from git

```bash
git clone git@github.com:abridged/collabland-login.git
```

## Set up Node.js and Yarn

1. Install `nvm`

   Please follow instructions at
   <https://github.com/nvm-sh/nvm#installing-and-updating> to install `nvm` so
   that we can easily switch between different node versions.

2. Install `node`

   With `nvm`, let's install Node.js 14 as the default version:

   ```sh
   nvm install 16
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

## Prerequisites
`node 16`
`yarn`

## Setting Up Environment Variables

You need to set the server URL to your local api server. For that please create a new file **`.env.local`** and put the following value there:

```bash
NEXT_PUBLIC_SERVER_URL=http://localhost:3000 # this is local API server URl
```

Please don't touch .env file which contains the default value of the server used in qa/production

## Install dependencies and bootstrap the project

```bash
yarn install

yarn run build
```

Dev mode:

```bash
<PORT=__port__> yarn run dev
```

or run

```bash
<PORT=__port__> yarn run start
```

to view the site.
