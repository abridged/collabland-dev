---
id: build-a-template-collab-action
title: Build Actions from Template
sidebar_position: 3
---

The recommended way to build a Collab Action is to use any of the provided [Collab.Land Action templates](/docs/upstream-integrations/collab-actions/getting-started-with-collab-actions#collabland-action-templates). For this example, we'll be using the [Express Action template](https://github.com/abridged/collabland-action-express).

The first thing to do is expose a `/metadata` endpoint to define the Action's metadata for Discord. This will include information about your Action such as the name of the Action, developer, version, and description. It will also include the supported interactions and application commands.

```jsx
router.get("/metadata", function (req, res) {
  const manifest = new MiniAppManifest({
    appId: "hello-action",
    developer: "collab.land",
    name: "HelloAction",
    platforms: ["discord"],
    shortName: "hello-action",
    version: { name: "0.0.1" },
    website: "https://collab.land",
    description: "An example Collab.Land action",
    thumbnails: [
      {
        label: 'Member Directory',
        src: 'thumbnail url',
        sizes: '40x40',
      },
      {
        label: 'Overview',
        src: 'thumbnail url here',
        sizes: '40x40',
      }
    ],
    icons: [
      {
        label: 'App icon',
        src: 'App icon URL here',
        sizes: '40x40',
      },
    ],
  });
  const metadata: DiscordActionMetadata = {
    /**
     * Miniapp manifest
     */
    manifest,
    /**
     * Supported Discord interactions. They allow Collab.Land to route Discord
     * interactions based on the type and name/custom-id.
     */
    supportedInteractions: [
      {
        // Handle `/hello-action` slash command
        type: InteractionType.ApplicationCommand,
        names: ["hello-action"],
      },
    ],
    /**
     * Supported Discord application commands. They will be registered to a
     * Discord guild upon installation.
     */
    applicationCommands: [
      // `/hello-action <your-name>` slash command
      {
        metadata: {
          name: "HelloAction",
          shortName: "hello-action",
        },
        name: "hello-action",
        type: ApplicationCommandType.ChatInput,
        description: "/hello-action",
        options: [
          {
            name: "your-name",
            description: "Name of person we're greeting",
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
    ],
  };
  res.send(metadata);
});
```

The `supportedInteractions` array specifies the Discord interactions that the Action supports. This is crucial as it guides Collab.Land in routing the interactions to the appropriate Action.

The `applicationCommands` array specifies the supported application commands for the Action. In this case, we have set it to handle the `/hello-action <your-name>` slash command. This is a necessary step for Collab.Land to expose the Action's slash command within the Discord server.

3. Implement the `followup()` function.

The `followup()` function takes in `request` and `message` as arguments, it is used to build a follow-up message to accompany the initial response. In the example below, it checks for the existence of a callback URL and if it exists, it creates a follow-up message object, waits for 1 second and then sends it using the `followupMessage()` function. It then waits for another second and starts a countdown of 5 seconds which sends an updated follow-up message with the remaining seconds in each iteration. Once the countdown is complete, it deletes the follow-up message.

Following this, the function initiates a countdown of 5 seconds, waiting for 1 second between each iteration. During each iteration, an updated follow-up message is sent that displays the remaining seconds. Once the countdown is complete, the function deletes the follow-up message.

```jsx
async function followup(
  request: DiscordActionRequest<APIChatInputApplicationCommandInteraction>,
  message: string
) {
  const follow = new FollowUp();
  const callback = request.actionContext?.callbackUrl;
  if (callback != null) {
    const followupMsg: RESTPostAPIWebhookWithTokenJSONBody = {
      content: `Follow-up: **${message}**`,
      flags: MessageFlags.Ephemeral,
    };
    await sleep(1000);
    let msg = await follow.followupMessage(request, followupMsg);
    await sleep(1000);
    // 5 seconds count down
    for (let i = 5; i > 0; i--) {
      const updated: RESTPatchAPIWebhookWithTokenMessageJSONBody = {
        content: `[${i}s]: **${message}**`,
      };
      msg = await follow.editMessage(request, updated, msg?.id);
      await sleep(1000);
    }
    // Delete the follow-up message
    await follow.deleteMessage(request, msg?.id);
  }
}
```

4. Implement the `handle()` function.

This function accepts the `interaction` parameter, which is an object containing relevant details about the interaction.

```jsx
async function handle(
  interaction: DiscordActionRequest<APIChatInputApplicationCommandInteraction>
): Promise<DiscordActionResponse> {
  /**
   * Get the value of `your-name` argument for `/hello-action`
   */
  const yourName = getCommandOptionValue(interaction, "your-name");

  const message = `Hello, ${
    yourName ?? interaction.user?.username ?? "World"
  }!`;
  /**
   * Build a simple Discord message private to the user
   */
  const response: APIInteractionResponse = {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: message,
      flags: MessageFlags.Ephemeral,
    },
  };
  /**
   * Allow advanced followup messages
   */
  followup(interaction, message).catch((err) => {
    console.error(
      "Fail to send followup message to interaction %s: %O",
      interaction.id,
      err
    );
  });
  // Return the 1st response to Discord
  return response;
}
```

The `handle()` function is responsible for handling the interaction and returning a response. In the example above, the function first checks for the presence of the `your-name` argument. If the argument exists, it uses the value of the argument as the name of the person we're greeting. If the argument does not exist, the function uses the username of the user who invoked the command as the name of the person we're greeting.

If you’ve gotten to this point, the expectation is that you’ve been able to do the following things:

- Clone the Action template
- Run it locally, and
- Customized the Action to implement your custom logic and functionality.

## Deployment Guide

You can deploy your Action to your preferred deployment platform. You can follow deployment instruction to host your Action on GCP, AWS, Digital Ocean, Heroku, Azure etc. [Collab.Land](https://Collab.Land) does not enforce any particular deployment practices or platforms.
