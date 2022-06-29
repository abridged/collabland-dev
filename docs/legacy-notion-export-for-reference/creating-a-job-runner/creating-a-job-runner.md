# Creating a Job Runner

Running Job Runner Locally Video:

[https://www.loom.com/share/ed759643df95400faf10df9559aaaa2f](https://www.loom.com/share/ed759643df95400faf10df9559aaaa2f)

# Steps to Create a Job Runner

[Github Access](./github-access)

[Terraform Access](./terraform-access)

[Set Up Your IDE](./set-up-your-ide)

[Install The Project](./install-the-project)

[Creating a Job](./creating-a-job)

[Connecting Your Job](./connecting-your-job)

[Testing](./testing)

[Testing Job Locally With Terraform](./testing-job-locally-with-terraform)

[Git Commit](./git-commit)

[Node Red](./node-red)

[Future Upgrades](./future-upgrades)

[Example: Near Tipping](./example-near-tipping)

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