#NetworkingCoreNodeJS 
## 🌐 Introduction

HTTP is a **stateless protocol** where a client (browser or program) sends a **request**, and the server sends back a **response**.  
Both messages are plain text and follow a strict structure.  

---
# 🔹 HTTP Request Format

An HTTP request has **3 main parts**:

1. **Request Line** – Method, Path, and HTTP Version  
2. **Headers** – Extra meta-information  
3. **Body** – Optional data (for POST, PUT, etc.)
### General Format:

```
<Method> <Path> <HTTP Version>
<Header-Name-1>: <Header-Value-1>
<Header-Name-2>: <Header-Value-2>
...
<Optional-Body>
```


---

## 🧩 Example 1: GET Request

```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept-Language: en-US
```

```
GET / HTTP/1.1
Host: 192.168.1.10:4000
Connection: keep-alive
DNT: 1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36 Edg/142.0.0.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7       
Accept-Encoding: gzip, deflate
Accept-Language: en-GB,en;q=0.9,en-US;q=0.8,en-IN;q=0.7
```

### Explanation:

- **GET** → Fetch data  
- **/index.html** → Resource path  
- **HTTP/1.1** → Protocol version  
- Headers provide browser details and preferences  

---
## 🧩 Example 2: POST Request

```
POST /submit-form HTTP/1.1
Host: www.example.com
Content-Type: application/json
Content-Length: 27
{
  "name": "John Doe",
  "age": 30
}
```

```
POST /LUND/bosdi HTTP/1.1
content-length: 20
accept-encoding: gzip, deflate, br
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Content-Type: application/json
Host: 192.168.1.10:4000
Connection: close

{
  "Name":"Robin"
}
```

### Explanation:

- **POST** sends data inside the request body  
- **Content-Type** describes the format (JSON here)  
- **Content-Length** indicates the number of bytes in the body  
- The **body** contains the JSON payload  


---

# 🔹 HTTP Response Format

A server's response also has **3 parts**:

1. **Status Line** — Version, Status Code, Reason Phrase  
2. **Headers** — Metadata about the response  
3. **Body** — Actual returned data (HTML, JSON, etc.)

### General Format:

```
<HTTP Version> <Status Code> <Reason Phrase>
<Header-Name-1>: <Header-Value-1>
<Header-Name-2>: <Header-Value-2>
...

<Optional-Body>
```


---

## 🧩 Example: Successful Response

```

HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1354

<html>
  <head><title>Example</title></head>
  <body>Hello, world!</body>
</html>

```

### Explanation:

- **Status Line** → `200 OK` means success  
- **Headers** → Explain the content being returned  
- **Body** → The HTML page  


---

# 💡 Key Takeaways

- **Request Line** → Method + Path + Version  
- **Status Line** → Version + Status Code + Reason Phrase  
- **Headers** → Key-value pairs providing extra info  
- **Body** → Optional  
- A **blank line** separates headers from the body  
- This structured format is the foundation of all HTTP communication


[[Creating a Web Server Using Node.js]]