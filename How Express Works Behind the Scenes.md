#Express
## 🌐 Core Concept

ExpressJS is internally built on top of Node.js’s **http module**.  

When you write:

```js
const app = express();
app.listen(3000);
```

Express is actually using `http.createServer()` under the hood.

```js
import express from 'express'
import http from 'http'

let app = express()

app.get('/', (req, res) => {
    res.send('Hello Yrr')
})

  
// const server = app.listen(5000, () => {
//     console.log(server.address());
// })

let server = http.createServer(app)
server.listen(4000)
```
---
## Express Does Not Create a Server From Scratch

When you call `app.listen()`, Express internally runs logic similar to this :

```js
app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};
```

This means:
- Express registers the **Express app itself** as the request handler
- Node.js’s HTTP server handles low-level networking
- Express handles routing, middleware, and responses

---
## 🧩 Express = Simplified Interface

Express creates a basic HTTP server for you, but removes the need to:
- Manually parse requests
- Manually set response headers
- Write routing logic from scratch
- Handle errors at a low level

All of this is handled using:
- Built-in methods
- Middleware functions

---
## 🔁 Same Node.js Request/Response Objects

Express provides the **same `req` and `res` objects** as Node.js HTTP server.
But Express **extends** them with helper methods like:

- `res.send()`
- `res.json()`
- `res.status()`
- `req.params`
- `req.query`

This makes development much faster and cleaner.

---
## 💡 Why This Matters

- For advanced use cases (like custom HTTP/HTTPS servers),
  you can directly use Node.js `http` or `https` modules.
- Express works on Node.js’s **event-driven architecture**,
  so performance is nearly the same as a native HTTP server.
- You get **convenience without sacrificing performance**.

---
## 🧠 Key Takeaway

Using Express means using a **wrapper layer** over Node.js’s HTTP server.

Every:
- Route
- Middleware
- Request handler

Ultimately runs inside the **HTTP request–response lifecycle** of Node.js.
Express just makes that lifecycle:
- Easier to understand
- Faster to implement
- More developer-friendly


[[What is Middleware in Express]]