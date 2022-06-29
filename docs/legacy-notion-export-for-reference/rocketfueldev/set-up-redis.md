# Set up Redis

Redis is required for some functionality of the `api-server` instance

# 1. Using Docker

## Deploy

You can set up a local Redis using docker with the following command

```bash
docker run -p 6379:6379 -d redis
```

## Configuration

Also you should tell the BE where the Redis instance is hosted

```bash
export REDIS_HOST=localhost
```

additional configuration can be done using the following env variables

- `REDIS_HOST`
- `REDIS_PORT`
- `REDIS_USERNAME`
- `REDIS_PASSWORD`

# 2. Using Brew on MacOS

```bash
brew install redis
brew services start redis
brew services info redis
```

[https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/](https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/)