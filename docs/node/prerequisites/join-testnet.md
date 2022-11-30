---
title: Join Testnet
id: join-testnet
---

This section details the steps to join **Testnet**.

NETWORK | ID | URL
-----|------|-----
public testnet| cudos-testnet-public-3 |https://sentry1.gcp-uscentral1.cudos.org:36657/

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

2. Run the following script to connect to Testnet 

```shell
dnf install -y yum-utils
dnf install -y http://jenkins.gcp.service.cudo.org/cudos/cudos-testnet/cudos-release.rpm
yum-config-manager --enable cudos-testnet
dnf install -y cudos-network-public-testnet
```

3. Confirm `cudos-noded` is present

```shell
cudos-noded version
```


## Ubuntu/Debian OS
* Debian 10 & 11
* Ubuntu 20.04 & 22.04

1. Make sure you are in **root** by running the following command:

:::caution 
Just putting "sudo" before some of these commands does not work.
:::

```shell
sudo -i
```

2. Run the following scripts to connect to the Testnet:

```shell
echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/cudos-testnet/debian stable main' > /etc/apt/sources.list.d/cudos.list
apt update
apt install cudos-network-public-testnet
```

3. Confirm `cudos-noded` is present

```shell
cudos-noded version
```
