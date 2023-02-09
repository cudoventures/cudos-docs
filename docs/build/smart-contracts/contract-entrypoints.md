---
title: Entry Points
id: contract-entrypoints
---

**Entry points** are where messages or queries are handled by the contract.

All three of the following are entry points. 

## 1. Instantiate messages
As defined by the `InstantiateMsg` struct, are handled by `instantiate`.

## 2. Messages
As defined by the `ExecuteMsg` enum, are handled by the `execute` function, using a pattern-matching match statement.

## 3. Queries
As defined by the `QueryMsg` enum, are handled by the `query` function, using a pattern-match.
`execute` and `query` must exhaustively match every variant in the enums they handle, while `instantiate` only has to deal with the `struct` it is passed.