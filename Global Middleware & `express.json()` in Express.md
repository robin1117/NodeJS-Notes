#Express
## 🌐 What is Global Middleware?

A **global middleware** is a function that runs for **every incoming request**,  

no matter:
- which URL (`/`, `/user`, `/login`, etc.)
- which HTTP method (GET, POST, PUT, DELETE)

In Express, global middleware is registered using:

```js
app.use(middlewareFunction);
```

---
## 🔹 Middleware Signature

```js
(req, res, next) => {
  // logic
  next();
}
```

- `req` → Request object
- `res` → Response object
- `next()` → Pass control to the next middleware or route

⚠️ If `next()` is NOT called and response is NOT sent → request gets stuck.

---
## 🧠 Simple Mental Model

> **“Mujhe farak nahi padta URL kya hai”** 😄  

Global middleware runs **before route matching**.

---
## 🔁 Execution Order (Very Important)

- Middleware runs **top to bottom**
- Order matters a LOT

```js
app.use(middleware1);
app.use(middleware2);
app.get("/", handler);
```

➡ `middleware1` → `middleware2` → route handler

---
## 🧩 Example: Global Middleware in Action

```js
import express from "express";

const app = express();

// Global middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.end("Home");
});

app.get("/user", (req, res) => {
  res.end("User");
});

app.listen(4000);
```

This middleware logs **every request**:
- GET /
- GET /user
- POST /login
- etc.

---
## 🔹 Manual Body Parsing (Old / Not Recommended)

```js
app.use((req, res, next) => {
  req.on("data", (chunk) => {
    const reqBody = JSON.parse(chunk.toString());
    req.body = reqBody;
    next();
  });
});
```

### ❌ Problems with Manual Parsing

- Handles only **one chunk**
- Breaks for large requests
- No automatic error handling
- Hard to maintain
- Error-prone

---

## ✅ Built-in `express.json()` Middleware (Recommended)

```js
app.use(express.json());
```

### What `express.json()` Does

- Parses incoming **JSON request bodies**
- Automatically sets parsed data on `req.body`
- Handles **multiple chunks**
- Sends **400 Bad Request** for invalid JSON
- Highly optimized & production-ready

---

## 🧩 Example: Using `express.json()`
  
```js
app.use(express.json());

app.post("/user", (req, res) => {
  console.log(req.body); // parsed JSON
  res.end("User Created");
});
```

Client sends:

```json
{
  "name": "Devin",
  "age": 25
}
```

Server gets:

```js
req.body = { name: "Devin", age: 25 };
```

---
## 🔸 Why `express.json()` is Better

| Manual Parsing | express.json()       |
| -------------- | -------------------- |
| Complex        | One-liner            |
| Error-prone    | Safe                 |
| No auto errors | Auto 400 on bad JSON |
| Not scalable   | Production-ready     |
✔ **Always prefer `express.json()` in real apps**

---
## 🔹 Common Uses of Global Middleware

- JSON body parsing
- Authentication check
- Logging requests
- Setting headers (CORS)
- Rate limiting
- IP filtering

---
## ⚠️ Important Rules

1. Global middleware should be placed **above routes**
2. Order matters
3. Always call `next()` unless response is sent
4. One middleware runs until it calls `next()`

  

---


## 🧠 Interview-Ready Summary

> `app.use()` registers global middleware in Express.  

> These middlewares run for every request before routes are matched.  

> `express.json()` is a built-in middleware that efficiently parses JSON bodies and attaches them to `req.body`.

  

---

  

## ✅ One-Line Takeaway

**Global middleware = common logic applied to every request, written once, reused everywhere.**


[[Route-Specific Middleware in Express]]