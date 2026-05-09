#MVC
## What is Mongoose?

- Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
- It allows you to define schemas and interact with MongoDB using models.

---

## Connection

```js
mongoose.connect(uri);
```

---

## Defining a Model

```js
const Model = mongoose.model("CollectionName", schemaObject);
```
### Notes

- The `CollectionName` should be capitalized as a standard practice.
- Mongoose will:
  - Automatically convert the name to lowercase
  - Pluralize it

Example:

```js
"User" -> "users"
```

---
## Customize Pluralization

```js
mongoose.pluralize((word) => word);
```

- This disables pluralization.

---
## Disable Auto Collection Creation

```js
mongoose.set("autoCreate", false);
```

### Notes

- By default, Mongoose auto-creates collections even if no documents are inserted.
- Disabling this avoids unnecessary empty collections.

---

## Insert Data

```js
const Model = mongoose.model("CollectionName", schemaObject);
```

⚠️ Incorrect:

```js
await Model.insertOne({ name: "xyz" });
```

### Why?

- `Model.insertOne()` is **not** a Mongoose method.
- It belongs to the native MongoDB driver.

✅ Correct:

```js
await Model.create({ name: "xyz" });
```

---
## Schema vs Model

### Schema

- Defines the shape of documents.
- Works at the application level.

### Model
- Provides the interface for interacting with the database collection using that schema.


[[Mongoose Query Buffering Queries Wait for Database Connection]]