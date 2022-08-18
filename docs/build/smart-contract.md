---
title: Basics
id: contract-basics
---

# Smart Contract Basics

**Smart contracts** were originally conceived of as programs that could automatically execute according to the terms of a contract. Nick Szabo proposed the idea of smart contracts in 1997. 
Unlike legal contracts, smart contracts are **trustless**. A key objective of smart contracts is to remove the need for intermediaries to enforce the conditions of the contract. The code (functions) and data (its state) are stored on a blockchain and run as programmed. A network of validating nodes run the smart contract to ensure the resulting data is correct. When they agree or come into **consensus**, the code is said to have performed correctly and the state of the blockchain is updated accordingly. 

The term **smart contract** has expanded to mean any **deterministic** (the outputs are always as expected) bytecode enforced by network consensus including queries. 

## How they work

A smart contract is uploaded or **deployed** to a blockchain where it exists as an object whose internal state persists on the blockchain. 

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

## Two key actions 





