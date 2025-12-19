## 🧩 Overview

TCP (Transmission Control Protocol) is a **connection‑oriented**, **reliable**, **stream‑based** communication protocol.  
Node.js provides a built‑in module `net` to create TCP servers and clients.

---
## 🖥 Creating a TCP Server

```js

import net from "node:net";
const server = net.createServer();

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});

```

### ✔ Equivalent (long form)

```js

server.listen(4000);

server.on("listening", () => {
  console.log("Server started on port 4000");
});

```

---
## 🔗 Connection Event
  
When a client connects, server fires the `connection` event and provides a **socket**.

```js

server.on("connection", (socket) => {
  console.log("Client Connected");

  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    socket.write("HTTP\n\nGot your message");
  });

  socket.on("close", () => {
    console.log("Client Disconnected");
  });
});

```


---

## 🔌 Role of `socket`

TCP socket is a **duplex stream** → You can **read** and **write** both.

### Reading data from client

```js

socket.on("data", (data) => {
  console.log("Client says:", data.toString());
});

```

### Sending data to client

```js
socket.write("Hello from server");
```

---

## 📡 Server & Client Info
  
| Property               | Meaning                     |
| ---------------------- | --------------------------- |
| `socket.address()`     | Server's own address & port |
| `socket.remoteAddress` | Client IP                   |
| `socket.remotePort`    | Client port                 |
| `socket.remoteFamily`  | IPv4 / IPv6                 |

---

## 🔁 TCP 3-Way Handshake (Before Data Transfer)

```
Client → Server : SYN  
Server → Client : SYN + ACK  
Client → Server : ACK  
Connection established ✔
```

Only after this handshake data exchange begins.
  
---

## 🌐 IPv6-mapped IPv4 Address Explained

#NetworkingCoreNodeJS  
Example:  

```
::ffff:192.168.1.10
```

  
Meaning:

- `::` → IPv6 shorthand for leading zeros  
- `ffff` → Prefix showing IPv4‑mapped IPv6  
- `192.168.1.10` → Actual IPv4 address  

This allows an IPv6-enabled server to accept IPv4 client connections easily.

---
## 📦 Full Example Server

```js

const net = require('net');

  
const server = net.createServer((socket) => {
    console.log("Client connected");
    
    console.log(socket.address());        // Server info
    console.log(socket.remoteAddress);    // Client IP
    console.log(socket.remotePort);       // Client Port
    console.log(socket.remoteFamily);     // IPv4/IPv6

    socket.on('data', (data) => {
        console.log("Client says:", data.toString());
        socket.write("Hello from server");
    });

    socket.on('close', () => {
        console.log("Client disconnected");
    });

});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});

```

---
## 🚀 Key Takeaways

- `net.createServer()` → Creates TCP server  
- `server.listen(port)` → Starts listening 
- `connection` event gives a **socket** for communication  
- `socket` is a **duplex stream** (read + write)  
- Use `socket.on("data")` to receive  
- Use `socket.write()` to send  
- TCP handshake ensures reliability  
- IPv6-mapped IPv4 format allows mixed connections  


[[Creating TCP Client using Node.js]]