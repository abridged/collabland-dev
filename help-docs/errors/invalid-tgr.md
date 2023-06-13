---
sidebar_position: 3
title: Invalid TGR
---

import img1 from '@site/static/img/tutorial/command-center/invalid-tgrs1.png';
import img2 from '@site/static/img/tutorial/command-center/invalid-tgrs2.png';
import img3 from '@site/static/img/tutorial/command-center/invalid-tgrs3.png';

When you create a TGR, you associate it with a specific Discord role. If that Discord role is deleted, the TGR becomes invalid and cannot assign roles to members. When this happens, an error message will appear in the command center.
To identify the invalid TGR causing the issue, click on the "Details" button in the error message.

<div class="text--center">
  <img  src={img1} alt="Invalid TGR" />
</div>

This will show you which Discord role was associated with the invalid TGR. 

<div class="text--center">
  <img  src={img2} alt="Invalid TGR" />
</div>

In order to resolve the issue, go to the TGRs page.

<div class="text--center">
  <img  src={img3} alt="Invalid TGR" />
</div>

You can then take one of the following actions to resolve the issue:

- Associate the TGR with a different Discord role: If the deleted Discord role is no longer needed or is not available, you can associate the TGR with a different Discord role. To do this, go to the TGRs tab and find the invalid TGR. Click on the "Modify" button to open the TGR configuration page. From there, you can select a new Discord role to associate with the TGR. Once you've made the change, click the "Save Changes" button to update the TGR.
- Delete the invalid TGR: If you no longer need the TGR or cannot find an appropriate Discord role to associate with it, you can delete the invalid TGR. To do this, go to the TGRs tab and find the invalid TGR. Click on the delete icon to remove the TGR. Note that deleting a TGR will also remove the associated role from any members who were assigned that role through the TGR.

It's important to keep track of any changes made to Discord roles that are associated with TGRs to prevent invalid TGRs from causing issues in your community. If you do encounter an invalid TGR, following the steps outlined above will help you quickly resolve the issue and ensure that your TGRs are functioning as intended.