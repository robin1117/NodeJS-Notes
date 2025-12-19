#Express
## 🌐 Short Summary

- **`req.url`**: The actual URL path sent by the client (browser, Postman, etc.).
- **Route**: The path pattern you define in your Express app to handle requests.

In simple words:

> Client sends a URL → Express matches it with a Route → Handler runs.

---
## 🔹 `req.url` – Client Side Path

- `req.url` contains the **exact path** requested by the client.
- It is part of the incoming HTTP request.
- Express does **not modify** it.
### Example

Client request:

```http
GET /profile
```

Inside Express:

```js
app.use((req, res, next) => {
  console.log(req.url); // "/profile"
  next();
});
```

So:
- Client sends `/profile`
- `req.url === "/profile"`

---
## 🔸 Route – Server Side Handler

- A **route** is defined in Express code.
- It tells Express **which function should run** for a given path and HTTP method.

### Example

```js
app.get("/profile", (req, res) => {
  res.send("Profile page");
});
```

Here:
- `/profile` is a **route**
- It waits for requests where `req.url` matches `/profile`

---  
## 🧩 How Express Matches req.url with Routes

1. Client sends a request with a URL (stored in `req.url`)
2. Express checks routes **in the order they are defined**
3. It compares `req.url` with route paths
4. If a match is found → route handler runs
5. If no route matches → Express returns **404 Not Found**

---
## 🔁 Visual Flow (Mental Model)

```
Client Request
   |
   |----> req.url = "/profile"
   |
Express Router
   |
   |----> app.get("/profile", handler) ✅ MATCH
   |
Handler Executes
   |
Response Sent
```

---
## ⚠️ Important Notes

- `req.url` is **dynamic** (comes from client)
- Routes are **static definitions** (written by developer)
- One route can match **many requests**
- Route matching depends on:
  - Path
  - HTTP method (GET, POST, etc.)

---
## 🧠 Interview-Friendly Difference

| req.url             | Route                          |
| ------------------- | ------------------------------ |
| Comes from client   | Defined by developer           |
| Actual request path | Path pattern                   |
| Runtime value       | Code-level handler             |
| Example: `/profile` | Example: `app.get("/profile")` |

---

## 🎯 Interview Answer (Short)

> `req.url` is the actual URL sent by the client, while a route is the path pattern defined in Express to handle matching requests. Express compares `req.url` with routes to decide which handler to execute.

---
## ✅ Summary

- `req.url` = what client requests
- Route = what server listens for
- Express acts as a matcher between the two
- If no match → 404 error


[[Global Middleware & `express.json()` in Express]]