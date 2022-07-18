---
sidebar_position: 5
---

# Clone And Setup The Backend

# Git Clone Monorepo

This guide is developed for MacOS. If you are using a different operating system, most of the steps/commands will be same if it's UNIX based. For Windows, we will crate a new tutorial, until then you can search for alternate commands if a command is not available for your OS.

**Let's start!**

1.  Open terminal window

## Step 1: Set up Node.js and NPM

### 1. Install `nvm`

Please follow the instructions at
https://github.com/nvm-sh/nvm#installing-and-updating to install `nvm` so
that we can easily switch between different node versions.

### 2. Install `node`

With `nvm`, let’s install Node.js 16 as the default version:

```bash
nvm install 16
```

### 3. Verify `node` and `npm`

You can use the command below to verify that Node.js 16.x and NPM 8.x are
installed.

```bash
node -v
npm -v
```

It should print the version of `node` (such as `v14.17.6`) and `npm` (such as `7.23.0`).

## Step 2: Check out source code from git

```bash
cd
mkdir Projects
cd Projects
git clone git@github.com:abridged/collabland-monorepo.git
```

## Step 3: Install dependencies and bootstrap the project

Make sure you're running at least node 16.x before attempting to build

```bash
cd collabland-monorepo
npm i
npm run build
```

**To force a clean build**

```bash
npx lerna clean
npm run build:full
```

## Step 4: Visual Studio Code setup

We use Visual Studio Code for developing CollabLand API server.

You can download Visual Studio Code from https://code.visualstudio.com/download

and install it to your development machine. If you add `code` to the path,

Visual Studio Code can be launched for `collabland-monorepo`.

```bash
code .
```

Install the following extensions:

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
