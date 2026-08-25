#paymentGateWay

```html
'index.html'
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Razorpay</title>
</head>

<body style="background-color: #27292d; color: white; font-family: Arial;">
    <h1>Payments Testing</h1>
    <button>Pay ₹500</button>
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script src="script.js"></script>
</body>

</html>
```

```js
'script.js'
const button = document.querySelector("button");
  
button.addEventListener("click", () => {
  const rzp = new Razorpay({
    key: "rzp_live_TQ0nJnGdbBKwC7",
    amount: 1000,
    description: "My first test payment.",
    name: "Devin",
    // // currency: "USD",
    image: "http://localhost:5500/procodrr.png",
    theme: {
      color: "#a51e6fff",
    },
    prefill: {
      name: "Gaurav Kumar", //your customer's name
      email: "gaurav.kumar@example.com",
      contact: "+919876543210", //Provide the customer's phone number for better conversion rates
    },
    notes: {
      course: "Node.js",
      amount: 1,
    },
    handler: function (response) {
      console.log(response);
    },
  });

  
  rzp.on("payment.failed", function (response) {
    console.log(response);
  });
  rzp.open();
});
```

[[What are Orders in Razorpay]]