---
title: Modify state.rs
id: modify-state
---

Let's modify some files.

Start in the ***src/state.rs*** file. 

## Change 1 - Global Configuration

First, replace the 4 instances of the word `State` with `Config` to reflect the nature of what is being done to the contract. i.e. global configuration.

It should look like this:

```rust
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cosmwasm_std::Addr;
use cw_storage_plus::Item;

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, Eq, JsonSchema)]
pub struct Config {
    pub count: i32,
    pub owner: Addr,
}

pub const Config: Item<Config> = Item::new("config");
```

## Change 2 - Poll Administrator

Now let's enable a poll administrator with rights to delete polls.

Let's remove the `count` and `owner` variables from the struct and assign an `admin` to an address instead. 

```rust
pub struct Config {
    pub admin: Addr
}
```

## Change 3 - Create a Poll struct

Now let's create a Poll `struct`

This allows us to store the address of the Poll Creator, the question and the options as a a Vector (list) of pairs (tuples of length 2).

For the poll example above the options vector will look like this:
[("Osmosis", 2), ("CUDOS", 1), ("Cosmos Hub", 3)]

The first element of each tuple is the option, and the second element is the count.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Poll {
    pub creator: Addr,
    pub question: String,
    pub options: Vec<(String, u64)>,
}
```

## Change 4 - Create a Ballot struct

In order to keep track of who has already voted and what they voted for, we create another `struct`.

This simply stores the option voted for. 

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Ballot {
    pub option: String,
}
```

## Change 5 - Use Map

Now we have defined our structs but we need to store multiple items. 

Each poll is going to need a unique identifier to act as a key for values. The `Map` data structure interface is provided by *cw-storage-plus*.  

Each poll will have UUID that can be generated client side as a String key. 

1. Polls Map

```rust
use cw_storage_plus::Item;

// TO THIS

use cw_storage_plus::{Item, Map};
```

This allows the import of an `Item` and `Map` from `cw-storage-plus`. 

```rust
pub const CONFIG: Item<Config> = Item::new("config");

// A map with a String key and Poll value.
// The key will be a UUID generated clientside
// Storage parameter for Storage key is "polls"
pub const POLLS: Map<String, Poll> = Map::new("polls");
```

2. Ballot Map

```rust
pub const POLLS: Map<String, Poll> = Map::new("polls");
pub const BALLOTS: Map<(Addr, String), Ballot> = Map::new("ballots");
```

:::success 

## Great work! 🎉

:::








