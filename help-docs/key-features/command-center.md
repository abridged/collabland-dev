---
sidebar_position: 2
---

import img1 from '@site/static/img/tutorial/command-center/command-center-from-discord.png';

# Command Center

## What is the Command Center?

[The Command Center (CC)](https://cc.collab.land) is a powerful platform that provides admins with the tools they need to effectively manage the Collab.Land bot and create a thriving, token-gated community on Discord. The CC is designed to be user-friendly and intuitive, making it easy for admins to navigate and perform a variety of tasks, including configuring the bot, creating Token-Gating Rules (TGRs), and managing community roles. This is all possible through CC's three main tabs: Bot Config, TGRs, & Community Roles.

You can also access the Command Center from your Discord server's #collabland-config channel.

<div class="text--center">
  <img  src={img1} alt="Access the Command Center from Discord via the #collabland-config channel" />
</div>

:::warning

Server members who can view #collabland-config can access the Command Center for your server and change your TGRs. _**#collabland-config should be a private channel for your Admins only**_ to ensure security.

:::

## Command Center features

### Bot Config

One of the key features of the CC is the Bot Config tab, which allows admins to enable background balance checks and run diagnostic tests on the bot's configuration. The background balance check, when enabled, runs regular tests to ensure that all users continue to hold the required tokens for their roles. If a user is found to no longer have sufficient tokens, their role will be automatically revoked.

The diagnostic test, on the other hand, checks for potential issues with the bot's configuration and provides admins with warning messages and possible solutions if any problems are found.

### TGRs (Token Gating Rules)

The TGR tab is the main feature of the CC, which enables admins to create, edit, and delete TGRs for their community's roles. Admins can also filter through TGRs, making it easy to find the ones they need. This functionality allows for a flexible and efficient way to manage access to different roles based on token-related criteria.

### Community Roles

Lastly, the Community Roles tab allows admins to check whether a specific user has the roles they are supposed to and resolve any discrepancies that may arise. The "Resolve" button will appear in case of any discrepancies and will fix the issue. If the issue cannot be resolved, an error message will be displayed and the admin will be advised to consult the troubleshooting material in the Collab.land support page
