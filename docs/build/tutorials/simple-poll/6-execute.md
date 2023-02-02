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

