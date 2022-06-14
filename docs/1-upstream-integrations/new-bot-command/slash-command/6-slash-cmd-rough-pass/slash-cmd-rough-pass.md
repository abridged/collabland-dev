# slash-cmd-full-stack-Abhishek Draft

# Slash Command Full-Stack

- Need Terraform docs link
- Make placeholder folders clear that they are

Beginning of the tutorial:

1. Go to https://github.com/abridged/collabland-monorepo
2. Clone the repository using `git clone https://github.com/abridged/collabland-monorepo`
3. Refer to [https://github.com/abridged/collabland-monorepo/blob/master/DEVELOPING.md](https://github.com/abridged/collabland-monorepo/blob/master/DEVELOPING.md) for setting up the repository(Is this doc not helpful for different personas & should directly start from next point 4(Terraform)? Dev needs access to the repo to view this. Should we add this doc in the website as well? - Yes add all common docs in the dev website and refer them in other docs)
    1. CALEB: I’m not sure this doc is helpful. we should put all the onboarding and dev docs into the dev website so we have 1 source of truth. - Raymond may have an opinion on this though.
    2. CALEB: There will be seperate tutorials on how to setup the AWS vault and terraform.  Prerequisites for all the personas
    
    **# Developer’s Guide**
    
    **## Set up Node.js and NPM**
    
    1. Install `nvm`
    
    Please follow the instructions at
    
    https://github.com/nvm-sh/nvm#installing-and-updating to install `nvm` so
    
    that we can easily switch between different node versions.
    
    1. Install `node`
    
    With `nvm`, let’s install Node.js 16 as the default version:
    
    ```
    nvm install 16
    ```
    
    1. Verify `node` and `npm`
    
    You can use the command below to verify that Node.js 16.x and NPM 8.x are
    
    installed.
    
    ```
    node -v 
    npm -v
    ```
    
    It should print the version of `node` (such as `v14.17.6`) and `npm` (such as
    
    `7.23.0`).
    
    **## Check out source code from git**
    
    ```
    cd
    mkdir Projects
    cd Projects
    git clone git@github.com:abridged/collabland-monorepo.git
    ```
    
    **## Install dependencies and bootstrap the project**
    
    ```
    cd collabland-monorepo
    npm i
    npm run build
    ```
    
    To force a clean build:
    
    ```
    npx lerna clean
    npm run build:full
    ```
    
    **## Visual Studio Code setup**
    
    We use Visual Studio Code for developing CollabLand API server.
    
    You can download Visual Studio Code from https://code.visualstudio.com/download
    
    and install it to your development machine. If you add `code` to the path,
    
    Visual Studio Code can be launched for `collabland-monorepo`.
    
    ```
    code .
    ```
    
    Install the following extensions:
    
    - [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    
    **## Set up AWS credentials**
    
    The CollabLand API server uses AWS services such as DynamoDB, KMS, and
    
    SecretsManager. To access AWS, please follow
    
    [these instructions](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html)
    
    to set up credentials for AWS.
    
    On Mac OS, it’s recommended that [AWS Vault] be used to store credentials with
    
    key chain. See [docs/aws-vault.md](https://github.com/abridged/collabland-monorepo/blob/master/docs/aws-vault.md).
    
    **## Set up Redis server**
    
    A Redis server is required to run API/Job servers locally. Please follow
    
    instructions at https://redis.io/docs/getting-started/installation/ to install a
    
    Redis server.
    
    You’ll then have to set `REDIS_HOST` and `REDIS_USERNAME` environment variable
    
    as follows to connect to the local Redis server.
    
    ```
    **export** REDIS_HOST=localhost**export** REDIS_USERNAME=default
    ```
    
    **## Start the API server**
    
    ```
    npm start
    ```
    
    To start the server with debug information:
    
    ```
    DEBUG=collabland:* npm start
    ```
    
    **## Run tests**
    
    ```
    npm test
    ```
    
    **## Run lint**
    
    To check the source code to be compliant with eslint and prettier rules:
    
    ```
    npm run lint
    ```
    
    To fix issues automatically:
    
    ```
    npm run lint:fix
    ```
5. # Set up AWS environment

## Selecting a Team Name and Environment Name

📙 **Terminology**

- `team`: the name of the development team (recommend using your company website toplevel domain)
- `env_name`: the name of the replica environment (each development team can have multiple environments)

4. go to the terraform folder
    1. `cd /packages/deployment/terraform`
    2. `cd collabland` to use those configuration files
    3. You may get ERROR: No terraform init run yet.
        1. Add this before terraform plan`terraform init`
            1. (NEED MORE CODE EXAMPLES / STUFF TO RUN
    4. Run `terraform plan`
    5. Run `terraform apply`
[Figure out other terraform docs. Refer and imrove Rodrigo's docs as well]

Todo: organize Caleb's docs and have a commmon place for frequently used docs

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