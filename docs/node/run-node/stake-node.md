---
title: Stake your node
id: stake
---

This guide explains how to stake funds to your node. 
At the end of this guide your staked node is converted to a Validator Node and is listed in the Testnet or Mainnet Explorer. 

## 00 Prerequisites

* You should have already prepared your node for validating. [see ***Prepare node***](docs/node/run-node/prepare-node-for-validating)

* Ensure you have a small amount of CUDOS tokens on the wallet address in your keyring for the transaction. 

* Send 2,000,000 CUDOS tokens to the wallet address on your keyring.

:::info Network & Chain ID 

### Testnet: cudos-testnet-public-3
### Mainnet: cudos-1

:::

## 01 Run `create-validator` transaction

This step performs a transaction that adds the required stake in a specified wallet to a chosen node and converts it to a Validator node. 

```shell
cudos-noded tx staking create-validator --amount=$STAKE
```

Use the example below to configure and run the `create-validator` command using your own parameters.

### Parameters

**`--from `**

The new_wallet_keyname or existing_wallet_keyname added to your keyring.

**`--pubkey`** 

The validator key added to your keyring.

**`--moniker`** 

The MONIKER assigned to your node.

**`--chain-id`** 

See above.

**`--commission-rate`** 

The commission rate on block rewards and fees charged to **delegators**.

**`--commission-max-rate`**

The maximum commission rate that your validator can charge.

**`--commission-max-change-rate`**

The maximum daily increase of the validator commission. % point change over the `commission-rate`.

**`--min-self-delegation`**
Minimum amount of CUDOS the validator requires to have bonded at all time. If your validator node's self-delegated stake falls below this limit, it may be jailed and kicked out of the active validator set.

**`--gas-prices`**

Amount to charge for transactions. 


```json
// Example staking transaction setting environmental variables

```shell
export STAKE="2000000000000000000000000acudos"
export CHAIN_ID="cudos-testnet-public-3" //Enter the CHAIN_ID for required network
export MONIKER="Validator1"  // Enter your own Moniker

cudos-noded tx staking create-validator --amount=$STAKE \
    --from= <your_new_wallet_keyname> \
    --pubkey=$(cudos-noded tendermint show-validator) \
    --moniker=$MONIKER \
    --chain-id=$CHAIN_ID \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="2000000000000000000000000" \
    --gas="auto" \
    --gas-prices="5000000000000acudos" \
    --gas-adjustment="1.80" \
    --keyring-backend="os" \
    -y
```

## 02 Enter your keyring passphrase

Authenticate and authorize the transaction by entering your **keyring passphrase**.

:::success

Success is indicated with an error free output. 

Wait a few minutes, then checkout [the Validators tab in Explorer](https://explorer.cudos.org/validators). You should see your MONIKER in the list of validators.

Congratulations 🎉 you have successfully staked on your validator, and it is now operational.

:::

