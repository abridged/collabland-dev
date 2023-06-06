---
sidebar_position: 10
title: SparkAI
---

### About this app
SparkAI, created by Communityone, is a chatGPT-powered Discord engagement bot that increases community engagement by providing instant answers to your community's questions from your whitepaper and FAQ.

### Getting Started
1. Install the SparkAI Miniapp from the [Collab.Land Marketplace](../getting-started)
2. Upload a `.txt` document about your project using `/spark-test-config`

:::warning

The document must be `.txt` text file with a maximum of 2000 words. This may be updated in the future.

:::

3. Start testing using `/spark-test-ask`
4. Once all is ready, use `/spark-config` to upload the same document and let your members play.
5. Now `/ask` is available to all members.


## Commands

| Command            | Additional Parameters | Description                                  |
| ------------------ | --------------------- | -------------------------------------------- |
| /spark-help        | -                     | See the list of commands related to SparkAI  |
| /spark-test-config | -                     | Add context for Spark's knowledge without changing the main environment |
| /spark-test-ask    | -                     | Ask something privately using Spark's test context |
| /spark-config      | -                     | Configure Spark's knowledge uploading a `.txt` file (utf-8 encoded) |
| /ask               | private               | Ask something and get a reply based on ChatGPT knowledge base and the context added by `spark-config` command. Set the `private` option to `True` to make bot response private. |

## Support

- Discord: [https://discord.gg/communityone](https://discord.gg/communityone)
- Email: [louisa@communityone.io](mailto:louisa@communityone.io)
- Twitter: [@communityone_io](https://twitter.com/communityone_io)
- Website: [communityone.io](https://communityone.io/)