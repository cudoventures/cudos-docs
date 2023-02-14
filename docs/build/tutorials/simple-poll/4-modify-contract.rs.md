---
title: Modify contract.rs
id: modify-contract
---

1. Open the ***contract.rs*** file and uncomment the following lines:

/*
const CONTRACT_NAME: &str = "crates.io:cw-starter";
const CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");
 */

2. Enable storage of contracts using cw2 standard:

```rust
use cosmwasm_std::{Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult};
use cw2::set_contract_version;
```

3. Use it in the `instantiate` method

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut, // ensure you remove the preceeding _. _deps -> deps
    _env: Env,
    _info: MessageInfo,
    _msg: InstantiateMsg,
) -> Result<Response, ContractError> {
    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
    unimplemented!()
}
```

4. Let's create our Config struct and store it. Be sure to import the struct itself and the storage:

```rust
use crate::state::{Config, CONFIG};
```

5. Let's implement the logic to create an admin or not:

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo, // removed _
    msg: InstantiateMsg, // removed _
) -> Result<Response, ContractError> {
    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
    let admin = msg.admin.unwrap_or(info.sender.to_string());
    let validated_admin = deps.api.addr_validate(&admin)?;
    let config = Config {
        admin: validated_admin.clone(),
    };
    CONFIG.save(deps.storage, &config)?;
    Ok(Response::new()
        .add_attribute("action", "instantiate")
        .add_attribute("admin", validated_admin.to_string()))
}
```