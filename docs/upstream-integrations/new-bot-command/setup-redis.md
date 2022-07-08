---
sidebar_position: 6
---

# Setup Redis

Redis enables you to write fewer lines of code to store, access, and use data in your applications. The difference is that developers who use Redis can use a simple command structure as opposed to the query languages of traditional databases.

Below are the 3 ways to setup Redis:

## Version 1: Using Docker

### 1. **Deploy**

You can set up a local Redis using docker with the following command

```bash
docker run -p 6379:6379 -d redis
```

### 2. **Configuration**

Also you should tell the BE where the Redis instance is hosted.

We will show how to setup the [ENV.sh](http://ENV.sh) files separately

There is no action needed at this step.  Just be aware that these are the configuration variable names

```bash
export REDIS_HOST=localhost
```

additional configuration can be done using the following env variables

- `REDIS_HOST`
- `REDIS_PORT`
- `REDIS_USERNAME`
- `REDIS_PASSWORD`

## Version 2: Using Brew on MacOS

```bash
brew install redis
brew services start redis
brew services info redis
```

[https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/](https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/)

(FROM: [https://www.notion.so/collab-land/Set-up-Redis-7692fdb0fc4f407db2399a2774fe2681](https://www.notion.so/Set-up-Redis-7692fdb0fc4f407db2399a2774fe2681))

## Version 3: Alternative Instructions

A Redis server is required to run API/Job servers locally. Please follow

instructions at https://redis.io/docs/getting-started/installation/ to install a

Redis server.

You’ll then have to set `REDIS_HOST` and `REDIS_USERNAME` environment variable

as follows to connect to the local Redis server.

```bash
export REDIS_HOST=localhost
export REDIS_USERNAME=default
```
