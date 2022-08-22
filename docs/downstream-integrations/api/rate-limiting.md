---
id: rate-limiting
title: Rate Limiting
sidebar_position: 2
---

Requests to CollabLand REST APIs are rate limited.

## Regular limiting

15 calls per second.

## Burst limiting

900 calls per minute.

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
x-ratelimit-limit: 15
x-ratelimit-remaining: 14
x-ratelimit-reset: 2022-08-22T23:02:51.366Z
```
