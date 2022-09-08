---
title: Prepare Validator node
id: prepare-validator
---

This guide explains how to **prepare** a node for staking by adding a **keyring** to securely hold validator keys and enable connection to an authorised wallet.  

This is a prerequisite to staking **CUDOS tokens** on the node. 

:::warning Security

**Validator nodes** should not be run without being protected by a [**Sentry node architecture**](/docs/node/security/sentry-node-arch)

:::



## Prerequisites

**1. You have built a full node** 

Follow the instructions to [**Run a full node**](/docs/node/run-node/full-node)

**2. You have installed a Keplr Wallet**

Follow the instructions to **Install a Keplr wallet**(link-to-be-inserted)

**3. You have 2,000,000 CUDOS testnet/mainnet tokens in your Keplr wallet**

- Reach out to the Cudos Discord to request testnet tokens.

Follow the instructions to get **CUDOS tokens**(link-to-be-inserted)

**4. You have your Keplr wallet mnemonic to hand**

:::success Testnet

If you want to run a validator node on **Testnet**, join '#Validator Chat' in the [Cudos Discord](https://discord.com/invite/t397SKqf4u) to request the required number of CUDOS testnet tokens.
::: 

## Prepare your node for Staking

A **Validator Key Pair** and authorised **wallet address** needs to be set up securely before running the **Validator node**. This is to ensure that blocks can be correctly signed. 

* Your **Public Key** is used to generate **addresses** and identify users.
* Your **Private Key** is used to generate **digital signatures** and authenticate that an **address** is associated with an authorised user. 

A **keyring** is used to manage the cryptographic Validator key pair and allow secure interaction with a **Validator node**. 

:::tip

Your keplr wallet uses standard BIP 39 to generate a 12 or 24 word list or **mnemonic**. This is used to generate your **Private key**.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Testnet" label="Testnet">
 
In the following example, a wallet mnemonic is added to a keyring `validator1keyring` on the Cudos Testnet.

 
1. Enter the docker container `cudos-start-full-node-client-testnet-public-01`

```bash
sudo docker exec -it cudos-start-full-node-client-testnet-public-01 bash
```

2. Set up `validator1keyring` to receive your 12 word **mnemonic** by running the command below

```bash
cudos-noded keys add validator1keyring --recover --keyring-backend="os"
```

3. Enter the 12 word **mnemonic** of the Keplr wallet

```bash
> Enter your bip39 mnemonic
```

4. Generate a ***SECURE*** **keyring passphrase** to encrypt the **mnemonic** and enter it twice. 

:::caution Security

**Be sure to keep a copy of your passphrase offline as it is needed to access your keyring in the future:**
:::

```bash
Enter keyring passphrase:
Re-enter keyring passphrase:
```

:::tip ADD more wallets
Once your keyring is created, you can add other wallets to it by repeating the above.
:::

5. Successful addition of your Wallet **address** and **validator public key** and **mnemonic** to the `validator1keyring` is indicated as below. 

```json

- name: validator1keyring
  type: local
  address: cudos1qr5rt72yf7s340azajpxay6hw3z5ldne7dd5n3
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AmeChzeLCPCtPKrIVs7hp737DBNU7XlYVwDZfhJ3SdXq"}'
  mnemonic: ""
```

:::success 

Your **Validator node** is now set up to interact with your Keplr wallet on `testnet`.

:::

</TabItem>
  <TabItem value="Mainnet" label="Mainnet" default>

In the following example, a wallet’s mnemonic is added to a keyring on the Cudos Mainnet as `validator1keyring`.
 
1. Enter the docker container `cudos-start-full-node-mainnet`:

```bash
sudo docker exec -it cudos-start-full-node-mainnet bash
 ```

2. Add your wallet’s **mnemonic** to the keyring `validator1keyring` by running the command below:


```bash
cudos-noded keys add validator1keyring --recover --keyring-backend="os"
```

3. Enter the 12 word **mnemonic** of the Keplr wallet.

```bash
> Enter your bip39 mnemonic
```

4. Generate a ***SECURE*** **keyring passphrase** to encrypt the **mnemonic** and enter it twice. 

:::caution Security

**Be sure to keep a copy of your passphrase offline as it is needed to access your keyring in the future:**
:::

```bash

Enter keyring passphrase:
Re-enter keyring passphrase:

```

5. Successful addition of your Wallet **address**, **validator public key (pubkey)** and **mnemonic** to the `validator1keyring` is indicated as below. 

```json
- name: validator1keyring
  type: local
  address: cudos1qr5rt72yf7s340azajpxay6hw3z5ldne7dd5n3
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AmeChzeLCPCtPKrIVs7hp737DBNU7XlYVwDZfhJ3SdXq"}'
  mnemonic: ""
```

:::success 

Your **Validator node** is now set up to interact with your Keplr wallet on `mainnet`
:::

</TabItem>
</Tabs>




### Initialise your node

```shell
cudos-noded init MONIKER --chain-id cudos-1
```

#### Cudos by default uses $HOME/cudos-data

```shell
wget https://raw.githubusercontent.com/CudoVentures/cudos-builders/cudos-master/docker/config/genesis.mainnet.json
mv genesis.mainnet.json ./cudos-data/config/genesis.json
```

#### Edit your `config` and `app` files 


#### Add seeds to `config.toml` 

p2p section

```shell
seeds = "ff3f0f7b1eecc6844e6512428ef4c7a9448452a8@84.45.68.8:26656,6d9beb4d44a530a4a10ebe78ed7717f6083d0c4b@198.244.200.183:26656,e0f3bcc574ef66ae4561fad0772a4fd1959969af@35.246.28.158:26656"

```

### Then you can start up. 

```shell
cudos-noded start
```