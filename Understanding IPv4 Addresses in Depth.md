#Networking 
**IPv4** (Internet Protocol version 4) is the **fourth version** of the Internet Protocol used to identify **devices on a network** using a **unique numerical address**.

> Think of it as a **home address** for devices on the internet.

---
## ✅ IPv4 Address Format

  An IPv4 address looks like this:

```
192.168.1.1
```

It contains **4 parts**, separated by dots (`.`).  
Each part (called an **octet**) is a **number between 0 and 255**.


👉 Format:
```
X.X.X.X   where X ∈ [0, 255]
```

---
## 🧮 Why only up to 255?

Each part is **8 bits** (1 byte).  
Hence, `2⁸ = 256` possible values → from `0` to `255`.

So:
```
IPv4 = 8 bits + 8 bits + 8 bits + 8 bits = 32 bits
```

That’s why IPv4 is a **32-bit address**.

---
## 🌍 Total IPv4 Addresses

```
2³² = 4,294,967,296 total addresses
```

However, not all are usable — some are **reserved** for special purposes.

---
## 🧩 IPv4 Address Classes

| Class | Range (1st Octet) | Typical Usage                   |
| ----- | ----------------- | ------------------------------- |
| A     | 1 – 126           | Large networks (e.g., ISPs)     |
| B     | 128 – 191         | Medium-sized networks           |
| C     | 192 – 223         | Small networks (home or office) |
| D     | 224 – 239         | Multicast (special use)         |
| E     | 240 – 255         | Experimental (reserved)         |

> 💡 Note: `127.x.x.x` is reserved for **loopback** (e.g., `127.0.0.1 = localhost`)

---

## 🛡 Reserved Private IP Ranges

  Private IP addresses are used **within internal networks** (like home or office LANs) and not visible on the internet.

| Class | Private IP Range              |
| ----- | ----------------------------- |
| A     | 10.0.0.0 – 10.255.255.255     |
| B     | 172.16.0.0 – 172.31.255.255   |
| C     | 192.168.0.0 – 192.168.255.255 |
Example:  
`192.168.1.1` is a common private IP used for routers.

---
## 📦 Subnetting

IPv4 addresses are often written with a **subnet mask**, like:

```
192.168.1.0/24
```

Here `/24` means:
- First 24 bits → **Network part**
- Remaining 8 bits → **Host part**

> Subnetting divides a large network into smaller, manageable sub-networks.

---

## 🔁 Special IPv4 Addresses

| Address           | Purpose                                 |
| ----------------- | --------------------------------------- |
| `127.0.0.1`       | Loopback (refers to your own computer)  |
| `0.0.0.0`         | Represents “any” IP address             |
| `255.255.255.255` | Broadcast address (send to all devices) |
| `169.254.x.x`     | Auto-assigned IP (when DHCP fails)      |

---
## 🧪 Example Breakdown

Example IP: `192.168.10.15`
1. Belongs to private range → Class C (`192.168.x.x`)  
2. Binary representation:

   ```
   192 = 11000000  
   168 = 10101000  
   10  = 00001010  
   15  = 00001111
   ```

  Full binary form:

   ```
   11000000.10101000.00001010.00001111
   ```

---
## 🚦 How Devices Communicate Using IPv4

- Every device (computer, phone, printer, etc.) gets a **unique IP address**
- When data is sent, it includes the **source IP** and **destination IP**
- Routers forward packets to the correct destination using these IPs

---
## 🧠 Common Networking Terms

| Term     | Meaning                                                             |
| -------- | ------------------------------------------------------------------- |
| **DHCP** | Dynamically assigns IP addresses automatically                      |
| **NAT**  | Converts private IPs to public IPs (used by routers)                |
| **DNS**  | Translates domain names to IPs (e.g., google.com → 142.250.182.238) |

---
## 🔄 IPv4 vs IPv6

| Feature         | IPv4               | IPv6                             |
| --------------- | ------------------ | -------------------------------- |
| Address Size    | 32-bit             | 128-bit                          |
| Format          | `192.168.0.1`      | `2001:0db8:85a3::8a2e:0370:7334` |
| Total Addresses | ~4.3 billion       | ~340 undecillion                 |
| Reason for IPv6 | Address exhaustion | Supports unlimited devices       |

> IPv6 was developed because IPv4 addresses are limited and almost exhausted.

---
## ✅ Summary

- IPv4 = **32-bit address** made of 4 octets (0–255)  
- Uniquely identifies devices on a network  
- Includes **private**, **public**, and **special** IP ranges  
- **Subnetting** helps divide large networks  
- **IPv6** is the modern upgrade due to address shortage

---
[[IPv6 Address]]
[[Dynamic vs Static IP Address]]

