#Express 
# 🍪 Cookies in Web Development

## 1. How Cookies Are Set from Server

A cookie is sent from the server using the `Set-Cookie` header:

    Set-Cookie: name=sahil

When the browser receives this header in a response, it stores the
cookie automatically (if rules match).

------------------------------------------------------------------------
## 2. HttpOnly Cookies

-   Cookies with the `HttpOnly` flag **cannot be accessed via
    JavaScript** (`document.cookie`).
-   Only the server can set and read them.
-   Great for storing sensitive information (e.g., authentication tokens).

------------------------------------------------------------------------
## 3. Accessing Cookies in Server (Node.js / Express)

You can access cookies using:

``` js
const cookies = req.headers.cookie;
```

⚠️ This gives a raw string.  
### Better Approach: Use `cookie-parser`

``` js
const cookieParser = require('cookie-parser');
app.use(cookieParser());
console.log(req.cookies); // parsed object
```

------------------------------------------------------------------------
## 4. Setting Cookies Using Express

``` js
res.cookie("name", "sahil", {
  maxAge: 1000 * 60 * 60, // 1 hour
  httpOnly: true,
  secure: true,
  sameSite: "strict"
});
```

### Cookie Options Explained

-   `maxAge` → Cookie expiration time
-   `httpOnly` → Prevents JavaScript access
-   `secure` → Only sent over HTTPS
-   `sameSite` → Controls cross-site cookie behavior

------------------------------------------------------------------------
## 5. Cross-Origin Cookie Sharing

When making `fetch` or `XHR` calls to another domain:
### Fetch defaults to:

``` js
credentials: "same-origin"
```
### Possible values:

-   `"omit"` → Never send cookies
-   `"same-origin"` → Send only if same origin
-   `"include"` → Always send (even cross-origin)

⚠️ If `credentials: "include"` is used, the server must respond with : <font color="#76923c">Access-Control-Allow-Credentials: true</font>

Otherwise, the browser will ignore the cookie.

------------------------------------------------------------------------
## 6. XHR vs Fetch -- Credentials

### XHR:

``` js
xhr.withCredentials = true;
```
### Fetch:  

``` js
fetch(url, {
  credentials: "include"
});
```

------------------------------------------------------------------------
# ✅ Summary  

-   Cookies are sent using `Set-Cookie` header.
-   `HttpOnly` cookies cannot be accessed via JavaScript.
-   Use `cookie-parser` for easier server-side parsing.
-   Cross-origin cookies require both:
    -   `credentials: "include"` (client-side)
    -   `Access-Control-Allow-Credentials: true` (server-side)


[[Content Types in HTTP Requests (Express.js)]]