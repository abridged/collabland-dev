---
sidebar_position: 1
---

# Balance check

The background balance check is a feature that is enabled by default on Collab.Land to ensure that all users holding certain roles in a community continue to meet the token requirement. If a member is found to no longer have the required tokens to meet the criteria specified by [the TGRs](../../create-a-tgr/how-to-create-a-tgr), their role will be automatically revoked.

<!---

# After the initial verification, there are two ways background check happens.

# 1. Blockchain event listener: Responds within 1-2 hours of when token is sold or otherwise transferred (Mainnet and Flow only).

--->

After the initial verification, balance checks happen every 24 hours across all chains. Balance check is `enabled` by default.

:::caution

If the balance check setting is `disabled`, then the bot will not be able to revoke roles when a member no longer holds the required tokens.

In that case, the bot will only revoke a role when the member verifies their wallet again in that community.

:::
