---
title: Join Private Testnet
id: join-private-testnet
---

This section details the steps to join a **Private Testnet**

NETWORK | ID | URL
-----|------|-----
private testnet| cudos-network |http://localhost:26657

## Red Hat/Fedora OS

* RHEL/CentOS/EL 7 & 8
* Fedora 34, 35 & 36

1. Make sure you are in **root** by running the following command:

:::caution 
Just putting "sudo" before some of these commands does not work.
:::


```shell
sudo -i
```

2. Run the following script to connect to Private Testnet

```shell
dnf install -y yum-utils
dnf install -y http://jenkins.gcp.service.cudo.org/cudos/cudos-prtn/cudos-release.rpm
yum-config-manager --enable cudos-prtn
dnf install -y cudos-network-private-testnet
```

3. Confirm `cudos-noded` is present

```shell
cudos-noded version
```

This step, confirms your installation has succeeded. 

## Ubuntu/Debian 

* Debian 10 & 11
* Ubuntu 20.04 & 22.04

1. Make sure you are in **root** by running the following command:

```shell
sudo -i
```

2. Run the following scripts to connect to Private Testnet:

```shell
echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/cudos-prtn/debian stable main' > /etc/apt/sources.list.d/cudos.list
apt update
apt install cudos-network-private-testnet
```

3. Confirm `cudos-noded` is present

```shell
cudos-noded version
```