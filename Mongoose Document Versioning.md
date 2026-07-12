## __v Field

- Mongoose uses the `__v` field for document versioning.
- Tracks how many times a document has been modified.

Example:

```js
{
  name: "Robin",
  __v: 2
}
```

---
## Important

- `__v` automatically increments on `.save()`.
 
```js
await user.save();
```

---
## Optimistic Concurrency

- Prevents accidental overwrites when multiple processes update the same document.

Enable it using:

```js
const schema = new mongoose.Schema({},{optimisticConcurrency: true});
```

---
## Array & Subdocument Changes

- Updating arrays or subdocuments also increases `__v`.

---
## Customize versionKey


```js
const schema = new mongoose.Schema(
  {},
  {
    versionKey: "version"
  }
);
```

### Output
  

```js
{
  version: 1
}

```

---
## Disable versionKey

```js
const schema = new mongoose.Schema(
  {},
  {
    versionKey: false
  }
);
```

- Removes the `__v` field completely.


```text
-> Mongoose uses a __v field to track how many times a document has been modified. -> This version key is automatically incremented on .save(). 
-> It helps with optimistic concurrency — preventing overwrites if another process updates the same document. 
-> You can enable it with { optimisticConcurrency: true } in the schema. 
-> Changes to arrays or subdocuments also increase __v. 
-> You can customize the version key or disable it using the versionKey option.
```

[[Understanding Mongoose Object]]