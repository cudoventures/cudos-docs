---
title: Build a dApp on CudoCompute
id: compute-dapp
---

In this tutorial, you have the chance to set up a simple dApp on CudoCompute using [**create-cosmos-app**](https://github.com/cosmology-tech/create-cosmos-app) created by Cosmology. 

## Let's get set up on CudoCompute

1. Register an account at [CudoCompute](https://accounts.cudo.org/sign-up?redirect_url=https://compute.cudo.org&_gl=1*frw7tz*_ga*MTIwMjEwMjIxMS4xNjY5MzE0MTM3*_ga_KFR6C2NZHG*MTY3NTM1NzA0Ny4xMS4xLjE2NzUzNTcwNjAuNDcuMC4w&_ga=2.262274639.2133021104.1675357047-1202102211.1669314137)
   
2. Add an SSH key
 [Check out how](https://docs.cudocompute.com/guide/ssh-keys)

3. Create a billing account and set up a project.
 [Create a billing account](https://docs.cudocompute.com/guide/billing#create-a-billing-account)
 [Create a project](https://docs.cudocompute.com/guide/projects#create-a-project)

4. [Create a Virtual Machine](https://docs.cudocompute.com/guide/virtual-machines#create-a-virtual-machine)
Be sure to select **Ubuntu Minimal 20.04**

5. SSH into the machine.

:::info
Let us know your thoughts by leaving feedback on the CudoCompute platform
:::

## Install create-cosmos-app on Ubuntu 20.04

1. Update the package manager (press 1 when prompted to):

```bash   
apt-get update && apt-get -y upgrade
```

2. Run the following curl command

```bash
curl node:
curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash -
```

3. Install **node** and **git**
   
```bash
sudo apt-get install -y nodejs
sudo apt-get install -y git
```

4. Use npm to install **yarn** and **create-cosmos-app**

```bash   
npm install --global yarn
npm install -g create-cosmos-app
```

5. Run `create-cosmos-app`

```bash
create-cosmos-app
Name your app and set multi-chain:
? [name] Enter your new app name: my-app

Cloning into 'my-app'...

? [template] which template (Use arrow keys)

> connect-multi-chain
```

(you may need to wait a while)

6. Change directory and run your app

```bash   
cd my-app
yarn && yarn dev
```

Open the IP of your server in a web browser on port 3000, eg (http://34.246.34.92:3000)

:::success 🎉

## Well done!
:::