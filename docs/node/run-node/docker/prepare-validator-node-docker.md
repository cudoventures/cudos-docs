---
title: Prepare Validator node
id: prepare-validator-docker
---

This guide explains how to securely prepare a **Full node** for staking by adding a **keyring** to hold validator keys and enable connection to an authorised wallet.  

This is a prerequisite to staking **CUDOS tokens** on the node. 

Adding a stake to a **Full node** ensures it is ready to validate as a **Validator node**. 

:::warning Security

**Validator nodes** should not be run without being protected by a [**Sentry node architecture**](/docs/node/security/sentry-node-arch)

:::

## Networks

`Testnet`
`Mainnet`

## 00 Prerequisites

### 1. Full node 

You have already set up a **Full node** and have its `MONIKER` to hand e.g. Tango.
.

### 2. Keplr Wallet

You have a **Keplr Wallet**.

If you don't already have a Keplr wallet, follow the instructions to **Install a Keplr wallet**(https://www.cudos.org/blog/how-to-create-a-keplr-wallet-a-complete-step-by-step-guide/)


### 3. Keplr Mnemonic

Ensure you keep your 12 word **Keplr Mnemonic** to hand as you will need it to add your stake. 

### 2. Stake

Your **Keplr Wallet** is loaded with your **Stake**.

**Testnet** requires 2 million CUDOS Testnet tokens.
It is recommended that you test your setup on Cudos Testnet prior to joining the Mainnet. 

If you want to run a validator node on **Testnet**, join '#Validator Chat' in the [Cudos Discord](https://discord.com/invite/t397SKqf4u) to request the required number of CUDOS testnet tokens.

**Mainnet** requires 2 million CUDOS Mainnet tokens. 
See how to get [**CUDOS Mainnet tokens**](/docs/governance/get-tokens/get-tokens.md). 

:::tip Key terminology

A **Validator Key Pair** and authorised **wallet address** need to be set up securely before running the **Validator node**. This is to ensure blocks can be correctly signed. 

* Your **Public Key** is used to generate **Addresses** and identify users.
* Your **Private Key** is used to generate **Digital Signatures** and authenticate that an **Address** is associated with an **Authorised User**. 

A **Keyring** is used to manage the cryptographic Validator key pair and allow secure interaction with a **Validator node**. 

:::

## 01 Prepare the node


<Tabs>
  <TabItem value="Testnet" label="Testnet">
 
These instructions are for setting up a node to run on **Testnet**. 

1. Enter the docker container `cudos-start-full-node-client-testnet-public-01`

```bash
sudo docker exec -it cudos-start-full-node-client-testnet-public-01 bash
```

2. Set up the **Full node** you created to receive your 12 word **mnemonic** by running the command below. 


```shell
cudos-noded keys add <YOUR FULL NODE MONIKER> --recover --keyring-backend="os"
```

3. Enter the 12 word **mnemonic** of the Keplr wallet.

:::tip Keplr mnemonic

The Keplr wallet uses standard BIP 39 to generate a 12 or 24 word list or **mnemonic**. This is used to generate your **keys**.

:::

```shell
> Enter your bip39 mnemonic
```

4. Generate a ***SECURE*** **Keyring Passphrase** to encrypt the **mnemonic**. Enter it twice. 

:::caution Security

This passphrase is used to securely access the **keyring**.

**Be sure to keep a copy of your passphrase offline as it is needed to access your keyring in the future:**
:::

```bash
Enter keyring passphrase:
Re-enter keyring passphrase:
```

:::tip ADD more wallets

Once your **keyring** is created, you can add other wallets to it by repeating the above steps.
:::

5. Successful addition of your wallet **address**, **validator public key** and **mnemonic** to the **Full node** is indicated as below. 

```json

- name: <YOUR FULL NODE MONIKER>
  type: local
  address: cudos1qr5rt72yf7s340azajpxay6hw3z5ldne7dd5n3
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AmeChzeLCPCtPKrIVs7hp737DBNU7XlYVwDZfhJ3SdXq"}'
  mnemonic: ""
```

:::success

Your Testnet **Full node** is now ready for staking. 

:::

</TabItem>
  <TabItem value="Mainnet" label="Mainnet" default>

These instructions are for setting up a node to run on **Mainnet**.
 
1. Enter the docker container `cudos-start-full-node-mainnet`:

```shell
sudo docker exec -it cudos-start-full-node-mainnet bash
 ```

 ```shell
sudo docker exec -it cudos-start-full-node-client-testnet-public-01 bash
```

2. Set up the **Full node** you created to receive your 12 word **mnemonic** by running the command below.


```bash
cudos-noded keys add <YOUR FULL NODE MONIKER> --recover --keyring-backend="os"
```

3. Enter the 12 word **mnemonic** of the Keplr wallet.

:::tip Keplr mnemonic

The Keplr wallet uses standard BIP 39 to generate a 12 or 24 word list or **mnemonic**. This is used to generate your **keys**.

:::

```bash
> Enter your bip39 mnemonic
```

4. Generate a ***SECURE*** **keyring passphrase** to encrypt the **mnemonic** and enter it twice. **passphrase** for your keyring. 

:::caution Security

This passphrase is used to securely access the **keyring**.

**Be sure to keep a copy of your passphrase offline as it is needed to access your keyring in the future:**
:::

```shell

Enter keyring passphrase:
Re-enter keyring passphrase:

```

5. Successful addition of your wallet **address**, **validator public key (pubkey)** and **mnemonic** to the **Full node** is indicated as below. 

```json
- name: <YOUR FULL NODE MONIKER>
  type: local
  address: cudos1qr5rt72yf7s340azajpxay6hw3z5ldne7dd5n3
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AmeChzeLCPCtPKrIVs7hp737DBNU7XlYVwDZfhJ3SdXq"}'
  mnemonic: ""
```

:::success

Your **Mainnet Full node** is now ready for staking.
:::

</TabItem>
</Tabs>