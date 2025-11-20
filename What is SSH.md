#Networking
## 🔑 What is SSH (Secure Shell)?

SSH is a network protocol that allows you to securely access and control a remote computer’s terminal over an encrypted connection.  

- Works over **TCP**
- Default port: **22**

---
## 🔥Start SSH Server on Ubuntu

 Install SSH Server
```bash
sudo apt update
sudo apt install openssh-server -y
```

Check SSH Service Status
```bash
sudo systemctl status ssh
```

Start SSH Service
```bash
sudo systemctl start ssh
```

Allow Firewall to connect SSH
```bash
sudo ufw allow ssh
```

Enable SSH on Boot
```bash
sudo systemctl enable ssh
```

Check Your IP Address
```bash
ip a
```

Connect From Another Device
```bash
ssh username@your-ip-address
```

## 🌐 Check Network Details

```bash
sudo ss -tunlp | grep ":22" #To determine if a specific IP address on a Linux system is listening on port 22,
hostname -I   # Shows system IP address
whoami        # Shows current username
```

---
## 🔗 Connect to Remote System (Client → Server)

Use SSH command from your client system to connect to the remote (server) machine:

```bash
ssh username@ip_address
```

### Example:

```bash
ssh evin@172.31.93.91
```

**Where:**
- `evin` = Username on the server machine  
- `172.31.93.91` = Server’s IP address  

After running this command, it will ask for the server user’s password. Once authenticated, you get full terminal access.

---
## 🎯 Use Case

1. Start SSH server on one system.  
2. From another system, use SSH client to connect.  
3. You can remotely operate the server’s terminal as if you are using it locally.

---
## 💡 Summary

- SSH provides secure remote terminal access.  
- Uses **TCP port 22**.  
- Requires SSH client and server to be properly configured.  
- Once connected, it gives full command-line control over the remote machine.
## ❤️Start SSH Server on Windows : too

Similarly we can Start SSH Server on Windows ! After install it as optional feature in Windows for more detail you can ask it from Chat GPT.

![[Pasted image 20251119113449.png|500]]

To check weather the server is running on port 22 using this command :

```bash
getstat -aio | findstr :22
```

```bash
PS C:\Users\Devin> netstat -aio | findstr :22
TCP    0.0.0.0:22             Nancy:0                LISTENING          20280     0
TCP    127.0.0.1:22           Nancy:0                LISTENING          1700     0
TCP    [::]:22                Nancy:0                LISTENING          20280     0
TCP    [::1]:22               Nancy:0                LISTENING          1700     0
```

Once you find that server is now running locally on port : 22 we can Transfer this port over Public IP `38.137.6.15` ,Using port forwarding to make it accessible over internet 💀

After that you can make connection using another Terminal | with your public or local IP
- `192.168.1.10` Local IP
- `38.137.6.15` Public IP

![[Pasted image 20251119113752.png]]


[[SCP (Secure Copy)]]