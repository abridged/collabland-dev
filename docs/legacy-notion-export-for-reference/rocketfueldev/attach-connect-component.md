# Attach connect component to the api-server

Several subsystems need to attach a wallet to your authenticated account in order to provide full functionality and access 

## Setup

### Connect Component

Make sure that you start the component locally with the necessary env variable `REACT_APP_API_SERVER_URL`

```bash
export REACT_APP_API_SERVER_URL=https://collabland-xxx.loca.lt
```

That will ensure that signing validation communicates with the correct `api-server`

<aside>
🌎 You can expose your local backend publicly by adding the `—-local-tunnel` flag to the start script.
`node --enable-source-maps . --local-tunnel`
This will output on the console the following line indicating the public URL
`Local tunnel is started at https://collabland-xxx.loca.lt`

</aside>

### BE Component

Head to the file `/components/discord/src/buttons/join.button.ts` at `buildConnectURL` function and set variable `connectPage` to point at your locally deployed instance of the `connect` component (e.g. `http://localhost:3001`)