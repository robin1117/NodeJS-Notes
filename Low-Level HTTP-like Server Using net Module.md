#NetworkingCoreNodeJS
## 🌐 Overview

This code demonstrates how to send a file (like `river.webp`) to a client using **raw TCP sockets** through Node.js's `net` module — without using the `http` module.

---

## 🧠 Key Concepts

- `net` module → creates low-level TCP server.
- You manually write headers + send file stream.
- `pipe()` automatically forwards data from file stream → socket.
- This acts like a **minimal HTTP server**, not a real one.

---

## ⚙️ Important Code Parts

### 1️⃣ Creating a TCP Server

```js
const server = net.createServer((socket) => { ... })
```

- Called for **every client** that connects.
- `socket` = connection between client ↔ server.

---

### 2️⃣ Sending a Minimal HTTP-like Header

```js
socket.write("HTTP/1.1\n\n");
```

- Normally HTTP requires:
  - Content-Type
  - Content-Length
  - Status-Code
- But here only `HTTP/1.1` sent → just for browser compatibility.

---
### 3️⃣ Sending File Data Using Streams

```js
const readStream = createReadStream("river.webp");
readStream.pipe(socket);
```

- `pipe()` means: *“send file stream directly to socket without manual chunk handling.”*
- Efficient + backpressure-aware.

---
### 4️⃣ Important Events

#### 📌 File Stream Events

```js
readStream.on("end", () => console.log("File ended"));
```

- Fired when file fully sent.

#### 📌 Socket Events

```js
socket.on("data")   → client sent something  
socket.on("close")  → client disconnected  
socket.on("error")  → error occurred  
```

---
### 5️⃣ Server Listening

```js
server.listen(4000, "0.0.0.0");
```

- Listens on **all interfaces** (LAN + localhost).
- Port **4000**.

---  
## 💡 Real-World Analogy

- File stream = water source 💧  
- Socket = pipeline exit  
- `pipe()` = connects both → water flows automatically

---
## ⚠️ Notes / Warnings

- This is **not a real HTTP server**.
- Browsers expect proper headers (Content-Type, Content-Length).
- Works only because browser tries to interpret raw TCP response.
- Good for learning **low-level HTTP flow**.

---
## ✅ Summary

- You created a **custom TCP-based HTTP-like file server**.
- Learned:
  - TCP sockets  
  - Streams  
  - pipe()  
  - Basic HTTP structure  
- Helps understand frameworks (like Express) internally.

`<MY CODE>`

```js
import { createReadStream } from "node:fs";
import net from "node:net";

let server = net.createServer((socket) => {
    console.log('I resently made a connection', socket.remotePort);
    socket.write('HTTP/1.1\n\n')

    // let readStream = createReadStream("D:\Camo Studio Recording 2025-06-10 13-32-18.mp4")
    // let readStream = createReadStream("G:\\20221023_062709.jpg",{highWaterMark:1})
    let readStream = createReadStream("C:\\Users\\Devin\\Desktop\\bigger.txt")
    readStream.pipe(socket)

    readStream.on('end',()=>{
        console.log('File Ended');
    })

  
    socket.on('close', (data) => {
        console.log('Client Disconnected', socket.remoteAddress);
    })

    socket.on('error', (data) => {
        console.log('Disconnected');
    })

})
```


[[Understanding HTTP Headers]]