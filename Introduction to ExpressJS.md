#Express
## 🌐 Overview
ExpressJS is a **lightweight and flexible web framework** built on top of Node.js.  
It makes building **REST APIs, web applications, and servers** much easier and faster.
  
Express is well known for:
- Simple and clean routing
- Powerful middleware system
- Easy request and response handling
- Rapid development with minimal setup

---
## 📦 Installation

```bash
npm install express
```

This command downloads **Express** and its dependencies into the `node_modules` folder.

---
## 🚀 Basic Server Example

```js
import express from 'express'

let app = express()

app.get('/', (req, res) => {
    res.send('Hello Yrr')
})

const server = app.listen(5000, () => {
    console.log(server.address());
})
```

---

## 🧩 Code Explanation

- `express()`  
  Creates an Express application instance.

- `app.get("/", handler)`  
  Creates a route that handles **GET requests** to `/`.

- `res.send()`  
  - Sends a response to the client  
  - Automatically sets the header:  
    `Content-Type: text/html`

- `app.listen(4000)`  
  Starts the server on port **4000**.

---
## ⚠️ `res.send() vs res.end()`

- `res.send()`  
  - Sends data and **automatically sets headers**
  - Recommended in Express apps

- `res.end()`  
  - Sends raw data
  - Does **not** automatically set `Content-Type`

---

## 🧠 Express vs NestJS (Quick Note)


- **ExpressJS**
  - Minimal and flexible
  - Full control over project structure
  - Best for small to medium applications

- **NestJS**
  - Opinionated and structured
  - Built on top of Express/Fastify
  - Better for large-scale applications

---

## 💬 Key Notes

- `res.send()` automatically handles response headers
- Default headers like `X-Powered-By` can be disabled:

  ```js
  app.disable("x-powered-by");
  ```

- ExpressJS is the **most popular Node.js framework**
- Strong documentation, community support, and plugin ecosystem

---

## ✅ Summary

ExpressJS simplifies backend development in Node.js by providing:
- Simple routing
- Clean middleware support
- Fast and flexible server creation

It is an excellent choice for learning backend development and building real-world APIs.


[[How Express Works Behind the Scenes]]