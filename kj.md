# 🧾 CORS & Same-Origin Policy – History and Core Concepts

  

## 🕒 Short History

  

### Same-Origin Policy (SOP)

- Introduced around **1995 by Netscape**

- Designed to secure **JavaScript and DOM access**

- Prevents malicious websites from reading sensitive data from other sites

  

### CORS (Cross-Origin Resource Sharing)

- Early drafts appeared around **2006**

- Became an official **W3C Recommendation in 2014**

- Created to provide a **controlled relaxation** of SOP

  

---

  

## 🛡️ What is Same-Origin Policy?

  

**Same-Origin Policy (SOP)** is a browser security rule.

  

### Origin =

```

protocol + domain + port

```

  

### Example

```text

http://localhost:3000

http://localhost:5000

```

❌ Different origins (port is different)

  

---

  

## 🔒 Browser Behavior Before CORS

  

Before CORS:

- JavaScript could **only read responses from the same origin**

- Cross-origin access was **blocked by default**

  

Allowed:

- `<img>`, `<script>` could make requests

- ❌ JavaScript could NOT read their response data

  

Blocked:

- AJAX / XHR / fetch cross-origin data access

  

This prevented attacks like:

- Bank data theft

- Cross-site scripting misuse

  

---

  

## ⚙️ What CORS Changed

  

CORS does **NOT remove SOP**.  

It adds a **permission system**.

  

Server can explicitly say:

> “This origin is allowed to access my data.”

  

This is done using **HTTP response headers**.

  

---

  

## 🔑 Important CORS Headers

  

### Access-Control-Allow-Origin

Defines **which origin is allowed**.

  

```js

res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

```

  

Allow all (⚠️ dev only):

```js

res.set("Access-Control-Allow-Origin", "*");

```

  

---

  

### Access-Control-Allow-Methods

Which HTTP methods are allowed:

```js

GET, POST, PUT, DELETE, PATCH

```

  

---

  

### Access-Control-Allow-Headers

Which custom headers are allowed:

```js

Content-Type, Authorization

```

  

---

  

## 🔁 Preflight Requests (OPTIONS)

  

Browser sends a **preflight request** when:

- Using non-simple methods (PUT, PATCH, DELETE)

- Using custom headers

- Sending JSON content-type

  

If server doesn’t respond correctly → ❌ CORS error

  

---

  

## 🧩 Enabling CORS in Express

  

### 1️⃣ Manual Headers

  

```js

app.use((req, res, next) => {

  res.set({

    "Access-Control-Allow-Origin": "http://127.0.0.1:5500",

    "Access-Control-Allow-Methods": "*",

    "Access-Control-Allow-Headers": "*",

  });

  next();

});

```

  

Handle preflight:

```js

app.options("*", (req, res) => {

  res.sendStatus(204);

});

```

  

---

  

### 2️⃣ Using `cors` Middleware (Recommended)

  

```bash

npm install cors

```

  

```js

import cors from "cors";

  

// allow all (development)

app.use(cors());

  

// OR restrict to one frontend

app.use(cors({

  origin: "http://localhost:3000",

}));

```

  

✔ Automatically handles headers  

✔ Automatically handles preflight requests  

✔ Cleaner & production-ready

  

---

  

## 🧠 Key Takeaways

  

- SOP is **browser-side security**

- CORS is **server-controlled permission**

- Browsers remain strict unless headers are present

- CORS errors are **browser errors**, not server errors

- Backend must explicitly allow frontend origins

  

---

  

## 🎯 Interview-Ready Answer

  

> CORS is a W3C standard that allows servers to safely relax the browser’s Same-Origin Policy by using HTTP headers. It enables controlled cross-origin data access while maintaining security.

  

---

  

## ✅ One-Line Summary

**Same-Origin Policy blocks cross-origin access; CORS allows it safely using server-defined headers.**



