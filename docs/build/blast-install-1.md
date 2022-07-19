---
title: Install Cudos blast
id: install-blast
---

**Cudos Blast** is a Node.js CLI (command line interface) tool for working with the Cudos blockchain. You can use it to:

1. Scaffold, compile and test **Rust** smart contracts and javascript

2. Deploy smart contracts on a local, test or public network.

3. Interact with smart contracts with `blast.config.js` on a specified network (local, test or public).

4. Spin up a local [`Cudos node`](https://github.com/CudoVentures/cudos-node) to interact with. 

# Prerequisites

| Prerequisite   | Minimum version | Recommended version |
| ---            | ---             | ---                 |
| Install [Node.js](https://nodejs.org/en/download/package-manager/))        | 14.15.0         | 16.10.0             |
| Install [npm](https://www.npmjs.com/)            | 6.9.0           | 7.24.0              |
| Install [Docker engine]((https://docs.docker.com/engine/install))  | 19.03.13        | 20.10.12            |
| Install [Docker compose](https://github.com/docker/compose) | 1.27.4          | 1.29.2              |  

:::note WINDOWs USERS
> For Windows users we recommend using Windows Subsystem for Linux ([WSL](https://docs.microsoft.com/en-us/windows/wsl/install-manual#downloading-distros)).
> To avoid permission issues with `WSL`, you may have to [change](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory) `npm` default directory. 
:::

## 2. Set up Rust

Checkout [Setup Rust](/docs/build/setup-rust)

## 3. Install Cudos Blast

### Globally

Use npm to install Cudos Blast CLI tool globally:

```bash
npm install cudos-blast -g

# confirm installation

blast --version
```
:::info TIP

Use `npx cudos-blast` to run commands. This ensures you are always using the latest version. 
:::

### Locally

```bash

# Create a folder for your project

mkdir myproject
cd myproject

# Initialise a project and follow the prompts

npm init 

# Install Cudos Blast 

npm install cudos-blast

# Confirm installation

blast --version

```

Interact using `npx blast` to run commands or `npx cudos-blast`. 

