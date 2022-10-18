---
title: Prepare node
id: prepare-node-for-validating
---

This guide explains how to prepare an existing **Full node** to become a **Validator node**. It assumes that you have already built a **Full node**. 

### Outcomes: 

* Use default `OS` backend to store **private keys**
* Securely add a wallet to a **keyring** 
* Securely add a validator key to the **keyring**

## 00 Prerequisites

* A machine to run your validator node
* An existing full node that is **fully synced**. [see ***Run a Full Node***](run-full-node)
* Familiarity with [**keyring backend options**](/docs/node/security/key-management) 
* Keplr Wallet or account with 2M CUDOS tokens. [see ***Stake Requirements***](/docs/node/prerequisites/stake-req)

## OPTION 1 Creating a new wallet

Let's use the `cudos-noded` CLI to add a new wallet key to our keyring

1. Create new wallet key 

```shell
cudos-noded keys add <your_new_wallet_keyname> --keyring-backend os
```
```shell
cudos-noded keys add MyCudosKeplr --keyring-backend os
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



2. You can then add this mnemonic to create a new account in Keplr wallet. 

3. Verify it has been added by viewing it inside your Keplr wallet. 

## OPTION 2 Add a Keplr Wallet with 2M CUDOS tokens to the keyring

Let's use the `cudos-noded` Keys CLI to manage our keyring. 

```shell
cudos-noded keys
```
:::tip Commands 

Notice the `add` command:

***add*** - Add an encrypted private key (either newly generated or recovered), encrypt it, and save to `name` file
:::




## 01 Run the following command:

If you want to add an existing wallet run the following command:

```shell
cudos-noded keys add <your_keplr_wallet_name> --recover
```
You are prompted to enter your seed phrase (BIP 39 Mnemonic). 

### Example

```shell
cudos-noded keys add tango --recover
> Enter your bip39 mnemonic
```

## 02 View your Keplr mnemonic

1. Inside your wallet, click the top right icon and select  'View Mnemonic Seed'

2. Copy the 'Mnemonic' seed and paste into the command line prompted

3. Create a keyring passphrase and enter it. 

### Example

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

## 03 Verify it has been added 

```shell 
cudos-noded keys list
Enter keyring passphrase:
```
### Example result 

```shell
- name: MyCudosKeplr
  type: local
  address: cudos1mdalphabet12345srywvk68h4lp
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A+AcApT/jCA9XJ5X+7YIvBgyA/hmp8vsWhJi1Mz6xA0S"}'
  mnemonic: ""
- name: tango
  type: local
  address: cudos1ayq6mrlk5neyalphabet123456
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A1CClZ6+tue9SUZaSX3X/JjWN7XCWgYYeh58RtPki+aP"}'
  mnemonic: ""
```

## 02 Enter a keyring passphrase

This needs to be entered twice. You are creating a new keyring passphrase. 

```shell 
Enter keyring passphrase:keyring passphrase
Re-enter keyring passphrase:
```

## 03 Use "cudos-noded keys [command] --help" for more information about a command.
root@testnet-validator-01:~# cudos-noded keys add MyCudosKeplr --keyring-backend os
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

## 02 Check it has been added

```shell
$ cudos-noded keys list
```

## 03 Get Validator key

<!-- Copy the `"key"` inside `"pubkey"` In the example below this is `A1CClZ6+tue9SUZaSX3X/JjWN7XCWgYYeh58RtPki+aP`

IN THE SSH SESSION 






```shell
- name: tango
  type: local
  address: cudos1ayq6mrlk5neyuugv7u0wt2tn8zf7e6dx2jyevh
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A1CClZ6+tue9SUZaSX3X/JjWN7XCWgYYeh58RtPki+aP"}'
  mnemonic: ""
```

 -->

Before you can initialise your Validator node you need to obtain the public key created when you first initialised the node i.e. the full node. 

To obtain your Validator **pubkey** run the following command:

```shell
$ cudos-noded tendermint show-validator
```

### Example

In this example, the required key is `VBSW/jtiXEO+dDVxq65gS2t7C1cUvqX0KWk5DBDPPrI=`

{"@type":"/cosmos.crypto.ed25519.PubKey","key":"VBSW/jtiXEO+dDVxq65gS2t7C1cUvqX0KWk5DBDPPrI="}

Now you are ready for Staking.











