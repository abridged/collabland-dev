# Terraform Tarmac

## Notes to delete:

Using some notes from George recorded here: [https://docs.google.com/document/d/1D6Q9wE1FRh1Swj8JCMe63MnvR65Bewhm0YRzuOCgKZo/edit#heading=h.3l2my2z9a49t](https://docs.google.com/document/d/1D6Q9wE1FRh1Swj8JCMe63MnvR65Bewhm0YRzuOCgKZo/edit#heading=h.3l2my2z9a49t)

## Follow Up Notes

- [ ]  Have a total Noob of one of my friends try this and see what problems they run into
    - [ ]  Probably won’t be able to clone the monorepo
        - [ ]  What will be our system for giving devs monorepo access?
    - [ ]  I still don’t understand the AWS access control.  Can a 3rd party not stand up an instannce on their own AWS - I guess this is a security concern.  Then I’m curious how this will work
- [ ]  Test this on EC2 - In Lue of having random friend install on their computer
    - [ ]  Create a linux instance and see if I can setup the project from scratch (document any linux trouble shooting too)
    - [ ]  I have the feeling I may need to login to my github or AWS account to make this work

## Install the project

```bash
git clone git@github.com:abridged/collabland-monorepo.git
cd collabland-monorepo
npm install
```

## Setup AWS account

Instructions found in `docs/aws-vault.md`

```bash
brew install --cask aws-vault
aws-vault add dev
> Login to your aws account
> Click on your account in the upper right corner and select "security credentials"
> Click "Create access key" on the main page
> Paste the public and secret keys when requested in the terminal
```

## Create an env file

```bash
touch env.sh
vim env.sh
> input text
export AWS_ACCOUNT=dev
export AWS_ACCOUNT=cl-sandbox
export COLLABLAND_ENV=<prefix>-<env_name>
#            Example: rocketfuel-dev
```

## Build Project

```bash
npm run-script build:full
```

## Start Project

```bash
npm start
```

## Install Terraform

[https://learn.hashicorp.com/tutorials/terraform/install-cli](https://learn.hashicorp.com/tutorials/terraform/install-cli)

### On OSX

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
(asked me to update command line tools)
sudo rm -rf /Library/Developer/CommandLineTools
sudo xcode-select --install
(try again)
brew install hashicorp/tap/terraform
(success)
```

## Run Terraform

```bash
cd packages/deployment/terraform/collabland/
terraform init
(throwing a permission error - I believe my AWS account needs to be white listed by the Tarmac team, 
how will this work when we release globally?)
(Waiting for results from Gatoca - once it works I'll ask him what he changed)
(problem was that the .aws credientlas were not set to cl-sandbox, then when I did set them they didnt work,
Finally worked when I set [default] as the .aws/credentials value to the sandbox values
Todo: Test with [cl-sandbox], reset [default] and see if I can get it to init using the env variable AWS_PROFILE 
because i think 
```

```bash
terraform plan

var.env_name
  Enter a value: dev
[ENTER]
var.prefix
  Enter a value: rocketfuel
[ENTER]

```

NEXT:

write notes of what it took to run

- [ ]  reread the telegram messages
    - [ ]  Create the caleb-build
- [ ]  change branch
    - [ ]  PR was pushed to master, pull new PR
- [ ]  pull
- [ ]  change aws [default]
- [ ]  terraform init
- [ ]  terraform plan
- [ ]  I can make a video about my setup

TODO: write any questions I have about the understanding of terraform, what does it do, whats the point, what did this command build in AWS.  These are the questions that future 3rd party devs will have, capture this current undertanding. 

# Create Caleb-Dev

```bash
 How I fetched after a push -f by mr G...
git fetch origin
git reset --hard origin/terraform_elasticbeanstalk_api_jobs
```

```bash

> collabland-monorepo
$> git checkout master
$> git pull
$> cd packages/deployment/terraform/collabland
$> terraform workspace new caleb-dev
$> terraform workspace select caleb-dev
$> collabland calebgates$ terraform workspace list
		  default
		* caleb-dev
		  rocketfuel-dev
		  tarmac-dev
$> terraform init
$> terraform plan
			var.env_name
			  Enter a value: dev
			[ENTER]
			var.prefix
			  Enter a value: caleb
			[ENTER]
$> terraform workspace show
			caleb-dev <------- *** Important so as to not overwrite another worksapce
$> terraform apply
			var.env_name
			  Enter a value: dev
			[ENTER]
			var.prefix
			  Enter a value: caleb
			[ENTER]
		Do you want to perform these actions?
		  Terraform will perform the actions described above.
		  Only 'yes' will be accepted to approve.
		  Enter a value: yes
>>>>> BUILDS A LOT OF STUFF

```

[Running The Job Server Locally](Terraform%20Tarmac%20a5101f24795f490b8ea02010407a56ac/Running%20The%20Job%20Server%20Locally%20cafbf0e064d04fb19ce7c1bc8b247a04.md)

[Dev Personas](Terraform%20Tarmac%20a5101f24795f490b8ea02010407a56ac/Dev%20Personas%205e81eeadb25a456aba18993ff0114d79.md)