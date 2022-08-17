---
title: Basics
id: contract-basics
---

# Smart Contract Basics

Smart Contracts were originally conceived of as automatically enforceable contract. The contract code is open viewable by anybody. Unlike legal contracts they are not negotiable or nuanced according to individual circumstances. They are more suited to financial situations such as a Trust Fund matures, release funds. 

Smart Contract terminology has expanded to mean any deterministic bytecode enforced by network consensus including queries. The outputs are always as expected. 

Smart Contracts are enforced by validating nodes coming into consensus. One node signs the code and comes up with the result. The majority of the network must agree on updates to the current state. All the other validators verify the execution of the code - action or transaction messages are executed as written.

## How they work

A smart contract is **deployed** to a blockchain where it exists as an object whose internal state persists on the blockchain. 

:::caution Be aware!

The upload of a contract's code to a blockchain and the instantiation of a contract are regarded as separate events, unlike on Ethereum.
:::

The **instantiation** of the contract then occurs and provides it with an initial state. 
*For example a wallet with a balance of 0*.

When a transaction is performed, the state of the smart contract is changed. A transaction is performed by sending the contract a JSON formatted **execute** function call. 
*For example, a deposit transaction of 10 tokens is performed to add funds to the balance.*

To read a current balance, a **query** message can be sent to access the current-state data from the contract. 
*For example, to read the updated balance of 10.*

## Three key functions

Developing a smart contract mainly involves three key functions. 

These constitute the interface of a smart contract:

1. `instantiate()`: serves as the constructor during contract instantiation and provides the initial state.

2. `execute()`: gets called when a user wants to invoke a method on the smart contract.

3. `query()`: gets called when a user wants to request current-state related data from the smart contract.



