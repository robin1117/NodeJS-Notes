#Networking

Port numbers are **numerical identifiers** used in networking to distinguish different services running on a single device.
They allow multiple applications to communicate over the network **simultaneously**, even when using the same IP address.

# 👌Well Known Ports and Range

| **Range**             | **Category**              | **Description**                                                                   |
| --------------------- | ------------------------- | --------------------------------------------------------------------------------- |
| **0–1023**            | **Well-Known Ports**      | Reserved for system-level or well-known services. Requires elevated privileges.   |
| **1024–49151**        | **Registered Ports**      | Registered for specific applications or services. Can be used without privileges. |
| **49152–65535**       | **Dynamic/Private Ports** | Used for ephemeral (temporary) connections, typically by client applications.     |

---

| **Port Number**   | **Protocol/Service**                 | **Description**                                   |
| ----------------- | ------------------------------------ | ------------------------------------------------- |
| **20, 21**        | FTP (File Transfer Protocol)         | Transfers files between systems.                  |
| **22**            | SSH (Secure Shell)                   | Secure remote login and command execution.        |
| **25**            | SMTP (Simple Mail Transfer Protocol) | Sending emails.                                   |
| **53**            | DNS (Domain Name System)             | Resolves domain names to IP addresses.            |
| **80**            | HTTP                                 | Serves web pages over an unencrypted connection.  |
| **110**           | POP3                                 | Retrieves emails from a mail server.              |
| **123**           | NTP (Network Time Protocol)          | Synchronizes clocks over a network.               |
| **143**           | IMAP                                 | Accesses emails on a mail server.                 |
| **443**           | HTTPS                                | Serves web pages over an encrypted connection.    |
| **445**           | SMB (Server Message Block)           | File sharing and network services.                |
| **67, 68**        | DHCP                                 | Assigns IP addresses dynamically.                 |
| **3306**          | MySQL                                | Database connections.                             |
| **5432**          | PostgreSQL                           | Database connections.                             |
| **3389**          | RDP (Remote Desktop Protocol)        | Remote desktop access to a Windows machine.       |
| **8080**          | HTTP (Alternative)                   | Commonly used for development or proxy services.  |

# 🧠 Simple Explanation

- **IP Address = Street address** (device location)  
- **Port Number = Apartment number** (specific service/application)

When data reaches a device:  
- IP address → tells **which device**  
- Port number → tells **which application** receives the data  

---

# 🔢 Port Number Range

```
0 – 65535   (Total = 65,536 ports)
```

---

# ⚙️ How Port-Based Communication Works

A single device can run many apps at the same time:

  
```
Node.js server → Port 80  
Live Server → Port 5500  
React (Parcel/Vite) App → Port 1234  
```


All accessed using:

```
192.168.1.8:80
192.168.1.8:5500
192.168.1.8:1234
```

Same IP, different **ports**.

---

# ❓ Why Not Use Only IP Addresses?
Because:
- You could run **only one network app** per device  
- Ports allow hundreds of apps to work together  
- Helps browsers, servers, and OS route traffic properly  

Without ports = Internet breaks.


# 📝 Summary

  - Ports identify **which application** should receive network traffic.  
- They allow running many services on **one IP**.  
- Browsers and servers rely on ports to communicate.  
- Essential for backend development, networking, and debugging.  


[[network interfaces]]