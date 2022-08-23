---
title: Accounts
id: account
---

A Cudos **account** is created in two ways:

1. Connecting a **Keplr wallet** to the Cudos Network.

2. On the command line using the `cudosnoded` binary.

:::note
When setting up nodes on the Cudos Network, each node has an **account** and **wallet**. 

You can also use the **mnemonic** from your Keplr wallet.
:::

Creating a Cudos account designates a **key pair**.

**Public key** (PubKey) and **Private key** (PrivKey). 

## Public key

The **PubKey** is derived to generate **addresses**. These **addresses** are used to identify users (among other parties). **Addresses** are also associated with **messages** to identify the **sender** of the message. 

## Private key

The **PrivKey** is used to generate **digital signatures** to prove that an **Address** associated with the PrivKey approved of a given message.


Generate an account locally using `cudos noded` with the following command:

```shell 
cudos-noded keys add <account_name> --keyring-backend <one of (os|file|test)>
```

This command generates your **24 word mnemonic** and a single **seed** from which your **private key** is derived.

You can use this command to add an account for which you have a mnemonic
cudos-noded keys add <account_name> --recover

for ledger wallet:
cudos-noded keys add <account_name> --ledger (edited) 




