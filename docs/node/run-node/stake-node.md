---
title: Stake
id: stake
---

This guide explains how to stake funds to your node in order for it to become a Validator Node and be listed in the Explorers. 

## 00 Prerequisites

* You should have already prepared your node for validating. [see ***Prepare node***](docs/node/run-node/prepare-node-for-validating)

* Ensure you have a small amount of CUDOS tokens on the wallet address in your keyring for the transaction. 

* Send 2,000,000 CUDOS tokens to the wallet address on your keyring.

:::info Network & Chain ID 

### Testnet: cudos-testnet-public-3
### Mainnet: cudos-1

:::

## 01 Run the staking command:

`--from ` - The new_wallet_keyname or existing_wallet_keyname added to your keyring. 
`--pubkey` - The validator key added to your keyring.
`--moniker` - The MONIKER assigned to your node.
`--chain-id` - See above.

```shell
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



## Networks

:::info Network & Chain ID 

### Testnet: cudos-testnet-public-3
### Mainnet: cudos-1

:::

<!-- ## 00 Prerequisites

This guide uses shell variables to enable the use of cudos-noded CLI commands. 

Shell commands are only valid for the current shell session so if the shell session is closed, the shell variables will need to be re-defined.

If you want variables to persist for multiple sessions, then set them explicitly in your shell .profile.

## 01 Set the network and chain ID 

### Testnet 

```shell
CHAIN_ID=cudos-testnet-public-3
```

## 02 Set the MONIKER 

Choose a MONIKER that helps you identify your node. e.g Flamenco

```shell
MONIKER_NAME=<moniker-name>




* `MONIKER` for the node to be staked
* Completion of node preparation and keyring setup 

```shell

cudos-noded init <YOUR FULL NODE MONIKER> --chain-id <NETWORK ID>

```--> -->

## 01 Stake your node



:::tip Specify environmental variables

Enter the following environment variables to add your stake using `cudos-noded`. 

**CHAIN_ID**: This can be specified as `localhost`, `cudos-testnet-public-3`, `cudos-1`

**STAKE**: The amount in "acudos" to stake to the validator. `2000000000000000000000000acudos`

**MONIKER**: This is the `<YOUR FULL NODE MONIKER>` you assigned. 

:::


2. Amend the file as follows: 

```shell
export STAKE="2000000000000000000000000acudos"
export CHAIN_ID="cudos-testnet-public-3"
export MONIKER="YOUR FULL NODE MONIKER"

```

```jsx

# Staking command

cudos-noded tx staking create-validator --amount=$STAKE \
    --from=validator1keyring \
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

You will be prompted to enter your keyring passphrase.


If successful, you should see a long output with no errors. After a few minutes, if you go to [the Validators tab in Explorer](https://explorer.cudos.org/validators) and you can see your MONIKER in the list of validators then **you have successfully staked on your validator, and it is operational.**
