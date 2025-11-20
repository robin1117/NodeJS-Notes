#Networking
  DNS (Domain Name System) Converts **human-readable domain names** like `www.google.com` into **IP addresses** that computers use to communicate.

It works like a **directory of the internet**.

---
# 🏛 DNS Domain Hierarchy

DNS is arranged in a **hierarchical structure** from top to bottom. Which makes easy for Domain Servers to find the correct IP Address corresponding to Provided Name.

---
![[Pasted image 20251114075606.png|500]]
## 1️⃣ Root Level Domain (RLD)

- Represented by a simple dot: `.`
- Highest level in the DNS hierarchy  
- Managed by **ICANN** (Internet Corporation for Assigned Names and Numbers)
- Contains all Top-Level Domains (TLDs)

Example (invisibly at the end of any domain):  

```
www.google.com.
```

---
## 2️⃣ Top-Level Domain (TLD)

  Examples:
- `.com`
- `.org`
- `.net`
- `.gov`
- `.in`

✔ Owned and managed by authorized TLD organizations 
✔ They have permission to create **Second-Level Domains** beneath them

---
## 3️⃣ Second-Level Domain (SLD)

- Comes **right before** the TLD  

- Example:  
  - In `google.com`, **google** is the second-level domain  

- Registered through **domain registrars**

---
## 4️⃣ Subdomains

- A part added **before** the second-level domain ,  domain owner can can create as Many Subdomain.
- Example:  
  - `www.google.com` → **www** is a subdomain  
  - `mail.support.google.com` → multiple levels

✔ Subdomains can be created freely by the domain owner 
✔ Useful for separating services (mail, shop, blog)

---
# 📏 Important Domain Rules

### ✔ Maximum Domain Length

- **Total domain length** (including all dots) must not exceed **255 characters**

### ✔ Label Length

- Each label (like `www`, `google`, `com`) can be **up to 63 characters long**

---

# 🛒 Domain Registration
  
Although TLDs are controlled by authorized organizations:
### ✔ TLD owners usually do NOT sell domains directly.

  Instead, **domain registrars**, also called **domain brokers**, handle selling and managing domain names.

Examples:

- **GoDaddy**
- **Namecheap**
- **Google Domains**
- **Hostinger Domains**
### Registrars provide:

- Domain search  
- Registration  
- Renewal  
- DNS management  
  
---
# ✅ Summary

- DNS converts **domain names → IP addresses**
- DNS is hierarchical: **Root → TLD → SLD → Subdomain**
- Domains must follow strict length rules
- Domains are sold by **registrars**, not TLD owners

---

[[How DNS Server Works]]