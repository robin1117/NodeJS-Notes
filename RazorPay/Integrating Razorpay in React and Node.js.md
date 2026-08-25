The `order id` we are creating here is seems to be good and even everything working well, but we have one dangerous vulnerability here that :
We are accepting price from frontend `{ id, name, price } = req.body;` and generating Order 
And legends of web dev said that we can`t` trust frontend user can alter amount easily 

```js
'app.js'
import express from "express";
import data from "./courses.json" with { type: "json" };
import cors from "cors";
import Razorpay from "razorpay";
import orders from "./orders.json" with { type: "json" };
import { writeFile } from "node:fs/promises";

  

// const rzpInstance = new Razorpay({
//   key_id: "rzp_live_RDcHlhkwy3qkDo",
//   key_secret: "X7Tp2bkNLAYEZwYSlcVk9kNS",
// });

const rzpInstance = new Razorpay({
  key_id: "rzp_test_RBXbFzZlYlToFb",
  key_secret: "ZycoIo5VmfC4Sj5tFAzHSgpP",
});

  
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/create-order", async (req, res) => {
  const { id, name, price } = req.body;
  // const existingOrder = orders.find()
  const order = await rzpInstance.orders.create({
    amount: price * 100,
    currency: "INR",
    notes: {
      courseId: id,
      courseName: name,
    },
  });
  res.json({ orderId: order.id });
});

app.post("/complete-order", async (req, res) => {
  const { orderId, courseId, courseName, userName, userContact } = req.body;
  const order = await rzpInstance.orders.fetch(orderId);
  console.log(order);

  

  if (!order) {
    return res.status(404).json({ error: "Invalid order id" });
  }



  if (order.status === "paid") {

    orders.push({
      orderId,
      courseId,
      courseName,
      userName,
      userContact,
      orderStatus: "paid",
    });
    await writeFile("./orders.json", JSON.stringify(orders, null, 2));
    return res.json({ message: "Order Completed", status: "success" });
  }
  res.status(400).json({ error: "Order not completed", status: "failed" });
});

  

app.listen(4000, () => {
  console.log("Server started");
});

```


[[Securing Razorpay Order Creation]]