---
sidebar_position: 4
---

# AWS Vault Setup

# AWS Vault Setup: Store AWS credentials in the MacOS Keychain

It's a serious concern that we store AWS credentials in plain text on your local
machine, such as `~/.aws/credentials`.

[AWS Vault](https://github.com/99designs/aws-vault)enables us to store AWS
credentials in a key chain on MacOS.

## Step 1: Install aws-vault

```bash
brew install --cask aws-vault
```

See more details at https://github.com/99designs/aws-vault/#installing.

## Step 2: Create a profile

```bash
aws-vault add dev
```

You will be prompted to provide AWS credentials and a custom key chain to store
them.

The tool will add the profile to `~/.aws/config`:

```bash
[default]
region=us-west-1
output=json

[profile dev]
```

## Step 3: Store AWS credentials in MacOS Keychain

### 1. Now let's add `credential_process` to the config.

```bash
[default]
region=us-west-1
output=json
credential_process = aws-vault exec dev -j

[profile dev]
region=us-west-1
output=json
credential_process = aws-vault exec dev -j
```

Please note it allows multiple AWS config profiles and the default one can be
set using `AWS_PROFILE` environment variable.

### 2. To Create a profile with a different name

follow this format in ~/.aws/config

```bash
[profile [PROFILE-NAME]]
region=us-west-1
output=json
credential_process = aws-vault exec [PROFILE-NAME] -j
```

Example

```bash
[profile dev]
region=us-west-1
output=json
credential_process = aws-vault exec dev -j
```

### 3. Try it out

**TODO: What’s this command do in the terminal?**

```bash
aws-vault exec dev -j
```

**Login to the AWS Console**

```bash
aws-vault login dev
```

**Run AWS CLI or other programs that require AWS credentials**

Just run the command as-is.

TODO: For example

**Remove `~/.aws/credentials`**

DO NOT FORGET to remove `~/.aws/credentials`!!!
You can also rename credentials to something else

```bash
mv ~/.aws/credentials ~/.aws/credentials_renamed

# with Sudo

sudo mv ~/.aws/credentials ~/.aws/credentials_renamed

# or Remove

rm ~/.aws/credentials
```

**Customize the aws-vault key chain**

You can change password or settings for the `aws-vault` key chain. See
instructions at
https://github.com/99designs/aws-vault/blob/master/USAGE.md#keychain.
