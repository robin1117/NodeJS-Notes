#paymentGateWay 

Payment Status in Razorpay

```
In Razorpay, every payment goes through a lifecycle and has different statuses to help you track whether the money has been successfully received, is in process, or failed. Here are the main payment statuses explained:
```

- Created

```
-> This is the initial state when a payment is initiated but not yet attempted by the customer. 
-> Example: When you create a payment/order via API but the customer hasn’t entered payment details yet.
```

- Authorized

```
-> The payment has been approved by the customer’s bank/card issuer, but Razorpay has not yet captured the amount.
-> Money is blocked in the customer’s account but not yet received by you.
-> You (merchant) must capture the payment to receive funds (can be automatic or manual).
```

- Captured

```
-> The payment is successfully captured, meaning the money is now debited from the customer and will be settled to your Razorpay account.
-> This is the final successful state for a payment.
```

- Failed

```
-> The payment attempt was made, but it didn’t go through due to reasons like insufficient balance, incorrect card details, authentication failure, or network error.
```

- Refunded

```
-> If you initiate a refund (full or partial), the payment status changes to Refunded once the money is successfully returned to the customer.
```

[[Using the Razorpay API A Complete Guide]]