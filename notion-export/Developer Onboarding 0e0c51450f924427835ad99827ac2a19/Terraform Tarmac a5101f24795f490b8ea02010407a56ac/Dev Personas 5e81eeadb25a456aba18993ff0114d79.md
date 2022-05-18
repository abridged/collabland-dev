# Dev Personas

How will [Collab.Land](http://Collab.Land) stay relevant for the next 100 years?

Who will become involved.  How will we continue to Evolve?

# Requirements

1. General definition
    1. Experience Level, Objective, 
2. Example user stories 
3. Services They’ll Need
4. Permissions They’ll Need
5. Documentation They’ll Need

# Types

## 1st Party Personas

1. Definition:
    1. Works for Abridged/ Collab.Land
    2. Is highly trusted and vetted
    3. Has timely access to other 1st party developers
    4. Can suggest fundamental changes
    5. Has History and full transparency into the public and private workings of Collab.Land
    6. Can publicly represent collab.land
2. Examples
    1. Caleb is a developer who is intimately familiar with the monorepo, has been helped to set up a dev environment within the QA environment.  Is learning to set up the Tarmac build in an isolated environment so he can understand the limitations faced by 3rd party developers
    2. Raymond is the CTO and has full access to the project and it’s sensitive permissions.  Surely this role will stay within the organization even when CL decentralizes. 
    3. Support
    4. QA
    5. 
3. Services Needed
    1. Access to the entire project less admin permissions
    2. Jobs server, QA environment... or do we? Can 1st party devs learn to work within the same sandbox isolated environments that 3rd party devs are forced to use.  In this way 1st party devs will be constantly aware of any challenges faced by 3rd party devs?
4. Permissions needed
    1. ...?
5. Documentation Needed
    1. ...? Everything 3rd party dev needs and more
    

### Questions:

1. How does the 1st party experience change after decentralization
2. What 3rd party personas end up taking on 1st party roles like support of the actual infrastructure 
3. What are our decentralized responsibilities?
    1. Approving pull requests?
    2. Approving 3rd party dev Terraform Deployments?

## 2nd Party Personas

1. Definition:
    1. Works with Abridged/ Collab.Land
    2. Is mostly trusted and vetted
    3. Has timely access to other 1st party developers
    4. Their services may be integrated directly into CL products 
    5. They may be devs for hire
    6. Has History and full transparency into the public workings of [Collab.Land](http://Collab.Land) and honest conversations about the inner workings of CL though perhaps not complete transparency before decentralization. 
    7. CL team may endorse/ bless their relationship openly
2. Examples
    1. Kchannels, Ceramic, Tarmac, Rocket Fuel
3. Services Needed
    1. While the social relationship may be 2nd party their permissions and service access will likely be defined by the 3rd party developer bucket they fall into.

## 3rd Party Personas

### Wallet Integration

### Chain Integration

1. General definition
    1. Supporters of new EVM or non EVM chains that want to enable balance checking for their chain.
        1. Developers could be internal or external to these new chains organizations.
2. Example user stories 
    1. A developer at the harmony block chain wants to add their EVM chain definition to the collabland bot
3. Services They’ll Need
    1. New EVM chains need - to add their chain name, number, rpc & then update the bot.  If we’re phasing out the bot with the introduction of the command center then will newly added chains become immediately accessible or is further configuration needed?
    2. Non EVM Chain.  Ooof.  How standardized has this become? (Pure speculation, they’ll need to define new token balance check functions, alter the command center to give it a new category, they’ll need to test their changes, they’ll need to send a token of every token standard to a QA wallet owned by the core devs to a burner address so it can be queried by the unit tests indefintiely.  Maybe the Zero Address or 0x00000...c011ab.  
4. Permissions They’ll Need
5. Documentation They’ll Need

### New Token Standard Balance Check Integration

### Platform Integration (Reddit, Github, GatherTown, WeChat)

### New Slash Commands (Tipping)

### Apps/ Integrations On Tipping (Kchannels, Calendly Gating, ...?)

### Startup Factory - Incubator Projects - Custom Initiatives

## 3rd Party “People”

1. Hackathon participants
2. Members of partner web3 organizations (NBA top shots, Axie Infinity, Uniswap, Gnosis, Veramo, Metamask, Opera browser)
3. Malicious Actors...
4. Independent contractors looking for a ground breaking skill set to master early
5. Competetors... as if.

### Questions

1. Do we monitor 3rd party Terraform deployments and shut down anyone who’s being malicious?  If so how?
2. Is our Github repo clone-able?  Caleb’s still under the impression that the repo could be cloned and a user could stand up their own build in their own AWS using the YAML deploy scripts. Why is this true/false?

# Conclusions

1. How do we close the loop on 3rd party development
    1. Give them what they need to get started
    2. Support them if they hit edgecases/ problems
    3. Have them help document solutions
    4. Feed answers back to the community
2. Who are the first 3rd party developers we should actively recruit & support? 
    1. Github integration, WeChat integration
    2. Teach college students to add new chains so they can specialize and sell that skill to new EVM chains
3. Leverage the community
    1. How do we incentivise 3rd party’s to create docmentation, videos, tutorials for other 3rd parties.  
        1. Grants for Udemy course creation (or public youtube courses)
        2.