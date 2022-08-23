---
title: Stake validator node
id: validator-node-2
---

This guide explains how to **stake** 2,000,000 CUDOS tokens to your Validator node and appear on **Cudos Explorer**(insert link). 

## 01 Connect Keplr

1. Navigate to [**Cudos Explorer**](https://explorer.cudos.org)

2. Click the **key icon** in the top right corner

3. Allow permission to add a new network.

4. Open your Keplr wallet, select ***network name***. 

5. View and select the desired network e.g. **cudos-1**. 

## 02 Define Environment Variables

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Testnet" label="Testnet">

1. Define environment variables in `cudos-noded` (testnet)

- **CHAIN_ID** This is the blockchain to validate on. On the public **Testnet** this name is "cudos-testnet-public-3"

- **STAKE** The actual amount in `acudos` to be staked. 

:::caution 
`acodos` is a very small denomination. Be very careful about the number of zeros in the amount. For example "1000000000000000000acudos" = 1 CUDOS.
:::

- **MONIKER** This is the name you assigned to your node in the .env file `/var/lib/cudos/CudosBuilders/docker/full-node/full-node.client.testnet.public01.env`
 
 
2.  Navigate to your docker container and run the following command

```bash
sudo docker exec -it cudos-start-full-node-client-testnet-public-01 bash
```
  </TabItem>
  <TabItem value="Mainnet" label="Mainnet" default>

1. Define environment variables in `cudos-noded` (mainnet)

- **CHAIN_ID** This is the blockchain to validate on. On the public **Mainnet** this name is `cudos-1`

- **STAKE** The actual amount in `acudos` to be staked. 

:::caution 
`acodos` is a very small denomination. Be very careful about the number of zeros in the amount. For example "1000000000000000000acudos" = 1 CUDOS.
:::

- **MONIKER** This is the name you assigned to your node in the **.env** file `/var/lib/cudos/CudosBuilders/docker/full-node/full-node.client.mainnet.env`

2. Navigate to your docker container and run the following command

```bash
sudo docker exec -it cudos-start-full-node-mainnet bash
```
</TabItem>
</Tabs>

----

## 03 Stake CUDOS to your Validator (Testnet & Mainnet)

1. Use the example below to configure and run the `create-validator` command using your own parameters.

    This command exports CUDOS from the **wallet address** specified in your keyring to your **Validator node**

**PARAMETERS**

### `commission rate` 
The commission rate on block rewards and fees charged to **delegators**.

### `commission-max-rate`
The maximum commission rate that your validator can charge.

### `commission-max-change-rate`
The maximum daily increase of the validator commission. % point change over the `commission-rate`.

### `min-self-delegation`
Minimum amount of CUDOS the validator requires to have bonded at all time. If your validator node's self-delegated stake falls below this limit, it may be jailed and kicked out of the active validator set.

### `gas-prices`
Amount to charge for transactions. 


```json
// Example staking transaction

export STAKE="2000000000000000000000000acudos"
export CHAIN_ID="cudos-testnet-public-3" //Enter the CHAIN_ID for required network
Export MONIKER="Validator1"  // Enter your own Moniker

cudos-noded tx staking create-validator --amount=$STAKE \
    --from=validator1keyring \  //Enter the name of your own keyring
    --pubkey=$(cudos-noded tendermint show-validator) \
    --moniker=$MONIKER \
    --chain-id=$CHAIN_ID \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="2000000000000000000000000" \
--gas-prices="5000000000000acudos" \
--gas-adjustment 1.3 \
--keyring-backend="os" \
    -y
 ```



2. Enter your keyring passphrase

Authenticate and authorize the transaction by entering your **keyring passphrase**.

:::success

Success is indicated with an error free output. 

Wait a few minutes, then checkout [the Validators tab in Explorer](https://explorer.cudos.org/validators). You should see your MONIKER in the list of validators.

Congratulations you have successfully staked on your validator, and it is now operational.

:::

# Solving errors

1. `NotFound` Error Message

**Example message**

```bash
Error: rpc error: code = NotFound desc = rpc error: code = NotFound desc = account cudos1mnc7gm9sazrmcfdkshhmx3f0s4n2wp944wzjj4 not found: key not found`
```

**Solution**
Your validator is probably still syncing. Refer to [Checking sync status](/docs/node/run-node/check-sync) to verify sync status. 

2. Cannot see validator in Cudos Explorer

If you can’t see your node in the explorer's [Validators tab](https://explorer.cudos.org/validators), check the *Inactive tab* on the Cudos explorer.
 






