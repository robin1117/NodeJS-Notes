#Express
## 🌐 Key Concept

**Route-specific middleware** runs only for requests that match a **specific path (prefix)**.  
It is registered using:

```js
app.use(path, middlewareFn);
```

Unlike global middleware, it does **not** run for every request—only for the given route and its sub-routes.

---
## 🔹 How `app.use(path, middleware)` Works

```js
app.use("/user", middlewareFn);
```

This middleware runs when:

- URL **starts with** `/user`

### ✅ Runs for:

- `/user`
- `/user/123`
- `/user/profile/settings`
### ❌ Does NOT run for:

- `/admin`
- `/login`

---
## 🧩 Basic Example

```js
app.use("/user", (req, res, next) => {
  console.log("User route middleware");
  next();
});

app.get("/user", (req, res) => {
  res.send("User Home");
});

app.get("/user/123", (req, res) => {
  res.send("User Details");
});
```

📌 The middleware runs **before** both `/user` routes.
  
---
## 🔁 Execution Order (Very Important)
  
Middleware always runs in the **order it is defined**.

```js
app.use(express.json());      // Global
app.use("/admin", adminAuth); // Route-specific
app.get("/admin", handler);
```

Order of execution:

1. `express.json()`
2. `adminAuth`
3. `/admin` route handler

---
## 🔸 Route Matching Rule

Route matching in Express depends on:

- **HTTP method**
- **Path**

Example:
```js
app.get("/login", handler);   // only GET
app.post("/login", handler);  // only POST
```

If you want **all methods**:

```js
app.all("/login", handler);
```
  
---
## 🧠 Prefix Middleware (Common Pattern)

```js

app.use("/admin", (req, res, next) => {
  console.log("Admin middleware");
  next();
});

app.get("/admin/dashboard", handler);
app.post("/admin/create", handler);

```

✔ Runs for **all admin routes and methods**

---
## 🔐 Guarding Routes (Real-World Example)


```js
const checkAdmin = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized");
  }
  next();
};

app.use("/admin", checkAdmin);

```

- Protects **all `/admin` routes**
- If auth fails → response sent → `next()` NOT called

---
## ⚠️ Error Flow Reminder

```js
next(err);
```

- Skips normal middleware
- Jumps to nearest error-handling middleware:

```js
app.use((err, req, res, next) => {
  res.status(500).send("Error occurred");
});
```

❌ Never call `next()` after `res.end()`.

---
## 📦 Body Parsing Note

```js
app.use(express.json());
```

- Parses JSON for **any HTTP method**
- Works based on `Content-Type: application/json`
- NOT limited to POST only

---
## 🧩 Better Organization Tips

### Group methods on same path

```js
app.route("/login")
  .get(showLogin)
  .post(handleLogin);
```

### Use `express.Router()` for large apps

```js
const router = express.Router();
router.get("/", handler);
app.use("/user", router);
```

---
## 🧠 Interview-Ready Summary

> Route-specific middleware in Express is registered using `app.use('/path', middleware)`.  

> It runs only for requests whose URL starts with the given path and executes before matching route handlers.


---

## ✅ One-Line Takeaway

**Route-specific middleware = targeted logic for a specific URL prefix, applied once and reused across related routes.**


[[Serving Static Files using Express]]