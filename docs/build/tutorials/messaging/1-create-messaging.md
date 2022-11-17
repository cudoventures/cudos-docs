---
title: Create messaging dApp
id: create-messaging
---

In this tutorial, we are going to build a simple ***messaging dApp*** created by Aishat Akinyemi. 

The messaging dApp will do the following: 

1. Display a message "hello world" 
2. Allow a user to interact with a reply of their choice.
3. The account will only a single reply.
4. Trying to reply more than once will return an error.

Here's what it looks like:

![messaging-dapp](@site/static/img/messaging-dapp.png)

## 00 What you need to get started

* Go (Install Go and set Go Path)
* Basic understanding of Rust
* Node.js min 14.15.0 max 16.10.0
* Docker 

## 01 Install Cudos Blast

1. Run the following command to install Cudos Blast. 

```shell
npm install cudos-blast -g
```

2. Check it installed okay. 

```shell
blast version

Usage: blast <command> [arguments] [command options]

Commands:
  blast init                  Create a sample project
  blast compile               Compile the smart contracts in the workspace in
                              alphabetical order
  blast test                  Run the JavaScript tests
  blast rusttest              Run smart contracts' rust tests
  blast node                  Manage a local CUDOS node
  blast run <scriptFilePath>  Run a single script
  blast keys                  Manage node's accounts (keys)
```

3. Create a new directory for your project and initial a blast project.

```shell
mkdir new-project
cd new-project
blast init
Success! Sample project initialized in ~/projects/new-project
```

4. Open in your favourite code editor e.g. Visual Studio Code

![new-project](@site/static/img/new-project.png)

5. Open *Contracts* and Delete *Beta*.

6. Rename *Alpha* to your project name e.g. *newproject*

![new-alpha](@site/static/img/new-alpha.png)