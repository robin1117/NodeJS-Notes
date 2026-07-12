```js
import mongoose from "mongoose";


await mongoose.connect("mongodb://admin:admin@localhost");

  
mongoose.connection.on("connected", () => console.log("connected"));
mongoose.connection.on("open", () => console.log("open"));
mongoose.connection.on("disconnected", () => console.log("disconnected"));
mongoose.connection.on("close", () => console.log("close"));
mongoose.connection.on("reconnected", () => console.log("reconnected"));
mongoose.connection.on("disconnecting", () => console.log("disconnecting"));

// const db = mongoose.connection.db; //this returns the same db which i can get from `mongod` nodeJs Driver.

// const fruitsCollection = db.collection("fruits");

// const result = await fruitsCollection.insertOne({ name: "Mango" });

// console.log(result);


await mongoose.disconnect();
```