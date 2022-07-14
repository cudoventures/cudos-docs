---
title: Run a full node (testing)
id: full-node
---

This guide explains how to initialise and start a **full node** without connecting it to the Cudos network. This is useful for testing purposes. 

This guide follows on from the [build environment](build-envt) which is a prerequisite for this step. 

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

## 02. Define environmental variables

1. Create a copy of `full-node.env.example`, naming the copy `full-node.client.mainnet.env`

```
cp full-node.env.example full-node.client.mainnet.env
```

2. Open the file `full-node.client.mainnet.env`. 
 
```bash
# Set the `"MONIKER"` (your node’s name on the blockchain) attribute to your desired name:

MONIKER=<your-node-moniker>

# Set flags 

SHOULD_USE_GLOBAL_PEERS=true
```

3. **Exit** root mode and **Save** the file.

## 03 Initialize full node

1. Confirm you are in the correct directory as below:

```bash
pwd
/HOME/USER/var/lib/cudos/CudosBuilders/docker/full-node
```

2. Initialize the node

```bash
docker-compose --env-file full-node.client.mainnet.arg -f init-full-node.yml -p cudos-init-full-node-mainnet up --build
```

## 04 Start your node

```
docker-compose --env-file full-node.client.mainnet.arg -f start-full-node.yml -p cudos-start-full-node-mainnet up --build --detach
```

:::success ✅ 
You have been successful if you see a newly generated file containing your **node ID**, (string of random alphanumeric characters).

`/var/lib/cudos/CudosData/cudos-start-full-node-mainnet/tendermint.nodeid`

:::

## 05 Check node status

Syncing may take several hours. Refer to [Checking sync status](./check-sync) to verify your node is syncing. 