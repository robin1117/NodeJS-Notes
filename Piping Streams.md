#Streams
This is Example Where we are handling `BackPressure` manually

```js
import fs from "fs";

let readStream = fs.createReadStream("G:\\Godzilla.vs.Kong.2.mkv", {
  highWaterMark: 1 * 1024 * 1024,
});


let writeStream = fs.createWriteStream("new.mp4", {
  highWaterMark: 1 * 1024 * 1024,
});

console.time();
readStream.on("data", (chuk) => {
  let isEmpty = writeStream.write(chuk);
  if (!isEmpty) {
    readStream.pause();
  }
});

  
writeStream.on("drain", () => {
  readStream.resume();
});

  
readStream.on("end", () => {
  writeStream.end();
  console.timeEnd();
});
```

---

This is Great Example where we are using `pipe()` which making a connection between `readStream` and `writeStream` and makes reading and writing more convenient by handling `BackPressure`

```js
import fs from "fs";


let readStream = fs.createReadStream("G:\\Godzilla.vs.Kong.2.mkv", {
  highWaterMark: 1 * 1024 * 1024,
});

let writeStream = fs.createWriteStream("new.mp4", {
  highWaterMark: 1 * 1024 * 1024,
});

  
console.time();

writeStream.on("pipe", () => { //Triggers when pipe is just strated
  console.log("piping start");
});

writeStream.on("unpipe", () => { //Triggers when writing is completed or we called unpipe method readStream.unpipe()
  console.log("Unpiping start");
});

readStream.pipe(writeStream);
```


Piping connects a **Readable Stream** to a **Writable Stream**, transferring data automatically while managing **backpressure**.

---
## 📤 Basic Usage

```js
readStream.pipe(writeStream);
```

✅ Starts streaming data  
✅ Automatically handles flow control  
✅ Prevents memory overload

---
## ❌ Unpiping

```js
readStream.unpipe(writeStream);
```

Stops data transfer between streams.

---
## 🔥 Events

```js

writeStream.on("pipe", () => console.log("✅ Piping started!"));
writeStream.on("unpipe", () => console.log("🚫 Piping stopped."));

```

---

## 🧠 Why Use Piping?

- Simplifies stream operations  
- Ideal for file copying, logging, or compression  
- Automatically respects backpressure

❌ The limitation for `pipe()` is it can not handles errors automatically we have to handle errors explicitly.

```js
readStream.on("error", (e) => {
  console.log(e);
});
```

---



# 🔄 pipeline() in Node.js

`pipeline()` is the recommended way to pipe streams together in Node.js.  
It **connects streams**, **automatically handles errors**, and **cleans up resources**.

---

```js

import { pipeline } from "stream";

pipeline(readStream, writeStream, (err) => {  
  if (err) {    
    console.error("❌ Pipeline failed:", err);  
  } else {    
    console.log("✅ Pipeline finished successfully!");  
  }
});
```

✅ Recommended over `pipe()` for error handling and resource cleanup





[[Duplex, Transform and Passthrough Streams]]