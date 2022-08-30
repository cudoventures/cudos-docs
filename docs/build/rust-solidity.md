---
title: Rust vs Solidity
id: rust-solidity
---

## Why Rust? 
As a Web3 Developer just starting out you may be wondering why you should get started with **Rust** instead of **Solidity**. 

Frequently, Rust is thought to be a steeper learning curve than Solidity. However, there are a number of important reasons why Rust is excellent for building smart contracts.

## Simplified Deploy and Execute Process

The phases of a smart contract can be thought of as:

### Ethereum

1. Upload Code 

Upload optimised wasm code to a blockchain. It has no state or contract address. For example a standard contract template. 

2. Instantiate Contract (Requires Gas)

Create an instance from the code with an initial state. Create a new address e.g. token name, maximum issuance etc. 
Enables the signer to send some tokens to the contract as well as a message. 

3. Execute Contract (Requires Gas)

Enables the signer to send some tokens to the contract as well as a message.

### Rust

1. Upload Code

2. Execute Contract
Sending tokens directly to a contract via `SendMsg` for example does not trigger any contract code. This reduces possible attack vectors as all code execution must be explicitly requested.

## Rust Contract Security

The avoidance of smart contract bugs is paramount to prevent unintended consequences. Rust limits the possible attack surface with strong in-built unit testing capabilities to prevent bugs prior to deployment.

### Avoidance of reentrancy

A large number of Ethereum exploits have used reentrancy attacks. In simple terms, a reentrancy attack occurs between two smart contracts, where an attacking smart contract exploits the code in a vulnerable contract to drain it of its funds. The exploit works by having the attacking smart contract repeatedly call the withdraw function before the vulnerable smart contract has had time to update the balance. 

This isn't possible with CosmWasm as individual contracts cannot call other contracts directly. Instead, a contract can return a list of messages to be executed in the same transaction. i.e. a contract can request a send after it is finished. e.g. escrow. If the future message fails then the entire transaction reverts. 

For those who take security very seriously, you can read a longer list of how CosmWasm stacks up against all known Ethereum attack vectors.