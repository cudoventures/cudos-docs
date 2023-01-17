---
title: 2. Modify state.rs
id: modify-state
---

Let's modify some files.

Start in the ***src/state.rs*** file. Upon opening it you should see code like the following:

```rust
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cosmwasm_std::Addr;
use cw_storage_plus::Item;

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct State {
    pub count: i32,
    pub owner: Addr,
}

pub const STATE: Item<State> = Item::new("state");
```

If we work through this line by line:

1. `JsonSchema` - This allows structs to be serialized and deserialized to and from JSON.
2. `Deserialize` and `Serialize` - These provide the serialization described above.
3. `Addr` - This is the Cudos address. A simple string.
4. `Item` - Item is a helper function. It allows the storage of the `STATE` variable as an `Item` that can store a singular `State` struct.

## Modify the file

1. First, let's replace the 4 instances of the word 'State' with 'Config' to reflect the nature of what is being done to the contract. i.e. global configuration.

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

2. Now let's enable a poll administrator with rights to delete polls.

Let's remove the `count` and `owner` variables from the struct and assign an `admin` to an address instead. 

```rust
pub struct Config {
    pub admin: Addr
}
```


