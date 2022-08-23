---
title: Introduction
id: introduction
---

# Introduction

Running a Cudos **Node** is a unique opportunity to be a part of a project and wider ecosystem aimed at solving today’s blockchain scalability and interoperability issues.

This section is intended to assist participating in the **Cudos network** as a **Node Operator**. To join the network we recommend you first try running a node on the **Testnet**. The Testnet is a playground where you can learn and experiment without the risk of losing real tokens.

The Cudos Network is based on **Tendermint**[Find out more about Tendermint](https://docs.tendermint.com/v0.35/introduction/what-is-tendermint.html) and secured by **Validators** responsible for committing new blocks to the blockchain using **Proof-of-Stake consensus**.

## Why run a node?

:::info

A "node" is a computer running **Cudos** client software.

:::

### Reasons to run a Full node

* Running your own node allows you to interact with the Cudos Network in a truly **private**, **self-sufficient** and **trustless** manner.

* Your node can **verify transactions** and **blocks** without relying on any other nodes in the network.

* **Addresses** and **balances** remain private and can be checked with your own client.

* You can build a more **secure** and **private dApp**. Wallets can be configured to point to your own local node.

* You can program your own **custom RPC endpoints**.

* You can connect to your node using **Inter-process Communications (IPC)** or rewrite the node to load your program as a plugin. This enables **low latency** to replace your transactions as fast as possible (i.e. frontrunning).

### Reasons to run a Validator node

* Running a validator node is critical to the Cudos system’s success by relaying **transactions** and **proposing, verifying** and **finalising** blocks. 

* The **maintenance** and **security** of the Cudos Network relies on a community of validators to perform certain operations. 

* In return for securing the network, Validators earn **rewards**.

* Validators are also responsible for the **development** and **evolution** of the network by using their “stake” to vote on **governance proposals**. This gives you influence over the future direction of the Cudos Network.

:::tip Other benefits

Running either type of node allows you to effectively extract blockchain data for chain analytics or other data use cases.

:::

## Networks 

The following networks are available to run a node. Each network has its own set of validators. 

`testnet`
`mainnet`

### What do Validators do?

Cudos Validators are nodes that verify and confirm transactions, publish new blocks to the Cudos blockchain and provide all data for dApps hosted on the Cudos network. Validators participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by each validator's private key.In return, validators receive rewards, which are then shared with users who vote for them.

Validator candidates must bond their own CUDOS tokens and have CUDOS "delegated", or staked, to them by token holders. The right to validate is determined by the total number of CUDOS tokens delegated. Candidates with the most CUDOS tokens have the most Voting Power. Of these, the top validators with the largest Voting Power are allowed to take part in the validation process.

Validators and their Delegators earn CUDOS as block provisions and tokens as transaction fees through execution of the consensus protocol.

:::tip

Validators can determine the commission percentage on the fees their delegators receive as additional incentive. You can find an overview of all current validators and their voting power on [Cudos Block Explorer](https://explorer.cudos.org/validators)

:::

## What do Delegators do?

Delegators bond or stake CUDOS to validators of their choice in return for a share of Validator rewards. The bonded CUDOS form the validators’ Voting Power. The validators with the most Voting Power are then selected for rewarding verification process.

Tokens remain on the Delegator's wallets throughout and can be accessed again once un-delegated. The un-delegation process is quick and easy to perform.

## Slashing and penalties

A Validator's stake is slashed if they become unavailable or sign blocks at the same height. Their staked CUDOS (including CUDOS of users that delegated to them) can be slashed. The penalty depends on the severity of the violation.

A good Cudos validator needs to aim for 99.99% uptime and <0.01% missed blocks.
 
:::tip 

To ensure maximum uptime and availability
1. Validators should ensure they always run a correct version of the software.
2. Validators should implement a Sentry Node Architecture to protect their node from DDoS attacks. 

:::
