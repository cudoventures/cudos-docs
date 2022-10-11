---
title: Stake node
id: stake-node
---

This guide explains how to stake funds to your node. 
At the end of this guide your staked node is converted to a Validator Node and is listed in the Testnet or Mainnet Explorer. 

## 00 Prerequisites

* You should have already prepared your node for validating. [see ***Prepare node***](docs/node/run-node/prepare-node-for-validating)

* You should have:
    + 2M CUDOS tokens for your stake
    + Additional 100 CUDOS for transaction fees
    + Additional CUDOS reserve funds in case of being jailed and/or slashed

:::info Network & Chain ID 

**Network** and **Chain ID** are used interchangeably.

### Testnet: cudos-testnet-public-3
### Mainnet: cudos-1
:::


## 01 Run `create-validator` transaction

This step performs a transaction from a specified wallet to a chosen node and converts it to a Validator node. 

:::info what are acudos?
**acudos** are the smallest unit of **CUDOS**

1 CUDOS = 1 x 10^18 acudos

1 CUDOS = 1,000,000,000,000,000,000 acudos 
:::

Use the example below to configure and run the `create-validator` command using your own parameters.


### Parameters

**`--from `**

This is the `new_wallet_keyname` or `existing_wallet_keyname` added to your keyring.

**`--pubkey`**  

## PLEASE DOUBLE CHECK THIS SECTION.

 Validator operators can have different accounts for different purposes e.g. validating and holding funds. The `PubKey` submitted must be associated with the private key the validator will use to sign prevotes and precommits. It should begin as `cudovaloper`.

To find this, run the following command:

```shell
cudos-noded tendermint show-validator
```

or 

Use this command to list all local keys managed by `cudos-noded` key manager. 

```shell 
cudos-noded keys list
```

**`--moniker`** 

This is the name you assigned to your node to identify it easily e.g. Salsa. 

**`--chain-id`** 

See above.

**`--commission-rate`** 

This is the commission fee charged to **delegators**. 
This can change once every day up to its `commission-max-change-rate` and without exceeding the `commission-max-rate`.

**`--commission-max-rate`**

The maximum commission rate that your validator can charge.

**`--commission-max-change-rate`**

The maximum daily increase of the validator commission. % point change over the `commission-rate`.

**`--min-self-delegation`**

This is the minimum amount of CUDOS the validator requires to have bonded at all time. i.e. 2M CUDOS. If your validator node's self-delegated stake falls below this limit, it may be jailed and kicked out of the active validator set.

**`--gas-auto`**

If you set `--gas=auto`, the gas fee is automatically estimated before executing the transaction.

**`--gas-prices`**

This is the amount to charge for transactions. 


```shell
// Example staking transaction setting environmental variables


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

