---
title: Introduction
id: introduction
---

# Introduction

Running a Cudos **Node** is a unique opportunity to be a part of a project and wider ecosystem aimed at solving today’s blockchain scalability and interoperability issues.

This section is intended to assist participation in the **Cudos network** as a **Node Operator**. To join the network we recommend you first try running a node **locally** then on the **Testnet**. The Testnet is a playground where you can learn and experiment without the risk of losing real tokens.

The Cudos Network is based on [**Tendermint**](https://docs.tendermint.com/v0.34/introduction/what-is-tendermint.html) and [**Cosmos**](https://cosmos.network/). It is secured by **Validators** responsible for committing new blocks to the blockchain using **Proof-of-Stake consensus**.

## Why run a node?

:::info

A "node" is a computer running **Cudos** client software.

:::

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

Cudos Validators are nodes that verify and confirm transactions, publish new blocks, interact with other stakeholders in Governance votes and ensure the network's security, integrity and viability. 

Validators participate in the consensus protocol by broadcasting transactions and blocks contain cryptographic signatures signed by each validator's private key. In return, validators receive rewards, which are then shared with users who vote for them.

Validator candidates must self-stake their own CUDOS tokens and optionally have CUDOS "delegated" to them by token holders. The right to validate is determined by having self-staked the required amount of tokens - Currently 2,000,000 CUDOS. The staked CUDOS contributes to the Validators' Voting Power The higher a Validators Voting Power, the more likely they are to be selected by the consensus process to propose blocks and hence earn the most rewards.

Validators and their Delegators earn CUDOS rewards by committing new blocks to the Cudos blockchain as well as transaction fees earned from executing the consensus protocol.

:::tip

Validators can determine the commission percentage on the fees their delegators receive as additional incentive. You can find an overview of all current validators and their voting power on [Cudos Block Explorer](https://explorer.cudos.org/validators)

:::

## What do Delegators do?

Delegators stake CUDOS to validators of their choice in return for a share of Validator rewards. The staked CUDOS form the validators’ Voting Power. The validators with the most Voting Power are then selected more often to propose blocks and earn more rewards. 

Tokens remain on the Delegator's wallets throughout and can be accessed again once un-delegated. The un-delegation process is quick and easy to perform but there is an unbonding period of 21 days before tokens are released. 

## Slashing and penalties

A slashing event occurs if two validators sign the same block with the same key (double signing) or if the validator becomes unavailable. A Validator's staked CUDOS (including CUDOS of users that delegated to them) can be slashed. 

Other penalties depends on the severity of the violation.

A Validator is jailed if they miss 90% of the blocks in any interval of 19200 blocks. Tokens are slashed immediately at that point. (This equates to approximately 336 hours depending on the current block time in the network)

A good Cudos validator needs to aim for 99.99% uptime and <0.01% missed blocks.
 
:::tip 

To ensure maximum uptime and availability
1. Validators should ensure they always run a correct version of the software.
2. Validators should implement a Sentry Node Architecture with several geographically distributed sentries.

:::
