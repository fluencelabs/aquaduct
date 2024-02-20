## Fluence HTTP Gateway

Here you can find an example of simple Fluence HTTP gateway.
The gateway allows you to map Aqua functions to http requests i.e., you can create HTTP route and handle the incoming request by executing some Aqua function.
You can check it out and test this repo.

### Start gateway locally

- `npm install`
- `npm run start`
- `curl -X POST http://localhost:8080/my/callback/hello -H "ACCESS_TOKEN: abcdefhi" -H 'Content-Type: application/json' -d '{"name": "Fluence" }'`
- After running these commands you should see: `Hello, Fluence`

### Deploy to Vercel

You can also deploy the gateway to serverless platforms like Vercel. In order to do so follow the steps:

- Push the entire CLI template to public repository on Github.
- Create new Vercel account if you don't have one
- Add project in Vercel from your github account
- At the configuration page:
  - Point the root directory to `src/gateway`
  - Optionally pass environment variables for ACCESS_TOKEN and PEER_PRIVATE_KEY. If not given, hardcoded values will be used.
- Hit the deploy button, wait for the deployment.
- Try to interact with deployed gateway via this command - `curl -X POST https://{YOUR_DOMAIN, e.g. fluenceapp.vercel.app}/my/callback/hello -H 'ACCESS_TOKEN: abcdefhi' -H 'Content-Type: application/json' -d '{"name": "Fluence" }'`

### Notes:

Gateway contains four routes corresponding to Aqua functions: `helloWorld`, `helloWorldRemote`, `showSubnet` and `runDeployedServices`.

You can run `helloWorld` and `helloWorldRemote` right away.
To run `showSubnet` and `runDeployedServices` successfully, it is required to do `fluence deal deploy` then compile Aqua and restart the server.

> Remember to replace hardcoded token and peer private key. You can achieve that by placing these credentials in env variables, for example.
