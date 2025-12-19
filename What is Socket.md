#NetworkingCoreNodeJS 

A **socket** is a communication **endpoint** used to send or receive data between two devices over a network.

A socket is defined as:
**Socket = IP Address + Port Number**
This combination identifies:
- Where data **comes from**
- Where data **should go**
---

## ⚡ UDP (User Datagram Protocol) Sockets

UDP sockets are:
- **Connectionless**
- **Lightweight**
- **Fast**
- Ideal for real-time applications
UDP works in **fire-and-forget mode** — no connection handshake required.

---
## **1️⃣ Server Side**

A UDP server must:
1. **Create a socket**
2. **Bind** it to a specific IP + Port
3. **Wait for incoming data**

## **2️⃣ Client Side**

A UDP client must:
1. **Create a socket**
2. **Send data** to the server’s IP + Port

No connection is created — packets are simply sent.

---

## 🔑 UDP Socket Structure

Every UDP message contains:
`Source IP : Source Port Destination IP : Destination Port`

This tells:
- Who **sent** the message
- Who should **receive** the message

---

# ⚡ Where UDP Sockets Are Used?

UDP is ideal for fast, real-time communication such as:
- 🎮 Online gaming
- 🎥 Video streaming
- 📞 VoIP (Voice over IP)
- 📡 IoT messaging
- 🔴 Live broadcast systems
- 🏠 LAN-based apps

---

# 📝 Summary

- A **socket** is simply a networking endpoint.
- **UDP socket = IP + Port**.
- UDP is **connectionless, fast, and lightweight**.
- Best for **real-time communication** where speed is more important than accuracy.

[[Transferring Files Using UDP]]