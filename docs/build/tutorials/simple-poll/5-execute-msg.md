---
title: modify ExecuteMsg
id: modify-executemsg
---

Let's create messages for the two tasks of **Creating a Poll** and **Voting on a Poll**.

1. So let's open `src/msg.rs` and take a look at `ExecuteMsg`. It should look pretty empty:

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    CustomMsg { val: String },
}
```

1. Create Poll - Let's add the following: 
   
```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    CreatePoll {
        poll_id: String, 
        question: String,
        options: Vec<String>,
    }
}
```

2. Voting on a Poll 

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    CreatePoll {
        poll_id: String,
        question: String,
        options: Vec<String>,
    },
    Vote {
        poll_id: String,
        vote: String,
    },
}
```




