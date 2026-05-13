## Common Field Properties

  
```js

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name must be at least 3 characters"],
    trim: true,
    lowercase: true,
  },


  age: {
    type: Number,
    min: [3, "Age must be at least 3"],
    required: function () {
      return this.name === "child"; // Conditional required
    },
    default: null
  },

  email: {
    type: String,
    match: [/^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$/, "Invalid email format"],
    uppercase: true
  },

});

```

  
---

## Field Property Explanation

### type
- Defines the data type of the field.
- Examples: `String`, `Number`, `Boolean`, `Date`, `ObjectId`.

### required
- Makes the field mandatory.
- Can also use a function for conditional validation.


### minLength
- Sets the minimum length for strings.

### min
- Sets the minimum numeric value.

### trim
- Removes extra spaces from the beginning and end of strings.

### lowercase
- Converts string values to lowercase before saving.

### uppercase
- Converts string values to uppercase before saving.

### default
- Sets a default value if none is provided.

### match
- Validates strings using a regular expression.


---

  
## Other Schema Options

  

These options are passed as the second argument to `new mongoose.Schema()`.

  

```js

const schemaOptions = {

  strict: true,        // Ignores fields not defined in the schema

  timestamps: true,    // Adds createdAt and updatedAt

  versionKey: false,   // Removes __v field

  collection: "users", // Custom collection name

  timeseries: {},      // For time-series collections (MongoDB >= 5.0)

};

  

const userSchema = new mongoose.Schema(

  { /* fields */ },

  schemaOptions

);

```

  

---

  
## Schema Option Explanation


### strict

- Prevents undefined fields from being saved in the database.

### timestamps
- Automatically adds:
  - `createdAt`
  - `updatedAt`

  
### versionKey
- Removes the default `__v` version field when set to `false`.

### collection
- Specifies a custom MongoDB collection name.

### timeseries
- Used for time-series collections in MongoDB 5.0+.

  
---

## ObjectId Reference


```js

userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
}

```


### Notes
- `ObjectId` stores the ID of another document.
- `ref` creates a relationship between collections.
- Commonly used with `.populate()` to fetch referenced data.

EXAMPLE :

```js
import mongoose, { Schema } from "mongoose";

console.log("Start UserModal.js");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required. Please enter the name."],
      minLength: [3, "Kripaya 3 letters ka naam type kariye"],
      trim: true,
    },

    age: {
      type: Number,
      required: [true, "age field is required. Please enter the age."],
      min: 12,
    },

    email: {
      type: String,
      required: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email",
      ],
      lowercase: true,
      trim: true,
    },

    hobbies: [String],
    parentId: {
      type: Schema.Types.ObjectId,
      required: function () {
        return this.age < 16;
      },
      default: null,
    },
  },

  {
    strict: "throw",
    timestamps: true,
    // versionKey: "__version", // false
    // collection: 'test',
  }
);

const User = mongoose.model("User", userSchema);

const data = await User.insertOne({
  name: "   Ankit   ",
  age: 13,
  email: "Ankit@gmail.com   ",
  hobbies: ["Coding"],
  parentId: "67ca9831f62d3420efddb6ff",
});

console.log(data);

console.log("Running UserModal.js");
```


[[CRUD Operation Using Mongoose]]