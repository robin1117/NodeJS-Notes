#Networking
## 🔐 What is SSH?

SSH (Secure Shell) is a protocol used to securely access and manage remote systems such as servers.

Instead of logging in with a password, SSH key pairs allow secure and password‑less authentication.

---  

## 🗝 SSH Key Pair

An SSH key pair contains:
### **1. Public Key**

- Stored on the server.
- Used by the server to encrypt an authentication challenge.

### **2. Private Key**

- Stored safely on your local machine.
- Never shared.
- Used to decrypt the server’s challenge and prove your identity.

**Analogy:**  
Public Key = Lock (installed on server)  
Private Key = Key (kept with you)

---
## ⚙️ SSH Authentication Process

### **1. Generate SSH Keys**

```bash
ssh-keygen
```

This creates:
- `id_rsa` → Private Key  
- `id_rsa.pub` → Public Key

---
### **2. Copy Public Key to Server**

```bash
ssh-copy-id user@server
```

This adds your public key to:

```
~/.ssh/authorized_keys
```

---
### **3. Connecting to Server**

```bash
ssh user@server
```

**How it works internally:**
1. Server encrypts a challenge with your public key.
2. Your client decrypts it using the private key.
3. If successful → server confirms your identity and grants access.

---
## 🎯 Advantages of SSH Key Authentication

- No need to type the password every time.
- Stronger security vs password login.
- Resistant to brute‑force attacks.
- Keys never travel over the network.

---

## ✅ Summary

You leave the *public key* on the server and keep the *private key* on your system.  
Both work together during the SSH connection to verify your identity securely


[[WSL Networking & Port Forwarding]]

[[SSH Config File]]