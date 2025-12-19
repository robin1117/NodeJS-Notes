#Streams
## 📘 Overview

When using the `fs/promises` module, file streaming works differently compared to the traditional `fs` module.  

Instead of directly using `fs.createReadStream()` or `fs.createWriteStream()`, you first open a file using `fs.open()` which returns a **FileHandle** object.  

This FileHandle can then be used to create readable and writable streams.

---
### 🔹 FileHandle in `fs/promises`

- Returned by `await fs.open(path, flags)`.
- Represents an open file descriptor.
- Provides stream creation methods:
  - `fileHandle.createReadStream()`
  - `fileHandle.createWriteStream()`

---

## 🧩 Example Code
  
```js

import fs from "fs/promises";

  
// 1️⃣ Open the file in read + write mode
const fileHandle = await fs.open("text.txt", "r+");

  

// 2️⃣ Create a readable stream
const readStream = fileHandle.createReadStream();
readStream.setEncoding("utf-8");

  
readStream.on("data", (chunk) => {
  console.log("Chunk from file:", chunk);
});

  

// 3️⃣ Create a writable stream
const writeStream = fileHandle.createWriteStream();
writeStream.write("hiiiiiiiiiiiiiiiii");


// 4️⃣ Close manually (optional)
await fileHandle.close();

```

---
## ⚙️ Key Points

| Feature                   | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| **Module Used**           | `fs/promises`                                                     |
| **Stream Creation**       | Through `FileHandle.createReadStream()` and `createWriteStream()` |
| **Encoding**              | Use `readStream.setEncoding("utf-8")` to receive string data      |
| **Backpressure Handling** | `writeStream.write()` supports chunked writing & backpressure     |
| **Closing**               | Use `await fileHandle.close()` to manually release resources      |

---

## 🧰 Advantages

- Works **asynchronously** with `async/await`.
- Integrates **promises** with **stream-based I/O**.
- Offers **fine-grained control** over file reading/writing.
- Reduces **memory usage** for large files.

---
## ⚡ Example Use Cases

- Reading & writing large log files.
- Transforming data streams (e.g., compressing or encrypting files).
- Real-time file monitoring & updates.

---

## 🧩 Summary Table

| Step | Operation           | Method                           |
| ---- | ------------------- | -------------------------------- |
| 1️⃣  | Open file           | `fs.open("file", "r+")`          |
| 2️⃣  | Create Read Stream  | `fileHandle.createReadStream()`  |
| 3️⃣  | Create Write Stream | `fileHandle.createWriteStream()` |
| 4️⃣  | Close File          | `await fileHandle.close()`       |

✅ **Tip:** Always close the file handle after use to prevent resource leaks.


[[How Browsers use Streams]]