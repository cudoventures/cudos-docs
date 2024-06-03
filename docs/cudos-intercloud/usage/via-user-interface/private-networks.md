---
title: Private Networks
id: private-networks
---

# Private Networks

You can improve the security of your VMs by not exposing them to the internet, but deploying them in a private network instead.
As an added bonus, you will also save the IP address cost for each machine that's not directly exposed publicly.
If your setup permits this can lead to significant savings when deploying many machines.

## Creating a Private Network
Creating a private network with CUDOS Intercloud is very simple.

1. Navigate to the [`NETWORKS` page](https://intercloud.cudos.org/#/networks) in the top navigation menu.
2. Click on `Create  a network`.
3. Choose the details of your private network.
    - **Location**: private networks are not shared between datacentres, so you need to choose in which datacentre you want to create your private network.
    - **Name**: a unique identifier for your private network.
    - **Subnet**: the address range for the private network. If you are unsure about what should go in here, you can learn more [here](https://en.wikipedia.org/wiki/Private_network#Private_IPv4_addresses) for example.

:::note
CUDOS Intercloud's suppliers all use IPv4 at the moment.
:::

After that, your network will be created and you will be able to choose it in the `Networking` box of the VM creation page.

## Creating a VM in a Private Network
The process is the same as for any other VM, except that you need to select the private network that you want in the dropdown menu of the Networking box.
Optionally, you can assign a public IP address, so that it can be reached from the outside as well.

Please note that **you will need a jump host the first time you want to connect to a VM in a private network**.
That's because you need a point of access to your network.

## Connecting to a VM in a Private Network
:::caution
You need one VM with a public IP address in your private network to use as a jump host.
:::

Since VMs without a public address in a private network are not reachable from the outside, you need a way to connect to them.
Our recommended approach to connect to a private network is with a jump host.

The first time that you deploy a machine you will need another VM in that same private network with a public IP address, to connect to the others.
That means that you need to SSH into that jump host from your machine, and then connect to the other machine from it.
For convenience, you can do that with a single command with the `-J` flag in the SSH command.

As an example, if the public IP address of your jump host VM in your private network has public address `1.2.3.4`, and the address in the private network of another VM you want to connect to is `10.0.0.8`, then the command to SSH into your second server that doesn't have a public IP address is
```
ssh -J root@1.2.3.4 root@10.0.0.8
``` 

You only need the jump host when you want to log in to the other machine, so for extra security **you could shut down or even delete the jump host when you aren't using it**.
Alternatively, you could set up a reverse SSH proxy, where the VM dials out to a jumpbox you already have on the outside.
If you are using a jump host, it is recommended that this jump host is dedicated to this purpose, though it's not essential.

## Billing
Private networks are billed separately from VMs, but they are also billed hourly.
The price per network depends on the datacentre in which it's created in, but they are all around $0.0045 per hour.
Please visit [the network creation page](https://intercloud.cudos.org/#/networks/create) to see the exact prices in each datacentre.

As a side note, IP addresses are billed at around $0.0035 per hour in most datacentres.
You can find the exact values in the [VM creation page](https://intercloud.cudos.org/#/create).
If you are planning on deploying a large number of VMs and your setup allows for most of your VMs to not have a public IP address, this could also be a way to decrease some cost, as well as improve security.