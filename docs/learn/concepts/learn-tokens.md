---
title: Token types
id: token-types
---

This section explains **fungible** and **non-fungible** token types for tokens based on CosmWasm and Ethereum. 

# CosmWasm

## Fungible Tokens

### **CW20** - **Fungible Tokens** 

This is the specification for fungible tokens such as the Cosmos native coin ATOM [***View in Github***](https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/README.md)
The name and design is based on the Ethereum ERC-20 standard. 
CW20 tokens can be imported by smart contracts that wish to implement this specification, or by contracts that call to any standard CW20 contract.

### **CW1155** - **Multiple Tokens** 

This is a specification for managing multiple tokens based on CosmWasm. [***View in Github***](https://github.com/CosmWasm/cw-plus/tree/main/packages/cw1155) 
The name and design is based  on Ethereum's ERC1155 standard.defines an interface for contracts to support managing multiple tokens.

### **CW1** - **Proxy Contracts** 

This is a specification for proxy contracts - where one contract is meant to hold assets (or rights) on behalf of other contracts. [***View in Github***](https://github.com/CosmWasm/cw-plus/tree/main/packages/cw1)

### **CW2** - **Migrating Inspecting** 

Enables migrating or inspecting of smart contract details. [***View in Github***](https://github.com/CosmWasm/cw-plus/tree/main/packages/cw2)

### **CW3** - **MultiSig or Voting contracts** 

Enables K of N immutable signatories, K of N mutable, flexible signature and can also be used to enable token weighted voting. [***View in Github***](https://github.com/CosmWasm/cw-plus/tree/main/packages/cw3)

### **CW4** - **Storing of Group membership** 

Stores a set of members or voters. [***View in Github***](https://github.com/CosmWasm/cw-plus/tree/main/packages/cw4)

## Non-Fungible Tokens

CUDOS uses its proprietary `x/nft` module to enable the minting of non-fungible-tokens or NFTs.

This allows for the storing and ownership tracking of NFTs and includes modules to transfer, mint and burn NFTs. 

## Interchain

These are **Interchain Standards** as used by the **IBC** or inter-blockchain communication protocol.

[***View in Github***](https://github.com/cosmos/ibc)

View all Interchain coins in the Cosmos Ecosystem on [Mintscan](https://hub.mintscan.io/overview)

## ERC-tokens

Here are some of the most popular token standards on Ethereum:

**ERC-20** - A standard interface for fungible (interchangeable) tokens, like voting tokens, staking tokens or virtual currencies.

**ERC-721** - A standard interface for non-fungible tokens (NFTs) like a deed for artwork or a song.

**ERC-777 - ERC-777** - These standards allow people to build extra functionality on top of tokens such as a mixer contract for improved transaction privacy.

**ERC-1155 - ERC-1155** - These standards allow for more efficient trades and bundling of transactions. This token standard allows for creating both utility tokens (such as $BNB or $BAT) and Non-Fungible Tokens like CryptoPunks.

**ERC-4626** - A tokenised vault standard designed to optimize and unify the technical parameters of yield-bearing vaults.
