#Streams
## 🧠 Overview

To write data to a file using **low-level file descriptors**, Node.js provides the methods **`fs.write()`** (asynchronous) and **`fs.writeSync()`** (synchronous).  

Before writing, you must first **open the file** in an appropriate mode — usually `"w"` for write operations.  

---

## ✅ Step-by-Step Process

### 1️⃣ Open the File in Write Mode

```js

import fs from "fs";
const fd = fs.openSync("file.txt", "w");

// "w" ensures it's writable

```


> **Mode "w"**:  
> - Creates the file if it doesn’t exist.  
> - Truncates (clears content) if it already exists.


---

### 2️⃣ Write to the File (Asynchronous)

```js

fs.write(fd, "Hello World", (err, bytesWritten, str) => {  
  console.log("Error:", err);  
  console.log("Bytes Written:", bytesWritten);  
  console.log("String Written:", str);
});

```

- **`bytesWritten`** → Number of bytes actually written.  
- **`str`** → The actual string written.

---

### 3️⃣ Or Use the Synchronous Version

```js
const bytes = fs.writeSync(fd, "Hello Sync World");
console.log("Bytes Written (Sync):", bytes);
```

- Returns the **number of bytes written** directly.  
- Simpler for small scripts or single operations.


---

## ⚠️ Important: Close the File

Always close the file after writing to **free system resources** and ensure all data is saved properly.

```js
fs.closeSync(fd);
```
  
---
## 💡 Key Takeaways
  
- Use **`fs.write()`** for async operations (non-blocking).  
- Use **`fs.writeSync()`** for simple or synchronous scripts.  
- `"w"` mode automatically **creates or truncates** files.  
- Always **close the file descriptor** after use.  
- Ideal for **low-level control** over file writing (binary or partial writes).

---

## 📘 Related Methods
  
| **Method**                      | **Description**                              |
| ------------------------------- | -------------------------------------------- |
| `fs.open()` / `fs.openSync()`   | Opens a file and returns its file descriptor |
| `fs.write()` / `fs.writeSync()` | Writes data to the file using the descriptor |
| `fs.close()` / `fs.closeSync()` | Closes the file descriptor after operation   |

[[Write One Lakh Numbers Faster than Streams]]