#Express
## 🌐 Key Concept

Express.js provides **dedicated methods for each standard HTTP verb**, allowing you to build clean and RESTful backend APIs.

Each HTTP method represents a **specific action** on a resource.

---
## 🔹 Common HTTP Methods in Express

### 1️⃣ GET

```js
app.get(path, handler)
```

**Used for:**  
- Retrieving (reading) data  
- Serving pages or resources  

**Example:**

```js
app.get("/users", (req, res) => {
  res.send("List of users");
});
```

---
### 2️⃣ POST

```js
app.post(path, handler)
```

**Used for:**  
- Creating new data/resources  

**Example:**

```js
app.post("/users", (req, res) => {
  res.send("User created");
});
```

---
### 3️⃣ PUT

```js
app.put(path, handler)
```

**Used for:**  
- Replacing or fully updating an existing resource  

**Example:**

```js
app.put("/users/123", (req, res) => {
  res.send("User updated (full)");
});
```

---
### 4️⃣ PATCH

```js
app.patch(path, handler)
```

**Used for:**  
- Partially updating a resource  

**Example:**

```js
app.patch("/users/123", (req, res) => {
  res.send("User updated (partial)");
});
```

---
### 5️⃣ DELETE

```js
app.delete(path, handler)
```

**Used for:**  
- Deleting a resource  
  
**Example:**

```js
app.delete("/users/123", (req, res) => {
  res.send("User deleted");
});
```

---
### 6️⃣ ALL

```js
app.all(path, handler)
```

**Used for:**  
- Handling **all HTTP methods** on the same route  

**Example:**

```js
app.all("/maintenance", (req, res) => {
  res.send(`Method used: ${req.method}`);
});
```

---
## 🧩 Complete Example

```js
import express from "express";
const app = express();


app.get("/", (req, res) => {
  res.send("GET called");
});

  
app.post("/", (req, res) => {
  res.send("POST called");
});

  
app.put("/", (req, res) => {
  res.send("PUT called");
});

  
app.patch("/", (req, res) => {
  res.send("PATCH called");
});

  

app.delete("/", (req, res) => {
  res.send("DELETE called");
});

  
app.all("/test", (req, res) => {
  res.send(`ALL method: ${req.method}`);
});

  
app.listen(4000);

```

---
## 🧠 REST API Best Practices
  
| Method | Purpose                 |
| ------ | ----------------------- |
| GET    | Read data               |
| POST   | Create new data         |
| PUT    | Replace full resource   |
| PATCH  | Update part of resource |
| DELETE | Remove resource         |

✔ Use **separate handlers** for each method  
❌ Avoid mixing logic in `app.all()` for APIs

---
## 🎯 Interview Tip

If asked *“How Express handles different HTTP methods?”* say:

> Express provides method-specific routing functions like `app.get()`, `app.post()`, `app.put()`, etc., which map HTTP verbs to route handlers following REST principles.

---
## ✅ Summary

- Express supports all standard HTTP methods
- Each method has a **clear semantic meaning**
- Proper usage leads to **clean, scalable REST APIs**
- `app.all()` is useful for shared logic like maintenance mode


[[Route and Request URL in Express]]