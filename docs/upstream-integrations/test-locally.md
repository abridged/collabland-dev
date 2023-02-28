---
id: test-locally
title: Implement & Test your Action Locally
sidebar_position: 2
---

Once you install `/hello-action` to your Discord server. Let's try to implement something new for the action and test it locally.

We are going to edit the response message from `Hello, <your_name>` to `Welcome to ETHDenver, <your_name>`:

```
/**
  * Get the value of `your-name` argument for `/hello-action`
  */
  const yourName = getCommandOptionValue(interaction, 'your-name');
  const message = `Welcome to ETHDenver, ${
    yourName ?? interaction.user?.username ?? 'World'
  }!`;
```

Do `npm run build` to catch up the change, and we can try this edited command locally.

## Run server locally

To test your action locally, you can run the `hello-action` server using the following command:

```bash
npm run server
```

By default, the server will generate an ECDSA key for signature verification between the client (signing the request payload) and the server (verifying the signature of the request).

You can also use the following commands to run the server with different types of keys:

```bash
npm run server -- ecdsa
```

or

```bash
npm run server -- ed25519
```

When the server is running, it will output the signing key (including ecdsa: or ed25519:) in the console:

```
> @collabland/example-hello-action@0.0.1 server
> node dist/server

Action signing key: ecdsa:<0x...>
Hello action is running at http://[::1]:3000
```

Copy this signing key and use it to run the hello-action test client.

## Running the `hello-action` test client

The test client simulates how Discord Collab.Land responses to your action command. You can check out the mocked interaction at `src/client.ts`. Run the `hello-action` test client, use the following command:

```bash
npm run client -- <server-signing-key>
```

You can verify the result from Discord interaction response logs.

Similarly, as your action getting complicated, don't forget to edit `src/client.ts` to include required params for testing your action.

## Next Steps

You can now start building and testing your own custom actions. Let's take a closer look at how everything's putting together. The following are implementation breakdowns:

### Building Your Action

1. Use the [`src/actions/hello-action.controller.ts`](https://github.com/abridged/collabland-hello-action/blob/master/src/actions/hello-action.controller.ts) file as a template for your action.

2. Define the action metadata for Discord in the `getMetadata()` method. This includes information such as the name of the action, developer, version, and description.

```jsx
async getMetadata(): Promise<DiscordActionMetadata> {
    const metadata: DiscordActionMetadata = {
        manifest: new MiniAppManifest({
            appId: 'hello-action',
            developer: 'collab.land',
            name: 'HelloAction',
            platforms: ['discord'],
            shortName: 'hello-action',
            version: {name: '0.0.1'},
            website: 'https://collab.land',
            description: 'An example Collab.Land action',
        }),
        supportedInteractions: this.getSupportedInteractions(),
        applicationCommands: this.getApplicationCommands(),
    };
    return metadata;
}
```

3. Implement the `followup()` method to define the supported interactions and application commands for the action.

The `followup()` method takes in the `request` and `message` as arguments, it is used to build a follow-up message to accompany the initial response. In the example below, it checks for the existence of a callback URL and if it exists, it creates a follow-up message object, waits for 1 second and then sends it using the `followupMessage()` function. It then waits for another second and starts a countdown of 5 seconds.

```jsx
private async followup(
    request: DiscordActionRequest<APIChatInputApplicationCommandInteraction>,
    message: string,
  ) {
    const callback = request.actionContext?.callbackUrl;
    if (callback != null) {
      const followupMsg: RESTPostAPIWebhookWithTokenJSONBody = {
        content: `Follow-up: **${message}**`,
        flags: MessageFlags.Ephemeral,
      };
      await sleep(1000);
      let msg = await this.followupMessage(request, followupMsg);
      await sleep(1000);
      // 5 seconds count down
      for (let i = 5; i > 0; i--) {
        const updated: RESTPatchAPIWebhookWithTokenMessageJSONBody = {
          content: `[${i}s]: **${message}**`,
        };
        msg = await this.editMessage(request, updated, msg?.id);
        await sleep(1000);
      }
      // Delete the follow-up message
      await this.deleteMessage(request, msg?.id);
    }
  }
```

It then continues the countdown and sends an updated follow-up message with the remaining seconds in each iteration.

- `getSupportedInteraction()` — This function returns an array of supported interactions to provide routing guidance for Collab.Land to understand how to forward Discord interactions to this action.

```jsx
private getSupportedInteractions(): DiscordInteractionPattern[] {
    return [
      {
        // Handle `/hello-action` slash command
        type: InteractionType.ApplicationCommand,
        names: ['hello-action'],
      },
    ];
  }
```

In our case, it's set to handle the `/hello-action` slash command.

- `getApplicationCommands()` — This function returns an array of application commands, in this case, it's set to handle the `/hello-action <your-name>` slash command. It is required for Collab.Land to expose the action’s slash command in the Discord server.

```jsx
private getApplicationCommands(): ApplicationCommandSpec[] {
    const commands: ApplicationCommandSpec[] = [
      // `/hello-action <your-name>` slash command
      {
        metadata: {
          name: 'HelloAction',
          shortName: 'hello-action',
        },
        name: 'hello-action',
        type: ApplicationCommandType.ChatInput,
        description: '/hello-action',
        options: [
          {
            name: 'your-name',
            description: "Name of person we're greeting",
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
    ];
    return commands;
  }
```

4. Implement the `handle()` method to process various Discord interactions. It takes in the `interaction` parameter which is an object that contains information about the interaction.

```jsx
protected async handle(
    interaction: DiscordActionRequest<APIChatInputApplicationCommandInteraction>,
  ): Promise<DiscordActionResponse> {
    // Get the value of `your-name` argument for `/hello-action`
    const yourName = getCommandOptionValue(interaction, 'your-name');
    const message = `Hello, ${
      yourName ?? interaction.user?.username ?? 'World'
    }!`;
    // Build a simple Discord message private to the user
    const response: APIInteractionResponse = buildSimpleResponse(message, true);
    // Allow advanced followup messages
    this.followup(interaction, message).catch(err => {
      console.error(
        'Fail to send followup message to interaction %s: %O',
        interaction.id,
        err,
      );
    });
    // Return the 1st response to Discord
    return response;
  }
```

This is where you implement your custom action logic. In this example, it calls a `getCommandOptionValue()` function to get the value of an argument called `your-name` from the interaction. Then it creates a message string by concatenating the `your-name` value with the text "Hello, " and if the `yourName` variable is null, it uses the `interaction.user?.username` or `'World'` as a fallback. After that, it creates a response object by calling the function `buildSimpleResponse()` with the message and a boolean value, which is used to build a simple message that is private to the user.

If you’ve gotten to this point, the expectation is that you’ve been able to do a few things:

- Clone the `hello-action` template and run it locally
- Customize the `hello-action` to implement your custom logic and functionality

# Deployment Guide

In the previous guide, we showed how you can install your action via `/test-flight install` command. You can install your own action following the same steps. Notice that you will need update your action if there are parameter changes. You can update it by uninstalling & re-installing the action.

## Submitting Your Action

Once your action is built, you can [submit it for review](https://forms.gle/rTMmiXa8W7qUVA4f8) to Collab.Land. The metadata provided in the `getMetadata()` method will be reviewed to ensure there are no conflicts with other actions. Upon successful review and approval, the metadata will be saved in the action registry and frozen for that version.

There are many more things your actions can do! Check out the next guide to see different possibilities to build your action.
