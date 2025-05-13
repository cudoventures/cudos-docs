---
title: Managing Payments
id: payments
---

# Managing Your Payments

The [Payments page](https://intercloud.cudos.org/payments) is your central hub for managing your account balance, which funds all your VMs. Any active promotions will be displayed here.

![cic-payments](@site/static/img/cic-payments.png)

Choose your preferred top-up amount in either cryptocurrency or USD.
For a comprehensive list of supported currencies and blockchain networks, visit our [chains and currencies documentation.](/docs/cudos-intercloud/chains-currencies.md)

# Cross-Chain Payments with Squid Router

[Squid router](https://intercloud.cudos.org/payments/squid/new) allows you to transfer tokens between different blockchain networks in a single transaction. The interface provides a straightforward way to swap or transfer tokens **across 70+ chains** with minimal steps required.

SCREENSHOT

## Step-by-Step Instructions

### 1. Select Your Blockchain Network

In the "SELECT CHAIN" section, you'll see your current blockchain network. In the example, **Ethereum** is selected as indicated by the dropdown menu. If you need to change the source chain, click on this dropdown to select from available networks.

### 2. Choose Your Token

Under "SELECT TOKEN," you'll see:

- The token you're transferring (**ETH** for example)
- Your available balance

Click this dropdown if you want to select a different token from your wallet.

### 3. Enter Transfer Amount

In the "TRANSFER AMOUNT" field:

- Input the amount you wish to transfer
- Click the "Maximum" button to automatically use your maximum available balance

### 4. Review Transaction Details

Before confirming, carefully review the transaction breakdown:

- **Input**: The total amount being processed
- **Transfer amount**: The actual amount being sent
- **Gas fees**: Network gas costs
- **Routing fees**: Additional routing costs

### 5. Check Route Details

The "ROUTE DETAILS" section shows:

- The number of stops your transaction will make
- Click the arrow to expand and see the detailed routing path

### 6. Review USD Value

The "EXPECTED USD AMOUNT" shows the approximate value of your transaction in USD.
:::note
The USD amount shown is our target payment, but actual value may vary due to exchange rate fluctuations beyond our control. For payment certainty, we recommend converting to USDC yourself before making payment.
:::

### 7. Check for Errors and Warnings

SCREENSHOT

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

SCREENSHOT

### Viewing Transfer Details

To see more information about a specific transfer:

1. Click on a transaction in the history list
2. The Transfer details page will show:
   - **Amount Credited**: The fiat value equivalent received
   - **Amount Transferred**: The exact token amount sent
   - **Chain**: The blockchain network used
   - **State**: Current status of the transaction (Complete, Pending, Failed)
   - **Started/Finished**: Timestamps showing when the transfer began and completed
   - **Source Transaction**: The transaction hash on the sending chain
   - **Final Transaction**: The transaction hash on the receiving chain

3. For even more details, click the **View details** button next to the final transaction hash

This detailed view is helpful for verifying completed transfers, troubleshooting issues, or providing transaction evidence if needed.

## Important Notes

- **Fees Matter**: Remember that cross-chain transfers involve multiple fees (gas fees on both chains plus routing fees)
- **Balance Check**: Always ensure you have enough balance to cover both your transfer amount and all fees
- **Route Complexity**: More complex routes (more stops) may take longer to complete and could involve higher fees
- **Network Congestion**: During times of high network activity, fees may increase and transaction times may be longer

## Support and Troubleshooting

If you encounter issues:

1. Check your wallet connection and network status
2. Ensure you have sufficient balance for the transaction and all fees
3. Try adjusting the transfer amount to account for fees
4. If problems persist, visit [support channel](https://discord.com/invite/cudos) for assistance

## Security Tips

- Check that the displayed fees and amounts match your expectations
- Never share your wallet seed phrase or private keys with anyone, including support staff

## 🎓 Want to learn more?

You can learn more about this by [joining our Discord](https://discord.com/invite/cudos) or [Telegram](https://t.me/cudostelegram).
