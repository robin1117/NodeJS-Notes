#Networking

DNS (Domain Name System) converts **domain names** like `google.com` into **IP addresses** like `142.250.182.14`.

It works like the **phonebook of the internet**.

---
## 🔍 DNS Lookup Flow
  
  You can test DNS resolution using:

```
nslookup <domainName>
```

---

## 📶 IPv6 Preference

If both **IPv4 and IPv6 DNS servers** are available:  

✔ Devices prefer **IPv6** because it is faster, more efficient, and has more available addresses.  

---
## 🔐 Direct IP Access Control

Accessing a website using its IP (e.g., `http://142.250.182.14`)  

👉 Works **only if the website owner allows it**.  
Many websites block direct IP access because of **virtual hosting**, which requires the domain name.

---  
## 🌐 Common DNS Servers
  
| DNS Server  | Provider   |
| ----------- | ---------- |
| **1.1.1.1** | Cloudflare |
| **8.8.8.8** | Google     |

---

# 🧭 DNS Resolution Steps (Full Flow)

### **1️⃣ Browser Cache**

Browser checks if it already knows the IP of the domain.

---

### **2️⃣ OS Cache**

If the browser doesn’t know, your OS (Windows, Linux, macOS) checks its own DNS cache.

---
### **3️⃣ DNS Resolver (e.g., 1.1.1.1 / 8.8.8.8)**

Your ISP or custom DNS receives the request.  
It checks its **own cache** first.

---
### **4️⃣ Root DNS Server**

If not in cache, the resolver asks the **Root Server (.)**.

Root server replies with:  
👉 The IP of the **TLD server** (e.g., `.com`, `.net`, `.org`)

---
### **5️⃣ TLD (Top-Level Domain) Server**

Resolver asks the TLD server:
"Where is the authoritative server for *google.com*?"
TLD responds with the **Authoritative Name Server**.

---
### **6️⃣ Authoritative Name Server**

This server has the **actual DNS records** for the domain.
It returns the domain’s correct IP address (A or AAAA record).

---
### **7️⃣ Browser Connects to Web Server**

Browser now uses the IP address to connect and load the website.

---
# 🖥 What is a Name Server?

A **Name Server** is a DNS server that stores DNS records for a domain.
Common records include:

- **A** → IPv4 address  
- **AAAA** → IPv6 address  
- **MX** → Mail server  
- **CNAME** → Alias  
- **NS** → Name server records  
  
✔ **Authoritative Name Servers** are the final source of truth.

  
---
# ⏳ What is TTL (Time To Live)?

TTL determines **how long** a DNS record stays cached.

Example:
```
TTL = 300  →  5 minutes
```

### Short TTL:
✔ Faster DNS updates  
❌ More DNS traffic

### Long TTL:
✔ Better performance  
❌ DNS changes take longer to propagate

---

# ✅ Summary
 
 - DNS resolves **domain → IP**  
- Process: Cache → Resolver → Root → TLD → Authoritative → Server  
- IPv6 is preferred if available  
- Name Servers store DNS records  
- TTL controls caching duration  

---


[[DNS Hijacking]]