#Networking
## 📌 What is a Firewall?

A **firewall** is a network security system that monitors and controls **inbound (incoming)** and **outbound (outgoing)** traffic based on predefined rules.

It acts as a **security gatekeeper** that allows or blocks traffic based on rules.

---
# 🌐 Network Profiles

## **1️⃣ Public Network**

- Used in public places (cafes, airports)
- **Most secure**
- Strictest rules
- Device discovery OFF (no file sharing/printers)
- Protects you from unknown devices

## **2️⃣ Private Network**

- Trusted home networks
- Moderate rules
- Device discovery ON (printers, file sharing)

## **3️⃣ Domain Network**

- Used in offices/organizations
- Controlled by **central IT admin**
- Policies applied using domain controllers/Active Directory

---

  

# 🔄 Inbound vs Outbound Rules

| Rule Type    | Default               | Controls                                           |
| ------------ | --------------------- | -------------------------------------------------- |
| **Inbound**  | Mostly **Blocked** 🔒 | Traffic coming **from outside → into** your device |
| **Outbound** | Mostly **Allowed** ✅  | Traffic going **from your device → outside**       |
### ✔ Examples

- Hosting a server (port 80): **Inbound rule must allow it**
- Opening google.com: **Outbound allowed by default**

---
# 🧱 Types of Firewalls
  
| Type                  | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| **Software Firewall** | Installed on OS (Windows Firewall, UFW, iptables)          |
| **Hardware Firewall** | Physical devices (enterprise routers, firewall appliances) |
| **Cloud Firewall**    | Provided by cloud platforms (AWS, Azure, Cloudflare)       |

---

# 🕵️ Deep Packet Inspection (DPI)

Advanced firewalls use **DPI** to inspect:
- Packet **headers**
- AND **packet content**  

Helps detect:
- Malware  
- Suspicious traffic  
- VPN tunnels  
- Unauthorized content  

---
# 🚫 What Can Firewalls Block or Allow?

- **IP Addresses** (block attacker IP)
- **Ports** (allow 80, block 21)
- **Protocols** (TCP/UDP)
- **Applications** (block specific .exe programs)
- **MAC addresses** (LAN filtering)
- **Domains/Websites** (URL filtering)

---

# 🔁 How a Firewall Works (Simple Flow)

  
```

[ Internet ]

     ↓

 [ Firewall ]

     ↓

[ Your Device ]

```

  
Every incoming/outgoing packet is checked against firewall rules.

---
# 🛡 Why Do We Use Firewalls?

| Purpose                        | Explanation                           |
| ------------------------------ | ------------------------------------- |
| 🚫 Block Unauthorized Access   | Prevent hacking & intrusions          |
| 🧠 Allow Only Required Traffic | Allow only trusted services           |
| 🧪 Prevent Misuse              | Block malware, trojans, port scanning |
| 🌐 Network Isolation           | Separate trusted/untrusted networks   |

---

# 🛠 Windows Firewall Rules (Quick Guide)

## **Block/Allow an Application**

1. Open **Windows Defender Firewall**
2. Go to **Advanced Settings**
3. Select **Inbound/Outbound Rules**
4. Click **New Rule**
5. Choose **Program**
6. Select application `.exe`
7. Allow/Block
8. Choose profiles (Public/Private/Domain)
9. Save

## **Block/Allow a Port**

1. Advanced Settings → New Rule  
2. Select **Port**  
3. Choose **TCP/UDP**  
4. Enter port (e.g., 3000)  
5. Allow/Block  
6. Choose profiles  
7. Save  

---
# 🎯 Final Recap

- Firewall = **Security Gatekeeper**
- Public = **Strictest**
- Private = Home-friendly
- Domain = Enterprise-managed
- **Inbound = Blocked**, **Outbound = Allowed**
- DPI = Deep packet inspection of packets

---


# [[OSI Model (Open Systems Interconnection Model)]]