---
title: Query
id: query
---


Query messages are handled differently if they are returned via a Response. A custom `struct` must be created which is then encoded to Binary. This value is then decoded when using a query client on the front end side back into a helpful format AKA JSON.

So how do we do this? Well, it's all about defining structs and having them derive the correct features via macros.

So let's start by thinking about our `AllPolls` message and what we want to return. We want to return a list of the `Poll` struct. How does this convert to rust? We use a `Vec<Poll>`. So here's how we define the struct.

## Open msg.rs

Let's place it at the bottom of `src/msg.rs` and name it `AllPollsResponse `to make it clear what it is for.

```rust
// Needed import
use crate::state::Poll;
// Previous code omitted
// Needed macro derivations
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct AllPollsResponse {
    pub polls: Vec<Poll>,
}
```

The derivations support serializing to and from Binary.

So we've done one let's think about our next one. `Poll` lets us pick one poll but a poll may not exist. The `Option` wrapper is perfect for this and deserializes nicely to null in JSON for our frontend later.

Here's how it looks:

```rust
// Previous code omitted
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct PollResponse {
    pub poll: Option<Poll>,
}
```

Notice the same derivations, the only difference really is the member variable poll which we explained above.

One last response struct, this time for `Vote`. This route has the same problem as before, a user may not have voted before. Let's use `Option` again:

```rust
// Needed imports
use crate::state::{Poll, Ballot};
// Previous code omitted
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct VoteResponse {
    pub vote: Option<Ballot>,
}
```
Looks very similar to our PollResponse but just using Ballot instead.

## Open contract.rs

Scroll down to our currently unimplemented query function. It should look something like this:

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(_deps: Deps, _env: Env, _msg: QueryMsg) -> StdResult<Binary> {
    unimplemented()!
}
```

Let's employ the same structure we used for `ExecuteMsg`. Here's how it now looks:

```rust
// Note the removal of the _s as we use these variables later
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::AllPolls {} => unimplemented!(),
        QueryMsg::Poll { poll_id } => unimplemented!(),
        QueryMsg::Vote { address, poll_id } => unimplemented!(),
    }
}
```

Before we start, let's import what we will need:

```rust
// Add Order and to_binary
use cosmwasm_std::{Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult, Order, to_binary};
// Add our responses
use crate::msg::{ExecuteMsg, InstantiateMsg, QueryMsg, AllPollsResponse, PollResponse, VoteResponse};
Let's start by implementing the AllPoll route, so let's define a new function query_all_polls, self-explanatory right? Here's what it looks like:

// Previous code omitted
fn query_all_polls(deps: Deps, _env: Env) -> StdResult<Binary> {
    unimplemented!()
}
// Following code omitted
```

Notice we pass it `deps` and `env` as that's all we need. It also returns the same type `StdResult<Binary>` as query so we can return it directly.

Now for a little bit of complex code, as we store our polls as a map, we need to retrieve all the values. 

```rust
// Previous code omitted
fn query_all_polls(deps: Deps, _env: Env) -> StdResult<Binary> {
    let polls = POLLS
        .range(deps.storage, None, None, Order::Ascending)
        .map(|p| Ok(p?.1))
        .collect::<StdResult<Vec<_>>>()?;

    unimplemented!()
}
// Following code omitted
```

First, we grab a range from `polls` using `deps.storage` to access it.
The two Nones mean we have no min amount and no max amount of values. 
Order::Ascending simply means returning them in ascending order.

Next, we process using map with an action. This action must return a `StdResult<?>` that's what the `Ok` is for. The type of `p` is a `Record<Poll>` so we must unwrap it, the `?`. We want the second value the .1 as the first is a Vec of bytes.

Finally we have to collect the results into a `Vec` wrapped by `StdResult`. We can use `_` for the type of the Vec as this can be inferred as a Poll from our map function.

The query for all polls is below:

```rust
// Previous code omitted
fn query_all_polls(deps: Deps, _env: Env) -> StdResult<Binary> {
    let polls = POLLS
        .range(deps.storage, None, None, Order::Ascending)
        .map(|p| Ok(p?.1))
        .collect::<StdResult<Vec<_>>>()?;

    to_binary(&AllPollsResponse { polls })
}
// Following code omitted
```

Now we can go back to our query function and call this function.

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::AllPolls {} => query_all_polls(deps, env),
        QueryMsg::Poll { poll_id } => unimplemented!(),
        QueryMsg::Vote { address, poll_id } => unimplemented!(),
    }
```

Define a `query_poll` function that takes `deps`, `env` and `poll_id`:

```rust
fn query_poll(deps: Deps, _env: Env, poll_id: String) -> StdResult<Binary> {
    unimplemented!()
}
```

Now let's access our storage using a helper function to return an `Option<Poll>` instead of throwing an error if it is not present.

Here is the `may_load` function. Here's what it looks like:

```rust
fn query_poll(deps: Deps, _env: Env, poll_id: String) -> StdResult<Binary> {
    let poll = POLLS.may_load(deps.storage, poll_id)?;
}
```

The call looks the exact same as `load` but the poll variable is now an `Option<Poll>` instead of a Poll.

We can now plug this variable into our `PollResponse` struct, ensuring to encode it to Binary:

```rust
fn query_poll(deps: Deps, _env: Env, poll_id: String) -> StdResult<Binary> {
    let poll = POLLS.may_load(deps.storage, poll_id)?;
    to_binary(&PollResponse { poll })
}
```

Now let's plug it into our query function:

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::AllPolls {} => query_all_polls(deps, env),
        QueryMsg::Poll { poll_id } => query_poll(deps, env, poll_id),
        QueryMsg::Vote { address, poll_id } => unimplemented!(),
    }
}
```

Onto our last one, this has the same problem as `query_poll` we need that `may_load` function again. Let's define the function first:

```rust
fn query_vote(deps: Deps, _env: Env, address: String, poll_id: String) -> StdResult<Binary> {
    unimplemented!()
}
```

We also need to validate the address variable. Let's do that now using a helper function called `deps.api.addr_validate` it takes a reference to a String. We can call it like:

```rust
fn query_vote(deps: Deps, _env: Env, address: String, poll_id: String) -> StdResult<Binary> {
    let validated_address = deps.api.addr_validate(&address).unwrap();
    unimplemented!()
}
```

We unwrap it to assert success, this gives us the type `Addr` stored under `validate_address` which we can now use to key our map. Let's use the `may_load` function again to get the `Option<Ballot>` we need:

```rust
fn query_vote(deps: Deps, _env: Env, address: String, poll_id: String) -> StdResult<Binary> {
    let validated_address = deps.api.addr_validate(&address).unwrap();
    let vote = BALLOTS.may_load(deps.storage, (validated_address, poll_id))?;
    unimplemented!()
}
```

Finally let's encode our result to Binary:

```rust
fn query_vote(deps: Deps, _env: Env, address: String, poll_id: String) -> StdResult<Binary> {
    let validated_address = deps.api.addr_validate(&address).unwrap();
    let vote = BALLOTS.may_load(deps.storage, (validated_address, poll_id))?;

    to_binary(&VoteResponse { vote })
}
```

Let's add it to our query function:

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::AllPolls {} => query_all_polls(deps, env),
        QueryMsg::Poll { poll_id } => query_poll(deps, env, poll_id),
        QueryMsg::Vote { address, poll_id } => query_vote(deps, env, address, poll_id),
    }
}
```

Nice!




