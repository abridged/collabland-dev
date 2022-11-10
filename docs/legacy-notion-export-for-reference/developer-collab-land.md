# developer.collab.land

Caleb: It’s been mentioned that we have [cc.collab.land](http://cc.collab.land) for admins and that [dev.collab.land](http://dev.collab.land) would be a great place for developers to request API access keys, have 1 click deploy to spin up AWS environments in our sandbox (and actually pay governance token to have those services hosted - slight markup...).  There was also the discussion of 1 click Discord community deploy.  user creates a discord, gives us the keys? or logs in with discord, and we then allow them to select what type of server they want to set up (NFT, gaming, etc) and then we can auto create the channels they ask for (basically it’s a bear to setup 20 channels, categories, icons, and permissions manually.  Could use a much better templating engine “Community as Code”


nerd: Discord has a [discord template feature](https://support.discord.com/hc/en-us/articles/360041033511-Server-Templates) we can leverage here. [1 click server setup](https://support.discord.com/hc/en-us/articles/360041033511-Server-Templates#h_8b89025e-629b-4bd4-94d4-20ab01d415b7) with known channel structure, roles, and permissions.
