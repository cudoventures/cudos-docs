---
title: Private Networks
id: private-networks
---

# Private Networks

You can improve the security of your VMs by not exposing them to the internet, but deploying them in a private network instead.
As an added bonus, you will also save the IP address cost for each machine that's not directly exposed publicly.
Thus, if your setup permits this can lead to significant savings when deploying many machines.

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
The process is the same as for any other VM, expcet that you need to select the private network that you want in the dropdown menu of the Networking box.
Optionally, you can assign a public IP address, so that it can be reached from the outside as well.

Please note that **you will always need at least one machine in your private network with a public IP address**, to act as a jump host.
You need to connect via SSH to all machines remotely, so you need one that is going to act as the point of access to your network.
It is recommended that this jump host is dedicated to this purpose, though it's not essential.

## Connecting to a VM in a Private Network
:::caution
You always need one VM with a public IP address in your private network to use as a jump host.
:::
You need to tell SSH which server should be used as a jump host, using the [`-J` flag](https://wiki.gentoo.org/wiki/SSH_jump_host).
Let's assume the public IP address of your jump host VM in your private network has public address `1.2.3.4`, and that the address in the private network of another VM you want to connect to is `10.0.0.8`.
Then, the command to SSH into your second server that doesn't have a public IP address is
```
ssh -J root@1.2.3.4 root@10.0.0.8
``` 

## Billing
Private networks are billed separately from VMs, but they are also billed hourly.
The price per network depends on the datacentre in which it's created in, but they are all around $0.0045 per hour.
Please visit [the network creation page](https://intercloud.cudos.org/#/networks/create) to see the exact prices in each datacentre.

As a side note, IP addresses are billed at around $0.0035 per day in most datacentres.
You can find the exact values in the [VM creation page](https://intercloud.cudos.org/#/create).
Thus, if you are planning on deploying a large number of VMs and your setup allows for most of your VMs to not have a public IP address, this could also be a way to decrease some cost, as well as improve security.