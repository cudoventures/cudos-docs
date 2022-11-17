---
title: Connect and Test
id: connect-messaging-node
---

Test your contract on a **local** node before deploying on **testnet** or **mainnet**.

To interact with your contract, spin up a Cudos node with the `blast node` command.

1. When you are ready, spin up a node:

```shell
blast node start
```

2. Run tests:

```shell
blast rusttest
```

3. You should see the following result:

```shell
running 3 tests
test contract::tests::increment ... ok
test contract::tests::proper_initialization ... ok
test contract::tests::reset ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s
```

🚀 Now you are good to proceed with deploying your contract to the Cudos blockchain. 