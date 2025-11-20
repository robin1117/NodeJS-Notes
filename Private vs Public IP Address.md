#Networking
## 🌍 Public IP Address

A **Public IP Address** is an **internet-facing** address assigned by your **ISP (Internet Service Provider)**.
It allows your network to be **directly accessible** from the internet.
### 🧠 Key Points:

- Used to identify your network on the **global internet**.  
- Every website or online service has a public IP.  
- Assigned by your **ISP**.  
- You can check your public IP at [https://whatismyipaddress.com/](https://whatismyipaddress.com/)

Example :  
If you open the above website, the IP shown there is your **public IP** (usually your ISP’s).  

> 💡If you want your **home router** to have a public IP directly, you can request one from your ISP (usually with extra cost).

---

## 🏠 Private IP Address

A **Private IP Address** is used **inside local networks** such as homes, offices, or schools.  

It is **not accessible directly** from the internet.
### 🧠 Key Points:

- Used for communication **within a LAN (Local Area Network)**.  
- Assigned by your router using **DHCP**.  
- Devices within the same network can communicate using private IPs.  
- Not routable on the internet.
  
Example Ranges :

```
10.0.0.0 – 10.255.255.255
172.16.0.0 – 172.31.255.255
192.168.0.0 – 192.168.255.255
```

> Example: `192.168.1.5` (a private IP assigned to your phone or laptop).

---

### Private IP Address Ranges (with Class and Usage)

| Range                         |   Number of Addresses | Class   | Usage                                                        | Purpose                     |
| ----------------------------- | --------------------- | ------- | ------------------------------------------------------------ | --------------------------- |
| 10.0.0.0 - 10.255.255.255     |              16777216 | Class A | Large organizations and enterprises                          | Private networks (RFC 1918) |
| 172.16.0.0 - 172.31.255.255   |               1048576 | Class B | Medium-sized networks, such as ISPs and smaller enterprises  | Private networks (RFC 1918) |
| 192.168.0.0 - 192.168.255.255 |                 65536 | Class C | Home networks and small businesses                           | Private networks (RFC 1918) |
 
### Reserved IP Address Ranges (Min-Max Format)

| Range                             | Purpose                                    |   Number of Addresses |
| --------------------------------- | ------------------------------------------ | --------------------- |
| 0.0.0.0 - 0.255.255.255           | Software, current network                  |              16777216 |
| 10.0.0.0 - 10.255.255.255         | Private networks (RFC 1918)                |              16777216 |
| 100.64.0.0 - 100.127.255.255      | Carrier-grade NAT (RFC 6598)               |               4194304 |
| 127.0.0.0 - 127.255.255.255       | Loopback                                   |              16777216 |
| 169.254.0.0 - 169.254.255.255     | Link-local                                 |                 65536 |
| 172.16.0.0 - 172.31.255.255       | Private networks (RFC 1918)                |               1048576 |
| 192.0.0.0 - 192.0.0.255           | IETF Protocol Assignments                  |                   256 |
| 192.0.2.0 - 192.0.2.255           | TEST-NET-1 for documentation and examples  |                   256 |
| 192.88.99.0 - 192.88.99.255       | IPv6 to IPv4 relay (deprecated)            |                   256 |
| 192.168.0.0 - 192.168.255.255     | Private networks (RFC 1918)                |                 65536 |
| 198.18.0.0 - 198.19.255.255       | Network benchmark testing                  |                131072 |
| 198.51.100.0 - 198.51.100.255     | TEST-NET-2 for documentation and examples  |                   256 |
| 203.0.113.0 - 203.0.113.255       | TEST-NET-3 for documentation and examples  |                   256 |
| 224.0.0.0 - 239.255.255.255       | Multicast                                  |             268435456 |
| 240.0.0.0 - 255.255.255.255       | Reserved for future use                    |             268435456 |
| 255.255.255.255 - 255.255.255.255 | Broadcast                                  |                     1 |


## 📜 Traditional NAT (Network Address Translation)

Earlier, routers had **direct public IPs** (e.g., `145.4.2.8`) assigned by ISPs.  
Multiple devices connected to the router shared that one public IP.
### 🔧 How It Worked:

1. Router had a **Public IP**.  
2. Devices (like phone, laptop, etc.) got **Private IPs**.  
3. Router created a **mapping table**:
  
```
MAC Address ↔ Private IP ↔ Public IP + Port
```

4. When a device sent a request (like visiting Google):
   - Request: **Device → Router → Internet (via Public IP)**
   - Response: **Internet → Router → Correct Device (via mapping)**

### ⚙️ Key Function:

- Router uses **NAT** to translate **private IPs** to a **single public IP**.  
- This allows **multiple devices** to share **one internet connection**.

## 🔄 Modern System — CG-NAT (Carrier-Grade NAT)

Nowadays, ISPs use an additional NAT layer called **CG-NAT** (Carrier Grade NAT).  
In this setup, **your home router does not have a public IP** — instead, it gets a **private IP** from the ISP.
### 🌐 Data Flow:

```
Device (Private IP)

   ↓

Home Router (Private IP)

   ↓

ISP Router (Public IP)

   ↓

Internet (e.g., Google)

```

When the response comes back, it follows the **same reverse path**.

### 🧩 Why CG-NAT?

- Public IPv4 addresses are limited.  
- ISPs use **one public IP for many customers**.  
- Helps reduce IPv4 exhaustion.

---
## ⚖️ Summary Table

| Type           | Scope  | Example        | Internet Accessible? | Assigned By   | Used For                         |
| -------------- | ------ | -------------- | -------------------- | ------------- | -------------------------------- |
| **Public IP**  | Global | `145.4.2.8`    | ✅ Yes                | ISP           | Identifying networks on Internet |
| **Private IP** | Local  | `192.168.1.10` | ❌ No                 | Router (DHCP) | Internal LAN communication       |

---
## 🧠 Quick Recap:

- **Public IP** → Unique on internet, assigned by ISP.  
- **Private IP** → Used locally, assigned by router.  
- **NAT** → Translates private → public IPs.  
- **CG-NAT** → ISP-level NAT, one public IP shared by many users.  

---

[[Benefits and Drawbacks of Public and Private IP Addresses]]