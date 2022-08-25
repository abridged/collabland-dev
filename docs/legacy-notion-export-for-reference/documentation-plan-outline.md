# Documentation Plan Outline

## Conclusions

- [ ]  Honestly Raymond knows the most about user personas - I have seen the EVM chain addition code for the back end. And I’ve sort of seen the common interface code.  Would love to create the preliminary break down and have Raymond comment about any more nuances
- [ ]  

## Caleb Thots

- [ ]  Tailor my onboarding to adding a new EVM chain integration - that’s the lowest hanging fruit
    - [ ]  Requires Monorepo change & command center change
        - [ ]  Doesn’t really require any tests or anything - should just require a few standard aditions & therefore the pull request should look pretty familiar when reviewing.
        - [ ]  Probably don’t even need to do any sort of terraform built or local job server running.  Though it would be nice if they verified that their new RPC worked. Is there an easy way for us to do that?

## Raw Notes

1.  Github for collaboration
    1. New Block Chain
        1. EVM
            1. Easy
                1. Pull request - RPC & ChainID etc
                2. UI: make chain available for TGR in command center
        2. New Chain Type
            1. Abstract common interface - how to add new chain
                1. Show examples - Have reference implementations & pull requests & videos & written documentation
                2. ** UI: make chain available for TGR in command center
2. How to open source
    1. Open access to repos
    2. License agreement
    3. How to format code & submit code (merge or rebase merge - git gui & signoff standard)
        1. Lint, prettier (I have this tutotiral sort of)
3. Where to collaborate
    1. Dev Community on Discord
    2. Proposals on Github Discussions

Next steps

1. Widdle down list of 50 partners to 5-7 top partners to move forward with
    1. Tipping: Get a test running in our discord - can I deploy tipping to our [collab.land](http://collab.land) discord and use real xDAI on OGC
    2. Pick partners who are of the highest caliber, who’s integrations would add the most utility & therefore provide the most value to our token launch
2. Practice 1-2 3rd party integrations
    1. Use what we learn from their pain points to help drive the documentation.
    2. Even get them to write documentation
    

Notes:
manage for access control for private repos

Planning board in the open → will our scrum be public for core team? Probably not right?

Contribute code towards code base → follows opeon source standard method to contribute

- Git gui, sign off, squash merge

If they want to consume our apis how do they register themselves. If we add a gov token how do we get them to pay the gas.

As we add new features we should understand the impact to our existing personas - users - mods - etc

- premier partenrs → disemination of trust and what are the best partners who would be able to make a spalsh for our token launhc
- Developer.collab.land
    - Propose a docusorous site using a github repo
    - core team is responsibe for starting the documentation and have navigation support , format
        - Navigation
            - Docs
            - Links to proposals
            - Discussions

Next: Spike for design of the website.  What information would we like to include, design the high level bullet points

Caleb points dev to domain expert → then code review (secufity expert always on review) then have QA staging for testing (push server load to QA to check for regression) (Coinbase Varoon mentioned this)

Docusaurus.io

Spike:

- Determine sections
    - Do we already have exiasitng documentation  we can use
- Kick off github repo with docsorus & define high level skeleton

Docs, API, Community, Showcase → How does docusorous work?

Skeleton of the site

- abhishek can help set up the repo
- roll into the sprint planning process
    - Make cards

First marketplace integrations: tipping, minting, allow list

ecosystem trying to make more $ than is staked

to activate their feature. App fees apples 30% (obviously insanely high) but what is a source of recurring revenue? - proffit share with rabithole.gg? (don’t have to rebuild, have to integrate)

Cards:
Spike: Research Docusorous - deliver: stand up our own repo

Spike: What should the layout of the documentation be - check out discord docs, google docs, ethereum docs, any other docs you like.  Then set up.  I personally like the docs having a left side navigation with sub menus & plane markdown in article page.

task: define the documentation steps required for a 3rd party developer to add another EVM chain.  make that the first documentation path (Go vertical and deep rather than trying to make all the tutorials all at once - make super specific tutorials then back up and see what can be reused. 

Task: have raymond further list out the nuances of all the integration paths for a new chain - how many unique tutotiral paths should we have?

- Maybe would be best to actually make the loom videos first and then write the documentation based on the videos.  They say a video can become 3 articles, 50 tweets, 100 instagram posts — start with the videos. - Similar to what we’re doing with the command center.  I can break the tutorial into small steps.

Task: Identify the 5-7 initial partners - James

Spike: Understand what each of the 5-7 partners is trying to accomplish, their needs, and formalize a process of heping them.  During this process document all the steps.

- Can we get a github discussion proposal from these partners
- Then based on understanding their needs get them access to the correct repos
- then use a combination of documentation, videos, and 1 on 1 to get them developing
