#Streams
As in previous example we has seen that writable Streams too made high spike in RAM, and even why this problem occurring ?
This happens because mostly storage drives have different speeds of reading and writing data in it.
- Reading is Fast
- Writing is slow
So that means whatever the data `Reads stream` reads `Write stream` not able to write it as much of speed,
So it thrown the extra data in RAM as Backlog which make load over the ram
To fix this we have to apply backpressure `(stop reading when not needed)`

## ⚠️ RAM Usage & Backpressure

Writing large or continuous data streams can quickly fill up memory.  
If the destination (like a file or socket) cannot keep up with incoming data, **backpressure** occurs.

Backpressure ensures your program **slows down writing** until the destination is ready to receive more data.


🧩 To handle it properly, you can use the `'drain'` event:
  

```js

const canWrite = writeStream.write(bigData);

if (!canWrite) {
  writeStream.once("drain", () => {
    console.log("Resuming writes after drain...");
  });

}

```

Writable streams in Node.js use an **internal buffer** to manage how data is written.  
If data is written faster than it can be flushed, we face **Backpressure** — a signal to slow down writing.

---
## 📦 Internal Buffer

- Every writable stream maintains a buffer.
- `writeStream.writableLength` → shows how much data (in bytes) is currently queued in the internal buffer.
- It can exceed `highWaterMark` if writes are very frequent.

---
## ⚙️ How `.write()` Works
  
```js
const ok = writeStream.write("some data");
```

- `.write()` returns:
  - ✅ `true` → if `writableLength <= highWaterMark`
  - ❌ `false` → if the internal buffer is full

📌 When it returns **false**, you must pause writing until the buffer drains.

---
## 🔄 `drain` Event

```js
writeStream.on("drain", handler);
```

- Fires when the buffer is cleared, and the stream is ready for more data.
- Used to resume writing after `.write()` returned `false`.

---
## 🧠 Why Does Backpressure Happen?

  Backpressure happens when the writable stream **cannot keep up** with the incoming write speed, due to:

- Slower disk I/O  
- Network latency  
- File system bottlenecks  

🛑 Writable streams **pause incoming writes** to avoid memory overload.

---

## My Example : 

```js
import fs from "fs";

const readStream = fs.createReadStream(
  "G:\\Godzilla.vs.Kong.mp4",
  { highWaterMark: 5 * 1024 * 1024 }
);

const writeStream = fs.createWriteStream("filrCreate.mp4", {
  highWaterMark: 5 * 1024 * 1024,
});

readStream.on("data", (chnk) => {
  let isEmpty = writeStream.write(chnk);
  console.log(isEmpty);
  if (!isEmpty) {
    readStream.pause();
  }
});


writeStream.on("drain", () => {
  readStream.resume();
});

  
readStream.on("end", () => {
  writeStream.end(); // ✅ important — flushes and closes file
  readStream.close;
});
```


```js
function writeMany(writer, data, count) {  
  let i = 0;  
  function write() {    
    while (i < count) {      
      const ok = writer.write(data);      
      i++;      
      if (!ok) {        
        writer.once('drain', write); // Wait for buffer to drain        
        return;      
      }    
    }    
    writer.end();  
  }  
  write();
}

writeMany(fs.createWriteStream("file.txt"), "Hello\n", 100000);
```

✅ Efficient writing  
✅ No memory overload  
✅ Handles backpressure with `.once("drain")`


## [[Closing Writable Streams]] 

