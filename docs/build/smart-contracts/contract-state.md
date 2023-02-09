---
title: State
id: contract-state
---

**State** is where a smart contract works with saving and retrieving data. 

You can think of it much like a database interaction layer in a traditional application.

A contract is instantiated as defined in `state.rs`.

## State declared - State.rs

This is an example of `TokenInfo` being declared. 

```rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct TokenInfo {
  pub name: String,
  pub symbol: String,
  pub decimals: u8,
  pub total_supply: Uint128,
  pub mint: Option<MinterData>,
}
```

## State initialised 

Then the storage is initialized:

```rust
pub const TOKEN_INFO: Item<TokenInfo> = Item::new("token_info");
```


### Contract.rs

Here is an example of the `instantiate` function saving data.

```rust
let data = TokenInfo {
name: msg.name,
symbol: msg.symbol,
decimals: msg.decimals,
total_supply,
mint,
};
TOKEN_INFO.save(deps.storage, & data) ?;
```

