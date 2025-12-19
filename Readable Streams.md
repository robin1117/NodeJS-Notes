#Streams
## 🧱 1. What Are Streams?

Streams in Node.js allow data to be **read or written piece by piece (in chunks)** instead of loading the entire file into memory.

This is especially useful for **large files** (like videos, logs, backups, etc.) that can’t fit into memory all at once.
## ⚠️ 2. Why Not Just Use Buffers?

### ❌ Problems with Buffers:

- Buffers load the **entire file** into memory.
- Files **larger than 2 GiB** cannot be loaded.
- High memory usage → slower performance.
- Increases CPU and RAM load.

## ✅ 3. Why Use Streams?

- Read files **chunk by chunk**.
- **Reduce memory usage**.
- Allow **real-time processing**.
- Enable **copying, uploading, or compressing large files** efficiently.
  
## 🧩 4. Creating a Readable Stream

```js

import fs from "fs";
const stream = fs.createReadStream("./video.mp4", {
  highWaterMark: 1 * 1024 * 1024, // 1 MB per chunk
});

```
  
### 📘 Parameters:

- `path`: Path of the file to read.
- `highWaterMark`: Size of each chunk in bytes.  
  Default = **64 KB** for files.

## 🎧 5. Important Events on Readable Streams

| Event     | Description                                |
| --------- | ------------------------------------------ |
| `"data"`  | Fired every time a new chunk is available  |
| `"end"`   | Fired when there is no more data to read   |
| `"error"` | Fired if an error occurs                   |
| `"close"` | Fired when the stream is closed (optional) |

## ⚙️ 6. Reading File with Progress Percentage

```js

import { createReadStream } from "fs";
import fs from "fs/promises";

let fileSize = (await fs.stat("./video.mp4")).size;
let totalReceived = 0;

const stream = createReadStream("./video.mp4", { highWaterMark: 1 * 1024 * 1024 });

stream.on("data", async (chunk) => {
  totalReceived += chunk.byteLength;
  const percent = Math.floor((totalReceived / fileSize) * 100);
  process.stdout.write(`\rProgress: ${percent}%`);
  // optional delay
  await new Promise((r) => setTimeout(r, 100));
});

stream.on("end", () => {
  console.log("\n✅ File read successfully!");
});

```

### 🧠 Tip:

Use `process.stdout.write("\r...")` instead of `console.log()` to show the percentage **in a single line** instead of multiple lines.

  
## 🧾 7. Example: Copying a File with Stream and Showing Progress


```js

import fs from "fs";

const src = "./bigFile.mp4";
const dest = "./copy.mp4";

const { size } = fs.statSync(src);
const stream = fs.createReadStream(src, { highWaterMark: 10 * 1024 * 1024 });

  
let totalRead = 0;

stream.on("data", (chunk) => {
  fs.appendFileSync(dest, chunk);
  totalRead += chunk.length;
  const progress = ((totalRead / size) * 100).toFixed(2);
  process.stdout.write(`\rCopying... ${progress}%`);
});


stream.on("end", () => {
  console.log("\n✅ File copied successfully!");
});

```


## 📊 8. Understanding `highWaterMark`

- `highWaterMark` defines **chunk size** per read.
- **Smaller value → less memory**, more time (more chunks).
- **Larger value → faster**, but more memory used.

Example:

```js

const readStream = fs.createReadStream("file.mp4", { highWaterMark: 100 * 1024 }); // 100 KB
console.log(readStream.readableHighWaterMark); // shows actual chunk size

```

## 🧠 9. Common Mistakes to Avoid

| Mistake                                    | Why it’s Wrong                           | Correct Way                         |
| ------------------------------------------ | ---------------------------------------- | ----------------------------------- |
| Using only `Buffer` for large files        | Causes memory overflow                   | Use `fs.createReadStream()`         |
| Printing progress using `console.log()`    | Creates multiple lines                   | Use `process.stdout.write("\r...")` |
| Forgetting to handle `'error'` event       | May crash program                        | Always add error handling           |
| Using Promises version of `fs` for streams | It doesn’t support `.createReadStream()` | Use normal `fs` module              |
  
## 🧰 10. Small Enhancements from Community Tips

✅ **Show progress in same line**

```js
process.stdout.write(`\rProgress: ${percent}%`);
```

✅ **Pause and resume stream (for rate control)**

```js
readStream.pause();
setTimeout(() => readStream.resume(), 100);
```

  
✅ **Get total file size**

```js
const { size } = fs.statSync("file.mp4");
```

  
✅ **Use async delay between chunks (for demo/testing)**

```js
await new Promise((r) => setTimeout(r, 100));
```

## 🧩 11. Summary

| Concept                | Meaning                          |
| ---------------------- | -------------------------------- |
| Stream                 | Sequential chunk-based data flow |
| highWaterMark          | Defines buffer (chunk) size      |
| fs.createReadStream()  | Creates readable stream          |
| "data" event           | Fires when new chunk arrives     |
| "end" event            | Fires when file is done reading  |
| process.stdout.write() | Prints progress on same line     |
  
## 🏁 12. Real-Life Use Cases

- Copying large video/audio files  
- Upload progress bar simulation  
- Reading logs gradually  
- Stream-based file servers  
- Video streaming applications  
## 😒 My Style Progression 
 
 ```JS
// import fs from "fs/promises";

import fs from "fs";

let path = "E:\\Bike pay\\VID_20240405_175608.mp4";

const readStream = fs.createReadStream(path, {
  highWaterMark: 1 * 1024 * 1024,
});

let stat = fs.statSync(path);

readStream.on("data", (a) => {
  fs.appendFileSync("text.mp4", a);
  console.log(((readStream.bytesRead / stat.size) * 100).toFixed('1'));
});

 ```
## [[Different States of Readable Streams]]