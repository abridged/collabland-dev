---
sidebar_position: 1
title: Role Composition
---

import img1 from '@site/static/img/tutorial/marketplace/role-composition.gif';
import img2 from '@site/static/img/tutorial/marketplace/role-composition2.gif';



The Role Composition feature within the Composable Roles app allows you to assign a single role to members based on the combination of other roles they hold. This feature enables the use of AND/OR logic to combine Token Gating Requirements (TGRs) or manually assigned Discord roles.

With this app, you can create complex role assignments that take into account multiple factors, such as the possession of both a fungible token and a non-fungible token. Additionally, you can use multiple TGRs or manually assigned roles to create your final composed role. For example, you can require a member to hold NFTs from different collections or tokens on different blockchains.

#### Setup and usage
:::info

View the [Role Composition tutorial video](https://www.youtube.com/watch?v=r8qP-oQvej4&list=PLQbEq7a9kYPnufJFY8XDr5HjvPaThjoS-&index=6) on the Collab.Land youtube channel.

:::

To use the Role Composition feature, follow these steps:

- Install the app
  
  <div class="text--center">
    <img  src={img1} alt="Install Role Composition" />
  </div>

- Click on Role Composition on the left side of the screen
- Create a new Composable Role by selecting the role you want to assign
- Enter a role description
- Choose whether the role will be assigned (additive) or removed (subtractive) when the conditions are met
- Add the roles that are required to qualify for the composed role using the "Add Role" button
  - Set the AND/OR condition for the role composition
  - Specify whether each role must be assigned or not assigned using the checkboxes
- Review the logic of your Composable Role using the preview at the bottom of the setup page
- Click "Save"

<div class="text--center">
  <img  src={img2} alt="Create a Complex TGR" />
</div>


You have now concluded the process of setting up your first Composable Role. Get started now and see how you can leverage this powerful feature to manage your Discord community with ease!
