For better security, the frontend should send only the `productId`, not the `amount`. The backend uses the `productId` to fetch the trusted price from the database, calculates the amount, and then creates the Razorpay Order ID. This prevents users from tampering with the amount through the frontend.

```
Frontend
   ↓
Send productId only
   ↓
Backend
   ↓
Find product using productId
   ↓
Get price from Database
   ↓
Calculate final amount
   ↓
Create Razorpay Order
   ↓
Send Order ID to Frontend
```

Never trust price/amount/payment status coming from the frontend. The backend should determine and verify them.

[[Loading Razorpay CDN Script Dynamically]]