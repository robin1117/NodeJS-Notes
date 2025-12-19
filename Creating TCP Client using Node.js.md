#NetworkingCoreNodeJS

A **TCP Client** in Node.js connects to a TCP Server and exchanges data using duplex streams.  
Node.js provides the `net` module for TCP communication.

---
# 🧠 What is a TCP Client?

A TCP client:

- Initiates connection to the server (`net.createConnection`)
- Sends data to server (`write`)
- Receives data from server (`data` event)
- Handles disconnection (`end`)
- Handles server unavailability (`error`)

---

# Basic TCP Client Example**

  
```js

import net from "node:net";

// Create a TCP client
const socket = net.createConnection({ host: "192.168.1.9", port: 4000 });

// If server is not available
socket.on("error", () => {
  console.log("❌ Server Lost");
});


// Send message after 2 sec
setTimeout(() => {
  socket.write("Hi from Client 👋");
  socket.end(); // close connection from client side
}, 2000);

// Receive data from server
socket.on("data", (chunk) => {
  console.log("Server says:", chunk.toString());
});

```

### ✔ Key Understanding

- Direct socket created via `net.createConnection()`
- `.write()` sends data  
- `.data` receives server reply  
- `.end()` closes connection gracefully  
- `.error()` triggers when server is offline  

---
# 🖥️ **2. Corresponding Server Code**

```js
import net from "node:net";

// Create TCP server
const server = net.createServer((socket) => {

  console.log("✅ Client Connected:", socket.remoteAddress);
  
  socket.on("data", (chunk) => {
    console.log("Client says:", chunk.toString());
  });

  socket.write("Got your message ✅");
  
  socket.end();
  
  socket.on("close", () => {
    console.log(socket.remoteAddress, ": Client disconnected ❌");
  });

  socket.on("error", () => {
    console.log("⚠️ Client Lost");
  });
  
});

server.listen(4000, "0.0.0.0", () => {
  console.log("🚀 Server started on port 4000");
});
```

---
# 🔎 **Client–Server Flow (Simple Understanding)**

```
Server: listen() → wait for connection  
Client: createConnection() → connect to server  
Client → Server: write("Hi")  
Server → Client: write("Got your message")  
Either side: end() → connection closed
```

---
# ⚡ Key Points (Easy to Remember)

- `net.createConnection()` → client ka socket  
- `net.createServer()` → server ko socket callback me milta hai  
- TCP Socket = Duplex Stream → read + write dono  
- Client ka unique `remoteAddress` + `remotePort` hota hai  
- Error handling always add karna chahiye  

# 📘 Key Concepts Summary

| Concept                    | Meaning                            |
| -------------------------- | ---------------------------------- |
| **net.createConnection()** | Creates TCP client socket          |
| **client.write()**         | Send data to server                |
| **client.on("data")**      | Receive data from server           |
| **client.on("end")**       | Server disconnected                |
| **client.on("error")**     | Server unreachable / network issue |
| **client.end()**           | Client closes connection           |

---
# 🧠 Golden Tips

- Always add **error handlers** to avoid crashes  
- Use `.end()` to close connection cleanly  
- TCP sockets are **duplex streams** (bi-directional)  

[[Handling Multiple TCP Clients]]