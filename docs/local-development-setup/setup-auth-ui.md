---
sidebar_position: 10
sidebar_label: Setup Auth UI
---

# CollabLand-Login

collabland-login is a standalone login and authentication site to login with various services like Discord, Reddit etc. This is the prerequisite for the next step of setting up command centre.

## Prerequisites
`node 16`
`yarn`

## Getting Started

### Setting env Variables

You need to set the server URL to your local api server. For that please create a new file **`.env.local`** and put the following value there:

```bash
NEXT_PUBLIC_SERVER_URL=http://localhost:3000 # this is local API server URl
```

Please don't touch .env file which contains the default value of the server used in qa/production

### Installation and Build Project

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
