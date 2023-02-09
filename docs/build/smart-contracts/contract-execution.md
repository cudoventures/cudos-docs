---
title: Contract Execution
id: contract-execution
---

Let's dig into how a contract is executed. 

When we implement a contract, we provide the following entry point:

```rust
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> { }
```

With `DepsMut`, this can read and write to the backing `Storage`, as well as use the Api to validate addresses, and `Query` the state of other contracts or native modules. Once it is done, it returns either `Ok`(Response) or `Err`(ContractError).

If it returns `Err`, this error is converted to a string representation `(err.to_string())`, and this is returned to the SDK module. 

If it returns `Ok`, the Response object is parsed and processed. As in the example below:

```rust
pub struct Response<T = Empty>
where
    T: Clone + fmt::Debug + PartialEq + JsonSchema,
{
    /// Optional list of "subcalls" to make. These will be executed in order
    /// (and this contract's subcall_response entry point invoked)
    /// *before* any of the "fire and forget" messages get executed.
    pub submessages: Vec<SubMsg<T>>,
    /// After any submessages are processed, these are all dispatched in the host blockchain.
    /// If they all succeed, then the transaction is committed. If any fail, then the transaction
    /// and any local contract state changes are reverted.
    pub messages: Vec<CosmosMsg<T>>,
    /// The attributes that will be emitted as part of a "wasm" event
    pub attributes: Vec<Attribute>,
    pub data: Option<Binary>,
}
```



