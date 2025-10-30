#Buffers
In this section we were gone see whatever the data we was going to stores in `ArrayBuffer` , How do we can stored that data permanently over the disk or at Network. So that it cannot be deleted as much easy.

Small <font color="#ffc000">TASK 1</font> for You :
Let`s` make an `ArrayBuffer` and connect a `TypedArray` to it and try to store `R` `o` `b` `i` `n`  chars by just storing there corresponding Uni-codes in each byte of `ArrayBuffer`

```JS
const uint8Array = new Uint8Array(8);
//this too atomatically create an ArrayBuffer
uint8Array[0] = 0x52
uint8Array[1] = 0x6f
uint8Array[2] = 0x62
uint8Array[3] = 0x69
uint8Array[4] = 0x6e

let p = new TextDecoder('utf-8')

console.log(p.decode(uint8Array));//Robin
```

Now we can write data in a file using the `FS-Module` so that it save forever in HDD as `.txt` file.

```js
import fs from "fs/promises";
fs.writeFile('buffer-content.txt',uint8Array)
```

The data - `(second argument)` in `writeFile`  must be of type `string` or an instance of `Buffer`, `TypedArray`, or `DataView`. 

```js
import fs from "fs/promises";
const uint8Array = new Uint8Array(5);
uint8Array[0] = 0x52
uint8Array[1] = 0x6f
uint8Array[2] = 0x62
uint8Array[3] = 0x69
uint8Array[4] = 0x6e

let view = new DataView(uint8Array.buffer)
fs.writeFile('buffer-content.txt', view)
```

```txt
'buffer-content.txt'
Robin
```

---

Whatever the data over here we are working behind the seen everything is in binary form, its upto us how we are interpreting that binary data whether its `mp3`, `mp4` ,`jpg`.

---

Small <font color="#ffc000">TASK 2</font> here :

```json
'package.json'
{
  "type": "module",
  "scripts": {
    "dev": "node --watch server.js",
    "start": "node server.js"
  },

  "devDependencies": {
    "@types/node": "^22.5.5"
  }
}
```

This code is just creates `https` server  at `http://localhost:3000` 

```js
import http from "http";

const a = new ArrayBuffer(6);
const uint8Array = new Uint8Array(a)

uint8Array[0] = 0x52
uint8Array[1] = 0x6f
uint8Array[2] = 0x62
uint8Array[3] = 0x69
uint8Array[4] = 0x6e
startServer(uint8Array);


function startServer(responseData) {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/txt; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url === "/favicon.ico") {
      res.end();
      return;
    }
    res.end(Buffer.from(responseData.buffer));
  });

  
  server.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
  });
  
}
```

With this code you can understand that we not only save that data in file but you can sent over the network too. and these thing makes your `Node.js` application will be very optimal because you don`t` have to rely on Ram space anymore which is limited `2bg` 
for now you don`t` have to worried about that code we will discuss about it in the section of networking

Another Important thing is using the `fetch()` over `localhost:3000` you can use access that `ArrayBuffer` whatever we passes to the network -

```js
fetch('http://localhost:3000/').then((res) => res.arrayBuffer()).then((data) => {console.log(data)} //Now we can do everything with this ArrayBuffer whatever we did it earlier
```
#### [[Buffer in Node.js]]