This is one the way we can manually call each and every `Api` and make our work done , but when we working with `Node.js` we can use `RazorPay SDK` which makes our work mush more easyer than this manual efforts

Here, `base64token` is a base64 encoded string of `YOUR_KEY_ID:YOUR_KEY_SECRET`.

```js
let response = await fetch("https://api.razorpay.com/v1/payments/", {
  headers: {
    Authorization:
      "Basic {base64}",
  },
});

console.log(await response.json()); // fetching details of payment
```

[[Working with Node.js SDK of Razorpay]]
