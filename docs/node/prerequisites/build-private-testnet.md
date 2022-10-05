


### 00 Prerequisites

1. Make sure you are in root by running the following command:

```shell
sudo -i
```

### 01 Ubuntu/Debian 

Run one of the following commands according to your network choice.

### Private Testnet

```shell
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-prtn
dnf install cudos-network-private-testnet
```

### Redhat/Fedora

```shell
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-prtn
dnf install cudos-network-private-testnet
```