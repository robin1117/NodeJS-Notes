#NetworkingCoreNodeJS
## 🌐 Introduction

Node.js makes it very easy to create a web server.  

With just the **http** and **fs** modules, you can serve static files like HTML, CSS, and JavaScript efficiently.

---

## 🧾 Full Server Code


```js

import { createReadStream } from "fs";
import http from "http";


const server = http.createServer(async (req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    const readStream = createReadStream("./public/index.html");
    readStream.pipe(res);
  } else {
    const readStream = createReadStream(`./public${req.url}`);
    readStream.on("error", (err) => {
      console.log(err.message);
      res.end("Not Found!");
    });
    readStream.pipe(res);
  }
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started");
});

```

`MY-CODE` :
```js
import { createReadStream } from "fs";
import http from "http";


let server = http.createServer(async (req, res) => {
    console.log(req.url);
    if (req.url == '/') {
        let readStream = createReadStream('./public/index.html')
        readStream.pipe(res)
    }

    else if (req.url == '/favicon.ico') {
        let readStream = createReadStream('./public/favicon.ico')
        readStream.pipe(res)
    }

    else if (req.url == `${req.url}`) {        
        let readStream = createReadStream(`./public${req.url}`)
        readStream.pipe(res)

        readStream.on('error',()=>{
            res.end('File not found')
        })
    }
});


server.on('connection', () => {
    // console.log('client connected');
});


server.listen({ port: 4000, host: '0.0.0.0' }, () => {
    console.log('Server is Listening at', server.address());
});
```

---

# 🧩 Step-by-Step Understanding

## **1. Importing Modules**

- `http` → Used for creating the server  
- `fs` → Used for reading files using streams  


---

## **2. Creating the Server**

`http.createServer()` runs for every request.  

Parameters:
- `req` → Incoming request  
- `res` → Outgoing response  


---

## **3. Handling Requests**

### If `/` (home page)

```js
createReadStream("./public/index.html").pipe(res);
```


### For any other file (CSS, JS, images, etc.)

```js
createReadStream(`./public${req.url}`).pipe(res);
```


---

## **4. Using Streams (Efficient File Handling)**

`createReadStream()`:
- Reads file as a **stream**
- Does NOT load entire file into memory
- Good for performance

`pipe(res)`:
- Sends data directly to browser  
- Handles backpressure automatically  

---
## **5. Error Handling**

If file does not exist:

```js
readStream.on("error", () => {
  res.end("Not Found!");
});
```

---
## **6. Starting the Server**

```js
server.listen(4000, "0.0.0.0");
```

- Runs server on port **4000**
- `0.0.0.0` → Accessible from LAN (mobile, laptop etc.)

---
# ✅ Summary

| Feature        | Description                      |
| -------------- | -------------------------------- |
| HTTP Server    | Handles incoming requests        |
| Streams        | Efficient file-serving mechanism |
| `pipe()`       | Transfers file → response        |
| Error handling | Prevents server crash            |
| 0.0.0.0        | LAN-friendly server              |

---
 
This is a clean, simple, and efficient static web server using Node.js.


[[Creating Online Storage Platform Like Google Drive]]