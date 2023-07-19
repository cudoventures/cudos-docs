---
title: Build Binary 
id: build-binary-go
---

Get started by building the cudos-node binary and running the cudos-noded CLI.
`cudos-noded` CLI allows you to interact with the CUDOS network. 

:::warning 

If you get the following error:

```bash
# runtime/cgo
ld: unknown option: -rpath=$ORIGIN/../
```

Then edit `Makefile` line 17 

from:

```bash
install: export CGO_LDFLAGS="-Wl,-rpath=$$ORIGIN/../"
```

to

```bash
install: export CGO_LDFLAGS="-Wl,-rpath,$$ORIGIN/../"
```

:::

## MacOS

1. Clone the CUDOS node repository.

```shell
git clone https://github.com/CudoVentures/cudos-node.git
```

2. Build the binary

```shell
# Change into the CUDOS node directory
cd cudos-node

# Build the binary
make

# Run 
cudos-noded
```

3. You should see the following:

```shell
Cudos Node App

Usage:
  cudos-noded [command]

Available Commands:
  add-genesis-account      Add a genesis account to genesis.json
  add-wasm-genesis-message Wasm genesis subcommands
  collect-gentxs           Collect genesis txs and output a genesis.json file
  debug                    Tool for helping with debugging your application
  eth_keys                 Manage your application's ethereum keys
  export                   Export state to JSON
  gentx                    Generate a genesis tx carrying a self delegation, oracle key delegation and orchestrator key delegation
  help                     Help about any command
  init                     Initialize private validator, p2p, genesis, and application configuration files
  keys                     Manage your application's keys
  migrate                  Migrate genesis to a specified target version
  query                    Querying subcommands
  rollback                 rollback cosmos-sdk and tendermint state by one height
  start                    Run the full node
  status                   Query remote node for status
  tendermint               Tendermint subcommands
  tx                       Transactions subcommands
  unsafe-reset-all         Resets the blockchain database, removes address book files, and resets data/priv_validator_state.json to the genesis state
  validate-genesis         validates the genesis file at the default location or at the location passed as an arg
  version                  Print the application binary version information

Flags:
  -h, --help                help for cudos-noded
      --home string         directory for config and data (default "/Users/name/cudos-data")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "cudos-noded [command] --help" for more information about a command.
```

:::caution 
If you run into errors, you may need to set your Go path.
Amend .bashrc file to your 
```shell
export PATH=$PATH:$(go env GOPATH)/bin
```
:::

## Ubuntu 20.04 LTS 

This guide explains how to install the `cudos-noded` binary. 

(These instructions are written based on a Google Cloud VM instance running on Ubuntu 20.04 LTS
x86/64, amd64 focal image built on 2022-09-05, supports Shielded VM features.)

1. Install `build-essential`

Run as normal user.

```shell
sudo apt update
sudo apt install build-essential
```

2. Install Git

```shell
sudo apt-get install git-all
git version
```

3. Install Go

[**Go installation instructions**](https://go.dev/dl/)

Or using **Snap** 

```shell
sudo snap install --classic --channel=latest/stable go
echo 'PATH=$PATH:~/go/bin' >> ~/.bashrc
source ~/.bashrc
```

4. Install `cudos-node` binary and make

```shell
git clone https://github.com/CudoVentures/cudos-node.git
cd cudos-node && make install
```

### Example

```shell
user@node-go-01:~$ cd cudos-node && make install
--> Installing cudos-noded
```

5. `cudos-node` daemon

`cudos-noded` provides the Command Line Interface and node daemon to interact with the CUDOS blockchain.
Check that it has successfully installed.

```shell
cudos-noded version --long
```

:::info 🎉 Success
Successful installation is indicated by the presence of `cudos-noded` - The CUDOS Node Daemon. 






