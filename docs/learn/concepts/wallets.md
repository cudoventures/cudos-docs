---
title: Wallets
id: wallet
---

**Wallets** provide a convenient way to generate and store **key pairs** and perform various basic activities such as:

*creating transactions*, 

*signing messages*, 

*interacting with applications*, 

*communicating with the blockchain*.

## What are Wallets?

Wallets are **addresses** generated from an initial secret. Wallets such as Keplr generate an initial secret from 12 or 24 words known as a mnemonic (taken from a standardised dictionary). This Mnemonic acts as a **Master Private Key**. 

From this initial mnemonic, multiple key pairs can be derived with the Public key from each key pair used to derive an **address** (or multiple addresses).

:::
In this way, multiple accounts can be set up on a single Wallet.
:::

## Wallet Accounts

A **Wallet Account** consists of an **Address**, **Public Key** and **Private Key**.

Each Wallet address corresponds to a single key pair that can always be reproduced deterministically from a mnemonic by knowing its derivation path. There are a number of standards used to generate key pairs from the same mnemonic e.g. BIP 49 or BIP 44. 



**Keplr** is an example of a Cosmos SDK wallet. 



