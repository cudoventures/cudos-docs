---
title: Prepare validator node
id: validator-node-1
---

This guide explains how to **prepare** a node for staking by adding a keyring to securely hold validator keys and enable connection to an authorised wallet.  

This is a prerequisite to staking assets on the node. 

:::warning Security

**Validator nodes** should not be run without being protected by a [**Sentry node architecture**](/docs/node/security/sentry-node-arch)

:::

### Networks

Validator nodes are run on 

`Testnet`
`Mainnet`

# Testnet

Inside the shell, set up as a Root user:

```shell
cudos-node:~ sudo -i
```

```shell
$ sudo -i
```

Add Debian packages

```shell
root@cudos-node:~# echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/0.9.0/debian stable main' > /etc/apt/sources.list.d/cudos.list
root@cudos-node:~# apt update
```

Install Cudos Network Public Testnet

```shell
root@cudos-node:~# apt install cudos-network-public-testnet
```

```shell
root@cudos-node:~# systemctl enable --now cosmovisor@cudos
```

```shell
root@cudos-node:~# cudos-noded status
{"NodeInfo":{"protocol_version":{"p2p":"8","block":"11","app":"0"},"id":"f3bc1ebea0423b87796d5c620d938a79f7a50c7a","listen_addr":"tcp://0.0.0.0:26656","network":"cudos-testnet-public-3","version":"0.34.19","channels":"40202122233038606100","moniker":"cudos-node","other":{"tx_index":"on","rpc_address":"tcp://127.0.0.1:26657"}},"SyncInfo":{"latest_block_hash":"BC292BAEAA7421168EE55EA1BE2A294AC5B33B37B74B1175A53F6ED741F4D80B","latest_app_hash":"D31FF2A770FDF6603E867477B4F0D46450F50056F4A4D5214D8B1F734A3CE136","latest_block_height":"3605101","latest_block_time":"2022-05-27T15:55:58.140942836Z","earliest_block_hash":"5FE3E88EFE9999C79B8D6271B56EE4349051FCEA290D5A512440B8BEB9662104","earliest_app_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855","earliest_block_height":"3603400","earliest_block_time":"2021-08-25T08:21:32.483824849Z","catching_up":true},"ValidatorInfo":{"Address":"7AC5A70F5F271C6B35F48A51781D23329E58D3DD","PubKey":{"type":"tendermint/PubKeyEd25519","value":"8MECl86K55FL+s63L9wYGAyLXSPHrlHpcnE17rBm4vs="},"VotingPower":"0"}}
```

To check on status, view the explorer. 

```shell
root@cudos-node:~# cudos-noded tendermint show-validator
{"@type":"/cosmos.crypto.ed25519.PubKey","key":"8MECl86K55FL+s63L9wYGAyLXSPHrlHpcnE17rBm4vs="}
root@cudos-node:~# 
```






## Prerequisites

**1. You have built a full node** 

Follow the instructions to [**Run a full node**](/docs/node/run-node/full-node)

**2. You have installed a Keplr Wallet**

Follow the instructions to **Install a Keplr wallet**(link-to-be-inserted)

**3. You have 2,000,000 CUDOS testnet/mainnet tokens in your Keplr wallet**

Follow the instructions to get **CUDOS tokens**(link-to-be-inserted)

**4. You have your Keplr wallet 12 word mnemonic to hand**

:::success Testnet

If you want to run a validator node on **Testnet**, join '#Validator Chat' in the [Cudos Discord](https://discord.com/invite/t397SKqf4u) to request the required number of CUDOS testnet tokens.
::: 

## Prepare your node for Staking

A **Validator Key Pair** and authorised **wallet address** needs to be set up securely before running the **Validator node**. This is to ensure that blocks can be correctly signed. 

* Your **Public Key** is used to generate **addresses** and identify users.
* Your **Private Key** is used to generate **digital signatures** and authenticate that an **address** is associated with an authorised user. 

A **keyring** is used to manage the cryptographic Validator key pair and allow secure interaction with a **Validator node**. 

:::tip

Your keplr wallet uses standard BIP 39 to generate a 12 word list or **mnemonic**. This is used to generate your **Private key**.
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

## Alternative method

### Install Prerequisites

```shell
sudo apt update
sudo apt upgrade
sudo apt install build-essential
```

### Install Go

```shell
wget https://go.dev/dl/go1.18.3.linux-amd64.tar.gz
sudo tar -C /usr/local -xvf go1.18.3.linux-amd64.tar.gz
rm go1.18.3.linux-amd64.tar.gz
echo "PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> ~/.profile
source ~/.profile
```

### Install binary and make

```shell
git clone https://github.com/CudoVentures/cudos-node.git
cd cudos-node 
make install
cd
cudos-noded version #Check for v1.0.0
```


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