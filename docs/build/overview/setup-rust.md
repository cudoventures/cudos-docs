---
title: Setting up
id: setup-rust
---

The CUDOS Network uses **CosmWasm** as a framework for developing smart contracts and infrastructure to run them on chain. Smart contracts are written using Rust. 

In order to develop smart contracts, you need the **Rust toolchain**.

:::info 🛠 About Rust toolchain

### About Rust
Rust is a statically-typed programming language designed for **performance** and **safety**, especially safe concurrency and memory management. Its syntax is similar to that of C++. It is an open-source project developed originally at Mozilla Research.

Rust design principles minimise smart contract vulnerabilities by using existing frameworks such as **WebAssembly** (wasm). 

### About Webassembly 
**WebAssembly** is a small, fast, efficient and very secure, stack-based virtual machine that is CPU and OS neutral. It is designed to execute portable bytecode — compiled from code at near-native speed. Sandboxed environment means can run in any environment. WASM programming language support is extensive and growing.


### About CosmWasm
**CosmWasm** is a smart contract platform built for the **Cosmos** ecosystem (of which CUDOS is a member). It is is the ***Cosmos (Cosm) way of using WebAssembly (Wasm)*** hence the name. 

CosmWasm provides API and library functions such as verifying addresses and more advanced storage items. These enable you to write powerful smart contracts. 

:::

## Install Rust and WASM

1. Install the latest version of [Rust](https://www.rust-lang.org/tools/install) 

Follow the instructions to configure the `PATH` environment variable. 

2. Verify installation

```shell
rustc --version
```

You should get a message similar to this:

```shell
rustc 1.61.0 (fe5b13d68 2022-05-18)
```

3. Run the following commands

```rust
// Set 'stable' as the default release channel:

rustup default stable

// Add WASM as the compilation target:

rustup target add wasm32-unknown-unknown

// Install the following package to run custom cargo scripts:

cargo install cargo-generate --features vendored-openssl
cargo install cargo-run-script
```

:::tip What is Cargo?
**Cargo** is the Rust build system and package manager. It is a great tool to manage Rust projects because it builds your code, downloads the libraries your code depends on, and builds those libraries or dependencies.
:::

## Set up command-line tools

```shell
apt install jq curl
```

You are now ready build! 
