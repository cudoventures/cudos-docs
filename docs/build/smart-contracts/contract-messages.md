---
title: Messages
id: contract-messages
---

**Messages** are how you interact with a **CUDOS** smart contract. If you look inside most contracts, there will be a `msg.rs` file that defines the messages.

An `instantiate` message is usually different in that it is defined separately in `msg.rs` as `InstantiateMsg` and then handled by a `instantiate fn` in the main `contract.rs`.