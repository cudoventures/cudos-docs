---
title: Prepare node
id: prepare-node-for-validating
---

This guide explains how to prepare an existing full node to become a validator node.

Outcomes:

* Determine a backend to store **private keys**
* Securely add a wallet to a **keyring** 
* Securely add a validator key to the ***keyring**

If you want to add an existing wallet you must have its seed phrase.   

## 00 Prerequisites

* A machine to run your validator node
* An existing full node that is **fully synced**. [see ***Run a Full Node***](run-full-node-redhat-debian)

:::tip Selecting a backend to store private keys

### *The `os` backend (default)*

***This is the backend chosen for the rest of this guide. ***

`os` is the default option as OS credential managers are designed to meet most common needs and provide a streamlined experience without compromising on security.

The `os` backend uses operating system-specific defaults to handle credentials and key storage securely. These include password prompts and user sessions according to user defined password policies. Here is a list of the most popular operating systems and their respective passwords manager.

* macOS (since Mac OS 8.6): Keychain 
[View details at external site](https://support.apple.com/en-gb/guide/keychain-access/welcome/mac)

* Windows: Credentials Management API 
[View details at external site](https://docs.microsoft.com/en-us/windows/win32/secauthn/credentials-management)

* GNU/Linux:
    * libsecret 
    [View details at external site](https://gitlab.gnome.org/GNOME/libsecret)
    * kwallet 
    [View details at external site](https://api.kde.org/frameworks/kwallet/html/index.html)

### *The `file` backend*

***Recommended for a headless environment***.


The `file` backend stores the keyring encrypted inside the application configuration directory. A password is requested each time the keyring is accessed.

The first time you add a key to an empty keyring, you are prompted to type the password twice.

### *The `pass` backend*

***Recommended for a headless environment***.

The `pass` backend uses the pass utility to manage on-disk encryption of keys' sensitive data and metadata. Keys are stored inside `gpg` encrypted files within app-specific directories. `pass` is available for the most popular UNIX operating systems as well as GNU/Linux distributions. 

[**Find out more about `pass`**](https://www.passwordstore.org/)

:::

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











