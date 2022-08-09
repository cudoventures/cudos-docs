---
title: Writing a smart contract
id: write-smart-contract
---

# Smart Contract Basics

A smart contract is deployed to a blockchain where it exists as an object whose internal state persists on the blockchain. This is the **instantiation** of a contract and provides it with an initial state. 
*For example, I deploy an NFT contract for a character in a game*. 

When a transaction is performed, the state of the smart contract is changed. A transaction is performed by sending the contract a JSON formatted **execute** function call. 
*For example, my character buys a ferrari.*

To read a current balance, a **query** message can be sent to access the current-state data from the contract. 
*For example, I want to see how many cars my character owns. *

### Three key functions

Developing a smart contract mainly involves three key functions. 

These constitute the interface of a smart contract:

1. `instantiate()`: serves as the constructor during contract instantiation and provides the initial state.

2. `execute()`: gets called when a user wants to invoke a method on the smart contract.

3. `query()`: gets called when a user wants to request current-state related data from the smart contract.

