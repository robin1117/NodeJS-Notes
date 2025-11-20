#Networking
DNS Hijacking is a cyber attack or configuration manipulation in which DNS data is changed to redirect users to **incorrect or malicious IP addresses**, instead of the legitimate destination.

---

# 🔹How DNS Hijacking Works

## ✔ Normal Flow

```
User → DNS Server → Correct IP → Legit Website
```

## ❌ Hijacked Flow

```
User → Manipulated DNS → Wrong IP → Fake/Malicious Website
```


Users are silently redirected without knowing.

---

# 🔹 Types of DNS Hijacking

## 1️⃣ Router-Level Hijacking

- Attackers change your router’s DNS settings.
- All connected devices use the fake DNS server.
- Redirection happens at the **network level**.

---
## 2️⃣ Local DNS Hijacking (Your Example)

DNS is modified **locally** on the victim's computer via the hosts file.
### Hosts File Locations:

- **Linux/macOS:** `/etc/hosts`
- **Windows:** `C:\Windows\System32\drivers\etc\hosts`
### Example:

```
sudo nano /etc/hosts
192.168.1.9   www.cool.com
```

### Local development test:

```js
import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello, World!");
});

server.listen(80, "0.0.0.0");
```

Now `www.cool.com` loads your **local server**, bypassing real DNS completely.

✔ Legit for development  
❌ Dangerous if done by attackers (phishing, redirection)

---
## 3️⃣ Man‑in‑the‑Middle (MITM) DNS Attack

- Attacker intercepts DNS traffic.
- Modifies DNS responses before they reach the user.

Most common on:  
- Fake WiFi networks  
- Public cafes/hotspots  

---
## 4️⃣ ISP-Level Hijacking

ISPs may redirect DNS queries intentionally for:

- Ads  
- Website blocking  
- Logging user activity  

Some countries allow this, some strictly prohibit it.

---
# 🔹 Common Goals of Attackers

### 🎯 **Phishing**

Redirect to fake login pages to steal passwords.

### 🦠 **Malware Spread**

Fake websites tricking users to download malicious files.

### 💰 **Ad Revenue Fraud**

Redirecting traffic to ad-heavy pages.

### 🛠 **Legitimate Developer Use**

Redirecting domains locally for testing or staging environments.


---
# 🔹 Symptoms of DNS Hijacking (Malicious)

- Websites opening incorrect pages  
- Random pop-ups or unwanted ads  
- HTTPS warnings / certificate mismatches  
- Slow browsing due to unwanted redirects  
- `nslookup` showing unexpected IP addresses  

---
# 🔹 Protection Measures

- ✅ Change default router passwords  
- ✅ Use **Secure DNS** (1.1.1.1 or 8.8.8.8)  
- ✅ Enable **DNSSEC** 
- ✅ Update router firmware regularly  
- ✅ Check `/etc/hosts` or `hosts` file regularly  
- ✅ Use antivirus & anti-malware tools  
- ✅ Avoid public WiFi without VPN  
---
# ⚠️ Key Point

If your **hosts file is modified**, it **bypasses DNS servers entirely**.

> Your device will always use the IP written in the hosts file, even if global DNS records say something else.

Useful for local development.  
Dangerous when exploited by attackers.

---


[[What are Port Numbers]]