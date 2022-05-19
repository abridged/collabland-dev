# Tarmac Team Meetings

## Running Action Items

### 5/17/22

Richard Docings Docs:

Can we create a template for the onboarding portal, to have a checklist with all the needed values/users/etc?

2 personas: New chain, new wallet. What permissions are needed - blanket permissions already exist in Terraform.Share email with Bernardo and get an IAM user created.  Can then run terraform build and get yourself an environment.  We have 1/2 done documentaiton on this. We could use end to end documentation for specific use cases rather than every possible persona.  Torus is adding a new wallet RN in exchange for helping with E2E documentaiton and videos.

Sounds like we can use the existing code Tarmac has created for launch, if we have E2E tutorial then new users could add New Chains

- Public Documentation - do Docusorous and drop MD files into [dev.collab.land](http://dev.collab.land/)
- Simply consuming our APIs categories - no local integration requirments - can get access to QA. they get an api key
    - 2nd Priority - Write this once it exits. To access api here are the steps: but we need to build to automate this:
        - (who is doing this, will it be delivered by Token Launch, who is documenting this, does this require any Tarmac involvement?)
- Upstream 1-2 processes to start with (These 3 can be documented and made available for token launch)
    - New wallet (Torus)
    - New EVM (Super Fluid: rolls and balance check)
    - Extension to discord command (bigger lift) (mocha example: wrapped code into discord command)

Whats available in for token launch in 6 weeks.

- Docusorous
- Skeleton with place holders
    - 3 tutorials
    - Some you need to get access to github
    - Some you need to get access to Tarmac AWS profile
    - Section on setting up discord bot

### 5/12/22

- [ ]  Onboard Victor
    - [ ]  Steps
        - [ ]  Caleb: Send victor the Notion documentation and ask if he can attempt running it locally - will test the documentation
        - [ ]  worst case: Schedual a 1 on 1 with Gato to help Victor understand the setup
    - [ ]  Outcome:
        - [ ]  Use Victor to help improve the Elastic beanstalk permissioning
        - [ ]  Use Victor to help improve the new developer onboarding documentatio
