#Express 
## 🕒 When Did CORS Come?

- The **CORS (Cross-Origin Resource Sharing)** standard was started by **W3C** in the **mid-2000s**.
- The first draft appeared around **2006**.
- It became an **official W3C recommendation in 2014**.
- Before CORS, browsers only followed the **Same-Origin Policy (SOP)**, which was very strict.

---
## 🛡️ What Did the Same-Origin Policy (SOP) Do?

- SOP was introduced around **1995 by Netscape**.
- Its goal was to secure **JavaScript and the DOM**.
- It restricted how scripts interact with content from other origins.
### 🔹 What Is an Origin?  

An **origin** is defined by:
- **Protocol** (http / https)
- **Domain**
- **Port**
#### Example:

```
http://localhost:3000
http://localhost:5000
```

These are **different origins** because the **port numbers are different**.

---
## 🔒 Browser Behavior Before CORS

- Scripts from one origin **could not read response data** from another origin.
- JavaScript had **full access only to the same origin**.
### Cross-Origin Access (Before CORS)

- Cross-origin **GET requests** were possible using HTML tags like `<img>` and `<script>`.
- JavaScript **could not read response data**.
- **AJAX / XHR cross-origin reads were blocked**.

---
## ⚙️ What Did CORS Change?

- CORS is a **controlled relaxation layer**.
- It does **not remove SOP**.
- It allows the **server to explicitly allow access** using headers.

---
## 📌 Important CORS Headers

### Access-Control-Allow-Origin

```js
res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
res.set("Access-Control-Allow-Origin", "*");
```
### Access-Control-Allow-Methods

Allows HTTP methods like GET, POST, PUT, DELETE.
### Access-Control-Allow-Headers

Allows custom headers like Content-Type and Authorization.

---
## 🚦 Preflight Requests (OPTIONS)

- Sent for custom headers or non-simple methods.
- If not handled, browser shows a **preflight error**.

---
## 🛠️ Enabling CORS in Express

### Manual Method

```js
app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
  });
  next();
});
```

### Handle Preflight

```js
app.options("*", (req, res) => {
  res.sendStatus(204);
});
```

---
### Using CORS Middleware (Recommended)

```bash
npm install cors
```

```js
import cors from "cors";
app.use(cors());
```

---
## ✅ Summary

- SOP is strict for security.
- CORS allows controlled cross-origin access.
- Using `cors` middleware is best for production apps.


[[Understanding Preflight Request]]