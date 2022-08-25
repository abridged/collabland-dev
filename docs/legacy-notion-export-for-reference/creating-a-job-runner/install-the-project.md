---
sidebar_position: 4
---

# 2. Install The Project

## Git Clone

```bash
$> git clone [git@github.com](mailto:git@github.com):abridged/collabland-monorepo.git
$> cd collabland-monorepo
```

## Setting Git User

Recommend setting your git user for this project to the identity you wish to be known as when committing to the project.

```bash
git config --local user.name "John Doe"
git config --local user.email johndoe@example.com

git config --local user.name "Caleb Gates"
git config --local user.email caleb@collab.land
```

## NPM Install & Build

From the root directory run NPM install.  The Monorepo has many sub package.json and uses Lerna to reduce redundant dependency installation.  

Always run NPM install from the root directory

```bash
$> npm install
$> npm run build:full
```

## Rebuilding Between Tests

The test command in `components/near/package.json` has a pretest command which builds the project before testing.  Therefore, it is unnecessary to manually build between tests

```bash
"pretest": "npm run build",
"test": "lb-mocha --allow-console-logs \"dist/__tests__\"",
```

## Adding NPM dependencies

Only run NPM install in the root directory.

If you need to add an NPM package to a sub directory copy paste into the dependencies within `package.json`

```bash
"dependencies": {
    "near-api-js": "^0.43.0",
		...
}
```

Then run NPM install in the root directory.

### @collab.land/common

Many components use the same packages. To reduce bloat & only need to update the package in one place many packages & helper functions are exposed through `packages/common/package.json`

Example import

```bash
import {
  AnyError,
  BN,
  debugFactory,
  isProduction
} from '@collabland/common';
```

If you need a package related to block chains, big numbers, base58 conversions, etc you are likely not the first.  Check collabland/common or for references to the desired package before installing.  If it exists reference the existing package.  Also consider adding common tools to packages/common.  Discuss with @Raymond Feng before adding.

### Installing dependencies with Lerna

[  🚧  🚧  DOCUMENTATION UNDER CONSTRUCTION 🚧  🚧  ] @Raymond Feng I have not done this? What's the command?

You can also use Lerna to install dependencies

You can choose which package to install it to

? → [https://futurestud.io/tutorials/lerna-install-dependencies-for-a-specific-package](https://futurestud.io/tutorials/lerna-install-dependencies-for-a-specific-package)

## AWS Keychain

Storing passwords locally is a security concern.

Follow the documentation in `docs/aws-vault.md` to store passwords in the Mac keychain

```bash
docs/aws-vault.md
```

# Understanding the Repo

[  🚧  🚧  DOCUMENTATION UNDER CONSTRUCTION 🚧  🚧  ] @Raymond Feng Probably can give more insight.

## Components

- Where @Caleb Gates built the Near Tipping Service.  A defined [Collab.Land](http://Collab.Land) feature.

## Connectors

- Bit size code to read & write to actual block chains
- Near connector reads and writes from near block chain with defined function calls
- In the EVM world this is where ABIs & Infura/ Alchamy URLs live
- For Near because there are no ABIs its where function call and view definitions live

## Packages

- TODO: @Raymond Feng how would you describe our internal packages?
- Where common npm packages are imported, added to reusable code snippets and referenced from throughout the project.