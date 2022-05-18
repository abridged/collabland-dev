# Replica Environments On-Boarding

## Note:

First party devs can debug permissions by having tarmac create them a 3rd party IAM user.  Then by using 2 sets of [env.sh](http://env.sh) files a developer can identify what works using their 1st party AWS credentials and then what’s broken using their 3rd party AWS credentials.  Using this apples to apples comparison will help 1 developer better identify inconsistencies in permissioning.

## Creating the environment

All the configuration files are located in the `/packages/deployment/terraform` directory to deploy a new environment you should plan and apply the configuration

<aside>
📙 **Terminology**

- `env_name`: the name of the replica environment (each development team can have multiple)
- `prefix`: the name of the development team
</aside>

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

## Running the code locally

Following the local deployment info from the README files all you need to do is is build and start the project using the following commands

### Prerequisite

Essential for successful running the code locally is the setup of the `aws-vault`.

You can setup by following the instructions on the monorepo `/docs/aws-vault.md`

```bash
export AWS_ACCOUNT=<AWS_ACCOUNT>

export COLLABLAND_ENV=[<prefix>-<env_name>](Replica%20Environments%20On-Boarding%200340ebcd863b4fd3bc38b1920ba480d2.md)
```

### Build

```bash
npm run-script build:full
```

### Run

```bash
npm start
```

## **[TBD]** Deploying code to a replica environment

Developer teams having access to the monorepo holding the infrastructure code, will be able to deploy their code and test by pushing to specific branch-names.

### Manually

1. Use the bin script to zip the BE application. Script can be found at `/bin/create-api-server-zip.sh`
2. After that navigate to the AWS Elastic Beanstalk, there you can drag n’ drop the previously created zip into the respective application and wait to deploy

### GitHub Workflow

TBD

Technical Approach:

- Track through branches (e.g `rocketfuel/dev/main`)