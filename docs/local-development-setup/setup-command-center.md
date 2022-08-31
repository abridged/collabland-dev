---
sidebar_position: 9
sidebar_label: Setup Command Center
---

# CollabLand-Portal

```bash
git clone git@github.com:abridged/collabland-portal.git
```

This repo has a hard dependency of node version 14. Due to certain dependencies it doesn't work on node version 16. And the native support for M1 apple silicon hardware came natively into node 16 only. So when we try do `npm i` with node 14 the **wrtc** package fails to compile (an internal dependency). So we will need to install rosetta and do this install with that. Please follow this link [M1 issues with node version](https://dev.to/ibrarturi/how-to-fix-m1-mac-issue-with-installing-node-versions-30ah).

Also make sure to use `yarn` than to `npm i` as npm still gives issues but yarn works perfectly.

```bash
yarn
```

If getting a build error

```bash

https://stackoverflow.com/questions/62079477/line-0-parsing-error-cannot-read-property-map-of-undefined
```
