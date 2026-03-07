#Express

A **middleware** is a special **handler function** that runs in between the HTTP request and response lifecycle.

```js
(req, res, next) => { ... }
```

Middleware functions can:
- Execute code
- Modify `req` and `res`
- End the request–response cycle
- Pass control to the next middleware using `next()`

---
## 🧠 Function vs Handler Function

- **Function**: A general block of reusable code.
- **Handler Function**: A function specifically designed to respond to an event  
  (HTTP request, error, user action, etc.).

👉 In Express, **middlewares and route callbacks are handler functions**.

---

## 🔁 Middleware Execution Flow

- Express stores middlewares in an **internal stack (array)**.
- When a request arrives:
  - Middlewares execute **in the order they are defined**.
  - Each middleware decides whether to:
    - Call `next()`
    - Send a response
    - Throw or forward an error

If `next()` is NOT called and response is NOT ended → request gets **stuck**.

---

## ⚙️ Basic Middleware Example

```js
app.get("/",
  (req, res, next) => {
    console.log("Middleware 1");
    next();
  },

  (req, res) => {
    console.log("Middleware 2");
    res.send("Done");
  }
);
```

---

## ❌ What Happens If `next()` Is Not Called?

- The next middleware will **never execute**
- The request will hang unless response is sent

---

## 🧩 Types of Middleware in Express

### 1️⃣ Global Middleware

Runs for **every request**.

```js
app.use((req, res, next) => {
  console.log("Global middleware");
  next();
});
```

---
### 2️⃣ Route‑Specific Middleware

Runs only for specific routes.

```js
app.get("/profile", authMiddleware, controller);
```

---

### 3️⃣ Built‑in Middleware (Provided by Express)

- `express.json()` → Parse JSON body
- `express.urlencoded()` → Parse form data
- `express.static()` → Serve static files

```js
app.use(express.json());
```

---
### 4️⃣ Third‑Party Middleware

Installed via npm.
Common examples:
- `cors` → Handle CORS
- `multer` → File uploads
- `morgan` → Logging

```js
import cors from "cors";
app.use(cors());
```

---

### 5️⃣ Error‑Handling Middleware ⚠️

Special middleware with **4 parameters**:

```js
(err, req, res, next) => { ... }
```

It runs when:
- `next(err)` is called
- An error is thrown in a middleware

---

## 🧨 Error Handling Example

```js
app.get("/",
  (req, res, next) => {
    throw new Error("Something went wrong");
  },
  (req, res) => {
    res.send("This will never run");
  }
);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});
```

---

## ⚠️ Important Error Handling Rules

- Error middleware **must have 4 arguments**
- If `next(anyTruthyValue)` is called → error middleware triggers
- Error middleware **skips normal middlewares**

---
## 🧪 Mixing Request & Error Middlewares (Advanced)


```js
app.get("/",
  (req, res, next) => {
    res.write("Hello ");
    next("error"); // triggers error middleware
  },

  (err, req, res, next) => {
    res.end("Error Found");
  },

  (req, res) => {
    res.end("World"); // never runs
  }
);
```

---
## 🛑 Response Ending Rules

- After `res.end()` → no middleware should run
- Calling `next()` after `res.end()` → ❌ error

---
## 💡 Real‑World Uses of Middleware

- Authentication (JWT, sessions)
- Authorization (roles & permissions)
- Validation (request body, params)
- Logging & monitoring
- Rate limiting
- CORS handling
- Centralized error handling

---  
##  Behind the Scenes

- Express uses Node.js **http server**
- Middleware stack is executed per request
- Performance ≈ native Node.js server
- Express adds **developer convenience**, not overhead

---

## ✅ Key Takeaways

- Middleware = backbone of Express architecture
- Order of middleware matters
- `next()` controls the flow
- Error middleware is mandatory for robust apps
- Without middleware → Express apps are not scalable

---

## 📌 One‑Line Summary

> Middleware allows you to **control, modify, validate, and handle requests** in Express before sending the final response.

  

---

  

## 🎯 Interview Tip

If asked *“How middleware works in Express?”*, say:

> Express stores middleware in a stack and executes them sequentially during the HTTP request lifecycle, passing control using `next()` and handling errors with special 4‑argument middleware.



[[Handling Different HTTP Methods in Express]]