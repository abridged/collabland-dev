---
sidebar_position: 1
---

# Set up AWS environment

## Downloading the Monorepo

The Collab-land Monorepo must first be cloned from github <br />
[Collab.Land Monorepo Github](https://github.com/abridged/collabland-monorepo)

Paste the following command in your Mac or Linux terminal to clone the repository. <br />

```js
git clone git@github.com:abridged/collabland-monorepo.git
```

Press ENTER to run the command

wait for the download to complete

## Selecting a Team Name and Environment Name

📙 **Terminology**

- `team`: the name of the development team (recommend using your company website toplevel domain)
- `env_name`: the name of the replica environment (each development team can have multiple environments)


### Team Name
NOTE: Not a good description of env_name - Make it clear WHY an env gets a specific name - some examples - WHO decidedes on the name (can I just choose a name?)
<br />NOTE: Naming convention limitations or it will mess up? Symbols Spaces ETC??? (Who will know the answer to this)
<br />NOTE: how do we prevent collisions?

TODO: Description of how Team Name is used by the build process

**Recommend Naming Your Team After Your Company Website** 
<br />For Example:
```
collab-land
```

### Environment Name
NOTE: Not a good description of env_name - Make it clear WHY an env gets a specific name - some examples - WHO decidedes on the name (can I just choose a name?)
NOTE: Naming convention limitations or it will mess up? Symbols Spaces ETC??? (Who will know the answer to this)

TODO: Description of how the environment name is used by the build process

**Most Common ENV name** 
```
dev
```

## Creating the environment in your own AWS account

The configuration files for the collabland environment are located in the directory: `/packages/deployment/terraform/collabland` directory. <br /> 
To deploy a new environment you must run the following commands
- `terraform init` 
- `terraform plan` 
- `terraform apply`

Follow the steps below <br />

### Move to the correct directory

```bash
cd collabland-monorepo/packages/deployment/terraform/collabland
```

### Run Init

Execute this command:
```bash
terraform init
```

Complete Prompts when requested:
```bash
var.env_name
  Enter a value: [your environment name.  ex: dev]

var.team
  Enter a value: [your team name.  ex: collab-land]
```

### Run Plan

Execute this command:
```bash
terraform plan
```

Complete Prompts when requested:
```bash
var.env_name
  Enter a value: [your environment name.  ex: dev]

var.team
  Enter a value: [your team name.  ex: collab-land]
```

Plan will test the deployment and prepare the configuration for deployment on AWS

### Run Apply

Execute this command:
```bash
terraform apply
```

Complete Prompts when requested:
```bash
Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes
```

This will apply the deployment and deploy the replica environment.
Once deployed the environment is ready for use by you and your team

### Using our Sandbox vs Your AWS Account
TODO: Describe the advantages disadvantages of both approaches - The WHY

### Run the local app from your own AWS organization [Optional]
<aside>
Side note : 
In order for to run the local app from your own AWS organization you'll need to populate your secrets manager manually as currently there's no process in place to share that data. 
Contact the collabland team for the secret structure and data
</aside>

## Creating the environment in our sandbox environment [Recommended]

Provide the Collabland team with your email address, a team name and environment name (usually dev) so they can provision the needed infrastructure. We'll create an AWS account within our sandbox for you and provide you the AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY so you can login to the console.
TODO: - Where do you contact the Collab.Land team
TODO: - How do you use those accounts to login to your local AWS account .aws credentials/ vault etc.  Raymond has instructions somewhere
TODO: - Do you need to provision your account before running terraform build & apply? Did I just use my default AWS credentials?

## Running the code locally

### Prerequisite

Essential for successful running the code locally is the setup of the `aws-vault`.

You can setup by following the instructions on the monorepo `/docs/aws-vault.md`

You'll also need a set of environment variables in order to run the project locally

```bash
export AWS_ACCOUNT=<AWS_ACCOUNT>
# 352853905257 for sandbox

export COLLABLAND_ENV=<team>-<env_name>
# i.e. tarmac-dev

export COLLABLAND_SECRET_NAME=collabland-api/qa
# the shared QA secret in sandbox as there yet has to be a process in place to handle individual secrets, this step is not needed if you're using your own aws organization as the secret will be named according to your team-env preference and populated by yourself
```

### Build

```bash
npm run-script build:full
```
Make sure you're running at least node 16.x before attempting to build
