---
title: Sentry node architecture
id: sentry-node-arch
---

The aim of a **Sentry node architecture** is to ensure Validator nodes are not exposed on a public network. Validator Operators are responsible for ensuring that the network can sustain denial of service attacks.

One way to mitigate these risks is for validators to carefully structure their network topology in a sentry node architecture.

There are a number of ways to design a Sentry node architecture and no single way is the 'right' way. The following are guidelines. 

## Back-end

A **Validator node** should only be accessible over a private network. The Validator does not have a public IP address to provide its services. 

## Front-end

One or more **Sentry nodes** can be at the 'front-end' and connect to the validator using a private connection. Sentry nodes can communicate with the rest of the network using an internet connection. There are options for Sentry nodes to communicate with each other too. 

* The **Sentry node** and **Validator node** must be on **separate virtual machines** if running on a bare metal server. They can also be VMs on a big Hypervisor or stand-alone boxes. This will need to be able to handle the total disk traffic from all the VMs and require fast NVMe SSD storage. 

* It can be in an entirely different locale to the **Validator node**

* Multiple **Sentry nodes** provide greater protection than a single **Sentry node**. 

## Connect to the network

Using a **keyring** to manage keys is essential to join a node to the Cudos network. 

## Separation of Validator and Sentry nodes

Discrete physical servers for the **Validator** and **Sentry** are recommended. Using the recommended node minimum hardware specification, the separation of public internet and private internal network can be achieved either through physically separated interfaces, or a VLAN-based configuration.

## Use of VMs

It is technically possible to use a hypervisor on a single physical server, with system VMs for each of the **Validator** and **Sentry** roles. Virtual networking can be used to create the recommended security topology. We do not discourage this approach, but do ***strongly recommend*** a thorough understanding of the potential security and performance considerations prior to implementation.

## Use of additional Sentry nodes

An extension of the **sentry node architecture** optionally sees a **Validator** operator adding additional **Sentry nodes**. 

There is the possibility of a DDoS attack consuming all bandwidth into the single recommended sentry. 

It is possible to add further **Sentry nodes**, optionally across **multiple discrete geographies** with independent internet connections. The private internal network for connection between **Sentries** and the **Validator** would then need to be stretched out to these.


