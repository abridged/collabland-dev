---
id: rate-limiting
title: Rate Limiting
---

Requests to CollabLand REST APIs are rate limited.

## Regular limiting

10 calls per second.

## Burst limiting

120 calls per minute.

## Http response headers

The CollabLand API server returns the following response headers for rate
limiting:

- Retry-After
- X-RateLimit-Limit
- X-RateLimit-Remaining
- X-RateLimit-Reset

For example:

```
retry-after: 1
x-ratelimit-limit: 30
x-ratelimit-remaining: 29
x-ratelimit-reset: 2021-02-07T03:16:08.026Z
```
