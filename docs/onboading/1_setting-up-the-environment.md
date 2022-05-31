## Creating the environment in your own AWS account

All the configuration files are located in the `/packages/deployment/terraform` directory to deploy a new environment you should plan and apply the configuration

📙 **Terminology**

- `env_name`: the name of the replica environment (each development team can have multiple)
- `team`: the name of the development team

### Plan

By running the command

```bash
terraform plan
```

will test deployment and prepare the configuration for deployment on the AWS

### Apply

By running the command

```bash
terraform apply
```
will apply deployment and deploy the replica environment, ready for use by the developers

<aside>
Side note : 
In order for to run the local app from your own AWS organization you'll need to populate your secrets manager manually as currently there's no process in place to share that data. 
Contact the collabland team for the secret structure and data
</aside>



## Creating the environment in our sandbox environment
Provide the Collabland team with your email address, a team name and environment name (usually dev) so they can provision the needed infrastructure. We'll create an AWS account within our sandbox for you and provide you the AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY so you can login to the console.


## Running the code locally

### Prerequisite

Essential for successful running the code locally is the setup of the `aws-vault`.

You can setup by following the instructions on the monorepo `/docs/aws-vault.md`

You'll also need a set of environment variables in order to run the project locally

```bash
export AWS_ACCOUNT=<AWS_ACCOUNT> 
# 352853905257 for sandbox

export COLLABLAND_ENV=[<team>-<env_name>]
# i.e. tarmac-dev

export COLLABLAND_SECRET_NAME=collabland-api/qa 
# the shared QA secret in sandbox as there yet has to be a process in place to handle individual secrets, this step is not needed if you're using your own aws organization as the secret will be named according to your team-env preference and populated by yourself
```

### Build

```bash
npm run-script build:full
```
