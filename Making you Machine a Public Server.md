#Networking 
## 1️⃣ Basic Idea

Your laptop has a private/local IP that only works inside your home network, while your public IP (assigned by the ISP) is accessible globally. To make your laptop reachable from the internet, you combine **Public IP + Port Forwarding**.

  
## 2️⃣ Key Components

### 🔹 Public IP Types
- **Dynamic IP:** Changes periodically.
- **Static IP:** Never changes; best for servers.

### 🔹 Ports
Ports act as communication gate numbers (e.g., 80 for HTTP, 443 for HTTPS, 3000/5500 for custom servers).

### 🔹 Port Forwarding
Router rule that sends incoming traffic on a specific port to your laptop's internal IP.


```
Public IP:PORT → Router → Local IP:PORT
```

## 3️⃣ Steps to Host Server

### ✅ Step 1: Find Public IP

Use sites like whatismyip.com.

  
### ✅ Step 2: Run Local Server

Example: Node.js server on http://localhost:5500.

### ✅ Step 3: Configure Port Forwarding

1. Open router login: 192.168.0.1 / 192.168.1.1  
2. Navigate to Port Forwarding / NAT  
3. Add:
   - Public Port: 8080  
   - Local IP: 192.168.1.10  
   - Local Port: 5500 
   - Protocol: TCP  
  
### ✅ Step 4: Test Externally

Use mobile data and visit:  
`http://<public-ip>:5500`

### ✅ Step 5: Extra Efforts for Debugging

`netstat -ano | findstr :3000` <font color="#ff0000">is a Windows command used to **check which program is using port 3000** and whether that port is actually listening for connections.</font>

```bash
netstat -ano | findstr :3000
```

<font color="#9bbb59">If you are still facing any problem :</font>
- Router firewall — OFF
- Windows firewall — OFF
- Check router WAN Connection type  Profile
- 
## 4️⃣ Extra Tips

### 🔐 Security

Use strong passwords, firewall, and avoid exposing sensitive ports.

### 🌐 Domain Mapping

Use DNS **A Record** to map domain → public IP.

## ⚡ Formula

Laptop Server + Public IP + Port Forwarding = Public Serverrt Forwarding = Public Server


[[Running Multiple Servers on a Laptop]]