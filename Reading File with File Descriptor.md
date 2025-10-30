#Streams
## 🧠 Overview

When you want **low-level control** over file reading (without using streams or higher-level methods),  

you can use the **`fs.read()`** method with a **File Descriptor (FD)**.

---

## 🧪 Basic Example

```js

import fs from "fs";

// Open file synchronously
const fd = fs.openSync("text.txt");
  
// Read using the file descriptor
fs.read(fd, (err, bytesRead, bufferData) => {
  console.log(err);           // null if no error
  console.log(bytesRead);     // Number of bytes read
  console.log(bufferData);    // Buffer data
  console.log(bufferData.byteLength); // Default buffer size: 16 KB (16384)
});

```

---
## 📏 Limiting the Buffer Size

You can pass a custom buffer using the **`buffer`** option to control how much data to read.
  
```js

fs.read(
  fd,
  { buffer: Buffer.alloc(10) }, // Create a buffer of 10 bytes
  (err, bytesRead, bufferData) => {
    console.log(err);
    console.log(bytesRead); // Might be less than 10 if file is shorter
    console.log(bufferData); // Shows raw binary data
    console.log(bufferData.byteLength); // 10
  }
);
```

---
## 🎯 Reading from a Specific Position

You can also pass **additional options** like `position`, `offset`, and `length`.

  
```js

fs.read(
  fd,
  {
    buffer: Buffer.alloc(20), // Buffer to fill
    offset: 0,                // Start writing at the beginning of buffer
    length: 20,               // Read 20 bytes
    position: 5               // Start reading from byte 5 in the file
  },
  (err, bytesRead, bufferData) => {
    console.log(err);
    console.log(bytesRead);
    console.log(bufferData.toString()); // Convert buffer to readable text
  }
);

```


---

## 🔎 Summary of Options You Can Pass

| **Option** | **Description**                                 |
| ---------- | ----------------------------------------------- |
| `buffer`   | Where to store the read data (Buffer object)    |
| `offset`   | Start writing inside the buffer from this index |
| `length`   | How many bytes to read                          |
| `position` | File position from where to begin reading       |

---
## 💡 Key Points

- `fs.read()` gives **fine-grained control** over file I/O.  
- Useful for **reading partial data** or working with **binary files**.  
- The **default buffer size** is **16 KB (16384 bytes)** if not specified.  
- Always **close the file descriptor** after reading using `fs.close(fd, ...)` to avoid memory leaks.


[[Opening Files in Different Modes]]