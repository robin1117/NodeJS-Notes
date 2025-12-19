#Streams
Writable streams allow you to write data in chunks to a destination — such as a file, HTTP response, or socket.

## 🛠️ Creating a Writable Stream

  
```js
const fs = require("fs");
const writeStream = fs.createWriteStream("output.txt", { highWaterMark: 16 * 1024 });
```

### Syntax:

```js
fs.createWriteStream(path, options)
```


### Key Points:

✅ Creates a new file if it doesn't exist  
✅ Similar to `fs.writeFile()` but works in a **streaming** manner  
✅ Faster than repeatedly using `appendFile()`

---

## 📏 Buffer Size (`highWaterMark`)

By default, Node.js uses a `highWaterMark` of **16 KB (16384 bytes)** for writable streams.

You can access it using:

```js
writeStream.writableHighWaterMark;
```


This defines how much data Node.js can buffer before it pauses further writes.

---

## 🖊️ Writing Data


```js
writeStream.write("Hello World!");
```

  
- The first `.write()` call **overwrites** existing content.  
- All subsequent `.write()` calls **append** data to the file.

---
## 😒Example :

```js
import fs from "fs";

const writeStream = fs.createWriteStream("filrCreate.mp4");
const readStream = fs.createReadStream("file.mp4", {
  highWaterMark: 1 * 1024 * 1024,
});

console.time();
readStream.on("data", (chunk) => {
  // fs.appendFileSync("next.mp4", chunk); // time 1.6s
  writeStream.write(chunk); // time 575.183ms
});

readStream.on("end", () => {
  console.timeEnd();
});
```

- ⭐ In the Above example the way we are using `writeStream.write()` which not the correct ! , it take time less , but with high memory consumption.  because here we are not handling Backpressure
- In the next part we will see how do we implement `Backpressure`
- [[Backpressure and Internal Buffer of Writable Streams]]
