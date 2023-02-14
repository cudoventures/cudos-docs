---
title: Modify schema.rs
id: modify-schema
---

In the last step, we changed `State` to `Config`.

Now we do it to the `schema.rs` file too. The variable is imported `examples/schema.rs`.

## Replace instances of `State` 

Replace the two instances of `State` with `Config`. 

## Generate a schema for `Poll` and `Ballot` structs. 

1. Add `Poll` and `Ballot` to the import schema line. 

:::note
This is the same line you just changed from `State` to `Config`
:::

Change this: 

 ```rust
 use cw_starter::state::Config;
 ```

To this:

```rust
use cw_starter::state::{Config, Poll, Ballot};
```

2. Generate a schema for `Poll` and `Ballot`.

```rust
export_schema(&schema_for!(Config), &out_dir);
export_schema(&schema_for!(Poll), &out_dir);
export_schema(&schema_for!(Ballot), &out_dir);
```

3. Now compile the contract

```rust
// This will generate new JSON files, for our config, poll and ballot
cargo schema

//There are 0 tests but should pass
cargo test

//This generates the wasm under target
cargo wasm
```

4. Now let's modify instantiation

We want to allow an admin to be specified when a user instantiates the contract using the `Option` struct.

Currently, `InstantiateMsg` looks like this:

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub struct InstantiateMsg {
    pub val: String,
}
```

Let's modify it to this:

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub struct InstantiateMsg {
    pub admin: Option<String>,
}
```





