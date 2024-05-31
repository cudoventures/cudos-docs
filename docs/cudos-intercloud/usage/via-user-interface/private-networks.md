---
title: Private Networks
id: private-networks
---

# Private Networks

You can improve the security of your VMs by not exposing them to the internet, but deploying them in a private network instead.
As an added bonus, you will also save the IP address cost.
Thus, if your setup permits this can lead to significant savings when deploying many machines.

## Creating a Private Network
Creating a private network with CUDOS Intercloud is very simple.

1. Navigate to the `NETWORKS` page in the top navigation menu.
2. Click on `Create  a network`.
3. Choose the details of your private network.
    - **Location**: private networks are not shared between datacentres, so you need to choose in which datacentre you want to create your private network.
    - **Name**: a unique identifier for your private network.
    - **Subnet**: the address range for the private network. If you are unsure about what should go in here, you can learn more for example [here](https://www.ripe.net/about-us/press-centre/understanding-ip-addressing/).

:::note
CUDOS Intercloud's suppliers all use IP v4 at the moment.
:::

After that, your network will be created and you will be able to choose it in the `Networking` box of the VM creation page.

## Creating a VM in a Private Network
The process is the same as for any other VM, expcet that you need to select the private network that you want in the dropdown menu of the Networking box.
Optionally, you can assign a public IP address

## Connecting to a VM in a Private Network


## Billing