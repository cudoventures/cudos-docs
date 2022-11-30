---
title: Join Mainnet
id: join-mainnet
---

This section details the steps to join **Mainnet**.

NETWORK | ID | URL
-----|------|-----
Mainnet| cudos-1     | https://rpc.cudos.org

## Red Hat/Fedora OS
* RHEL/CentOS/EL 7 & 8
* Fedora 34, 35 & 36

1. Make sure you are in `root` by running the following command:

```shell
sudo -i
```

2. Run the following script to connect to Mainnet 

```shell
dnf install -y yum-utils
dnf install -y http://jenkins.gcp.service.cudo.org/cudos/cudos-mainnet/cudos-release.rpm
yum-config-manager --enable cudos-mainnet
dnf install -y cudos-network-mainnet
```

3. Confirm `cudos-noded` is present

```shell
cudos-noded version
```


## Ubuntu/Debian OS
* Debian 10 & 11
* Ubuntu 20.04 & 22.04

1. Make sure you are in `root` by running the following command:

```shell
sudo -i
```

2. Run the following scripts to connect to the Mainnet:

```shell
echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/cudos-mainnet/debian stable main' > /etc/apt/sources.list.d/cudos.list
apt update
apt install cudos-network-mainnet
```

3. Confirm `cudos-noded` is present

```shell
cudos-noded version
```
