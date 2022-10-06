---
title: Validating
id: validating
---

Any participant in the network can become a **Validator operator** by committing to stake 2M CUDOS (Testnet tokens or Mainnet). A `create-validator` transaction both performs the staking transaction and broadcasts the new **Validator node** to the community.  

* On **Testnet**, your Validator node appears on [**Testnet Explorer**](https://explorer.testnet.cudos.org/)

* On **Mainnet**, your Validator node appears on [**Mainnet Explorer**](https://explorer.cudos.org/)

The `create-validator` transaction is performed at **Step 6** below. 

:::tip 🚦 Get familiar
It is ***HIGHLY RECOMMENDED*** that you begin testing on a **Private Testnet** first.

Then progress to the **Public Testnet** and then **Mainnet**. 
:::

## Become a **Validator operator** 

### Get ready

#### 1. [Check recommended hardware](/docs/node/prerequisites/hw-req)
At least 3 separate machines are required to run each node. **Validator**, **Sentry** (at least one) and **Seed** (at least one)

#### 2. [Join Testnet](/docs/node/prerequisites/join-testnet)
It is highly recommended that you set up a Private local testnet first to get familiar with the setup process, and provide an environment for testing. Proceeding to Public Testnet allows you to operate in an environment where critical changes are tested prior to deployment to Mainnet. 

#### 3. [Request 2M CUDOS Test tokens](/docs/node/prerequisites/stake-req)
Join Cudos official Discord [#validator-chat channel](https://discord.com/channels/593796681103966208/849951329174421504) to get support and to request 2M CUDOS Test tokens. 

### Create a Validator

#### 4. [Build a Full node](/docs/node/run-node/run-full-node)
Start with a Full node which is converted to a Validator node at 6. 

#### 5. [Set up a Keyring](/docs/node/run-node/prepare-node-for-validating)
This step allows the secure holding and management of keys.

#### 6. [Stake node and create validator](/docs/node/run-node/stake-node)
Perform the `create-validator` transaction. Assign a name to your Validator node, decide on commission fees for delegators and set gas prices. 

### Sentry node architecture

#### 7. [Build a Seed node](/docs/node/run-node/run-seed-node)
Secure your Validator by specifying authorised nodes to connect to. 

#### 8. [Build a Sentry node](/docs/node/run-node/run-sentry-node)
Secure your Validator by only connecting it to one or more Sentry nodes. 

#### 9. [Build a Validator Cluster](/docs/node/run-node/run-validator-cluster)
This step launches a Validator node secured by a Sentry node architecture. 

