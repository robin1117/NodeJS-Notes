#Streams
## 📘 Overview

When you create a server using Node.js’s built-in `http` module, **streams** play a crucial role behind the scenes.  

Every browser request and response in Node.js is handled as a **stream**, allowing efficient data transfer without loading entire files into memory.

  
---

## 🧠 Core Concept

When a browser communicates with a Node.js server:
  
| Component         | Stream Type        | Description                                                               |
| ----------------- | ------------------ | ------------------------------------------------------------------------- |
| **req (Request)** | 🟢 Readable Stream | The browser sends data to the server (like file uploads or form data).    |
| **res(Response)** | 🔵 Writable Stream | The server sends data back to the browser (like HTML, images, or videos). |

✅ This stream-based approach allows the browser to **send and receive large data efficiently** — chunk by chunk.

---

## 💻 Example: Sending an Image in Chunks

  
```js

import http from "http";
import fs from "fs/promises";

  

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "image/webp");

  
  const fileHandle = await fs.open("river.webp");
  const readStream = fileHandle.createReadStream({ highWaterMark: 1000 }); // 1000 bytes


  readStream.on("data", (chunk) => {
    res.write(chunk); // Sending chunk to browser
    readStream.pause(); // Pause to simulate delay
    setTimeout(() => readStream.resume(), 10); // Resume after delay
  });

  readStream.on("end", () => {
    res.end(); // End the response
  });

});

  
server.listen(4000, "localhost", () => {
  console.log("✅ Server started at http://localhost:4000");
});

```

  
---
  

## 🔍 What’s Happening Step-by-Step

  
1️⃣ The `readStream` reads the file (`river.webp`) in chunks of 1000 bytes.  
2️⃣ Each chunk is written to the browser response using `res.write(chunk)`.  
3️⃣ The stream is **paused and resumed** to simulate delay — demonstrating backpressure handling.  
4️⃣ Once all chunks are sent, `res.end()` closes the response.  

---

## 🧪 Real-World Behavior

- The browser **receives partial data progressively** instead of waiting for the full file.  
- This enables **progressive rendering**, like:  
  - 🖼️ Images loading gradually  
  - 📺 Video buffering  
  - 🔄 Infinite scrolling feeds  
- The user sees content **faster** without waiting for the full download.

---
## ⚙️ Why This Matters

| Benefit             | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| **Efficiency**      | Avoids loading large files entirely into memory               |
| **Scalability**     | Handles many requests simultaneously with less resource usage |
| **Performance**     | Sends chunks to the browser as soon as they're available      |
| **User Experience** | Enables smooth, responsive loading (like YouTube or Netflix)  |

---

## 🧠 Bonus Insight

- You can stream **any file type**: images, videos, text, JSON, etc.  
- Ideal for **real-time apps**, **APIs**, or **media servers**.  
- Works with **Backpressure Control** — preventing fast producers from overwhelming slow consumers.  

---

## 🧩 Summary Table

| Step | Action              | Method                                           |
| ---- | ------------------- | ------------------------------------------------ |
| 1️⃣  | Open File           | `fs.open("file")`                                |
| 2️⃣  | Create Read Stream  | `fileHandle.createReadStream({ highWaterMark })` |
| 3️⃣  | Send Chunks         | `res.write(chunk)`                               |
| 4️⃣  | Handle Backpressure | `readStream.pause()` / `readStream.resume()`     |
| 5️⃣  | End Response        | `res.end()`                                      |

---

✅ **Conclusion:**  
Browsers and Node.js servers both rely on **streams** for efficient, scalable, and memory-friendly data handling — enabling features like live streaming, buffering, and progressive rendering.


[[Streams in JavaScript]]