---
sidebar_position: 4
---

# Launch Collab.Land Connect

## Prerequisites 
 - node 14

## Building the app
 Check out the repo at [https://github.com/abridged/collabland-connect](https://github.com/abridged/collabland-connect)

Then you can build the app with (Make sure you've got node 14 installed )
```bash
yarn build
```
You'll need the following env vars set up for the app to run

 ```bash
export REACT_APP_IS_DEBUG=false
export REACT_APP_API_SERVER_URL= https://collabland-<username>.loca.lt
export PORT=3000
```
Where `REACT_APP_API_SERVER_URL` is the url your local api-server is running on

After that you can just run the app using
```bash
npm run start
 ```