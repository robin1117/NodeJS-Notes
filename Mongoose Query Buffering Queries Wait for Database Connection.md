# Mongoose Query Behavior

  
## Connection Dependency

- No query is executed until Mongoose is connected to the database.
- Queries are queued internally and executed once the connection is established.


```js
mongoose.connect(uri);
```

### Notes

- Only after a successful connection will queries run.
- Mongoose internally waits for the connection before executing operations.

---

## Shared Connection

- A single Mongoose connection is reused across all files/modules.
- Usually, you connect once (commonly in `index.js` or `db.js`) and then import models wherever needed without reconnecting.

### Example

#### db.js

```js
mongoose.connect(uri);
```

#### userModel.js

```js
const User = mongoose.model("User", userSchema);
```

### Notes

- The model automatically uses the existing shared Mongoose connection.
- No need to call `mongoose.connect()` again in every file.


[[Schema and Types in Mongoose]]