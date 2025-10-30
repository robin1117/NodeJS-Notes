#Streams
Whenever we created a writable stream and make write using it and after the write is complete we have to close the file  explicitly So that it should not consumed RAM after too
This doesn`t` have to do in case of Readable stream because here after complete reading files automatically gets closed.

Writable streams should always be **properly closed** to prevent unnecessary memory usage.  

When a stream stays open, it continues to consume **RAM** even if you're done writing.

### ✅ How to Close a Writable Stream?

Use:

```js
writeStream.end();
```

- This signals that you’re done writing.  
- After calling `.end()`, no more `.write()` calls are allowed.

#### ✍️ Optional: Pass Data in `.end()`

You can also write small final data while closing the stream:

```js
writeStream.end("Final data here");
```

### 🔔 Important Events After `.end()`
  
##### 1. **finish** 🏁
- Emitted when all data has been flushed to the underlying system.  
- This event is triggered **before** the stream is fully closed.

```js
writeStream.on("finish", () => {  
  console.log("Finished writing");
});
```


##### 2. **close** 🚪
- Emitted when the stream and its underlying resources (like file descriptors) are completely closed.  
- Always comes **after** the `finish` event.
  
```js
writeStream.on("close", () => {  
  console.log("Stream closed");
});
```

**Summary:**
- Always close writable streams with `.end()`  
- Use the `finish` event to confirm data flush  
- Use the `close` event to confirm the complete release of resources


#### Example :

```js
import fs from "fs";

let writeStream = fs.createWriteStream("new.txt");

writeStream.write("helo");
writeStream.end("Robin");


writeStream.on("finish", () => {
  console.log("Finished");
});

writeStream.on("close", () => {
  console.log("closed");
});

writeStream.on("open", (fd) => {
  console.log(fd);
});
```

### [[States of Writable Streams]]