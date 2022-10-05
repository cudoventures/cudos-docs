---
title: Prepare node
id: prepare-node-for-validating
---

This guide explains how to prepare an existing **Full node** to become a **Validator node**. It assumes that you have already built a **Full node**. 

### Outcomes: 

* Use default `OS` backend to store **private keys**
* Securely add a wallet to a **keyring** 
* Securely add a validator key to the **keyring**

If you want to add an existing wallet you must have its **mnemonic**.   

## 00 Prerequisites

* A machine to run your validator node
* An existing full node that is **fully synced**. [see ***Run a Full Node***](run-full-node-redhat-debian)
* Familiarity with [**keyring backend options**](/docs/node/security/key-management) 

## 01 Add a new wallet key to the keyring

Let's use the `cudos-noded` CLI to add a new wallet key to our keyring 

```shell
$ cudos-noded keys add <your_new_wallet_keyname> --keyring-backend os
```

If you want to add an existing wallet run the following command:

```shell
$ cudos-noded keys add <your_existing_wallet_keyname> --recover
```
You are prompted to enter your seed phrase (BIP 39 Mnemonic). 

## 02 Check it has been added

```shell
$ cudos-noded keys list
```

## 03 Get Validator key

Before you can initialise your Validator node you need to obtain the public key created when you first initialised the node i.e. the full node. 

In the example in [Run a full node](/docs/node/run-node/run-full-node-redhat-debian), the Validator pubkey was `"8MECl86K55FL+s63L9wYGAyLXSPHrlHpcnE17rBm4vs="`

To obtain your validator pubkey run the following command:

:::note
A validator pubkey is issued for all nodes
:::

```shell
$ cudos-noded tendermint show-validator
```

You need your Validator key for the next step - Staking.











