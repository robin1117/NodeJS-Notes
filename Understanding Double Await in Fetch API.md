#NetworkingCoreNodeJS 
## 🌐 Why Two Awaits?

When using the Fetch API, you often see code like:

```js
const response = await fetch("https://example.com/");
const data = await response.json();
```

This uses **two separate `await` statements**, and each has a different purpose.

---
## ✅ 1. First Await: `await fetch(url)`

- Waits until the **HTTP response arrives**.
- At this stage, **only metadata** is available:
  - Status code (e.g., `200`, `404`)
  - Headers
- **Body is NOT yet processed**.
- The response stream might still be downloading.

---
## ✅ 2. Second Await: `await response.json()`

- Reads the **response body**.
- Parses it **asynchronously** into JSON.
- Takes more time if:
  - Payload is large  
  - Network is slow  
  - Streaming data is involved  
  
This ensures the UI or event loop doesn’t get blocked during parsing.


---

## 🧠 Key Understanding

| Step                    | What Happens             | What You Get       |
| ----------------------- | ------------------------ | ------------------ |
| `await fetch(url)`      | Server response received | Headers + status   |
| `await response.json()` | Body is read + parsed    | Actual usable data |

If you **skip the second await**, you’ll only get a **Promise**, not the actual data.

---

## 📦 Why This Two-Step Design?

- **Headers arrive earlier** than the full body.
- **Parsing large JSON** takes time.
- Browser keeps the operation **non‑blocking** and asynchronous.
- Provides flexibility for:
  - `response.text()`
  - `response.blob()`
  - `response.formData()`
  - `response.arrayBuffer()`

All of these read the **body stream asynchronously**.

---

## 📌 Summary

- `fetch()` resolves when the **response metadata** is ready.
- `.json()` resolves when the **body is fully downloaded + parsed**.
- Using both awaits is necessary for:
  - Clean code
  - Predictable behavior
  - Handling real data reliably

---
## ✔ Example Code (Complete)

```js

async function getData() {
  const response = await fetch("https://example.com/api");
  console.log(response.status); // available now
  const data = await response.json();
  console.log(data); // actual parsed JSON
}

```

---
## 📚 Final Notes

- This design makes the Fetch API **fast**, **stream‑friendly**, and **non‑blocking**.
- Always remember:  
  **First await → headers**  
  **Second await → actual data**

---

- The first await over the fetch resolves only after the response headers are fully received till to `\n\n.`
- And the second await resolves after the data is received fully or until we are not calling `socket.end()`

```js
let response = await fetch('http://192.168.1.10:4000')
let data = await response.text()

console.dir(data);
```

Still, if you want to send data to the frontend, you can do it by making a few changes in the code. With the code below, you can access the data immediately—even while it’s still being received. I mean, you can access it even before the full data arrives.

```js
let response = await fetch('http://192.168.1.10:4000')

let decoder = new TextDecoder()
for await (let chunk of response.body) {
    // console.log(decoder.decode(chunk));
    document.write(decoder.decode(chunk))
}
```

As we set `highWaterMark: 32` means we are going to send data chunk by chunk containing `32bytes` Each until the full file not reaches over there.

```js
import { createReadStream, write } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";


let server = net.createServer(async (socket) => {
    let fileHandel = await open("C:\\Users\\Devin\\Desktop\\bigger.txt")
    let readStream = fileHandel.createReadStream({ highWaterMark: 32 })
    let { size } = await fileHandel.stat();

    //<Response Heder that make browser Understand what the file is related to>
    console.log('I resently made a connection', socket.remotePort);
    socket.write('HTTP/2\n')
    socket.write('Access-Control-Allow-Origin:*\n\n')
    // socket.write('Content-Type:video/mp4\n')
    // socket.write('Content-Disposition:inline')
    // socket.write(`Content-Length:${2}`)
    // socket.write('\n\n')


    readStream.on('data', (chk) => {
        socket.write(chk)
    })


    // socket.end()

    readStream.on('end', () => {
        console.log('File Ended');
        fileHandel.close()
    })

    readStream.on('resume', () => {
        console.log('Stream Resume');
    })

    readStream.on('pause', () => {
        console.log('Stream Paused');
    })

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


[[Uploading Files]]