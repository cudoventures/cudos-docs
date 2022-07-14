---
title: Recommended hardware requirements
id: hw-req
---

# Hardware Requirements

The Cudos Network is composed of multiple node types and services.

These specifications are provided for dedicated physical hardware nodes. They are based on performance and capacity monitoring of the Cudos **Testnet** and **Mainnet**. As such, they are liable to change as we respond to ongoing network monitoring. 

However, Validator node operators are free to choose their own virtual equivalents. 

This page describes the **recommended** system hardware requirements for running different types of nodes on the Cudos Network.

  
:::info

At this time, we do not provide detailed storage IOPS/throughput or network PPS/bandwidth minimums. As the network evolves, we will share our observations of real-world statistics, to hopefully assist virtualised environment operators with right-sizing their deployments.
:::

:::caution 
If you configure a system with slower resources than the recommended values, you run the risk of being under-resourced, causing node timeouts and synchronization delays.
    
If you run out of memory or storage, the Cudos node sync process will be forcefully killed potentially leading to state corruption, losing stake and not participating in committees.
:::

## Cudos Mainnet Nodes

### Cudos mainnet ("Ingenii") Validator node

| Cudos Mainnet ("Ingenii")  |Validator node |
|---|---|
| CPU | Intel Xeon ('Skylake-SP' or newer) processor ‑or‑ AMD Epyc ('Naples' or newer) processor – Requires SGX ‑or‑ SEV feature – Minimum model ≥8 cores at ≥2.0 GHz required (≥16 cores preferred)|
| Memory | 32GiB ECC system memory (≥64GB preferred)|
| Storage | ≥2TB NVMe SSD - RAID1 or better resilience required (RAID 1+0 performance preferred) – High DWPD/TBW endurance drives strongly recommended|
|Network |Private 1Gb/s or 10Gb/s internal network for peer node connections|
| OS|Linux Debian 10 recommended |
| Additional | Redundancy of server power and cooling components strongly recommended   'Four‑nines' availability target or better   

### Cudos mainnet ("Ingenii") Sentry node

| Cudos Mainnet ("Ingenii")  | Sentry node |
|---|---|
| CPU | Intel Xeon ('Haswell' or newer) processor ‑or‑ AMD Opteron/Epyc ('Toronto' or newer) processor – Minimum model ≥4 cores at ≥2.0 GHz required (≥8 cores preferred)|
| Memory | ≥16GiB ECC system memory |
| Storage | ≥1TB NVMe SSD - RAID1 or better resilience required |
| Network | Private 1Gb/s or 10Gb/s internal network for peer node connections    1Gb/s internet connection (≥2.5Gb/s preferred)   Publicly accessible IPv4 address (additionally IPv6 recommended)     |
|OS | Linux Debian 10 recommended |
|Additional | Anti-DDoS protection strongly recommended  'Four‑nines' availability target or better  Redundancy of server power and cooling components strongly recommended      |

### Cudos mainnet ("Ingenii") Seed node

| Cudos mainnet ("Ingenii") | Seed node |
|---|---|
|CPU| Intel Xeon ('Haswell' or newer) processor ‑or‑ AMD Opteron/Epyc ('Toronto' or newer) processor – Minimum model ≥4 cores at ≥2.0 GHz required (≥8 cores preferred)|
|Memory |≥16GiB ECC system memory |
|Storage |≥1TB NVMe SSD - RAID1 or better resilience required |
|Network | Private 1Gb/s or 10Gb/s internal network for peer node connections |
|OS | Linux Debian 10 recommended
| Additional |Redundancy of server power and cooling components strongly recommended 'Four‑nines' availability target or better  |

## Ethereum Nodes

### Cudos mainnet ("Ingenii") Ethereum node

| Cudos mainnet ("Ingenii") |Ethereum node |
|---|---|
|CPU| Intel Xeon ('Haswell' or newer) processor ‑or‑ AMD Opteron/Epyc ('Toronto' or newer) processor – Minimum model ≥4 cores at ≥2.0 GHz required (≥8 cores preferred)|
|Memory |≥16GiB ECC system memory |
|Storage |≥2TB NVMe SSD - RAID1 or better resilience required |
|Network | Private 1Gb/s or 10Gb/s internal network for peer node connections |
|OS | Linux Debian 10 recommended
| Additional |Redundancy of server power and cooling components strongly recommended   <'Four‑nines' availability target or better   |

## Cudo Testnet Nodes

### Cudos Testnet ("Somniorum") Validator node

| Cudos Testnet ("Somniorum")  |Validator node |
|---|---|
| CPU | Intel Xeon ('Skylake-SP' or newer) processor ‑or‑ AMD Epyc ('Naples' or newer) processor – Requires SGX ‑or‑ SEV feature – Minimum model ≥8 cores at ≥2.0 GHz required (≥16 cores preferred)|
| Memory | 32GiB ECC system memory |
| Storage | ≥1TB NVMe SSD|
|Network |Private 1Gb/s or 10Gb/s internal network for peer node connections|
| OS|Linux Debian 10 recommended |

### Cudos Testnet ("Somniorum") Sentry node

| Cudos Testnet ("Somniorum")  | Sentry node |
|---|---|
| CPU | Intel Xeon ('Haswell' or newer) processor ‑or‑ AMD Opteron/Epyc ('Toronto' or newer) processor – Minimum model ≥4 cores at ≥2.0 GHz required (≥8 cores preferred)|
| Memory | ≥16GiB ECC system memory |
| Storage | ≥500GB NVMe SSD |
| Network | Private 1Gb/s or 10Gb/s internal network for peer node connections    100Mb/s **minimum** 1Gb/s internet connection **recommended**   Publicly accessible IPv4 address (additionally IPv6 recommended)     |
|OS | Linux Debian 10 recommended |

