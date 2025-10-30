#Streams
This document outlines the different states of writable streams in Node.js and how to check each state.

## 1. Writable (Initial) State

The default state where the stream is ready to accept data.
- **Check**: Use the `writable.writable` property.

  ```js
  console.log(stream.writable); // true if writable, false if not
  ```

## 2. Corked State

In this state, the stream buffers all written data until it is explicitly uncorked.

-  **Check**: Use the `writableCorked` property.

```js
  console.log(stream.writableCorked); // 0 means not corked, > 0 means corked
  ```
## 3. Ended State

This state occurs when the `end()` method is called and the stream has been signaled to end, meaning no further writes can be made, <font color="#ffff00">but it doesn't guarantee that all data has been flushed yet.</font>

- **Check**: `writable.writableEnded`

## 4. Finished State

This state occurs when the `end()` method is called and all data has been flushed to the destination.

- **Check**: `writable.writableFinished`

## Example

```js
import fs from "fs";

let writeStream = fs.createWriteStream("new.txt");

writeStream.write("a");
writeStream.write("b");
writeStream.write("c");
writeStream.write("c");

// writeStream.end(); //This close the stream but not gauranteed internal buffer is cleared !

console.log(writeStream.writableEnded); //This whows wheather stream is cosed or not !

console.log(writeStream.writableFinished); // this represent wheather data is flushed or not from internal buffer !

setTimeout(() => {
  console.log(writeStream.writableLength); // Number of bytes currently sitting in Node’s internal buffer, waiting to be
  console.log(writeStream.bytesWritten); //Total number of bytes Node.js has actually written (or handed off) to the OS.
}, 10);
```


### [[Piping Streams]]