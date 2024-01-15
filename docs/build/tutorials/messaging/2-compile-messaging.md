---
title: Compile messaging contract
id: compile-messaging
---

Before a contract can be used, it must be compiled into `wasm` bytecode or artefacts that can be stored on chain.

**CUDOS Blast** makes compilation easy with a single command.

## 01 Modify files 

1. Open **contracts > schema.rs** and replace *alpha* with your project-name.

![update-schema](@site/static/img/update-schema.png)

2. Open **src > cargo.toml** and replace *alpha* with your project-name

![update-cargo](@site/static/img/update-cargo.png)

## 02 Compile your contract

1. Make sure you have docker running.

2. Run the following command:
    ```shell
    blast compile
    ```

    ```shell
    # Example
    blast compile
    Compiling contracts at: "~projects/new-project/contracts" with 0.12.6 version
    Building artifacts in workspace ...
    Found workspace member entries: ["contracts/*"]
    Package directories: ["contracts/new-project"]
    Contracts to be built: ["contracts/new-project"]
    Building "contracts/new-project" ...
    Compiling newproject v0.1.0 (/code/contracts/new-project)
        Finished release [optimized] target(s) in 32.12s
    Creating intermediate hashes ...
    61d02c4540f12d006fa06c307f878abfee21c14b96136cef9d32068032b83dc6  target/wasm32-unknown-unknown/release/newproject.wasm
    Optimizing artifacts in workspace ...
    Optimizing newproject.wasm ...
    Moving wasm files ...
    Post-processing artifacts in workspace ...
    307c299c6f89a120e3056258cb6ac1a7b2ff8f32cbeb86148044ef4ff70f168e  newproject.wasm
    done
    ```

3.  🚀 Congratulations!! You have now created a new wasm file ready to be deployed!!

![new-wasm](@site/static/img/new-wasm.png)

