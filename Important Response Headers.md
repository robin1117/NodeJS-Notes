#NetworkingCoreNodeJS
When using the `net` module (raw TCP) instead of the built-in `http` module,  
**we must manually send HTTP response headers** before sending the actual file or data.

Example:

```js
const server = net.createServer(async (socket) => {
    const fileHandle = await open("numbers.txt");
    const readStream = fileHandle.createReadStream();

    const { size } = await fileHandle.stat();

    socket.write("HTTP/1.1 200 OKAY\n");
    socket.write("Content-Type: text/txt; charset=utf-8\n");
    socket.write(`Content-Length: ${size}\n`);
    socket.write("\n"); // End of headers

    readStream.pipe(socket);
});
```

---

## ⚙️ 1. **Content-Length**
**Purpose:**  
Tells the browser the exact number of bytes the server will send.

Example:
```
Content-Length: 1024
```

### Why is it important?
- The browser knows **when the response ends**.
- After receiving this number of bytes, the browser **automatically closes the connection**.
- If missing, the browser may:
  - Wait forever  
  - Cut the connection early  
  - Fail to display the file  

---

## 🧾 2. **Content-Type**
**Purpose:**  
Tells the browser what type of data is being sent (text, image, JSON, etc.)

Example:
```
Content-Type: text/plain; charset=utf-8
```

### Why is it important?
The browser uses this to decide:
- How to render the content  
- Whether to download or open it  
- Which default viewer to use  

### Common MIME Types
| Type       | Example MIME     | Description |
| ---------- | ---------------- | ----------- |
| HTML       | text/html        | Web pages   |
| Plain Text | text/plain       | Raw text    |
| JSON       | application/json | API data    |
| PNG        | image/png        | Images      |
| JPEG       | image/jpeg       | Photos      |
| PDF        | application/pdf  | Documents   |

---

## 📎 3. **Content-Disposition**
**Purpose:**  
Controls **how the browser should handle the file**.

### A. Force Download
```
Content-Disposition: attachment; filename="hello.pdf"
```
The browser will open a **download dialog**.

### B. Display in Browser (Inline)
```
Content-Disposition: inline
```
Useful for:
- PDFs  
- Images  
- Text files  

### Extra Properties
You can add extra data using semicolons:

Example:
```
Content-Disposition: attachment; filename="report.pdf"; size=2048
```

---

## ✅ Summary
- When using `net`, **you must manually write headers**.
- **Content-Length** = how many bytes to expect  
- **Content-Type** = what type of file  
- **Content-Disposition** = download or preview behavior  
- Always end headers with:
```
\n\n
```
before sending the body.


---
```js
import { createReadStream, write } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";

  
let server = net.createServer(async (socket) => {
    let fileHandel = await open("D:\\Camo Studio Recording 2025-06-10 13-32-18.mp4")
    let readStream = fileHandel.createReadStream()
    let { size } = await fileHandel.stat();

    console.log('I resently made a connection', socket.remotePort);
    
    //| Respons Header |
    socket.write('HTTP/2\n')
    socket.write('Access-Control-Allow-Origin:*\n')
    socket.write('Content-Type:video/mp4\n')
    socket.write('Content-Disposition:inline\n')
    socket.write(`Content-Length:${size}`)
    socket.write('\n\n')

  
    // let readStream = createReadStream("D:\Camo Studio Recording 2025-06-10 13-32-18.mp4")
    // let readStream = createReadStream("G:\\20221023_062709.jpg",{highWaterMark:1})
    // let readStream = createReadStream("C:\\Users\\Devin\\Desktop\\short.txt")

    readStream.pipe(socket)

    // socket.write('{"name":"Roboin"}')
    // socket.end()
    // readStream.on('end', () => {
    //     console.log('File Ended');
    //     fileHandel.close()
    // })

  
    socket.on('data', (data) => {
        console.log(data.toString());
    })

    socket.on('close', (data) => {
        console.log('Client Disconnected', socket.remoteAddress, "🥲");
        fileHandel.close()
    })

    socket.on('error', () => {
        console.log('Disconnected');
        fileHandel.close()
    })

    socket.on('end', () => {
        console.log('Disconnected with end');
        fileHandel.close()
    })

})


server.listen(4000, '0.0.0.0', (a, b) => {
    console.log('server is listening on :', server.address());
})
```


[[Controlling Data Transfer Speeds]]