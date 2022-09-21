---
title: Accounts
id: account
---

A Cudos **account** is a pair of keys used to uniquely identify a user (or entity) and allow them to authenticate and verify transactions on the Cudos Network. 

An account is stored as an **account object**.

## Account Key Pairs

There are two keys: A **Public Key** and a **Private Key**. 

The **Public Key** is used to generate an **Address** (or multiple addresses).

An **Account object** is an implementation of an account keypair. It stores the following:

1. Public Key (`PubKey`)
2. `Address` derived from the Public Key
3. Account number (`AccountNumber`)
4. `Sequence`

### Example Account object 

```go
type BaseAccount struct {
	Address       string     `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	PubKey        *types.Any `protobuf:"bytes,2,opt,name=pub_key,json=pubKey,proto3" json:"public_key,omitempty"`
	AccountNumber uint64     `protobuf:"varint,3,opt,name=account_number,json=accountNumber,proto3" json:"account_number,omitempty"`
	Sequence      uint64     `protobuf:"varint,4,opt,name=sequence,proto3" json:"sequence,omitempty"`
}
```

## Public key

The Public Key - `PubKey` is safe to disclose and is used to verify a user or entity's identity.

### Generation of Addresses

`PubKey` is used to generate `Address` using algorithms. One or more unique addresses can be generated from the Public Key. 

`Addresses` are public and safe to share. These are also known as `Wallet Addresses`. 

`Addresses` are also used to identify users or entities on the Cudos Network. For example as owners of a wallet or authorised signatories.  

## Private Key

The Private Key - `PrivKey` is a secret, encrypted key that is used to sign transactions on the Cudos Network.

Ownership and control over the **Private Key** is the cornerstone of user control on all funds associated with the corresponding **Public Key** and **Address**. 

1. The Private Key is the only way to decrypt information that has been encrypted by the Public Key of a key pair. For example accessing a wallet. 

2. The Private Key is used to create **Signatures** for transactions. 

## Signatures

Signatures prove ownership and authorise changes, for example to funds used in a transaction. 
The signature can be verified by another user or entity by confirming that its public key matches the public key of the sender. 

This forms the basis of **Authentication** and **Assurance** on the network. 

:::tip Security

### Authentication 

Authentication of a message or user/entity is guaranteed by the use of asymmetric public key cryptography. This is a cryptographic system that uses key pairs. The asymmetry refers to the fact that parties are not required to use a secure channel to exchange keys for encryption and decryption.

### Assurance 

Assurance (nonrepudiation) is guaranteed through the use of signatures. 

:::

<!-- 
**Addresses** are  associated with **messages** to identify the **sender** of the message. 

Transactions are formatted with the `PubKey`as part of the message. 

 object containing key fields:

`Address`
`PubKey`
`AccountNumber`
`Sequence`

1. Connecting a **Keplr wallet** to the Cudos Network.

2. On the command line using the `cudosnoded` binary.

:::note
When setting up nodes on the Cudos Network, each node has an **account** and **wallet**. 

You can also use the **mnemonic** from your Keplr wallet.
:::

Creating a Cudos account designates a **key pair**.

**Public key** (PubKey) and **Private key** (PrivKey). 



## Private key

The **PrivKey** is used to generate **digital signatures** to prove that an **Address** associated with the PrivKey approved of a given message.

Generate an account locally using `cudos noded` with the following command:

```shell 
cudos-noded keys add <account_name> --keyring-backend <one of (os|file|test)>
```

This command generates your **24 word mnemonic** and a single **seed** from which your **private key** is derived.

You can use this command to add an account for which you have a mnemonic. For example, from a **Keplr wallet** you have created.

```shell
cudos-noded keys add <account_name> --recover
```

for ledger wallet:

```shell
cudos-noded keys add <account_name> --ledger (edited) 
``` -->



