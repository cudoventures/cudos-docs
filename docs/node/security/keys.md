---
title: Useful key CLI commands
id: keys
---

This guide explains how to manage your local keys and wallet addresses for the Cudos network using the `cudos-noded` CLI.

You can use `cudos-noded` keys for help about the keys command and cudos-noded keys [command] --help for more information about a particular subcommand.

We will use backend `os`

## List all keys

Use this command to list all local keys managed by `cudos-noded` key manager. 

```shell 
cudos-noded keys list
```

## Create a new key

Use this command to create a new key in the keyring.

```shell
cudos-noded keys add <key_name>
```

### Example

```shell
$ cudos-noded keys add myKey
- name: myKey
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

The key comes with a "mnemonic phrase", which is serialized into a human-readable 24-word mnemonic. User can recover their associated addresses with the mnemonic phrase.

:::warning

It is important that you keep the mnemonic for address secure, as there is no way to recover it. You would not be able to recover and access the funds in the wallet if you forget the mnemonic phrase.
:::

# Restore a key from seed phrase

```shell
$ cudos-noded keys add <key_name> --recover
```

You are prompted to enter your seed phrase (BIP 39 Mnemonic). 


 