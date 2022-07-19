---
title: Set up rust
id: setup-rust
---

Rust is the main programming language used for **CosmWasm** smart contracts on the Cudos Network. CosmWasm libraries and tooling work best with Rust.

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

