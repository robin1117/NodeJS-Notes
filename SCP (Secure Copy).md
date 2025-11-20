#Networking

`scp` means **Secure Copy**.  
It is used to **copy files or folders between two computers** securely using SSH.

---
## 🔒 How does it work?

- `scp` uses **SSH encryption**.
- Your data is transferred through a **secure tunnel**.
- You must authenticate with SSH (password or key).

---
## 📁 Where is it used?

You can use `scp` to:
1. Copy from **local → remote**
2. Copy from **remote → local**
3. Copy between **two remote systems**

---
## 🧩 Basic Syntax

```
scp source destination
```

---
## 📤 Copy LOCAL → REMOTE


```
scp file.txt username@server_ip:/path/on/server/
```

---
## 📥 Copy REMOTE → LOCAL

```
scp username@server_ip:/path/on/server/file.txt /local/path/
```

---
## 📁 Copy Folder

```
scp -r myfolder username@server:/path/
```

---
## ⚡ Useful Options

| Option       | Meaning                 |
| ------------ | ----------------------- |
| `-r`         | Copy folder recursively |
| `-P 2222`    | Use custom SSH port     |
| `-i key.pem` | Use SSH private key     |

---
## 📌 Summary

`scp` = **copy + ssh + encryption**.


[[SSH Public and Private Keys]]