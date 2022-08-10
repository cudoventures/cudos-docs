---
title: Accounts
id: account
---

A Cudos **Account** is created in two ways.

You can generate a account locally using cudos noded with the following command:

cudos-noded keys add <account_name> --keyring-backend <one of (os|file|test)>

you can use this command to add an account for which you have a mnemonic
cudos-noded keys add <account_name> --recover

for ledger wallet:
cudos-noded keys add <account_name> --ledger (edited) 

1. Connecting a **Keplr wallet** to the Cudos Network.
2. On the command line when `cudosnoded` binaries are installed.

Creating a Cudos account designates a **key pair**.

**Public key** (PubKey) and **Private key** (PrivKey). 

## Public key

The **PubKey** is derived to generate **addresses**. These **addresses** are used to identify users (among other parties). **Addresses** are also associated with **messages** to identify the **sender** of the message. 

## Private key

The **PrivKey** is used to generate **digital signatures** to prove that an **Address** associated with the PrivKey approved of a given message.
