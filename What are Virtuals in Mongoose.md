## What are Virtuals?

- Virtuals are fields that are not stored in MongoDB.
- They are computed properties accessible like normal fields.

---
## Use Cases

- Perform calculations without saving extra data.
- Create short/alternative field names using `alias`.

Example :

```js
userAddressToCity: {
  type: String,
  alias: "userCity"
}
```

Access:

```js
user.userCity
```

---
## Creating Virtuals

```js
const userSchema = new mongoose.Schema(
  {
    age: Number,
    hobbies: [String]
  },
  {
    virtuals: {
      isAdult: {
        get() {
          return this.age >= 18;
        }
      },

      hobbiesString: {
        get() {
          return this.hobbies.join(", ");
        },
        set(value) {
          this.hobbies = [
            ...this.hobbies,
            ...value.split(", ")
          ];
        }
      }
    },

    toJSON: {
      virtuals: true
    },

    toObject: {
      virtuals: true
    }
  }

);

userSchema.virtual("emailDomain")
  .get(function () {
    return this.email.split("@")[1];
  })
  .set(function (value) {
    this.email = `${this.name}@${value}`;
  });

```

---

## Access Virtuals

```js
const user = await User.findOne();
user.isAdult
user.hobbiesString
```

---
## Another Syntax

```js
userSchema.virtual("virtualName")
  .get(function () {
    // logic
  });
```

- `.set()` can also be used.

---
## View All Virtuals

```js
userSchema.virtuals
User.schema.virtuals
```

---

## toJSON & toObject

```js
toJSON: {
  virtuals: true
}

toObject: {
  virtuals: true
}
```

- Makes virtuals visible when converting documents to:
  - JSON
  - Plain objects
  
---
## user.id vs user._id

### user.id

- Virtual field
- Returns string version of `_id`
  
Example:

```js
"68012bf8a93b62ca7a22a445"
```

---
### user._id

- Actual MongoDB ObjectId

Example:

```js
ObjectId("68012bf8a93b62ca7a22a445")
```


```js
import mongoose from "mongoose";
import User from "./UserModel.js";
const user = await User.findOne({ email: "anurag@gmail.com" });
// console.log(user.id);
// console.log(user.toJSON());
// console.log(user.toJSON({ virtuals: true }));
// console.log(User.schema.virtuals);
// console.log(user.nam);
// console.log(user.isAdult);
user.hobbiesString = "TT, Football, Kusara";
// console.log(user.hobbiesString);
// user.emailDomain = "Pika.com"
console.log(user);
await user.save();
// console.log(user.hobbiesString);
// console.log(user.isAdult);
// console.log(user);
// console.log(user.toJSON());
await mongoose.disconnect();
```

[[Define Custom Methods on Mongoose Documents]]