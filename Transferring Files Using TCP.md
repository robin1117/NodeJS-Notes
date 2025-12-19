#NetworkingCoreNodeJS
# TCP File Transfer Notes (Confusions + Explanations)

## 1. Why `pipe()` caused EOF to fail

- `readStream.pipe(socket)` automatically calls `socket.end()` when the file is fully read.
- After that, any `socket.write("EOF")` is ignored.
- That’s why EOF never reached the server.

## 2. Correct way to send EOF

```js
readStream.on('end', () => {
    socket.write('EOF', () => socket.end());
});
```

## 3. Why check `socket.write(chunk)`

- If `write()` returns false, socket buffer is full.
- Must pause readStream until `'drain'`.

## 4. Meaning:

- `writableHighWaterMark` → max buffer
- `writableLength` → current buffer usage

## 5. Execution of:

```js
const ok = socket.write('EOF', () => socket.end());
if (!ok) socket.once('drain', () => socket.end());
```

- Tries to send EOF
- If buffer full → waits for drain → closes socket after flush.

## 6. Why timeout-based EOF is unsafe

- Socket may already be closed
- Buffer may be full
- EOF may merge inside binary data
- TCP has no message boundaries
## 7. Safer alternative

Use:
```js
readStream.pipe(socket, { end: false })
```

Then:

```js
socket.write('EOF', () => socket.end());
```

## 8. Binary safety problem

- “EOF” can appear inside MP4 bytes.
- Better: length-prefix protocol.
## 9. Server-side issue

`data.toString().trim()` unsafe for binary.


---

`TRANSFERING A FILE FROM CLINET TO SERVER`

```JS
'SERVER'
import { createWriteStream } from "node:fs";
import net from "node:net";

let writeStream = createWriteStream('out1.mp4')

let server = net.createServer((socket) => {

    socket.on('data', (data) => {
        writeStream.write(data)
    })

    socket.on('end', () => {
        console.log('sara data aa chuka hey');
        writeStream.close()
    })

    socket.on('error', (a) => {
        console.log('clientLost');
    })

    console.log('Client Connected', socket.remotePort)
})

server.listen({ port: 4000, host: '0.0.0.0' }, () => {
    console.log(`server is Listening at ${server.address().port}`);
})
```

---

```js
'CLIENT'
import { Socket } from "dgram";
import { createReadStream } from "fs";
import net from "net";


let socket = net.createConnection({ port: 4000, host: '192.168.1.10' })
let readStream = createReadStream("D:\\Camo Studio Recording 2025-06-10 13-32-18.mp4", { highWaterMark: 14 * 1024 })


process.stdin.on('data', (typed) => {
    if (typed.toString().trim() === 'send') {
        readStream.pipe(socket, { end: false })
    }
    else {
        socket.write(typed)
    }
})

  
socket.on('drain', () => {
    readStream.resume();
});


socket.on('connect', () => {
    console.log('We are now Connected to');
})


socket.on('error', () => {
    console.log('ServerLost');
    process.exit()
})

  
readStream.on('end', () => {
    console.log('File completed Readed');
    socket.end()
})

```


---
# `<SOME IMPORTANT POINTS>`
## 1. 🛑 Data Transfer Termination (Client Side)

This is the most critical step. Rely on the **`readStream`** to determine when to call **`socket.end()`**.

* **`readStream.on('end', ...)`**: This event fires when the **entire file** has been read and sent to the Socket's writing pipeline.
* **`socket.end()`**: Call this **immediately** inside the `readStream.on('end')` callback.
    * **Action**: It ensures any remaining data in the buffer is sent, and then transmits the **FIN (Finish)** signal (the TCP equivalent of EOF) to the server.
    * **Crucial**: You **do not** need to check the buffer status (`ok` or `writableLength`) before calling `socket.end()`. Node.js handles the remaining buffer automatically.
* **Custom EOF Strings**: Avoid sending manual strings like `socket.write('EOF')`. If you must send one, call `socket.end()` inside the **callback** of `socket.write()` to ensure the string is buffered first.

---

## 2. 🌊 Flow Control (Client Side)

This prevents memory overload (Backpressure) by managing the speed of data writing.

* **`socket.write(data)` Return Value (`true` or `false`)**: This value is checked **only** when you are writing data manually (not using `.pipe()`).
    * **`false`**: The Socket's internal buffer is full. You must immediately call **`readStream.pause()`** to stop reading data from the file.
* **`socket.on('drain', ...)`**: This event fires when the Socket's buffer has cleared up.
    * **Action**: Inside this event, you must call **`readStream.resume()`** to restart sending data.
* **Using `.pipe()`**: If you use **`readStream.pipe(socket)`**, Node.js **automatically** manages all these `pause/drain/resume` events, making manual checks unnecessary.

---

## 3. 👂 Termination Recognition (Server Side)

How the server recognizes that the client has finished sending data:

* **`socket.on('end', ...)`**: This event fires when the **client calls `socket.end()`** (i.e., the server receives the **FIN** packet).
    * **Significance**: It confirms that **all file data has been received**.
    * **Next Step**: Inside this event, you **must** call **`writeStream.end()`** to finalize and close the file handle on the server's disk.
    * **Arguments**: The callback for `socket.on('end')` **does not** receive any arguments.

---

## 4. 🛑 Final Connection Closure

* **`socket.on('close', ...)`**: This event fires **automatically** on **both the server and client** and is always the **final event**.
    * **Purpose**: It confirms the **TCP connection is completely terminated** and all resources have been released.
    * **Trigger**: It fires after a graceful `socket.end()` process, or immediately after an error (`socket.on('error', ...)`).
    * **Action**: You **do not** need to manually call a `close` function. You just listen for this event.
    * **Arguments**: It takes one Boolean argument, **`hadError`** (`true` if closed due to an error, `false` otherwise).


[[Low-Level HTTP-like Server Using net Module]]