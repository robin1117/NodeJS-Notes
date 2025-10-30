#Buffers
Buffers are powerful for handling binary data, but they have **limitations** when it comes to dealing with **large files** or **continuous data streams**.
## 🧱 What is the Limitation?

When you use Buffer to read a file:

```js
import fs from "fs/promises";
const data = fs.readFile("large-file");
console.log(data.toString());
import fs from "fs/promises";
```

📌 It loads the **entire file into RAM at once**.

## ⚠️ Problem

- 🐢 **Slows down the process** — especially for large files.  
- 💥 **Can crash the system** or cause **memory overflow** if the file size exceeds available memory.  
- 🧠 **Not memory-efficient** — wastes resources by holding the full data in memory unnecessarily.

## 🚀 Solution — Use Streams Instead!
  
Streams process data **in chunks**, not all at once.  
This makes them ideal for handling **large files**, **network data**, or **real-time data transfer**.

Example:
```js

import fs from "fs";

const readStream = fs.createReadStream("large-file.txt", "utf-8");

readStream.on("data", chunk => {
  console.log("Received chunk:", chunk);
});

readStream.on("end", () => {
  console.log("Finished reading file.");
});

```


✅ **Why Streams are better:**  
- Data is read **piece by piece** (chunk by chunk).  
- Uses **less memory** and keeps performance stable.  
- Allows **real-time processing** (you can start working on the data before the entire file loads).

## 💡 Summary
  

| Aspect           | Buffers                        | Streams                     |
| ---------------- | ------------------------------ | --------------------------- |
| **Memory Usage** | High (loads entire file)       | Low (reads in chunks)       |
| **Performance**  | Slower for large data          | Faster and scalable         |
| **Use Case**     | Small files, binary operations | Large files, real-time data |
| **Risk**         | May cause memory overflow      | Safe and efficient          |

### 🧠 Tip:

When working with **large data (like videos, logs, or file uploads)**,  

always prefer **Streams** over Buffers for **better performance and memory optimization**.


## [[Base-64 Encoding]]