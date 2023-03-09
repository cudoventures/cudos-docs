---
title: CLI
id: cli
---

This page lists all commands available on `cudos-noded` CLI. 

```shell
cudos-noded --help
```

## Setting up

Set up the address of the node you want to connect to:

```shell
cudos-noded config node <host>:<port>
```

Connect to network 

```shell
cudos-noded status --node https://rpc.testnet.cudos.org:443
```

## Account/Keys

Create a new account to receive funds, send txs etc. 

```shell
cudos-noded keys add <account_name>
```

Regenerate a key from a mnemonic with the following command:

```shell
cudos-noded keys add --recover
```

View a validator operator's address via:

```shell
cudos-noded keys show <account_name> --bech=val
```

View all your available keys:

```shell
cudos-noded keys list
```

View the validator pubkey for your node by typing:

```shell
cudos-noded tendermint show-validator
```

## Gas & Fees

```shell
cudos-noded tx bank send ... --fees=50000acudos
```
or

```shell
cudos-noded tx bank send ... --gas-prices=0.0025acudos
```



