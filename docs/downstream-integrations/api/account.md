---
id: account
title: Account
sidebar_position: 3
---

The `/account` resource provides information for an authenticated user of the
api call.

The base url is https://api.collab.land/account/.

The following HTTP request headers are required.

```
Authorization: Bearer <discord-oauth2-token>
Accept: application/json
```

## Get account balances

Get balances for all wallets of the authenticated user. Each wallet may have
multiple accounts.

### Trt it out

- [GET /account/balances](https://api.collab.land/explorer/#/AccountController/AccountController.getBalances)

### Sample request

GET https://api.collab.land/account/balances

### Sample response

```jsx
// Return
[
  {
    address: '0x0001-wallet',
    accounts: [
      {cashtag: 'flex', balance: '10000', tokenAddress: '0x01'},
      {cashtag: 'roll', balance: '20000', tokenAddress: '0x02'},
    ],
  },
  {
    address: '0x0002-wallet',
    accounts: [
      {cashtag: 'flex', balance: '500', tokenAddress: '0x03'},
      {cashtag: 'yeet', balance: '10000', tokenAddress: '0x04'},
    ],
  },
];
```

## Get the drop wallet

### Try it out

[GET /accounts/drop-wallet](https://api.collab.land/explorer/#/AccountController/AccountController.getDropWallet)

### Sample request

- GET https://api.collab.land/account/drop-wallet

### Sample response

```jsx
// Return
{
  address: '0xdead',
}
```

## Get the quests claimed by the current user

### Try it out

[GET /claimed-requests](https://api.collab.land/explorer/#/AccountController/AccountController.getClaimedQuests)

### Sample request

- GET https://api.collab.land/account/account/claimed-quests

Optional query parameters:

- limit: Maximum number of items to be returned
- paginationToken: The pagination token returned from the last page

### Sample response

```jsx
{
  items: [
    {
      id: '1',
      cashtag: 'flex',
      communityId: '',
      name: 'Dark Souls II',
      reward: '128158.87',
      tokenAddress: '0x0001',
    },
  ],
  paginationToken: 'token',
}
```

## Get the quests created by the current user

### Try it out

[GET /created-quests](https://api.collab.land/explorer/#/AccountController/AccountController.getCreatedQuests)

### Sample request

- GET https://api.collab.land/account/account/created-quests

Optional query parameters:

- limit: Maximum number of items to be returned
- paginationToken: The pagination token returned from the last page

### Sample response

```jsx
{
  items: [
    {
      id: '2',
      cashtag: 'woww',
      communityId: '',
      name: 'Become a Patron',
      reward: '726',
      tokenAddress: '0x0002',
    },
  ],
  paginationToken: 'token',
}
```

## Get the drops claimed by the current user

### Try it out

[GET /claimed-drops](https://api.collab.land/explorer/#/AccountController/AccountController.getClaimedDrops)

### Sample request

- GET https://api.collab.land/account/account/claimed-drops

Optional query parameters:

- limit: Maximum number of items to be returned
- paginationToken: The pagination token returned from the last page

### Sample response

```jsx
{
  items: [
    {
      id: '1',
      cashtag: 'flex',
      tokenAddress: 0x0001,
      reward: '51882',
    },
  ],
  paginationToken: 'token',
}
```

## Get the drops created by the current user

### Try it out

[GET /created-drops](https://api.collab.land/explorer/#/AccountController/AccountController.getCreatedDrops)

### Sample request

- GET https://api.collab.land/account/account/created-drops

Optional query parameters:

- limit: Maximum number of items to be returned
- paginationToken: The pagination token returned from the last page

### Sample response

```jsx
{
  items: [
    {
      id: '2',
      cashtag: 'woww',
      tokenAddress: 0x0002,
      reward: '81629',
      remainingAvailable: 12,
      totalAvailable: 100,
    },
  ],
  paginationToken: 'token',
}
```

## Get a challenge to post wallet addresses

### Try it out

[GET /account/auth-message](https://api.collab.land/explorer/#/AccountController/AccountController.getAuthChallenge)

### Sample request

GET https://api.collab.land/account/auth-message

### Sample response

```jsx
// Return a string that the user will sign to prove that they own an address
{
  message;
}
```

## Post a wallet address

### Try it out

[POST /account/wallet-address](https://api.collab.land/explorer/#/AccountController/AccountController.addWalletAddress)

### Sample request

POST https://api.collab.land/account/wallet-address

```json
{
  "address": "string",
  "message": "string",
  "signedMessage": "string"
}
```

### Sample response

```jsx
{
  address: 0x0000000000000000000000000000000000000000,
  message: '', // value from /account/auth-message
  signedMessage: ''
}
```

## Get the current user profile

### Try it out

[GET /account/me](https://api.collab.land/explorer/#/AccountController/AccountController.getUserProfile)

### Sample request

GET https://api.collab.land/account/me

### Sample response

```jsx
{
  id: '010101',
  platform: 'discord'
}
```

## Log out the current user and invalidate the discord oAuth2 token

### Try it out

[POST /account/logout](https://api.collab.land/explorer/#/AccountController/AccountController.logout)

### Sample request

POST https://api.collab.land/account/logout
