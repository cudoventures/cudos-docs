---
title: Accounts
id: account
---

A Cudos **Account** is created in two ways.

1. Connecting a **Keplr wallet** to the Cudos Network.
2. On the command line when `cudosnoded` binaries are installed.

Creating a Cudos account designates a key pair.

**public key** PubKey and **private key** PrivKey. 

## Public key

The **PubKey** is derived to generate **addresses**. These **addresses** are used to identify users (among other parties). **Addresses** are also associated with **messages** to identify the **sender** of the message. 

## Private key

The **PrivKey** is used to generate **digital signatures** to prove that an **Address** associated with the PrivKey approved of a given message.

For HD key derivation the Cosmos SDK uses a standard called BIP32 (opens new window). The BIP32 allows users to create an HD wallet (as specified in BIP44 (opens new window)) - a set of accounts derived from an initial secret seed. A seed is usually created from a 12- or 24-word mnemonic. A single seed can derive any number of PrivKeys using a one-way cryptographic function. Then, a PubKey can be derived from the PrivKey. Naturally, the mnemonic is the most sensitive information, as private keys can always be re-generated if the mnemonic is preserved.