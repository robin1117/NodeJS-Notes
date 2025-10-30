#Streams
## 📘 Overview

Node.js streams are one of the most powerful features for handling data efficiently.  
They allow processing data **chunk by chunk** without loading the entire content into memory.

Readable Streams help us **read data in real-time** from sources like files, APIs, or network sockets.
  
---
## ⚙️ Common Stream Methods

| Method                     | Description                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------- |
| **.setEncoding(encoding)** | Sets the character encoding (e.g., `"utf-8"`) so chunks are returned as strings instead of buffers.       |
| **.pause()**               | Temporarily stops emitting `'data'` events (pauses reading).                                              |
| **.resume()**              | Resumes emitting `'data'` events after a pause.                                                           |
| **.pipe(destination)**     | Pipes readable stream data into a writable stream.                                                        |
| **.unpipe(destination)**   | Stops piping data to a writable stream.                                                                   |
| **.destroy([error])**      | Forcefully closes the stream and cleans up resources. Triggers `'close'` and optionally `'error'` events. |

---

## 📡 Important Stream Events

| Event          | Description                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| **'open'**     | Fired when the file descriptor is successfully opened (stream becomes accessible).                                   |
| **'ready'**    | Indicates that the stream’s internal buffer (highWaterMark) is filled and ready for reading.                         |
| **'readable'** | Emitted when data is available in the internal buffer and can be pulled manually using `.read()`.                    |
| **'data'**     | Fired automatically in flowing mode whenever new data chunks are available.                                          |
| **'pause'**    | Fired when the stream is paused.                                                                                     |
| **'resume'**   | Fired when the stream is resumed.                                                                                    |
| **'end'**      | Triggered when there is no more data to read (stream reaches EOF).                                                   |
| **'close'**    | Fired when the stream and its underlying resource (e.g., file descriptor) are closed.                                |
| **'error'**    | Fired when an error occurs (e.g., file not found, permission denied). Always handle this to prevent process crashes. |

---

## 🧩 Flow of Events in a Readable Stream

  
```

createReadStream("file.txt")

      ↓

  'open' → File accessible

      ↓

  'ready' → Stream ready for reading

      ↓

  ┌─────────────┐

  │ Reading Flow│

  └─────────────┘

      ↓

  'readable' (manual read using .read())

      ↓ OR ↓

  'data' (auto read in flowing mode)

      ↓

  'end' → No more data

      ↓

  'close' → Stream destroyed

      ↓

  'error' → If any issue occurs

```

  
---


## 🧠 Internal Buffer Properties

| Property                   | Meaning                                                      |
| -------------------------- | ------------------------------------------------------------ |
| **.readableLength**        | Bytes currently stored in the internal buffer.               |
| **.readableHighWaterMark** | Maximum number of bytes allowed in the internal buffer.      |
| **.readableFlowing**       | Indicates if the stream is in flowing mode (`true`/`false`). |
| **.readableEnded**         | Indicates if the stream has finished reading all data.       |

---

## ⚡ Controlling Stream Flow

| Method            | Action                                                          |
| ----------------- | --------------------------------------------------------------- |
| **.pause()**      | Temporarily stops `'data'` events (pauses flow).                |
| **.resume()**     | Resumes emitting `'data'` events.                               |
| **.pipe(dest)**   | Sends readable stream data directly to another writable stream. |
| **.unpipe(dest)** | Stops piping data.                                              |
| **.destroy()**    | Terminates the stream early and cleans up resources.            |

---

## 🧪 Example :

```js

import fs from "fs";

const readStream = fs.createReadStream("text.txt", { highWaterMark: 4 });

readStream.setEncoding("utf-8");

readStream.on("data", (chunk) => {
  console.log(chunk);
  readStream.destroy('f');
});

readStream.on("close", () => {
  console.log("close");
});

  
readStream.on("end", () => {
  console.log("end");
});
 
readStream.on("open", (d) => {
  console.log("open", d);
});

readStream.on("ready", (d) => {
  console.log("ready", d);
});

readStream.on("error", (e) => {
  console.log("this is error", e);
});

```
  
✅ Ensures efficient memory usage and prevents overflow using **pause/resume** flow control.

## 🧩 Common Mistakes & Tips


- ❌ Don’t mix `'readable'` and `'data'` modes in the same stream unless you know what you’re doing.

- ✅ Always handle `'error'` events to prevent your Node.js process from crashing.
- ⚙️ Adjust `highWaterMark` to control memory usage and performance.
- 🧠 Use `.setEncoding("utf-8")` when working with text files for string chunks.

## 🔥 Quick Recap Table

| Event/Method             | Purpose                             |
| ------------------------ | ----------------------------------- |
| `'open'`                 | File opened and stream accessible   |
| `'ready'`                | Buffer filled and ready for reading |
| `'data'`                 | Auto data flow (flowing mode)       |
| `'readable'`             | Manual data pull (paused mode)      |
| `'end'`                  | No more data to read                |
| `'close'`                | Stream closed                       |
| `'error'`                | Error occurred                      |
| `.pause()` / `.resume()` | Control flow manually               |
| `.destroy()`             | Terminate stream early              |


---

## 🧠 Final Summary — “STREAMBENDING: The Luc Saga”

A readable stream is like a **water pipeline** — data flows steadily, not all at once.
  
✅ You now understand:
- Stream lifecycle and events
- Flowing vs paused modes
- Internal buffer behavior
- Backpressure handling
- Real-world examples for control and efficiency

> “Stream = Performance + Control” 🚀
