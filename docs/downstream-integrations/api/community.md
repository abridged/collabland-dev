---
id: community
title: Community
sidebar_position: 5
---

## Get communities

```
GET /communities?limit=10&paginationToken=<pagination-token>&include=<channels,quests,tpcs>
```

```jsx
{
  items: [
    {
      // id: chance.natural({ min: 0, max: 5000000 }),
      id: 'flex',
      name: 'The Best Group Ever',
      link: 'discord.gg/server',
      serverImage: `https://picsum.photos/50`,
      welcomeMessage: chance.paragraph({sentences: 2}),
      // cashtag: `${lc(chance.word({ length: 5 }))}`,
      cashtag: `flex`,
      tokenAddress: '',
      channels: [
        {
          name: '#donkey-discussion',
          link: 'discord.gg/server/channel',
          tokenAmountToEnter: chance.natural({min: 0, max: 500}),
          members: chance.natural({min: 0, max: 100}),
          membersInLastDay: chance.natural({min: 0, max: 2}),
          membersDailyGrowth: chance.floating({fixed: 2, max: 100, min: -100}), // percent
          messagesInLastDay: chance.natural({min: 0, max: 8718}),
          messagesAllTime: chance.natural({min: 500, max: 9999999}),
          messagesDailyGrowth: chance.floating({fixed: 2, max: 100, min: -100}), // percent
        },
      ],
      quests: [
        {
          id: '',
          name: 'Dark Souls II',
          description:
            'Slay the wangjangle demon and scan the QR code on its rumpus',
          reward: chance.floating({min: 10, max: 50000, decimals: 2}), // String, not int to deal with fractional tokens
          deadline: 1606379577,
          remainingAvailable: chance.natural({min: 10, max: 10}),
          totalAvailable: chance.natural({min: 10, max: 50}),
          createdById: 45678,
          published: false
        },
      ],
      stats: {
        tokenPriceUsd: chance.floating({fixed: 2, max: 1000, min: 10}),
        memberCount: chance.natural({min: 0, max: 10000}),
        cashtagTweetsInLastDay: 1000,
        cashtagTweetsDailyGrowth: chance.floating({
          fixed: 2,
          max: 100,
          min: -100,
        }), // percent
        messagesAllTime: chance.natural({min: 50, max: 99999999999}),
        messagesInLastDay: chance.natural({min: 50, max: 9999999}),
        messagesDailyGrowth: chance.floating({fixed: 2, max: 100, min: -100}), // percent
      },
    },
    // ...,
  ],
  paginationToken: 'pagination-token',
}
```

## Find quests for a given community by the community id

```
GET /communities/:id/quests?limit=10&paginationToken=<pagination-token>
```

```jsx
{
  items: [
    {
      name: '#donkey-discussion',
      link: 'discord.gg/server/channel',
      tokenAmountToEnter: chance.natural({min: 0, max: 500}),
      members: chance.natural({min: 0, max: 100}),
      membersInLastDay: chance.natural({min: 0, max: 2}),
      membersDailyGrowth: chance.floating({fixed: 2, max: 100, min: -100}), // percent
      messagesInLastDay: chance.natural({min: 0, max: 8718}),
      messagesAllTime: chance.natural({min: 500, max: 9999999}),
      messagesDailyGrowth: chance.floating({fixed: 2, max: 100, min: -100}), // percent
    },
  ];
}
```

## Find channels for a given community by the community id

```
GET /communities/:id/channels?limit=10&paginationToken=<pagination-token>
```

```jsx
{
  items: [
    {
      id: '',
      name: 'Dark Souls II',
      description:
        'Slay the wangjangle demon and scan the QR code on its rumpus',
      reward: chance.floating({min: 10, max: 50000, decimals: 2}), // String, not int to deal with fractional tokens
      deadline: 1606379577,
      remainingAvailable: chance.natural({min: 10, max: 10}),
      totalAvailable: chance.natural({min: 10, max: 50}),
      createdById: 45678,
      published: false,
    },
  ];
}
```

## Find token permissioned chats for a given community by the community id

```
GET /communities/:id/tpcs?limit=10&paginationToken=<pagination-token>
```

```jsx
{
  items: [
    {
      pk: 'DIS#COMM#762382243557015613',
      sk: 'TPC#0x23b608675a2b2fb1890d3abbd85c5775c51691d5#762382750467620895',
      minToken: 0.1,
      platform: 'discord',
      createdTime: '2020-10-04T19:01:24.000Z',
      contractAddress: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
      roleId: '762382750467620895',
      type: 'ERC20',
    },
  ];
}
```

## Get information for a Discord guild

```
GET /discord/guilds/:guildId
```

```jsx
{
  guildId: '766712543048761364',
  memberCount: 330,
  channels: [
    {
      id: '766712543048761365',
      name: 'THANKS GENERAL',
      type: 'category'
    },
    {
      id: '766712543048761366',
      name: '🏟general',
      type: 'text'
    }
  ],
  roles: [
    {
      id: '766712543048761364',
      name: '@everyone'
    },
    {
      id: '767086366390747167',
      name: 'admin'
    }
  ]
}
```
