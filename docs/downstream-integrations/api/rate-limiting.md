---
id: rate-limiting
title: API Rate Limits
sidebar_position: 2
---


Collab.Land's API provides developers with powerful tools to enhance their projects and integrate with the platform's features. Understanding the rate limits associated with the API is crucial for efficient and effective utilization. 

## Free Tier
The Free Tier of Collab.Land's API is designed for newcomers who are exploring the API's capabilities and familiarizing themselves with its functionality. While it offers limited resources, it provides an ideal starting point for experimentation. The rate limits and scopes for the Free Tier are as follows:

- **10 requests per second:** Developers can make up to 10 API requests per second, ensuring a reasonable throughput for initial testing and development.
- **10000 requests per month:** Over the course of a month, developers can make a maximum of 10000 API requests. This limit encourages controlled usage while allowing for ample exploration.
- **5 Max marketplace keys:** The Free Tier supports the creation of up to 5 marketplace keys, enabling integration with Collab.Land's marketplace functionality.
- **5 Max client apps:** Developers can register and manage up to 5 client apps within the Free Tier, facilitating integration with multiple projects simultaneously.
- **Scopes:** [All allowed scopes](https://api.collab.land/scopes).


## Paid Tier
The Paid Tier of Collab.Land's API caters to developers with more demanding requirements, offering higher rate limits to accommodate larger projects. This tier is suitable for those ready to incorporate the API into their applications on a larger scale. The rate limits and scopes for the Paid Tier are as follows:

- **15 requests per second:**  Developers in the Paid Tier can make up to 15 API requests per second, ensuring a consistent flow of data for their applications.
- **100000 requests per month:** With a significantly increased monthly limit of 1000,000 API requests, developers have greater flexibility to handle higher volumes of traffic and data processing.
- **500 Max marketplace keys:** The Paid Tier allows the creation of up to 500 marketplace keys, enabling integration with a large number of Collab.Land's marketplace features.
- **500 Max client apps:**  Developers can register and manage up to 500 client apps within the Paid Tier, facilitating integration with numerous projects simultaneously.
- **Scopes:** [All allowed scopes](https://api.collab.land/scopes).


## Enterprise Tier
For brands or projects with specific requirements and custom support needs, Collab.Land offers the Enterprise Tier. This tier is tailored to provide additional resources and integration support from the core team. To inquire about the Enterprise Plan, interested parties should directly contact the Collab.Land team.

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

## Conclusion
Collab.Land's API offers different tiers with varying rate limits and scopes to cater to developers with diverse needs. Understanding these tiers is essential for choosing the appropriate level of access based on the scale and requirements of your project. Whether you're a newcomer, a developer seeking higher limits, or an enterprise with specialized demands, Collab.Land's API provides the necessary tools to enhance your applications and interact with the platform's features effectively.

