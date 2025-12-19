#NetworkingCoreNodeJS

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>File Upload</title>
</head>
<body>
  <h1>Upload a File</h1>
  <form action="http://192.168.1.10:4000" method="post" enctype="multipart/form-data">
    <input type="file" name="file" required />
    <button type="submit">Upload</button>
  </form>
</body>
</html>
```


```js
import { createReadStream, write } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";


let server = net.createServer(async (socket) => {
    socket.write('HTTP/2\n')
    socket.write('Access-Control-Allow-Origin:*\n\n')
    // socket.write('Content-Type:video/mp4\n')
    // socket.write('Content-Disposition:inline')
    // socket.write(`Content-Length:${2}`)
    socket.write('\n\n')
    
    // let writeStream = createWriteStream('UPLOAD.TXT')
    
    socket.on('data', (data) => {
        console.log(data.toString());
        
        if (/WebKitFormBoundary.+--/g.test(data.toString())) {
            socket.end("Got the data")
        }
   
       // if (/^GET \/favicon.ico/.test(data.toString())) return;
       // writeStream.write(data.toString())
    })

  
    socket.on('close', (data) => {
        console.log('Client Disconnected', socket.remoteAddress);
    })


    socket.on('error', () => {
        console.log('Disconnected');
    })

  
    socket.on('end', () => {
        console.log('Disconnected with end');
    })

})

  
server.listen(4000, '0.0.0.0', (a, b) => {
    console.log('server is listening on :', server.address());
})
```

```txt
'UPLOAD.TXT'
POST / HTTP/1.1
Host: 192.168.1.10:4000
Connection: keep-alive
Content-Length: 197
Cache-Control: max-age=0
Origin: http://127.0.0.1:5500
DNT: 1
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryYCIBxlnTn9sYh5UC
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36 Edg/142.0.0.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Referer: http://127.0.0.1:5500/
Accept-Encoding: gzip, deflate
Accept-Language: en-GB,en;q=0.9,en-US;q=0.8,en-IN;q=0.7

------WebKitFormBoundaryYCIBxlnTn9sYh5UC
Content-Disposition: form-data; name="file"; filename="short.txt"
Content-Type: text/plain

😂0123456789
------WebKitFormBoundaryYCIBxlnTn9sYh5UC--

```
---

## ⭐ Why Header-Only Issue Happens

Browsers automatically send an extra request:

```
GET /favicon.ico
```

If your server doesn’t ignore this request, your upload logic receives unexpected data, causing only headers or broken content to be written into the file.

---
## 🧠 Purpose of the Code

The provided code fixes this by:
- Ignoring `/favicon.ico`
- Creating the write stream only once
- Handling backpressure using pause/resume
- Detecting multipart form end boundary
- Writing uploaded content to a file
- Sending manual HTTP response

---
# 🧩 Step-by-Step Explanation
  
## 1. Import modules

```js
import { createWriteStream } from "node:fs";
import net from "node:net";
```

## 2. Create the TCP server

```js
const server = net.createServer((socket) => {
```

Each connection gives a `socket`.

---
## 3. Stream setup variables

```js
let writeStream;
let isStreamCreated = false;
```

---
## 4. Handle incoming data

```js
socket.on("data", (chunk) => {
```

### 4.1 Ignore favicon request

```js
if (/^GET \/favicon.ico/.chunk.toString()) return;
```


---
### 4.2 Create a file stream only once

```js
if (!isStreamCreated) {
  writeStream = createWriteStream("upload-file.txt");
  socket.write("HTTP/1.1 200 OK");
  socket.write("\n\n");
  isStreamCreated = true;
  writeStream.on("drain", () => socket.resume());
}
```

---
### 4.3 Handle backpressure

```js
if (!writeStream.write(chunk)) socket.pause();
```

Write stream buffer full → pause receiving data.

---
### 4.4 Detect end of multipart upload

```js
if (/WebKitFormBoundary.+--/.test(chunk.toString())) {
  socket.end("Got your message!!");
}
```

---
# 5. Connection close & error handling

```js
socket.on("close", () => {
  console.log(socket.remoteAddress, ": Client disconnected");
  writeStream.close();
});

socket.on("error", () => {
  console.log(socket.remoteAddress, ": Client Lost");
});
```

---

# 6. Start server

```js
server.listen(4000, "0.0.0.0", () => {
  console.log(server.address());
  console.log("Server started on port 4000");
});

```

---
# 📌 Summary Table

| Feature               | Purpose                             |
| --------------------- | ----------------------------------- |
| Ignore favicon        | Prevent corrupted uploads           |
| Lazy file stream      | Only created when real data arrives |
| Backpressure handling | Prevents memory overload            |
| Boundary detection    | Finds end of uploaded file          |
| Proper cleanup        | Avoids leaks & errors               |

[[Creating HTTP Server Using HTTP Module]]