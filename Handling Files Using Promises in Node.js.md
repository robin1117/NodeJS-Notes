#Streams

The `fs/promises` module in **Node.js** enables modern, clean, and readable file handling using **async/await** — avoiding traditional callback-based code.

---
## 📘 Key Concept

When using `fs/promises`, you don't get a raw **file descriptor (fd)** directly. Instead, you get a **FileHandle** object, which internally manages the file descriptor.

  
This `FileHandle` provides powerful asynchronous methods such as:
- `.read()` — Reads data from a file.
- `.write()` — Writes data to a file.
- `.close()` — Closes the file handle safely.

---

## ✅ Example: Reading and Writing a File
  

```js

import fs from "fs/promises";

// 1️⃣ Open the file
const fileHandle = await fs.open("text.txt", "r+");  // "r+" = read and write

  
// 2️⃣ Read from file
const { buffer, bytesRead } = await fileHandle.read({
  buffer: Buffer.alloc(10), // Allocate a buffer of 10 bytes
});

console.log("Read Buffer:", buffer.toString());
console.log("Bytes Read:", bytesRead);

  
// 3️⃣ Write to file
const { buffer: writtenBuffer, bytesWritten } = await fileHandle.write("hii");
console.log("Written Buffer:", writtenBuffer.toString());
console.log("Bytes Written:", bytesWritten);

// 4️⃣ Close the file
await fileHandle.close();

```

  ---

## 🧠 Important Notes

### 🔹 1. FileHandle Object

- `fs.open(path, mode)` returns a **FileHandle** object instead of an fd (file descriptor).
- You can still access the underlying descriptor with `fileHandle.fd` if needed.

### 🔹 2. Common Modes

| Mode  | Description                                         |
| ----- | --------------------------------------------------- |
| `r`   | Read only — file must exist                         |
| `r+`  | Read and write — file must exist                    |
| `w`   | Write only — creates file (truncates if exists)     |
| `w+`  | Read and write — creates file (truncates if exists) |
| `a`   | Append only — creates file if not exists            |
| `a+`  | Read and append — creates file if not exists        |

### 🔹 3. Always Close the File

- Use `await fileHandle.close()` after finishing operations.
- Prevents memory leaks and ensures file integrity.

### 🔹 4. Error Handling

Use `try...catch` to handle exceptions properly:

```js

try {

  const fileHandle = await fs.open("data.txt", "r+");
  const { buffer } = await fileHandle.read({ buffer: Buffer.alloc(10) });
  console.log(buffer.toString());
  await fileHandle.close();

} catch (err) {
  console.error("Error:", err);
}

```

---
## 🧩 Summary

| Step | Method      | Description                       |
| ---- | ----------- | --------------------------------- |
| 1️⃣  | `fs.open()` | Opens file and returns FileHandle |
| 2️⃣  | `.read()`   | Reads bytes into a buffer         |
| 3️⃣  | `.write()`  | Writes string or buffer data      |
| 4️⃣  | `.close()`  | Closes the file safely            |

---


**✅ Best Practice:** Always use `try...finally` or `try...catch` with `.close()` to ensure files are properly released, especially in long-running applications.