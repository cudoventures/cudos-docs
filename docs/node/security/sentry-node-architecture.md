---
title: Sentry node architecture
id: sentry-node-arch
---

The aim of a **Sentry node architecture** is to ensure Validator nodes are not exposed on a public network. **Validator Operators** are responsible for ensuring that the network can sustain denial of service attacks.

One way to mitigate these risks is for **Validator Operators** to carefully structure their network topology in a sentry node architecture.

There are a number of ways to design a Sentry node architecture and no single way is the 'right' way. The following are guidelines. 

## Validator node

A **Validator node** should only connect to trusted **Sentry nodes**.

## Sentry nodes

One or more **Sentry nodes** can be at the 'front-end' and connect to the validator using a private connection. Sentry nodes can communicate with the rest of the network using an internet connection. There are options for Sentry nodes to communicate with each other too. 

* The **Sentry node** and **Validator node** must be on **separate virtual machines** if running on a bare metal server. They can also be VMs on a big Hypervisor or stand-alone boxes. Together, they will need to be able to handle the total disk traffic from all the VMs and require fast NVMe SSD storage. 

* A **Sentry node/s** can be in an entirely different locale to the **Validator node**

* Multiple **Sentry nodes** provide greater protection than a single **Sentry node**. 

## Connect to the network

Prior to connecting a node to the network, a **keyring** object is used to securely store and manage keys.

<!-- ## Separation of Validator and Sentry nodes

Discrete physical servers for the **Validator** and **Sentry** are recommended. Using the recommended node minimum hardware specification, the separation of public internet and private internal network can be achieved either through physically separated interfaces, or a VLAN-based configuration. -->

## Use of VMs

It is technically possible to use a hypervisor on a single physical server, with system VMs for each of the **Validator** and **Sentry** roles. Virtual networking can be used to create the recommended security topology. We do not discourage this approach, but do ***strongly recommend*** a thorough understanding of the potential security and performance considerations prior to implementation.

## Use of additional Sentry nodes

An extension of the **sentry node architecture** would be the addition of further **Sentry nodes** to guard a **Validator node**.

There is the possibility of a DDoS attack consuming all local resources and bandwidth into the single recommended sentry. 

It is possible to add further **Sentry nodes**, optionally across **multiple discrete geographies** with independent internet connections. The private internal network for connection between **Sentries** and the **Validator** would then need to be stretched out to these.


