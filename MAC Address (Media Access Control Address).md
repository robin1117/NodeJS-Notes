#Networking
## 📌 Definition

A **MAC Address** is a unique hardware identifier assigned to every network interface (Wi-Fi, Ethernet, Bluetooth, etc.) by the manufacturer.

- **Format:** 48-bit hexadecimal number  
  Example: `00:1A:2B:3C:4D:5E`
- Every network interface has its **own unique MAC address**.

---
## 🔑 Role of MAC Address

### **1. Permanent Identity**

- IP address changes frequently (dynamic via DHCP).
- MAC address is **fixed at hardware level**.
- Used to reliably identify a device inside a **LAN**.

### **2. Router’s DHCP Table**

When a device connects:

- Router assigns an IP address.
- Stores a **MAC ↔ IP mapping**.
- Next time the device connects, router identifies it by MAC and may give the same IP.
### **3. Communication Inside LAN**

- Even if devices use IP addresses logically, **actual data delivery** happens using **MAC addresses** at the hardware layer.

- IP = logical  
  MAC = physical

---
## 📱 Example

A laptop with:
- Wi-Fi MAC: `88:79:23:AF:91:CD`
- Ethernet MAC: `00:1B:44:11:3A:B7`

Router will treat both as separate devices and assign different IPs.

---
## ⚡ Key Points Summary

| Concept     | MAC Address              | IP Address            |
| ----------- | ------------------------ | --------------------- |
| Identity    | **Physical / Permanent** | Logical / Changeable  |
| Assigned By | Manufacturer             | Router (DHCP)         |
| Layer       | OSI Layer 2 (Data Link)  | OSI Layer 3 (Network) |
| Format      | 48-bit Hex               | IPv4/IPv6             |
| Used In     | LAN                      | LAN + Internet        |
| Changeable? | Yes (via MAC spoofing)   | Yes (DHCP)            |

---
## 🛰️ MAC Address in Wi-Fi Communication

| Step  | What Happens                                                         |
| ----- | -------------------------------------------------------------------- |
| **1** | Device sends **Probe Request** with its MAC                          |
| **2** | Router sends **Probe Response**                                      |
| **3** | Device sends **Authentication + Association Request** (includes MAC) |
| **4** | Router registers device MAC                                          |
| **5** | Device sends **DHCP Discover** to request IP                         |
| **6** | Router assigns IP and maps it to the MAC                             |
## 📋 Additional Useful Info

- Windows shows MAC as **Physical Address** (`ipconfig /all`)
- MAC address separators formats:  
  - Colons → `00:1A:2B:3C:4D:5E`  
  - Hyphens (Windows) → `00-1A-2B-3C-4D-5E`  
  - Dots (Cisco) → `001A.2B3C.4D5E`




## [[What is Firewall]]