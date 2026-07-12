## unique

```js
email: {
  type: String,
  unique: true
}
```


- Enforces unique values for a field.
- Creates a unique index in MongoDB.
- Duplicate values are not allowed.
- If duplicates already exist, index creation fails.

---

# Model.init()
  

```js
await User.init();
```


- Ensures all schema indexes are created in MongoDB.
- Useful when `autoIndex` is disabled.

---
# autoIndex in Mongoose

- Controls automatic index creation when app starts.

---

## Schema Level
  
```js
const schema = new Schema(
  {},
  {
    autoIndex: false
  }
);
```

---  

## Connection Level

```js
mongoose.connect(uri, {
  autoIndex: false
});
```

---  

# Why Disable autoIndex?

- Better production performance
- Prevents automatic index creation on every restart


[[Mongoose Document Versioning]]