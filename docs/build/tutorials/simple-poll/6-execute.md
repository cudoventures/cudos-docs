---
title: Execute
id: execute
---

This is where we will be writing core execution logic.

Let's take a look at `src/contract.rs` and more specifically that unimplemented execution function.

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    _deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    _msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    unimplemented!()
}
```

This function needs to become a switch case (matching case) and redirect appropriate messages to appropriate function calls.

1. Let's match the `msg` variable for all its different types.

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut, // removed _ as needed later
    env: Env, // removed _ as needed later
    info: MessageInfo, // removed _ as needed later
    msg: ExecuteMsg, // remove _ as used now
) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::CreatePoll {
            poll_id,
            question,
            options,
        } => unimplemented!(),
        ExecuteMsg::Vote { poll_id, vote } => unimplemented!(),
    }
}
```

2. Let's start our first implementation

 Pass all the `deps`, `env`, and `info` variables to each `execute` function and provide all the relevant information.

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut, // removed _ as needed later
    env: Env, // removed _ as needed later
    info: MessageInfo, // removed _ as needed later
    msg: ExecuteMsg, // remove _ as used now
) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::CreatePoll {
            poll_id,
            question,
            options,
        } => execute_create_poll(deps, env, info, poll_id, question, options),
        ExecuteMsg::Vote { poll_id, vote } => unimplemented!(),
    }
}
```

3. Place the following after the `execute` function and before the `query` function:

```rust
fn execute_create_poll(
    deps: DepsMut,
    _env: Env, // _env as we won't be using it
    info: MessageInfo,
    poll_id: String,
    question: String,
    options: Vec<String>,
) -> Result<Response, ContractError> {
    unimplemented!()
}
```

4. Open the `src/errors.rs` file.
   Let's add a new error called `TooManyOptions`. This is prompted if there are >10 options selected. 

```rust
use cosmwasm_std::StdError;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("Unauthorized")]
    Unauthorized {},

    #[error("Too many poll options")]
    TooManyOptions {},
}
```






