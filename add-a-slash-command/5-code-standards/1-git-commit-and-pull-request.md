---
sidebar_position: 1
sidebar_label: How to Git Commit & Pull Request
sidebar_class_name: nav-normal-page
---

# How to Git Commit & Pull Request

# How to git commit (Should be last. they should not be committing the test code) How do they pick a branch name

(FROM: vv [https://www.notion.so/collab-land/Git-Commit-c00d9885b7c44811a3de9a91f719ce5f](https://www.notion.so/Git-Commit-c00d9885b7c44811a3de9a91f719ce5f))

## Step 1: Branches

Create a branch with a name related to your new feature.  

If we come up with more official branch naming follow that practice & update this documentation

```json
git pull
git checkout -b [branch name]
git push --set-upstream origin [branch name]
```

<aside>
💡 (how to name that branch (DO we have a convention?) - add warning boxes for questions I have for the team.

</aside>

## Step 2: Run Prettier

to format the code, from the root directory run:

```json
npm run prettier:fix
```

## Step 3: Run Lint

To check for lint formatting violations, from the root directory run:

```json
npm run lint
```

- Resolve all conflicts and run again.  This includes commenting out or removing unused variables and dependencies, fixing typescript violations, etc.
- Run again until there are zero violations

## Step 4: Add Copyrights

To maintain copyrights we use `lb4` from the package `npm install -g @loopback/cli`.  Run `lb4 copyright` in the directories you've edited.

```json
lb4 copyright
```

## Step 5: Git Push & GIT GUI

### 1. Install and Run Git Gui

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

### 2. Rescan

Use the rescan button to find new changes

### 3. Following The Git Commit Convention

GIT GUI makes it easy to write a commit message & add a signature.  

We follow this git convention standard

[https://www.conventionalcommits.org/en/v1.0.0/#summary](https://www.conventionalcommits.org/en/v1.0.0/#summary)

**An example commit message is as follows:**

```json
fix: ensure TopShot data is refreshed
    
SKIP_CI

Signed-off-by: Raymond Feng <raymond@collab.land>
```

**SKIP_CI**

`SKIP_CI` is a flag that can be added to skip the CICD build process.  This allows the deployment to take place in 3-4 minutes instead of 20-25 minutes.  

`SKIP_CI` is ideal for small changes after you've successfully deployed a complete build

`SKIP_CI` should not be run unless you have 

1. Successfully pushed a complete build without `SKIP_CI`
2. Verified that the job service starts without errors after your small changes `cd packages/job-server`, `npm start`

**Signed-off-by**

We follow the convention of adding a signature to specify who takes responsibility for each commit.  Signature can easily be added by GIT GUI

![Screen Shot 2021-11-29 at 2.04.48 PM.png](imgs/img24.png)

### 4. Commit and Push

When your commit message is ready use git gui to commit and push

## Step 5: Pull Requests

To merge code to master create a pull request in Github and have it reviewed by a member of the team.  Rebase and squash before merging.

### 1. Creating a Pull Request

![Screen Shot 2022-06-23 at 8.28.18 PM.png](imgs/img25.png)

![Screen Shot 2022-06-23 at 8.37.55 PM.png](imgs/img26.png)

If your code cant auto merge you may want to rebase locally

### 2. Make sure Checks all Pass

Creating a pull request will kick off the CICD build process checks.

Find your pull request at [`https://github.com/abridged/collabland-monorepo/pulls`](https://github.com/abridged/collabland-monorepo/pulls)

![Screen Shot 2022-06-17 at 6.04.38 PM.png](imgs/img27.png)

Click on the pull request then select “Checks”

![Screen Shot 2022-06-17 at 6.06.33 PM.png](imgs/img28.png)

If the checks are still running you’ll see a yellow status symbol

**Successful Build**

A successful build will have a green check mark

![Screen Shot 2022-06-17 at 6.13.18 PM.png](imgs/img29.png)

**Failed Build**

A failed build will have a red “X” 

![Screen Shot 2022-06-17 at 6.09.53 PM.png](imgs/img30.png)

You can click on `build(16)` to view the reasons the build failed

![Screen Shot 2022-06-17 at 6.12.18 PM.png](imgs/img31.png)

If your build fails it’s important to find out why and help resolve those errors in the code.

Frequently builds fail for “prettier” and “lint” violations.  

It’s also common that your local NPM install is different than what is included in all package.json files.  This is one reason it’s important to do a fresh npm install ocasionally so that you can be sure all the packages you’re using are reflected in package.json.  This becomes more relavent when packages are created and cross referenced within the [collab.land](http://collab.land) project.

## Step 6: Once the Build Succeeds

<aside>
💡 What do they do? How are we notified?  Is their commit message enough?

</aside>

## Await PR Review by [Collab.Land](http://Collab.Land) Team

<aside>
💡 What will this look like?
Scrolling window or weekly PR review?
Can they escalate?
How do we triage PRs?
Who is qualified to do the PR review?

</aside>
