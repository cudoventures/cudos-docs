---
title: Run a full node
id: full-node
---

This guide explains how to initialise and start a **full node**. A full node has the addresses of 3 **Seed nodes** pre-configured to allow it to connect to the Cudos network. 

It follows on from the [build environment](/docs/node/prerequisites/build-envt) which is a prerequisite for this step. 

A full node allows you to deploy **NFTs** and **Smart Contracts** to the Cudos blockchain. 

## Networks

`Testnet`
`Mainnet`

## 01 Set up full node

:::info

Use `sudo` or change to a `root user`.

:::

```bash
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

## 03 Define environmental variables
 
1. Create a copy of ***full-node.env.example*** and name it ***full-node.client.testnet.public01.env***`

```bash
cp full-node.env.example full-node.client.testnet.public01.env
```

2. Open the file ***full-node.client.testnet.public01.env***. 
 
```bash
# Set the `"MONIKER"` (your node’s name on the blockchain) attribute to your desired name:

MONIKER=<your-node-moniker>

# Set flags 

SHOULD_USE_GLOBAL_PEERS=true

```

## 04 Initialize full node

1. Confirm you are in the correct directory as below:

```bash
pwd
/HOME/USER/var/lib/cudos/CudosBuilders/docker/full-node
```

2. Initialize the node

```bash
docker-compose --env-file full-node.client.testnet.public01.arg -f init-full-node.yml -p cudos-init-full-node-client-testnet-public-01 up --build
```

## 05 Start your node

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

## 03 Define environmental variables
  
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

## 04 Initialize full node

1. Confirm you are in the correct directory as below:

```bash
pwd
/HOME/USER/var/lib/cudos/CudosBuilders/docker/full-node
```

2. Initialize the node

```bash
docker-compose --env-file full-node.client.mainnet.arg -f init-full-node.yml -p cudos-init-full-node-mainnet up --build
```

## 05 Start your node

```
docker-compose --env-file full-node.client.mainnet.arg -f start-full-node.yml -p cudos-start-full-node-mainnet up --build --detach
```

:::success ✅ 
You have been successful if you see a newly generated file containing your **node ID**, (string of random alphanumeric characters).

`/var/lib/cudos/CudosData/cudos-start-full-node-mainnet/tendermint.nodeid`

:::

  </TabItem>
</Tabs>

## 06 Check node status

Syncing may take several hours. Refer to [Checking sync status](./check-sync) to verify your node is syncing. 




