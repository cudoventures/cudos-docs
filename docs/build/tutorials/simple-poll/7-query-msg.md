---
title: QueryMsg
id: querymsg
---

Now that we have our contract functions, we want to be able to read information from it.

Let's head to where it starts `src/msg.rs`.

`QueryMsg` allows us to query our contract's state. Let's consider what use cases there are.

1. Query all polls in a list format.
2. Query a singular poll for a detailed view.
3. Query a user's vote for a given poll.


```rust
// Previous code omitted
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    AllPolls {},
    Poll {
        poll_id: String,
    },
    Vote {
        poll_id: String,
        address: String,
    },
}
// Following code omitted
```

:::caution 

Remove `QueryMsg::CustomMsg` in this enum. It has broken a helper in the `src/helpers.rs` file we need to remove. Simply delete all code locations in that file.

We can also remove the following code in `src/msg.rs` as it will not be used:

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub struct CustomResponse {
    val: String,
}
```

We also need to correct `examples/schema.rs` by changing the import from `src/msg.rs` to:

```rust
// Remove CustomResponse
use cw_starter::msg::{ExecuteMsg, InstantiateMsg, QueryMsg};
Also, remove the schema export for it:

export_schema(&schema_for!(CustomResponse), &out_dir);
```
:::

There are our three messages, this should cover the basic functionality of this tutorial.
