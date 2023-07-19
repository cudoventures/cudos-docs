---
title: Recommended hardware requirements
id: hw-req
---

# Hardware Requirements

These specifications are provided for dedicated physical hardware nodes. They are based on performance and capacity monitoring of the CUDOS **Testnet** and **Mainnet**. As such, they are liable to change as we respond to ongoing network monitoring. 
 
This page describes the **recommended** system hardware requirements for running different types of nodes on the CUDOS Network.

:::info

At this time, we do not provide detailed storage IOPS/throughput or network PPS/bandwidth minimums. As the network evolves, we will share our observations of real-world statistics, to assist **Node Operators** with optimising their deployments.
:::

:::caution 
If you configure a system with slower resources than the recommended values, you run the risk of being under-resourced leading to synchronisation delays. On a slow hard drive, there is a risk that your node may never catch up with the head of the chain.
    
If you run out of memory or storage, the CUDOS node sync process will be forcefully killed potentially leading to state corruption, losing stake and not participating in consensus.
:::

## CUDOS Mainnet Nodes

### CUDOS Mainnet Validator node

| CUDOS Mainnet  | Validator node |
|---|---|
| CPU | * Intel Xeon or AMD Epyc ***Minimum***  ≥8 cores at ≥2.0 GHz required ***Recommended*** ≥16 cores, <br /> * Requires SGX ‑or‑ SEV feature |
| Memory | 32GiB ECC system memory (≥64GB preferred)|
| Storage | ≥2TB NVMe SSD - RAID1 or better resilience required (RAID 1+0 performance preferred) – High DWPD/TBW endurance drives strongly recommended|
|Network |Private 1Gb/s or 10Gb/s internal network for peer node connections|
| OS| Ubuntu 20.04 <br /> Debian 10 <br /> RHEL/CentOS/Enterprise Linux 8 <br /> Fedora 34 & 35  |
| Additional | Redundancy of server power and cooling components strongly recommended   'Four‑nines' availability target or better   

### CUDOS Mainnet Sentry node

| CUDOS Mainnet | Sentry node |
|---|---|
| CPU | Intel Xeon ('Haswell' or newer) processor ‑or‑ AMD Opteron/Epyc ('Toronto' or newer) processor – Minimum model ≥4 cores at ≥2.0 GHz required (≥8 cores preferred)|
| Memory | ≥16GiB ECC system memory |
| Storage | ≥1TB NVMe SSD - RAID1 or better resilience required |
| Network | Private 1Gb/s or 10Gb/s internal network for peer node connections    1Gb/s internet connection (≥2.5Gb/s preferred)   Publicly accessible IPv4 address (additionally IPv6 recommended)     |
|OS | Ubuntu 20.04, Debian 10,  RHEL/CentOS/Enterprise Linux 8, Fedora 34 & 35  |
|Additional | Anti-DDoS protection strongly recommended  'Four‑nines' availability target or better  Redundancy of server power and cooling components strongly recommended      |

### CUDOS Mainnet Seed node

| CUDOS Mainnet | Seed node |
|---|---|
|CPU| Intel Xeon ('Haswell' or newer) processor ‑or‑ AMD Opteron/Epyc ('Toronto' or newer) processor – Minimum model ≥4 cores at ≥2.0 GHz required (≥8 cores preferred)|
|Memory |≥16GiB ECC system memory |
|Storage |≥1TB NVMe SSD - RAID1 or better resilience required |
|Network | Private 1Gb/s or 10Gb/s internal network for peer node connections |
|OS | Ubuntu 20.04, Debian 10,  RHEL/CentOS/Enterprise Linux 8, Fedora 34 & 35 
| Additional |Redundancy of server power and cooling components strongly recommended 'Four‑nines' availability target or better  |

## Cudo Testnet Nodes

### CUDOS Testnet Validator node

| CUDOS Testnet  |Validator node |
|---|---|
| CPU | Intel Xeon ('Skylake-SP' or newer) processor ‑or‑ AMD Epyc ('Naples' or newer) processor – Requires SGX ‑or‑ SEV feature – Minimum model ≥8 cores at ≥2.0 GHz required (≥16 cores preferred)|
| Memory | 32GiB ECC system memory |
| Storage | ≥1TB NVMe SSD|
|Network |Private 1Gb/s or 10Gb/s internal network for peer node connections|
| OS|Ubuntu 20.04, Debian 10,  RHEL/CentOS/Enterprise Linux 8, Fedora 34 & 35 |

### CUDOS Testnet Sentry node

| CUDOS Testnet   | Sentry node |
|---|---|
| CPU | Intel Xeon ('Haswell' or newer) processor ‑or‑ AMD Opteron/Epyc ('Toronto' or newer) processor – Minimum model ≥4 cores at ≥2.0 GHz required (≥8 cores preferred)|
| Memory | ≥16GiB ECC system memory |
| Storage | ≥500GB NVMe SSD |
| Network | Private 1Gb/s or 10Gb/s internal network for peer node connections    100Mb/s **minimum** 1Gb/s internet connection **recommended**   Publicly accessible IPv4 address (additionally IPv6 recommended)     |
|OS | Ubuntu 20.04, Debian 10,  RHEL/CentOS/Enterprise Linux 8, Fedora 34 & 35  |


### CUDOS Testnet Seed node

|CUDOS Testnet | Seed node |
|---|---|
|CPU | Intel Xeon ('Haswell' or newer) processor ‑or‑ AMD Opteron/Epyc ('Toronto' or newer) processor – Minimum model ≥4 cores at ≥2.0 GHz required |
|Memory | ≥16GiB ECC system memory |
| Storage |* ≥500GB NVMe SSD |
| Network | Private 1Gb/s internal network for peer node connections |
|OS | Linux Ubuntu/Debian recommended |

