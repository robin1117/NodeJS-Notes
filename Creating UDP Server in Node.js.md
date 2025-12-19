#NetworkingCoreNodeJS 
## 🌐 Introduction

UDP (User Datagram Protocol) is a **connectionless**, fast, and lightweight transport protocol. Node.js provides the **dgram module** to build UDP servers and clients easily.

UDP is widely used in:
- Real-time streaming
- Gaming
- VoIP
- LAN-based chat apps

---
# 📡 Building a UDP Server in Node.js

## Step 1: Import Module

```js
import dgram from "node:dgram";
const socket = dgram.createSocket("udp4");
```

- here socket act as event emitter as different events are present over there like `close`, `message`, `error`, `listening,` `connect` .

## Step 2: Listen for Messages

```js
socket.on("message", (msg, rinfo) => {
  console.log("Message:", msg.toString());
  console.log("Sender:", rinfo);
});
```

## Step 3: Bind to Port

```js
socket.bind({ port: 4000 }, () => {
  console.log("Listening on:", socket.address());
});
```

## Step 4: Send Message

```js
socket.send("Hi from Lappy", 3000, "192.168.1.3");
```

---

# 📝 Summary

- Use **bind()** to create a server
- Use **send()** to send UDP packets
- UDP is fast, connectionless, great for real-time apps

# 🚀 CLI-Based Chat App Using UDP

## 📦 Installation

```sh
npm install -g chatapp-udp
```

## ▶️ Usage

```sh
chatapp PORT HOST
```

### Example (Two LAN Devices)

Device A:

```sh
chatapp 5000 192.168.1.11
```

Device B:

```sh
chatapp 5000 192.168.1.10
```

---

[[What is Socket]]