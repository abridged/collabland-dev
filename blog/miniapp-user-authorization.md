---
slug: miniapp-user-authorization
title: Miniapp User Authorization
image: /static/img/sigverify.png
authors: kenny
tags: [collabland, developers, security, authorization, miniapp]
date: 2023-09-06
---

A few months ago we announced the [Login with Collab.Land Flow](https://docs.collab.land/docs/downstream-integrations/api/authentication#login-with-collabland-lwc---beta). An effort that allows Collab.Land developers to securely authenticate users and gain access to their Collab.Land resources. By registering a client application through the [developer portal](https://dev-portal.collab.land/signin), developers can obtain credentials that enable them to interact with the Collab.Land API on behalf of authenticated users.

This has been very well received with many adoption instances and use cases emerging within our online communities. For community administrators, this represents a great opportunity to create online resources exclusively accessible to their community members, all without the need for extensive development work.

The success of this feature and the requests from our developers have led us to an exciting decision: we are now making this functionality available for miniapps as well. This means that miniapp developers can prompt Discord users to grant authorization for accessing their data, such as connected wallets and profiles.

> 💡 If you've ever envisioned building a miniapp that relies on users granting access to their wallet addresses, this feature now makes it a reality.

### How it works

[Collab.Land](http://collab.land/) miniapps are built using [Collab Actions](https://docs.collab.land/docs/upstream-integrations/collab-actions/), which are pre-built templates designed to streamline the miniapp creation process. These templates come with essential functionalities like signature verification built-in. The [hello-action example](https://github.com/abridged/collabland-hello-action) serves as a prime example of how Collab Actions operate.

When you run the Action locally, users can execute a slash command and provide a name as a parameter. The Action sends this provided name to Collab.Land, which processes the request and responds with a greeting.

What we've done to enhance this flow is to introduce an additional step that enables you (the developer) to request user authorization for data access. To implement this feature, we've added two functions behind the scenes: one to request user permission and another to construct the modal for user authorization.

The `requestUserPermissions` **\*\*\*\***function is responsible for requesting user permission to access their data:

```jsx
async requestUserPermissions(
  request: DiscordActionRequest<APIChatInputApplicationCommandInteraction>,
  permissions: string[],
) {
  const metadata = await this.getMetadata();
  if (metadata.manifest.clientId == null) {
    throw new HttpErrors.BadRequest(`Missing clientId in manifest`);
  }
  const msg = this.buildUserPermissionMessage(
    request.id,
    metadata.manifest.clientId,
    permissions,
  );

  return this.followupMessage(request, msg);
}

```

This function takes a `DiscordActionRequest` object and an array of permissions that you wish to request from the user. It then constructs a message requesting permission and returns it using the `followupMessage` function.

The second function, `buildUserPermissionMessage`, creates the modal that solicits user authorization. It takes the request ID, your miniapp's client ID, and an array of permissions you want to request from the user:

```jsx
buildUserPermissionMessage(
  interactionId: string,
  clientId: string,
  scopes: string[],
) {
  const builder = new EmbedBuilder()
    .setTitle('Request user permissions')
    .addFields(
      {
        name: ACTION_CLIENT_ID,
        value: clientId,
      },
      {
        name: ACTION_REQUESTED_SCOPES,
        value: scopes.join(' '),
      },
    )
    .setDescription(
      `Action ${clientId} requires the following permissions:\n` +
      scopes.map(p => `- **${p}**`).join('\n'),
    );
  const row =
    new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId(`${APPROVE_USER_PERMISSIONS}:${interactionId}`)
        .setLabel(`Approve`)
        .setEmoji({
          name: '✅',
        })
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId(`${DENY_USER_PERMISSIONS}:${interactionId}`)
        .setLabel(`Deny`)
        .setEmoji({
          name: '❌',
        })
        .setStyle(ButtonStyle.Primary),
    );
  const msg: RESTPostAPIWebhookWithTokenJSONBody = {
    embeds: [builder.toJSON()],
    components: [row.toJSON()],
  };
  return msg;
}
```

The modal contains a message explaining what data you want access to. Once the user grants permission, you can use the Collab.Land API to access their data and build your miniapp accordingly.

All of this functionality is already integrated into the `hello-action` example repository, ready for you to clone and explore as you see fit. With these recent updates, you can now create miniapps that offer user-specific interactions, access user profiles, connected wallets, and communities.

Get started from [the repo here](https://github.com/abridged/collabland-hello-action).
