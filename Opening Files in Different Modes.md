#Streams
## 🧠 Overview

In Node.js, when using **`fs.open()`** or **`fs.openSync()`**, you can specify a **file mode** to determine **how the file is accessed** — whether it's for reading, writing, appending, or both.

```js
const fd = fs.openSync(path, mode);
```

  
If no mode is passed, it defaults to **`"r"` (read-only)**.

---

## 🧪 Example

  
```js
import fs from "fs";

// Open file in write mode
const fd = fs.openSync("example.txt", "w");

fs.writeSync(fd, "Hello World!");
fs.closeSync(fd);
```

  
---

## 📘 Common File Modes

  

| **Mode** | **Description** | **Behavior**                                     |
| :------: | :-------------- | :----------------------------------------------- |
|  `"r"`   | Read-only       | Throws error if file doesn’t exist               |
|  `"r+"`  | Read and write  | Throws error if file doesn’t exist               |
|  `"w"`   | Write-only      | Creates file if not found, overwrites if exists  |
|  `"w+"`  | Read and write  | Creates file if not found, overwrites if exists  |
|  `"a"`   | Append-only     | Creates file if not found, writes at end of file |
|  `"a+"`  | Read and append | Creates file if not found, writes at end of file |

---
## 🧠 Notes

- `"+"` → Adds **read + write** capability.  
- `"w"` and `"a"` → Automatically **create the file** if it doesn’t exist.  
- Use `"r"` mode only if you’re **sure the file exists**.  
- Always **close** the file descriptor after using (`fs.close()` or `fs.closeSync()`).  
- These modes are similar to **POSIX file access flags** used by operating systems.

---
## 💡 Key Takeaways

- File modes define **how** a file is opened (read, write, append).  
- Default mode: `"r"` (read-only).  
- `"+"` → Adds both **read and write** access.  
- `"w"` / `"a"` → Create file if it doesn’t exist.  
- Always **close FDs** to free resources after use.