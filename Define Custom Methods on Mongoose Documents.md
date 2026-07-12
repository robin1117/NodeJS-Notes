
## What are Instance Methods?

- Custom methods available on document instances.
- Defined using `methods` in schema options.

---
## Example

```js

const userSchema = new mongoose.Schema(
  {
    name: String
  },

  {
    methods: {
      getSummary() {
        return `User: ${this.name}`;
      }
    }
  }
);

```

---
## Access Method

```js
const user = await User.findOne();
user.getSummary();
```

### Output

```js
User: Robin
```

---

## Important

- `this` refers to the current document.

Example:
  

```js
this.name
```

---
## Another Syntax

```js
userSchema.methods.getSummary = function () {
  return `User: ${this.name}`;
};
```

---
## Use Cases

- Reusable document logic
- Formatting data
- Helper functions for documents

[[Define Custom Static Methods on Mongoose Model]]