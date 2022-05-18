# Full Stack Running Locally

# Overview

Looks Like George Killed the Documentation Here
[https://www.notion.so/collab-land/RocketFuelDev-aa174ab1e1124fe9a96a2f3619cf0085](RocketFuelDev%20aa174ab1e1124fe9a96a2f3619cf0085.md)

CTO OFFICE HOURS OVERVIEW:

1. Describe the problem:
    1. Dont want them to have access to AWS, want to spin up resources per user, but still needs to be inside of AWS
    2. Tarmac has code inside of monorepo that sets up resources for specific users
    3. You then have to set your ENV urls to point to your specific instancs of the SQS queues
        1. To be honest I’m not sure what permissions you need inorder to get access to create the resourcs. From what i remember you tell Tarmac your email and they create you an AWS IAM User with the correct permissions.

## Projects Running Locally

1. Collabland-Monorepo backend
    1. The Job Server
    2. The API Server/ Discord Hooks
    3. SQSD to read from the AWS SQS Queue
2. Collab-Connect wallet connection page
    1. The react project
        1. Direct at the local tunnel for the Monorepo

### **How to run these services Locally**

**Running Monorepo Job Server**

[https://www.notion.so/collab-land/Creating-a-Job-Runner-e9f8abc9f923449180b1749479b9bb32](Creating%20a%20Job%20Runner%20e9f8abc9f923449180b1749479b9bb32.md)

**Running Collab-Connect**

[https://www.notion.so/collab-land/CollabLand-Connect-f94bbdb51585421f987ff968812314a9](CollabLand-Connect%20f94bbdb51585421f987ff968812314a9.md)

### Projects Running Remotely

1. AWS SQS and SNS
2. DynamoDB

Create a new work space

[https://www.notion.so/collab-land/Terraform-Tarmac-a5101f24795f490b8ea02010407a56ac](Terraform%20Tarmac%20a5101f24795f490b8ea02010407a56ac.md)

- Blocked issue is george was trying to update the permissions for elastic beanstalk: but he left
    - Next step: did george make a ramp up to where he left off? [ ] ask if he documented
    - Victor: [ ] ask victor if he is ready
        - have victor rebuild everything from scratch from the bottom
- Next blocker is the new naming conventions
    - If that doesnt work then should
    - Related to the resource helper that rodrigo was doing
        - All the tests that were in the code adapt them to the sandbox resources
        - Plan is to not have any more hard coded resource names in the code
    - Victor if he wants to put a meeting to do that

- I am honestly not sure what permissions the Tarmac build takes
- I don’t have another dev account to attempt a fresh build from - I have 1st party access to Sandbox while others like George are getting access to another environment... I think

# Next Steps

- [ ]  Onboard another 3rd party dev and have them document their challenges.  George partially documented but we were trying to get so much stuff working that the nuances of the AWS permissions seem to have escaped me.
    - [ ]  Who, where, why, when?  overwhelming.