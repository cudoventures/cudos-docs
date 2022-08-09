---
title: Set up rust
id: setup-rust
---

**Rust** is the main programming language used for **CosmWasm** smart contracts on the Cudos Network. 

Rust's design principles minimise smart contract vulnerabilities by using existing frameworks such as **WebAssembly** (wasm). WebAssembly is a small, fast, efficient and very secure, stack-based virtual machine that is CPU and OS neutral. It's designed to execute portable bytecode — compiled from code at near-native speed. 

Rust and WebAssembly integrate well with existing JavaScript tooling.

**CosmWasm** is a smart contract platform built for the Cosmos ecosystem of which Cudos is a member. It is is the Cosmos (Cosm) way of using WebAssembly (Wasm) hence the name. CosmWasm provides API and library functions such as verifying addresses and more advanced storage items. These enable you to write powerful smart contracts. 

## Install Rust and WASM

1. Install the latest version of [Rust](https://www.rust-lang.org/tools/install)

2. Run the following commands:

```rust
# Set 'stable' as the default release channel:

rustup default stable

# Add WASM as the compilation target:

rustup target add wasm32-unknown-unknown

# Install the following package to run custom cargo scripts:

cargo install cargo-run-script
```

