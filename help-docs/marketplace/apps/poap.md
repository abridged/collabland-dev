---
sidebar_position: 3
title: POAP
---

import img1 from '@site/static/img/tutorial/marketplace/poap.png';

### About this app

With the POAP Miniapp, you can easily distribute POAPs to your community members in Discord using slash commands. Create an event on the [POAP website](https://drops.poap.xyz/drop/create) and then add your event with import slash command by entering the event ID, edit code provided by POAP, and a secret phrase which you can create in Discord with Collab.Land POAP Miniapp slash command.

The event links will be automatically added and delivered to your community members when they use the claim slash command and enter the secret phrase.

### Getting Started

1. Install POAP Miniapp from the [Collab.Land Marketplace](https://cc.collab.land)

2. Go to the [POAP website](https://drops.poap.xyz/drop/create), sign in, and create your POAP by filling out the details of your event.

  <div class="text--center">
    <img  src={img1} alt="POAP Event" />
  </div>

3. Your POAP will be created. You can see your drop details dashboard and it inlcudes important information like `Event ID` and `Edit code`. You will be asked to choose a method to distribute the POAPs. **Please only choose the ‘Mint links’ option** to use POAP miniapp. Enter the number of mint links details and `Submit Request`. You will receive a confirmation email after your request is reviewed.

4. Once it's approved and you receive the mint links from POAP, go to Discord and use the command <br/> `/poap import-event`

    - This command accepts these inputs
        - `event_id` - The event ID provided in the drop details Dashboard and in the email from POAP
        - `edit_code` - The edit code provided in the drop details Dashboard and in the email from POAP
        - `claim_phrase` - Enter a word or phrase that your community members will use to claim the POAP.
        **Important Note: you need to set this claim phrase while using the import slash command in Discord. Please don't set this claim phrase in POAP dashboard.**

5. Community members can claim their POAP at any time after the event has been added by using the `/poap claim` command, and entering the phrase that was created in the previous step

:::caution

The claim link will only be shown once, make sure you click the POAP link and claim.*

:::

:::note

POAP will be available for claim until it reaches its 'Expiration date' (Creators set the date when creating their POAP)

:::

6. If you run out of links, and you need to add more, you can do that with the `/poap add-new-links` command

7. To get an overview of all of these commands from Discord, you can use the `/poap help` command.

## Commands available:

| Command | Additional Parameters | Description |
| --- | --- | --- |
| /poap help | - | Get an overview of all the commands available in the POAP miniapp. If you haven't created an event yet, the command also provides a link to the POAP admin dashboard, where you can create an event. |
| /poap import-event | event_id, secret_code, claim_phrase | Once you've received the mint links requested from the POAP curation body, you can use this command to import the event from the POAP ecosystem to the http://Collab.Land ecosystem. You need the `event_id` and the `secret_code` received via the email on POAP drop creation and an unique `claim_phrase` which is told to the event attendees for claiming POAPs. |
| /poap add-new-links | event_id, secret_code | To request more links, head over to the POAP event dashboard received in the email, and then click on the ‘Request more codes’ button, input your `secret_code`. Once your request has been approved and new mint links have been sent to you, use the `event_id` and `secret_code` to invoke this Discord command, and the bot will import the new links to the POAP event. |
| /poap claim | claim_phrase | The event attendees use the `claim_phrase` said by the event host to the attendees to claim POAPs for the event. They receive a mint link, which they can click to claim POAPs. |

## Support

- Twitter: [@poapxyz](https://twitter.com/poapxyz)
- Website: [poap.xyz](https://twitter.com/poapxyz)
