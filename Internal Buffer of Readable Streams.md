#Streams
## 📘 Overview

In `Node.js`, when data flows through a **readable stream**, it is temporarily stored in memory before being consumed.  

This temporary memory storage is called the **internal buffer**.

---
## 🧩 What Is an Internal Buffer?

- It is a **list of chunks** (Buffers or strings if encoding is set) stored temporarily.
- The buffer holds data **received but not yet consumed** by the application.
- It changes **dynamically** — as new chunks arrive or are read.
- The buffer **does not grow infinitely**; its maximum size is determined by the `highWaterMark` option.

---
## ⚙️ HighWaterMark

- Defines the **maximum size (in bytes)** of the internal buffer.
- Once the buffer reaches this limit, the stream will **pause reading** from the source until space is freed.
- Internal buffer size ≈ `highWaterMark` value.

---
## 📦 How It Works

1. **Data arrives** → Node.js stores it in the internal buffer.
2. **When buffer has data**, the `"readable"` event is emitted.
3. You can use:

   ```js
   stream.readableLength // shows bytes currently in buffer
   stream.read()         // reads (consumes) data from buffer
   ```

4. Each `read()` decreases `readableLength` (the buffer size).  

---
## 🧪 Example

```js

import fs from "fs";

const stream = fs.createReadStream("file.txt", { highWaterMark: 4 });
  
stream.on("readable", () => {
  console.log(stream.readableLength); // bytes available
  console.log(stream.read());         // consume a chunk
  console.log(stream.readableLength); // remaining bytes

});

```

**Explanation:**

- The `"readable"` event fires when a chunk is ready.
- `readableLength` shows how much data is in memory.
- Each `read()` call consumes part of the internal buffer.


#### If you want automatic data events:
```js
import fs from "fs";

const readStream = fs.createReadStream("text.txt", { highWaterMark: 4 });

readStream.on("data", (chunk) => {
  console.log("DATA:", chunk.toString());
});
```


#### If you want manual control:

```js
import fs from "fs";

const readStream = fs.createReadStream("text.txt", { highWaterMark: 4 });

readStream.on("readable", () => {
  let chunk;
  while ((chunk = readStream.read()) !== null) {
    console.log("READABLE:", chunk.toString());
  }
});
```


|Mode|Triggered by|How data flows|Typical event|
|---|---|---|---|
|**Paused**|`read()` manually|You pull data|`"readable"`|
|**Flowing**|`resume()` or `"data"` listener|Node pushes data|`"data"`|

---
## 🧠 Key Points Summary

| Concept              | Description                           |
| -------------------- | ------------------------------------- |
| **Internal Buffer**  | Temporary storage for unread data     |
| **readableLength**   | Bytes currently stored in buffer      |
| **read()**           | Pulls (consumes) data from buffer     |
| **'readable' event** | Fires when new data arrives in buffer |
| **'data' event**     | Auto-consumes buffer (flowing mode)   |
| **highWaterMark**    | Max limit for internal buffer         |

---

## 🧰 Notes from Developers

- The **internal buffer** acts like a queue of chunks waiting to be consumed.
- Once the data is fully read, the buffer is emptied automatically.
- `readable` provides **manual control**; `data` mode provides **automatic flow**.
- Good understanding of buffer behavior is essential for performance tuning in streams.


[[More about Readable Streams]]