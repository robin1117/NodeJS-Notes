#Streams
## 🔍 Definition

A **File Descriptor (FD)** is a **non-negative integer** that uniquely identifies an **open file or stream** within the **operating system**.  

It acts like a **pointer or reference** used by the OS to manage and access files for reading, writing, or other I/O operations.

---
## 🔢 Standard File Descriptors

| **FD** | **Stream** | **Purpose**                      |
| :----: | :--------- | :------------------------------- |
|   0    | **stdin**  | Standard Input (Keyboard input)  |
|   1    | **stdout** | Standard Output (Console output) |
|   2    | **stderr** | Standard Error (Error messages)  |

➡️ Any file opened manually by Node.js usually starts from **FD ≥ 3**.

---
## ⚙️ Accessing File Descriptors in Node.js

### ✅ Asynchronous Method

```js

import fs from "fs";

fs.open("file.txt", (err, fd) => {
  if (err) throw err;
  console.log(fd); // e.g., 3 or higher
});

```

### ✅ Synchronous Method

```js

import { openSync } from "fs";

const fd = openSync("file.txt");
console.log(fd); // e.g., 3 or higher

```

---

## 🧠 Why File Descriptors are Important

- Each **open file or stream** gets a **unique descriptor** to track its state.  
- Used internally by Node.js for **low-level file system operations** like:
  - `fs.read(fd, ...)`
  - `fs.write(fd, ...)`
  - `fs.close(fd, ...)`
- Helps optimize **resource management** and ensures proper **I/O control**.
- Essential for **efficient handling of multiple open files** or **network sockets** simultaneously.

---
## 💡 Key Takeaways

- FD = Unique ID for an open file or stream.  
- Standard FDs: `0 (stdin)`, `1 (stdout)`, `2 (stderr)`.  
- Node assigns **FD ≥ 3** for user-opened files.  
- Used in **low-level fs operations** for direct file control.  
- Important for **resource tracking** and **system-level I/O efficiency**.


## [[Reading File with File Descriptor]]