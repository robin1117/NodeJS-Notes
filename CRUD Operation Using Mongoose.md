
## Setup First (Define Schema & Model)

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```  

---
# Create Operation

## insertOne()

⚠️ `insertOne()` is not a native Mongoose model method.

```js
await User.insertOne({
  name: "Ankit",
  age: 13,
  email: "Ankit@gmail.com   ",
  hobbies: ["Coding"],
  parentId: "67ca9831f62d3420efddb6ff",
});
```

- Use the MongoDB driver directly, or
- Prefer using `.create()` in Mongoose.

---
## insertMany()

Inserts multiple documents at once.
  
```js
await User.insertMany([
  { name: "John", email: "john@g.com" },
  { name: "Jane", email: "jane@g.com" }
]);
```

---
## create()

Flexible method that can insert:
- One document
- Multiple documents
### Single Document  

```js
await User.create({
  name: "Mike",
  email: "mike@g.com"
});
```

### Multiple Documents

```js
await User.create([
  { name: "A" },
  { name: "B" }
]);
```

---
## Using Instance & save()

```js
const user = new User({
  name: "Sam",
  email: "sam@g.com"
});

await user.save();
```
### Notes

- Creates a document instance first.
- `.save()` stores it in the database.

---
# Read Operation

## Find One

```js
const user = await User.findOne({
  email: "xyz@g.com"
}).lean();
```
### Notes

- `.lean()` returns a plain JavaScript object.
- Better performance.
- No Mongoose document methods are included.

---
## Find All

```js
const users = await User.find().lean();
```

### Notes

- Returns an array of all matching users.

---

## Find By ID

```js
const user = await User.findById("user_id").lean();
```

---
# Update Operation

## 1. Inefficient Way (2 Database Calls)

```js
const user = await User.findOne({
  email: "xyz@g.com"
});

user.age = 12;
await user.save();
```

### Why Inefficient?

- One query to fetch data.
- Another query to save updated data.

---

## 2. Efficient Way (Single Database Call)

```js
const updatedUser = await User.findOneAndUpdate(
  { email: "xyz@gg.com" },
  { name: "Shizuka" },
  {
    new: true,
    runValidators: true
  }
);
```
### Options
#### new: true
- Returns the updated document instead of the old one.
#### runValidators: true
- Applies schema validations during update.

---
# Delete Operation

## Delete One By Condition

```js
await User.findOneAndDelete({
  email: "xyz@g.com"
});
```

---
## Delete By ID

```js
await User.findByIdAndDelete("user_id");
```

---
## Delete Many

```js
await User.deleteMany({
  age: { $lt: 18 }
});
```

### Notes
- Deletes all users whose age is less than 18.



[[Thenable Objects]]