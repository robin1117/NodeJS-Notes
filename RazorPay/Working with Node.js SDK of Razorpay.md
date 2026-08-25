```js
'app.js'

import Razorpay from "razorpay";

let instance = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET',
});

let output = await instance.payments.all();
let newOrder = await instance.orders.create({
  amount: 50000,
  currency: "INR",
  receipt: "receipt#1",
  notes: {
    key1: "value3",
    key2: "value2"
  }
})

```

[[Integrating Razorpay in React and Node.js]]

