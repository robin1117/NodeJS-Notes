## What are Static Methods?

- Custom methods available on the model itself.
- Defined using `statics` in schema options.

---

## Example
  
```js

const userSchema = new mongoose.Schema(
  {
    email: String
  },

  {
    statics: {
      async findByEmail(email) {
        return this.findOne({ email });
      }
    }
  }
);
```

---  
## Access Method

```js
await User.findByEmail("abc@example.com");
```

---

## Important

- `this` refers to the model.
  

Example:

```js
this.findOne()
```

---

## Another Syntax

```js

userSchema.statics.findByEmail = async function (email) {
  return this.findOne({ email });
};

```

---

## Use Cases
- Reusable query logic
- Custom search methods
- Helper methods for models


[[Mongoose Middlewares (Hooks)]]