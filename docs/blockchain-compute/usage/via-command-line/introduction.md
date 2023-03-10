---
title: Introduction
id: introduction
---

# Introduction
Most users will interact with Blockchain Compute using the [User Interface](../via-user-interface/signing-in.md).
It is also possible to interact with the smart contract directly using the `cudos-noded` CLI.
This also allows you to see the message structure that is happening in the background of the UI.

The basic workflow for using the contract as a consumer is:

1. Retrieve the [VM type list](queries#machine_type_list) and make a selection
2. Retrieve the [image list](queries#image_list) and make a selection
3. Ensure you have a SSH public key
4. [Order a VM](messages#order_machine) using the VM type, image, and SSH public key
5. Wait until the [machine status](queries#machine) reports the VM is started
6. Periodically [fund the VM](messages#fund_machine) so it keeps running
7. Either [disown the VM](messages#disown_machine) or allow it to run out of funds
