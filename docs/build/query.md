---
title: Query
id: query
---

Performing a query is a way of reading the current state data of a smart contract.

Typically, query messages are located in `msg.rs` or `query.rs`, depending on how the the contract is structured.

You can query via an external client (over API or via CLI), or an internal client (within a contract, to another contract).