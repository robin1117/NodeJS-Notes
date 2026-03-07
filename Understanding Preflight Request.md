#Express
## 🔐 Why Preflight Requests Exist

For security reasons, web browsers do not directly allow all **cross-origin requests**.
When a request is **not simple**, the browser sends an **extra request first** to check permissions.  

This extra request is called a **Preflight Request**.

---
## 🔥 What Is a Preflight Request?

- When a **non-simple / complex request** is made, such as:
  - PUT
  - DELETE
  - PATCH
  - Requests with custom headers

👉 The browser first sends an **OPTIONS request** to the server.
- This OPTIONS request checks whether the server allows:
  - The requesting origin
  - The HTTP method
  - The custom headers

---
## ✅ How Preflight Works

1. Browser sends an **OPTIONS (preflight) request**
2. Server responds with proper **CORS headers**
3. If headers are valid:
   - ✔️ Browser sends the actual request
1. If headers are missing or incorrect:
   - ❌ Browser blocks the actual request

---
## 💡 Main Purpose of Preflight Requests

- Verify **server permissions before the actual request**
- Maintain security
- Prevent browsers from accessing data from random or malicious origins without approval

---
## 📌 Important Headers Involved

- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Headers`

These headers tell the browser what is allowed.  

---
## ⭐ Tip for Developers

- If the server sends correct CORS headers
- Or if you use **CORS middleware** (like the `cors` package in Node.js)

👉 Preflight requests are handled smoothly, and requests do not fail.

---
## ✅ Summary

- Preflight requests are sent using the **OPTIONS** method
- They occur only for **non-simple cross-origin requests**
- Proper CORS configuration ensures smooth frontend-backend communication

[[Understanding Path Traversal Vulnerability]]