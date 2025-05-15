---
title: Managing Payments
id: payments
---

# Managing Your Payments

The [Payments page](https://intercloud.cudos.org/payments) is your central hub for managing your account balance, which funds all your VMs. Any active promotions will be displayed here. For payments with wider range of tokens please check out [Squid router](https://intercloud.cudos.org/payments/squid/new) below.

![cic-payments](@site/static/img/cic-payments.png)

Choose your preferred top-up amount in either cryptocurrency or USD.
For a comprehensive list of supported currencies and blockchain networks, visit our [chains and currencies documentation.](/docs/cudos-intercloud/chains-currencies.md)

# Cross-Chain Payments with Squid Router

[Squid router](https://intercloud.cudos.org/payments/squid/new) allows you to transfer tokens between different blockchain networks in a single transaction. The interface provides a straightforward way to swap or transfer tokens **across 70+ chains** with minimal steps required.

## Step-by-Step Instructions

![squid_payments_1](@site/static/img/squid_payments_1_2.png)

### 1. Select Your Blockchain Network

In "SELECT CHAIN," choose your blockchain network from the dropdown.

### 2. Choose Your Token

Under "SELECT TOKEN," pick the token you're transferring from the dropdown.

### 3. Enter Transfer Amount

Input your desired transfer amount or click "Maximum" for your full balance.

### 4. Review Transaction Details

Check the transaction breakdown:

- **Input**: The total amount being processed
- **Transfer amount**: The actual amount being sent
- **Gas fees**: Network gas costs
- **Routing fees**: Additional routing costs

![squid_transfer](@site/static/img/squid_transfer.png)

### 5. Check Route Details

- View the number of stops your transaction will make
- Click the arrow to expand and see the detailed routing path

### 6. Review USD Value

The "EXPECTED USD AMOUNT" shows the approximate value of your transaction in USD.

:::note
The USD amount shown is our target payment, but actual value may vary due to exchange rate fluctuations beyond our control. For payment certainty, we recommend converting to USDC yourself before making payment.
:::

### 7. Check for Errors and Warnings

Pay attention to any error messages:

- The red warning "Your remaining balance is insufficient to cover the required fees" indicates that your current balance cannot cover both the transfer amount and all associated fees

### 8. Adjust Transfer Amount (If Needed)

If you see an insufficient balance error:

- Click the "Adjust transfer amount to fit fees" button to automatically recalculate a valid transfer amount that includes all fees
- This will reduce your transfer amount to ensure enough is left for gas and routing fees

### 9. Confirm Transaction

Once everything looks correct and there are no error messages:

- Click "Perform payment"
- Your wallet will prompt you to approve the transaction

### 10. Wait for Confirmation

After submission:

- Your wallet will display a pending transaction
- Wait for the transaction to complete on both the source and destination chains
- Squid Router will handle all the cross-chain bridging automatically

### Viewing Transfer History

After completing transfers, you can monitor all your transactions through the [History](https://intercloud.cudos.org/payments/squid/history) tab

### Viewing Transfer Details

To see more information about a specific transfer:

1. Click on a transaction in the history list

![squid_history](@site/static/img/squid_transfer_history.png)

2. Click on any transaction to see:

- Amount Credited
- Amount Transferred
- Chain used
- Transaction status
- Timestamps
- Transaction hashes

3. For even more details, click the **View details** button next to the final transaction hash

![squid_details](@site/static/img/squid_transfer_details.png)

This detailed view is helpful for verifying completed transfers, troubleshooting issues, or providing transaction evidence if needed.

## Important Notes

- Ensure sufficient balance for both transfer and fees
- More complex routes may take longer and cost more
- Network congestion may increase fees and transaction times

## Support and Troubleshooting

If you encounter issues, visit our [support channel](https://discord.com/invite/cudos) for assistance

## 🎓 Want to learn more?

You can learn more about this by [joining our Discord](https://discord.com/invite/cudos) or [Telegram](https://t.me/cudostelegram).
