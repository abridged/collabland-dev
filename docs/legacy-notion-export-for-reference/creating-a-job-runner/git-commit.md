---
sidebar_position: 8
---

# 6. Git Commit

# Branches

Create a branch with a name related to your new feature.  

If we come up with more official branch naming follow that practice & update this documentation

```json
git pull
git checkout -b [branch name]
git push --set-upstream origin [branch name]
```

# Prettier

to format the code, from the root directory run:

```json
npm run prettier:fix
```

# Lint

To check for lint formatting violations, from the root directory run:

```json
npm run lint
```

- Resolve all conflicts and run again.  This includes commenting out or removing unused variables and dependencies, fixing typescript violations, etc.
- Run again until there are zero violations

# Copyrights

To maintain copyrights we use `lb4` from the package `npm install -g @loopback/cli`.  Run `lb4 copyright` in the directories you've edited.

```json
lb4 copyright
```

# Git Push & GIT GUI

Mac install git gui

```json
brew install git-gui
```

Navigate to your projects root directory and run git gui

```json
git gui
```

Use the user interface to easily see the differences between files

Stage or un-stage files for commit by clicking on the icon to the left of them.

### Rescan

Use the rescan button to find new changes

## Committing

GIT GUI makes it easy to write a commit message & add a signature.  

### FIX: Git Convention

We follow this git convention standard

[https://www.conventionalcommits.org/en/v1.0.0/#summary](https://www.conventionalcommits.org/en/v1.0.0/#summary)

**An example commit message is as follows:**

```json
fix: ensure TopShot data is refreshed
    
SKIP_CI

Signed-off-by: Raymond Feng <raymond@collab.land>
```

### SKIP_CI

`SKIP_CI` is a flag that can be added to skip the CICD build process.  This allows the deployment to take place in 3-4 minutes instead of 20-25 minutes.  

`SKIP_CI` is ideal for small changes after you've successfully deployed a complete build

`SKIP_CI` should not be run unless you have 

1. Successfully pushed a complete build without `SKIP_CI`
2. Verified that the job service starts without errors after your small changes `cd packages/job-server`, `npm start`

### Signed-off-by

We follow the convention of adding a signature to specify who takes responsibility for each commit.  Signature can easily be added by GIT GUI

![git commit](./img/img6.png)

### All steps in order

- Rescan
- Comment
- Sign Off
- Commit
- Push
- Ok

## Pull Requests

To merge code to master create a pull request in Github and have it reviewed by a member of the team.  Rebase and squash before merging.