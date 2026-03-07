#Express
# 🍪 Browser Cookies – Complete Notes

## What Are Cookies?

Cookies are **small pieces of data (up to ~4KB)** stored by the browser as **key–value pairs**. They are mainly used to **remember user-related information** across requests.

- Stored in the browser
- Automatically sent to the server with HTTP requests (if conditions match)
- Used for authentication, sessions, preferences, tracking, etc.

---
## Accessing Cookies in JavaScript

```js
document.cookie
```

- Returns **all accessible cookies** as a single string
- Cookies are separated by semicolons
- Only cookies **without HttpOnly flag** are accessible in JS

Example output:

```
username=Robin; theme=dark
```

---

## What Do Cookies Store?

Each cookie can store the following information:

- **Key** – name of the cookie
- **Value** – stored data (string only)
- **Domain** – which domain can access the cookie
- **Path** – URL path where cookie is valid
- **Expiry date / time** – when cookie should be deleted
- **Size** – max ~4KB per cookie
- **Flags / Attributes** – Secure, HttpOnly, SameSite, etc.

---

## Cookie Structure

```text
key=value; attribute1; attribute2=value
```

Example:

```text
token=abc123; Max-Age=3600; Path=/; Secure; HttpOnly; SameSite=Strict
```

---

## Expiry / Lifetime of Cookies

### Session Cookies (Default)

- No expiry set
- Deleted when browser is closed

### Persistent Cookies

You can define custom lifetime using:

#### 1. `max-age` (Preferred)

- Lifetime in **seconds**
- More reliable than `expires`

```text
Max-Age=3600   // 1 hour
```

#### 2. `expires`

- Specific date & time

```text
Expires=Fri, 31 Dec 2026 12:00:00 UTC
```

---

## Important Cookie Attributes / Flags

### 1. `Path`

- Defines which URL paths can access the cookie

```text
Path=/        // Entire website
Path=/admin   // Only /admin routes
```

---

### 2. `Domain`

- Defines which domain can use the cookie

```text
Domain=example.com
```

- Allows subdomains by default
- Wider domain = less secure

---

### 3. `Secure`

- Cookie is sent **only over HTTPS**
- Prevents interception over HTTP

```text
Secure
```

✅ Mandatory for production

---

### 4. `HttpOnly`

- Cookie **cannot be accessed via JavaScript**
- Protects against XSS attacks

```text
HttpOnly
```

⚠️ Can only be set by the server

---

### 5. `SameSite`

- Controls whether cookies are sent with cross-site requests
- Helps prevent CSRF attacks

```text
SameSite=Strict
SameSite=Lax
SameSite=None
```

Values:

- **Strict** – Sent only in same-site requests
- **Lax** – Sent on top-level navigation (default)
- **None** – Sent everywhere (must use `Secure`)

---

## Encoding Rules

- Cookie values must be **URL-encoded** if they contain special characters

```js
encodeURIComponent("hello world")
```

---

## Multiple Cookies

- A browser can store **multiple cookies** per domain
- Each cookie must have a **unique key + path + domain** combination

---
## First-Party vs Third-Party Cookies

### First-Party Cookies

- Set by the domain shown in the address bar
- Generally safe and commonly used

### Third-Party Cookies

- Set by **other domains** (ads, analytics, trackers)
- Increasingly blocked by modern browsers

---

## Cookies vs Local Storage (Quick Comparison)

|Feature|Cookies|localStorage|
|---|---|---|
|Sent to server|✅ Yes|❌ No|
|Size limit|~4KB|~5–10MB|
|Expiry|Automatic|Manual|
|Secure auth|✅ Yes|❌ No|

---

## Common Use Cases

- 🔐 Authentication tokens / sessions
- 🛒 Shopping cart
- 🌙 Theme preference
- 🌍 Language selection
- 📊 Analytics & tracking

---

## Security Best Practices

- ❌ Never store passwords in cookies
- ✅ Use `HttpOnly` for auth cookies
- ✅ Always use `Secure` in production
- ✅ Prefer `SameSite=Strict` or `Lax`
- ✅ Use `max-age` instead of `expires`

---

## Key Takeaway

Cookies are **small but powerful**. When used correctly with proper flags, they enable secure authentication and smooth user experiences.


[[Setting Cookies from Server]]