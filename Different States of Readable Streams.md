#Streams

1. **Initial State**:
   - The stream is newly created. It hasn't started flowing or been paused, so no data is being consumed, and the stream hasn't ended. At this point, no reading action has been taken.
   - **`readableFlowing`: `null`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `false`**

2. **Flowing State**:
   - The stream is actively reading and pushing data automatically to the consumer via the `'data'` event. The stream hasn’t reached the end of its data yet.
   - **`readableFlowing`: `true`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `false`**

3. **Paused State**:
   - The stream is paused, meaning it’s not pushing data automatically.
   - **`readableFlowing`: `false`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `true`**

4. **Ended State**:
   - The stream has consumed all available data and emitted the `'end'` event. No more data will flow, and the stream is considered finished.
   - **`readableFlowing`: `true`**
   - **`readableEnded`: `true`**
   - **`isPaused()`: `false`**

### Readable Stream States Comparison Table

| Stream State      | `readableFlowing`  | `readableEnded`  | `isPaused()`                                     |
| ----------------- | ------------------ | ---------------- | ------------------------------------------------ |
| **Initial State** | `null`             | `false`          | `false`                                          |
| **Flowing State** | `true`             | `false`          | `false`                                          |
| **Paused State**  | `false`            | `false`          | `true`                                           |
| **Ended State**   | `true`             | `true`           | `false`                                          |

### Examples : Synchronous and Asynchronous

```js
import fs from "fs";

const readStream = fs.createReadStream("text.txt", { highWaterMark: 4 });


readStream.on("data", (chunk) => { // 2
  if (readStream.bytesRead == 4) {
    fs.writeFile("paused.txt", chunk, (e, d) => {});
  }
  fs.appendFile("paused.txt", chunk, (e, d) => {});
  
  console.log("Stream is Reading And Writing");  
 readStream.pause();

 setTimeout(() => {
     readStream.resume();
   }, 1000);
});

setTimeout(() => {
  console.log("SetTimeOut"); // 3
}, 20);

  
fs.readFile("text.txt", (R, d) => { // 4
  console.log(d);
});

console.log("This is on main thread"); // 1
```



[[Internal Buffer of Readable Streams]]