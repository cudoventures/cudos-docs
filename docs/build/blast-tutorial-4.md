---
title: Compile & Deploy your Contract
id: blast-compile
---

Before a Rust contract can be used, it must be compiled into `wasm` bytecode that can be stored on chain.

**Cudos Blast** makes compilation easy with a single command.

:::tip Rust optimiser
Cudos Blast uses Rust Optimiser under the hood to compile contracts ready for deployment.
:::

1. First, let's make sure we are at the project root with only one `Cargo.toml` file.

```shell
myCudosDapp username$ ls
Cargo.lock		jsconfig.json		scripts
Cargo.toml		local-accounts.json	target
blast.config.js		package.json		tests
contracts		schema
```

2. Run the compile command

```shell
blast compile

# Example response extract

Compiling contracts at: "/Users/ad/projects/myCudosDapp/contracts" with 0.12.6 version
Unable to find image 'cosmwasm/workspace-optimizer:0.12.6' locally
0.12.6: Pulling from cosmwasm/workspace-optimizer
df9b9388f04a: Already exists 
2113a6fa04a6: Already exists 
...
Building artifacts in workspace ...
Found workspace member entries: ["contracts/*"]
Package directories: ["contracts/alpha", "contracts/beta"]
Contracts to be built: ["contracts/alpha", "contracts/beta"]
Building "contracts/alpha" ...
 Downloading crates ...
  Downloaded base16ct v0.1.1
  Downloaded sec1 v0.2.1
...
Non-cacheable reasons:
crate-type                           13
-                                     4

Cache location                  Local disk: "/root/.cache/sccache"
Cache size                           14 MiB
Max cache size                       10 GiB
done
```

3. A new artifacts folder is created containing `alpha.wasm` and `beta.wasm`.

Now we are ready to deploy the artifacts.

## Deploy

In this section, we're going to upload one of our optimised builds `alpha.wasm` to our local environment.

1. Check you are in the the current working directory.

```shell
pwd
```

```
cudos-noded tx wasm store artifacts/my_first_contract.wasm --from test1 --chain-id=localterra --gas=auto --fees=100000uluna --broadcast-mode=block












Before the smart contract can be utilized, an instance of the smart contract must be present with a smart contract address.

