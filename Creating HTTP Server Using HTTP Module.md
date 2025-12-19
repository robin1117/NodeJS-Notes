#NetworkingCoreNodeJS
Till now, we have seen a lot about the `net` module. We also created a custom `HTTP` server using the `net` module. As we know, the `net` module is responsible for building TCP-based servers.

In this section, we will look at the `http` module, which itself is built on top of the `net` module. The good thing about the `http` module is that it allows us to create an HTTP server in a much more convenient way.

For example, when using the `http` module, we do not need to manually set HTTP headers as we did while working with the `net` module. Along with this, it provides several other functionalities that make it even more powerful. Let`s` see one by one what are these -


## 1. Intro :

```js
import http from "http";
let server = http.createServer()


server.on('connection', (socket) => {
    socket.end('http/1\n\nwrite')

    socket.on('data', (chk) => {
        console.log(chk.toString());
    })
})
```

Similarly we can make server here too like the same as in `net` by hearing on `connection` event , but generally we not follow this instead we follow here special `(request,response)=>{}` structure by listening on `request` event

---

The **`http` module** in Node.js is a high-level module built on top of the low-level **TCP (`net` module)**.  

While TCP handles raw bidirectional data transfer, the HTTP module adds structure using the HTTP protocol (headers + body + status lines).  

---
## 2. TCP vs HTTP — Quick Comparison

| Layer                  | Protocol | Purpose                                               |
| ---------------------- | -------- | ----------------------------------------------------- |
| L4 (Transport Layer)   | **TCP**  | Transfers raw bytes reliably and in order             |
| L7 (Application Layer) | **HTTP** | Defines structured web communication (headers + body) |
  
**In short:**  
- **TCP = transport mechanism**  
- **HTTP = web communication rules**

---
## 3. How a TCP Server Works (Low Level)  

```js
import net from "node:net";
const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});

```

### Notes:
- You receive **raw bytes**.
- No automatic parsing.
- For HTTP responses, you must manually write:

  ```
  HTTP/1.1 200 OK
  <headers>
  <body>
  ```

- New lines (`\n\n`) mark the end of HTTP headers.

---
## 4. How an HTTP Server Works (High Level)

### Simple HTTP server:

```js
import http from "node:http";

const server = http.createServer((req, res) => {
  console.log("Got the request");
  res.setHeader("Content-Length", "23");
  res.write("Hello from http server.");
  res.end();
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server Started");
});

```

### Key Concepts:
- `req` = **Readable Stream** (incoming HTTP request)
- `res` = **Writable Stream** (server response)
- These streams internally use a TCP socket.

---

## 5. Request Object (`req`)

`req` is a **Readable Stream**.

```js
req.on("data", (chunk) => {
  console.log(chunk.toString());
});
```

### Important:

- **GET requests do not have a body**, so `data` event usually does *not* fire for GET.

---
## 6. Response Object (`res`)

`res` is a **Writable Stream**.
You send data using:

- `res.setHeader()`
- `res.write()`
- `res.end()`  → **MUST be called** to finish the response

### Why `res.end()` is required?

Because writable streams must be closed, or the client will keep waiting forever.

### Alternative:

If you set the **Content-Length** header properly, Node can infer the end — but explicitly calling `.end()` is the standard approach.

---

## 7. `http.createServer()` Internals

These two are **equivalent**:
### Event-based:

```js
const server = http.createServer();

server.on("request", (req, res) => {
  ...
});
```

### Callback-based:

```js
const server = http.createServer((req, res) => {
  ...
});
```

Both receive:
- `req` (Readable Stream)
- `res` (Writable Stream)

---
## 8. Example: Handling Request Body


```js
const server = http.createServer((req, res) => {
  req.on("data", (chunk) => {
    console.log("Body:", chunk.toString());
  });
  res.setHeader("Content-Length", "23");
  res.write("Hello from http server.");
  res.end();
});
```

---
## 9. Summary of the Differences

### TCP (`net` module`)

- Raw binary data
- You manually parse everything
- You manually construct HTTP responses (status line + headers + body)
- Very low-level control

### HTTP (`http` module`)

- Automatically parses HTTP headers
- Gives ready-to-use `request` & `response` streams
- Automatically manages protocol rules
- Much easier for building web servers

---

## 10. Final Summary

- HTTP is built on top of TCP.
- Node’s `http` module simplifies web server creation.
- `request` → readable stream  
- `response` → writable stream  
- Always call `res.end()` or properly set **Content-Length**.
- GET requests typically **do not** include a request body.
  
---
## ⭐ Recommendation

Learn the HTTP module for real-world web servers,  
but understand TCP fundamentals to know what's happening behind the scenes.


[[HTTP Request Methods]]