#NetworkingCoreNodeJS

## 🌐 Introduction

Node.js is built on an **event-driven, non-blocking I/O model**, making it ideal for building **high-performance networking applications** that can handle thousands of connections efficiently.

---
## 🔹 Built-in Networking Modules

Node.js provides several built-in modules to handle different network protocols:

### 📦 `net` Module

Used to create **TCP (Transmission Control Protocol)** servers and clients.  
**Common Use Cases:**
- Chat applications  
- Socket-based communication systems  

---

### 📦 `dgram` Module

Used for **UDP (User Datagram Protocol)** communication.  
**Common Use Cases:**
- Video streaming  
- Online gaming  
- VoIP (Voice over IP)  

---
### 📦 `http` Module

Allows creation of an **HTTP server**.  
**Common Use Cases:**
- Web applications  
- REST APIs  

`http` is build over the `net` module , means if we want we can make our own `my-http` module using `net` 🤯

---
### 📦 `https` Module

Provides **secure HTTP (HTTPS)** functionality using SSL/TLS encryption.  
**Common Use Cases:**
- Secure login systems  
- E‑commerce platforms  
- Any system requiring encrypted communication  


---
### 📦 `dns` Module

Handles **DNS lookups and domain-related queries**.  
Example: Converting a domain name such as `www.google.com` into its corresponding IP address.

---
## 🔹 Why Node.js is Powerful for Networking?

- **Non-blocking I/O** → Can handle thousands of concurrent connections.
- **Lightweight and Fast** → Perfect for real-time systems.
- **Built-in protocol support** → TCP, UDP, HTTP, HTTPS, DNS, etc.
- **Scalable architecture** → Ideal for modern distributed and microservices-based systems.

---
## 👉 Summary

Node.js is a powerful platform for networking due to its **fast, non-blocking architecture** and **built-in modules** that support major protocols like **TCP, UDP, HTTP, HTTPS, and DNS**. This makes it the preferred choice for **real-time and high-performance networking applications**.

---
## `(Practical)` Knowing Network Interfaces 

```js
import os from "os"

let interfaces = os.networkInterfaces()
console.log(interfaces);
```

```bash
{
  Ethernet: [
    {
      address: 'fe80::55de:90a0:9b32:7a9c',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '2c:f0:5d:0e:52:b3',
      internal: false,
      cidr: 'fe80::55de:90a0:9b32:7a9c/64',
      scopeid: 18
    },
    {
      address: '192.168.1.10',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '2c:f0:5d:0e:52:b3',
      internal: false,
      cidr: '192.168.1.10/24'
    }
  ],
  
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ],
  
  'vEthernet (WSL (Hyper-V firewall))': [
    {
      address: 'fe80::bf7e:ee97:85c8:ff80',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:15:5d:c9:21:50',
      internal: false,
      cidr: 'fe80::bf7e:ee97:85c8:ff80/64',
      scopeid: 33
    },
    {
      address: '172.31.80.1',
      netmask: '255.255.240.0',
      family: 'IPv4',
      mac: '00:15:5d:c9:21:50',
      internal: false,
      cidr: '172.31.80.1/20'
    }
  ]
}
```



[[Creating UDP Server in Node.js]]

