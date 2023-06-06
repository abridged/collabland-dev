---
sidebar_position: 4
title: Permissions
---


import img1 from '@site/static/img/tutorial/permissions-error/server-settings.png';
import img2 from '@site/static/img/tutorial/permissions-error/select-roles.png';
import img3 from '@site/static/img/tutorial/permissions-error/cl-role.png';
import img4 from '@site/static/img/tutorial/permissions-error/select-permissions.png';
import img5 from '@site/static/img/tutorial/permissions-error/toggle-admin.png';

If you or your members are receiving a permission error, please ensure Collab.Land has the proper permission in your Discord server settings.
This is a set of instructions for resolving this error:

1. Click on the server name and select "Server Settings" from the dropdown menu.

   <div class="text--center">
     <img  src={img1} alt="Sever Settings" />
   </div>

2. Select "Roles".

   <div class="text--center">
     <img  src={img2} alt="Select Roles" />
   </div>

3. Find the role associated with the Collab.Land bot and select it.

   <div class="text--center">
     <img  src={img3} alt="CL Role" />
   </div>

4. Select "Permissions".

   <div class="text--center">
     <img  src={img4} alt="Select Permissions" />
   </div>

5. Toggle the following permissions to "on":
    - View Channels
    - Manage Channels
    - Manage Roles
    - Ban Members
    - Send Messages
6. Click the "Save Changes" button to apply the changes.


