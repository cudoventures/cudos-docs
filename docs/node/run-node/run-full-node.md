---
title: Run a full node (Docker)
id: full-node
---

This guide explains how to initialise and start a **full node**. A full node has the addresses of 3 **Seed nodes** pre-configured to allow it to connect to the Cudos network. 

It follows on from the [build environment](/docs/node/prerequisites/build-docker) which is a prerequisite for this step. 

A full node allows you to deploy **NFTs** and **Smart Contracts** to the Cudos blockchain. 

## Networks

`Testnet`
`Mainnet`


## 01 Run a Full node

:::info

Use `sudo` or change to a `root user`.

:::


```shell
# Change to root

sudo -i

# Navigate to full-node directory

cd /var/lib/cudos/CudosBuilders/docker/full-node
```

## 02 Select network 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs
  defaultValue="Testnet"
  values={[
    {label: 'Testnet', value: 'Testnet'},
    {label: 'Mainnet', value: 'Mainnet'},
  ]}>

<TabItem value="Testnet">

Follow this guidance for **Testnet**

##  Define environmental variables
 
1. Create a copy of ***full-node.env.example*** and name it ***full-node.client.testnet.public01.env***`

```bash
cp full-node.env.example full-node.client.testnet.public01.env
```

2. Open the file ***full-node.client.testnet.public01.env***. 
 
```shell
$ nano full-node.client.testnet.public01.env
```

3. Add the following to the file:

```
# Set the `"MONIKER"` (your node’s name on the blockchain) attribute to your desired name:

MONIKER=<your-node-moniker>

# Set flags 

SHOULD_USE_GLOBAL_PEERS=true

```

##  Initialize full node

1. Confirm you are in the correct directory as below:

```bash
pwd
/HOME/USER/var/lib/cudos/CudosBuilders/docker/full-node
```

2. Initialize the node

```bash
docker-compose --env-file full-node.client.testnet.public01.arg -f init-full-node.yml -p cudos-init-full-node-client-testnet-public-01 up --build
```

##  Start your node

```bash
docker-compose --env-file full-node.client.testnet.public01.arg -f start-full-node.yml -p cudos-start-full-node-client-testnet-public-01 up --build --detach
```

:::success ✅ 
You have been successful if you see a newly generated file containing your **node ID**, (string of random alphanumeric characters).

`/var/lib/cudos/CudosData/cudos-data-full-node-client-testnet-public-01/tendermint.nodeid`

:::

</TabItem>
<TabItem value="Mainnet">

Follow this guidance for **Mainnet**

##  Define environmental variables
  
1. Create a copy of ***full-node.env.example***, naming the copy ***full-node.client.mainnet.env***

```bash
cp full-node.env.example full-node.client.mainnet.env
```

2. Open the file ***full-node.client.mainnet.env***. 
 
```bash
# Set the `"MONIKER"` (your node’s name on the blockchain) attribute to your desired name:

MONIKER=<your-node-moniker>

# Set flags 

SHOULD_USE_GLOBAL_PEERS=true
```

3. **Exit** root mode and **Save** the file.

## Initialize full node

1. Confirm you are in the correct directory as below:

```bash
pwd
/HOME/USER/var/lib/cudos/CudosBuilders/docker/full-node
```

2. Initialize the node

```bash
docker-compose --env-file full-node.client.mainnet.arg -f init-full-node.yml -p cudos-init-full-node-mainnet up --build
```

## Start your node

```
docker-compose --env-file full-node.client.mainnet.arg -f start-full-node.yml -p cudos-start-full-node-mainnet up --build --detach
```

:::success ✅ 
You have been successful if you see a newly generated file containing your **node ID**, (string of random alphanumeric characters).

`/var/lib/cudos/CudosData/cudos-start-full-node-mainnet/tendermint.nodeid`

:::

  </TabItem>
</Tabs>

## 03 Check node status

Syncing may take several hours. Refer to [Checking sync status](./check-sync) to verify your node is syncing. 




