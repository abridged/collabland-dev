# Creating a Job Runner

Running Job Runner Locally Video:

[https://www.loom.com/embed/ed759643df95400faf10df9559aaaa2f](https://www.loom.com/embed/ed759643df95400faf10df9559aaaa2f)

# Steps to Create a Job Runner

[Github Access](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Github%20Access%20a14373349b5e418b99ced9b940a9ce69.md)

[Terraform Access](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Terraform%20Access%20fb0444f80fa84db4a3b0be723f495663.md)

[Set Up Your IDE](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Set%20Up%20Your%20IDE%20657e1e32c4934fe7befb29a0a14d7e28.md)

[Install The Project](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Install%20The%20Project%20468b5f88ccdd45d099def67b9bdb3558.md)

[Creating a Job](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Creating%20a%20Job%20fb9172cbf3fa45a38d5f33cb79fdcd20.md)

[Connecting Your Job](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Connecting%20Your%20Job%208c990f7da9334f05afa10e37918bed4f.md)

[Testing](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Testing%200d2537e3c98c46f78d7017472f3bc4eb.md)

[Testing Job Locally With Terraform](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Testing%20Job%20Locally%20With%20Terraform%209ad759ed9a164a4cacc1055e7fe65e1e.md)

[Git Commit](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Git%20Commit%20c00d9885b7c44811a3de9a91f719ce5f.md)

[Node Red](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Node%20Red%205685840282594501bcf63e40b09600f6.md)

[Future Upgrades](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Future%20Upgrades%20689a03d921054200bdec8e3d625fb45c.md)

[Example: Near Tipping](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32/Example%20Near%20Tipping%2029a0af7a1eda41749bca33c91d753796.md)

# Overview

[Collab.Land](http://Collab.Land) is scaleable and serverless. Collab.Land serves over One million users and is onboarding the next Million ASAP.

Requests are published to a Pub/Sub Queue.

Job listeners subscribe to specific requests names

Job code is executed serverlessly on AWS 

To join the [Collab.Land](http://Collab.Land) team please read all of the following documentation. 

You'll find [Collab.Land](http://Collab.Land) has standard practices for IDE, testing, naming, and git.  

If you find any errors or believe the documentation is lacking please feel free to add more information.

# SCRATCH NOTES: KEEP FOR NOW

NOTES OUTLINE WAS MODELED AFTER

- Git Clone
    - Where to find the repo
- Setting up IDE. Where docs are
    - Standard is VS Code
        - plugins Raymond recommends (ask raymond)
- **Running NPM Install and build for the first time**
- **What you need to rebuild between tests (not much actually, running NPM test runs the build)**
- **What are Jobs, Models, Services, Controllers? (I can sort of answer, raymond may be able to add more descriptions**
- **AWS keychain...**
- **Jobs vs Api**
- **Loop back**
- Singleton vs ____
- collab land common & hw it works
- prettier & lint, all steps to commit (last)
    - git gui & signoff standard
        - Link the docs for how to commit (fix: bug: etc)
    - video how to use git gui.
- how to run npm install in root, and add packages locally manually
    - What was the command raymond said I could use? Lerna install?
- **import other services**
- **define interface**
    - **request, response,**
    - **typescript tips**
- I**mportance of request names & how WSS uses them**
- Register Jobs in applications & Keys - What each of them does.
- Registering jobs in Job-service/package
- Testing (against QA, current access keys, future plan for everyones to have single dev environment
    - Acceptance vs Unit tests
    - Recomend testing the entire Job
    - How to run tests with debugger (show in webstorm) then try and recreate in VS code.
- how to attch to near connector

more topics

- where to put your specific job runner (Raymond do you have an ideology to follow
- Base class for similar jobs

Overview

- Setup IDE
- How to code a Job & what the peices mean
- How to register that Job locally
- 
- How to write tests for the Job
- 
- How to register that Job in the Jobs server
- Git commit, rebase, merging + pull requests & stuff
- Node Red, Considerations and whyit's being removed
- Future considerations
    - Should Job be moved to it's own component?
    - Local testing upgrades
    - Universal messaging interface/ Discord/ twitter/ Reddit & removal of Node red
    

V2 Docs. 

- How Near tipping actually works

- [ ]  Read through code and think about all the things that ocnfused me and put those bullet points down
- [ ]  Sort topics by order from Zero to hero, an order that makes sense.
- [ ]  Flush out in words
- [ ]  Add Loom videos (oversea devs said they want Captions, can I do that with Loom instead of Youtube.  or shoudl I just do a youtube upload...) can I loom → to youtube.
