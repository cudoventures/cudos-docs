---
title: Useful CLI commands
id: keys
---

This guide explains CLI commands to manage your **local keys** and **wallet addresses** with the **keyring** manager.  

## Key CLI

Run the following commands in the shell. 

In general, the format of commands is:

```shell
cudos-noded keys [command]
```

The following commands are available:

|Command | Description |
|-------|--------|
|  add   |      Add an encrypted private key (either newly generated or recovered), encrypt it, and save to `YOUR-FILE-NAME` |
|  delete  |    Delete the given keys |
|  export   |   Export private keys |
| import   |   Import private keys into the local keybase |
|  list    |    List all keys |
|  migrate   |  Migrate keys from the legacy (db-based) Keybase |
|  mnemonic  |  Compute the bip39 mnemonic for some input entropy |
|  parse   |    Parse address from hex to bech32 and vice versa |
|  show    |    Retrieve key information by name or address |


## Keys Help 

Use the following command to get detailed information on all available `key` commands. 

```shell
cudos-noded keys --help
```

## List all keys

Use this command to list all local keys managed by `cudos-noded` key manager. 

```shell 
cudos-noded keys list
```

## Add a new key

Use this command to add a new key in the keyring.

:::caution Key naming
***REMEMBER*** to use a name that helps you recall the key and its purpose later. 
:::

In this example, we are adding the key 'memorable-key-name' to the `keyring` with a backend configured to our `os`. 

```shell
cudos-noded keys add memorable-key-name --keyring-backend os
```

### Example

```shell
$ cudos-noded keys add salsa
- name: salsa
  type: local
  address: cudos1qr5rt72yf7s340123456dne7dd5n3
  pubkey: cudospub1addwnpep1234abcdefg540ftuz8x6tsqdct05k
  mnemonic: ""
  threshold: 0
  pubkeys: []

**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

random words there are twelve or twenty-four
```

:::warning

It is important that you keep the mnemonic for address secure, as there is no way to recover it. You would not be able to recover and access the funds in the wallet if you forget the mnemonic phrase.
:::



 