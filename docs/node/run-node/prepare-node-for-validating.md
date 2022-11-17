---
title: Prepare node
id: prepare-node-for-validating
---

This guide explains how to prepare an existing **Full node** to become a **Validator node**. It assumes that you have already built a **Full node**. It walks you through: 

- Creating a new wallet or adding an existing wallet via the CLI, 
- Adding the wallet and validator key securely to a keyring. 

This section is best read after reading about [**key management**](/docs/node/security/key-management)

## 00 Prerequisites

* A machine to run your validator node
* An existing full node that is **fully synced**. [see ***Run a Full Node***](run-full-node)
* Default keyring backend is 'OS'. This means that the OS on your machine handles key storage.[**Check out keyring backend options**](/docs/node/security/key-management) 
* Keplr Wallet or account with 2M CUDOS tokens. [see ***Stake Requirements***](/docs/node/prerequisites/stake-req)


## Creating a new wallet

Let's use the `cudos-noded` CLI to create a new wallet and add it **new wallet key** to our **keyring**.

1. Create new `wallet key` 

```shell
cudos-noded keys add <your_new_wallet_keyname>
```
```shell
cudos-noded keys add MyCudosKeplr
Enter keyring passphrase:
Re-enter keyring passphrase:

- name: MyCudosKeplr
  type: local
  address: cudos1md69j99aea05pcefmqs74s9l3gsrywvk68h4lp
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A+AcApT/jCA9XJ5X+7YIvBgyA/hmp8vsWhJi1Mz6xA0S"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

bid curtain behave object hip summer can escape dwarf gloom soccer empty under regular thrive forum payment north asthma buyer wolf vintage suit funny
```

2. You can add this **mnemonic** to create a new account in a **Keplr wallet** if you wish. 

- Sign in to your Keplr Wallet

![account](@site/static/img/keplr-account.png)

3. Verify it has been added by viewing it inside your **Keplr wallet**. 

## Adding existing Keplr Wallet

:::info
This step assumes you already have a Keplr wallet with the required 2M CUDOS tokens
::: 

Let's use the `cudos-noded` Keys CLI to manage our keyring. 

### 01 Run the following command:

If you want to add an existing wallet run the following command:

```shell
cudos-noded keys add <your_keplr_wallet_name> --recover
```
You are prompted to enter your seed phrase (BIP 39 Mnemonic). 

#### *Example*

```shell
cudos-noded keys add tango --recover
> Enter your bip39 mnemonic
```

### 02 View your Keplr mnemonic

1. Inside your wallet, click the top right icon and select  'View Mnemonic Seed'

2. Copy the 'Mnemonic' seed and paste into the command line prompted

3. Create a keyring passphrase and enter it. 

#### *Example*

```shell
cudos-noded keys add tango --recover
> Enter your bip39 mnemonic
ostrich, panda, random, word, ostrich, zebra, leg
Enter keyring passphrase:

- name: tango
  type: local
  address: cudos1ayq6mrlk5neyuugv7u0wt2tn8zf7e6dx2jyevh
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A1CClZ6+tue9SUZaSX3X/JjWN7XCWgYYeh58RtPki+aP"}'
  mnemonic: ""
```

### 03 Verify it has been added 

```shell 
cudos-noded keys list
Enter keyring passphrase:
```

### 03 Get Validator key

Before you can initialise your Validator node you need to obtain the **public key** created when you first initialised the node i.e. the full node. 

To obtain your Validator **pubkey** run the following command:

```shell
$ cudos-noded tendermint show-validator
```

#### *Example*

In this example, the required key is `VBSW/jtiXEO+dDVxq65gS2t7C1cUvqX0KWk5DBDPPrI=`

```json
{"@type":"/cosmos.crypto.ed25519.PubKey","key":"VBSW/jtiXEO+dDVxq65gS2t7C1cUvqX0KWk5DBDPPrI="}
```

Now you are ready for [**Staking**](/docs/node/run-node/stake-node).











