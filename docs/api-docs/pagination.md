---
id: pagination
title: Pagination
---

CollabLand REST APIs return a list of items support pagination with the
following query parameters:

## Pagination limit

The `limit` denotes maximum number of items to be returned.

For example, to get first 10 communities:

```
GET https://api.collab.land/communities?limit=10
```

## Pagination token

The `paginationToken` represents a starting point of the query. It should be the
one returned from query of the previous page.

```
GET https://api.collab.land/communities?limit=10&paginationToken=<pagination-token>
```

## Responses

The response from such APIs is a result set as follows:

```jsx
{
  items: [
    // ...
  ],
  paginationToken: '<pagination-token>'
}
```

The returned `paginationToken` should be used to fetch the next page:

```
GET https://api.collab.land/communities?limit=10&paginationToken=<pagination-token>
```
