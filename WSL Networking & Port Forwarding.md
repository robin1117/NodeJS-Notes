#Networking
A short, easy-to-understand reference for WSL networking and SSH access.

---
## 1. WSL Networking Modes (Simple)

### **1️⃣ NAT (Default)**

- WSL gets private IP (`172.x.x.x`)
- Windows acts like a router
- **Needs port forwarding**
- Most isolated

### **2️⃣ Mirrored**

- WSL shares Windows’ IP (`192.168.x.x`)
- No port forwarding needed
- Best for hosting
### **3️⃣ VirtioProxy**

- Fast, proxy-based networking
- Best performance

### **4️⃣ None**

- No network at all
  
---

## 2. Why Router Cannot Forward to WSL Directly

WSL IP (`172.x.x.x`) is **internal** and **not visible** to your router.  

Therefore:
❌ Router → WSL = **Impossible**  
✔ Router → Windows → WSL = **Correct**

---
## 3. Correct Port Forwarding Flow

```
Public IP → Router → Windows → WSL
```

This requires:

1️⃣ Forward router traffic → Windows  
2️⃣ Forward Windows → WSL using `netsh`

---
## 4. Steps to Forward Port to WSL (Example: SSH Port 22)

### **Step 1 — Get IPs**  

**WSL IP**

```bash
hostname -I
```

**Windows IP**

```powershell
ipconfig
```

---
### **Step 2 — Router Port Forwarding**

Forward port:

```
Public Port: 22
Forward To: Windows IP
Local Port: 2222  (recommended)
```

---
### **Step 3 — Windows → WSL Forwarding**

```powershell
netsh interface portproxy add v4tov4 listenport=2222 listenaddress=0.0.0.0 connectport=22 connectaddress=<WSL-IP>
```

Allow firewall:

```powershell

New-NetFirewallRule -DisplayName "WSL SSH" -Direction Inbound -Protocol TCP -LocalPort 2222 -Action Allow

```

---
## 5. Test SSH


**Local test**

```bash
ssh user@localhost -p 2222
```

**Remote test**

```bash
ssh user@YourPublicIP -p 22
```

(or use 2222 depending on router rule)

---
## 6. Auto Fix for Changing WSL IP

```powershell
$wslIp = wsl hostname -I | awk '{print $1}'
netsh interface portproxy delete v4tov4 listenport=2222 listenaddress=0.0.0.0

netsh interface portproxy add v4tov4 listenport=2222 listenaddress=0.0.0.0 connectport=22 connectaddress=$wslIp
```

Run via Task Scheduler for auto-update.

---

  

## 7. Useful WSL SSH Commands

  Start SSH:

```bash
sudo systemctl start ssh
```

Enable at boot:

```bash
sudo systemctl enable ssh
```

Check SSH port:

```bash
ss -tulnp | grep :22
```

---

## ⭐ Quick Summary

- NAT = default, needs port forwarding  
- Mirrored = no forwarding needed  
- Router cannot reach WSL directly  
- Correct flow → Router → Windows → WSL  
- Use `netsh portproxy` for Windows→WSL forwarding  
- WSL IP changes → use script
