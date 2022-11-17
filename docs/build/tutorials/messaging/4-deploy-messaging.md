---
title: Deploy messaging
id: deploy-messaging
---

In this section, you're going to upload your optimised `wasm` file to the testnet.

1. Open **scripts > deploy.js**

2. Replace ***alpha*** with your project name. e.g. newproject 

![update-deploy](@site/static/img/update-deploy.png)

3. Open **blast.config.js** to confirm you are deploying your contract to Testnet.

4. When you're good to go, run the following commands:

```shell
blast run scripts/deploy.js
```

The address at which the contract resides is returned.

You can now interact with it from the front end. 

:::tip 
Nice work!!! 🎉
:::