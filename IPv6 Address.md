#Networking
## 🔹 IPv6 Address – Quick Summary

- IPv6 is a **128-bit** IP address format (IPv4 is 32-bit).
- Consists of **8 groups**, each containing **4 hexadecimal characters**, separated by colons `:`.

  ```
  2001:0db8:0000:0000:0000:ff00:0042:8329
  ```


---


## 🔹 IPv6 Format Rules

### ✔ 1. Leading Zeros Can Be Removed

- Example:

  ```
  0db8 → db8
  ```

### ✔ 2. Consecutive All‑Zero Groups Can Be Compressed With ::

- Original:

  ```
  2001:0db8:0000:0000:0000:ff00:0042:8329
  ```

- Compressed:

  ```
  2001:db8::ff00:42:8329
  ```

- Note: `::` can be used **only once** in an address.

### ✔ 3. All Zeros? Use :: Alone

- Example:

  ```
  0000:0000:0000:0000:0000:0000:0000:0000 → ::
  ```

---

  

## 🔹 Types of IPv6 Addresses

### 🟢 1. GUA – Global Unicast Address

- Public IPv6 address.
- Routable on the internet.
- Usually starts with **2xxx** or **3xxx**.
- Often blocked by firewall for safety unless allowed.

### 🟣 2. Temporary IPv6 Address

- Randomized for privacy.
- Changes periodically.
- Used for outgoing connections.

### 🔵 3. Link‑Local Address

- Works only inside your LAN (local network).
- Automatically assigned.
- Always starts with:

  ```
  fe80::/10
  ```

---

## 🌐 Using IPv6 in a Web Browser

To access an IPv6 host directly:

```
http://[2001:db8::1]/
```

Browsers require **square brackets** for IPv6 formatting.

---
## ⚠️ IPv6 and IPv4 Compatibility Notes

- If **IPv4 is disabled**, only IPv6‑supported websites will open.
- Many services still depend on IPv4.
- Full IPv6‑only setups can cause limited or broken internet access.
