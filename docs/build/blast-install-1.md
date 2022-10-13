---
title: Cudos blast
id: install-blast
---

**Cudos Blast** is an educational demo project to be used to understand more about smart contracts, compilation, deployment and interaction. 

# 00 Prerequisites

Before you get started with **Cudos Blast**, ensure you have met the following prerequisites:

| Prerequisite   | Minimum version | Recommended version |
| ---            | ---             | ---                 |
| Install [Node.js](https://nodejs.org/en/download/package-manager/)       | 14.15.0         | 16.10.0             |
| Install [npm](https://www.npmjs.com/)            | 6.9.0           | 7.24.0              |
| Install [Docker engine](https://docs.docker.com/engine/install)  | 19.03.13        | 20.10.12            |
| Install [Docker compose](https://github.com/docker/compose) | 1.27.4          | 1.29.2              |  

:::tip WINDOWs USERS
> For Windows users we recommend using Windows Subsystem for Linux ([WSL](https://docs.microsoft.com/en-us/windows/wsl/install-manual#downloading-distros)).
> To avoid permission issues with `WSL`, you may have to [change](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory) `npm` default directory. 
:::

## 01 Setup Rust

The Cudos chain works with Rust

Checkout [Setup Rust](/docs/build/setup-rust)

## 02 Install Cudos Blast

### Globally

Use `npm` to install Cudos Blast CLI tool globally. This means you can create a new project anywhere. 

:::info

This project needs to run as root using `sudo` 
:::

```bash
sudo npm install cudos-blast -g

# confirm installation
blast --version
```
:::info TIP

Use `npx cudos-blast` to run commands. This ensures you are always using the latest version. 
:::

### Locally - Add to a single project

If you only want to install Cudos Blast into a single project then do the following:

```bash
# Create a folder for your project
mkdir myproject
cd myproject

# Initialise a project and follow the prompts
blast init

# Confirm installation
blast --version
```

:::success Congratulations 🎉

If a blast version is returned, you have **successfully** installed Cudos Blast.

:::


