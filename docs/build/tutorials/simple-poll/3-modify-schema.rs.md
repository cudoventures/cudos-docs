---
title: Modify schema.rs
id: modify-schema
---

In the last step, we changed `State` to `Config`.

Now we do it to the `schema.rs` file too. The variable is imported `examples/schema.rs`.

1. Replace the two instances of `State` with `Config`. 

2. Generate a schema for `Poll` and `Ballot` structs. 

 * Add `Poll` and `Ballot` to the following line:

 ```rust
 use cw_starter::state::Config;
 ```

to make it:

```rust
use cw_starter::state::{Config, Poll, Ballot};
```

