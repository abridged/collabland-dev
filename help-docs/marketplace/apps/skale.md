---
sidebar_position: 13
title: SKALE
---

import img1 from '@site/static/img/tutorial/marketplace/poap.png';

### About this app



### Getting Started

1. Install POAP Miniapp from the [Collab.Land Marketplace](https://cc.collab.land)



## Commands available:

| Command | Additional Parameters | Description |
| --- | --- | --- |
| /poap help | - | Get an overview of all the commands available in the POAP miniapp. If you haven't created an event yet, the command also provides a link to the POAP admin dashboard, where you can create an event. |
| /poap import-event | event_id, secret_code, claim_phrase | Once you've received the mint links requested from the POAP curation body, you can use this command to import the event from the POAP ecosystem to the http://Collab.Land ecosystem. You need the `event_id` and the `secret_code` received via the email on POAP drop creation and an unique `claim_phrase` which is told to the event attendees for claiming POAPs. |
| /poap add-new-links | event_id, secret_code | To request more links, head over to the POAP event dashboard received in the email, and then click on the ‘Request more codes’ button, input your `secret_code`. Once your request has been approved and new mint links have been sent to you, use the `event_id` and `secret_code` to invoke this Discord command, and the bot will import the new links to the POAP event. |
| /poap claim | claim_phrase | The event attendees use the `claim_phrase` said by the event host to the attendees to claim POAPs for the event. They receive a mint link, which they can click to claim POAPs. |
