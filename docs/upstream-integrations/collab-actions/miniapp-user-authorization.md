---
id: miniapp-user-authorization
title: Miniapp Authorization
sidebar_position: 6
---

Collab.Land now supports user authorization for miniapps. This means that developers can take advantage of the Collab.Land API to request user authorization for data access. This enhancement enables developers to build more powerful miniapps that can access user data and build a more personalized experience for users.

## How it works

Collab.Land provides a [template](https://github.com/abridged/collabland-hello-action) that allows developers to add authorization to miniapps seamlessly. The template provides a function that you can use to request user authorization. It starts by inspecting the user permissions using the `inspectUserPermissionsButton()` function.

Next, it checks if the user permissions are not null and if they are not, it proceeds to retrieve the user's API token and the callback URL from the interaction. Here's a bird's eye view of the `handle()` function that handles the interaction:

```js
protected async handle(
    interaction: DiscordActionRequest<APIChatInputApplicationCommandInteraction>,
  ): Promise<DiscordActionResponse> {
    const userPerms = inspectUserPermissionsButton(interaction);
    debug('User permissions: %O', userPerms);
    if (userPerms != null) {
      const apiToken = userPerms.apiToken;
      if (apiToken != null && interaction.actionContext?.callbackUrl != null) {
        const url = new URL(interaction.actionContext?.callbackUrl);
        const res = await this.fetch(url.origin + '/account/me', {
          headers: {
            authorization: `Bearer ${apiToken}`,
          },
        });
        const user = await handleFetchResponse(res);
        console.log('User profile: %O', user);
        const task = async () => {
          await sleep(1000);
          await this.followupMessage(interaction, {content: stringify(user)});
        };
        task().catch(err => {
          console.error('Fail to send followup message: %O', err);
        });
      }
      return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          flags: MessageFlags.Ephemeral,
          embeds: [
            {
              title: 'User response for permissions',
              fields: [
                {
                  name: 'user',
                  value:
                    userPerms.user?.username +
                    '#' +
                    userPerms.user?.discriminator,
                },
                {
                  name: 'action',
                  value: userPerms.action,
                  inline: true,
                },
                {
                  name: 'interactionId',
                  value: userPerms.interactionId,
                  inline: true,
                },
                {
                  name: 'scopes',
                  value: userPerms.scopes.join(' '),
                  inline: true,
                },
              ],
            },
          ],
        },
      };
    }
    // ...
  }
```

With the API token, your miniapp can now make a request to the Collab.Land API to retrieve the user's data. In this example, we are retrieving the user's profile data and handling the response with the `handleFetchResponse()` function. Then we initiate a task that waits for 1 second, then sends the resulting message back to the interaction with the user's profile as the content.

All this functionality is already integrated into the [hello-action example repository](https://github.com/abridged/collabland-hello-action), ready for you to clone and explore as you see fit. With these updates, you can now create miniapps that offer user-specific interactions, access user profiles, connected wallets, and communities.

## Getting started

To get started, simply clone the [hello-action template](https://github.com/abridged/collabland-hello-action). Follow the instructions in the README to set up your miniapp and run it locally. Once you have the miniapp running, you can install it on your Discord server and test it out.
