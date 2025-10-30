#Buffers
Here we will see how do we create special `Node.js` `Buffer` , that is different from `ArrayBuffer` whatever we talked about previously :

Buffer in `Node.js` :
A Buffer in `Node.js` is just a specialized version of `Uint8Array` `(i.e. an array of bytes`) that comes with extra methods and features provided by `Node.js` — specifically designed for binary data handling . its `Node.js` specific only means you can not found it in browser.

```js
const uint8Array = new Uint8Array(4)
const nodeBuffer = new Buffer(4) 
```

One of the similarity among them is they Both are build over the `ArrayBuffer`, means they created their own `ArrayBuffer` behind the seen

```js
new Buffer(4) //this syntax is depricate so we uses  something else
```

---

<font color="#9bbb59">One of the way is we can use</font> `Buffer.alloc()` : 

```js
import {Buffer} from "buffer"// we can import Buffer too so that VS code give suggestion about all the available function that over Buffer. or we can install `npm i @type/node -D` for suggestions.

const nodeBuffer = new Buffer.alloc(4)
console.log(nodeBuffer);
```

<font color="#9bbb59">We can create our own</font>  separate `ArrayBuffer` too and later we can share with `Buffer` :

```js
let a = new ArrayBuffer(4)
const nodeBuffer =  Buffer.from(a)

console.log(nodeBuffer);
```

---
<font color="#e36c09">Conclusion :</font>
Simply we can say that `Buffer()` in `Node.js` is just a Array of bytes where each element represents `1Byte` or `8bits` 
But actually its build over the classical `ArrayBuffer()` like `Uint8Array()` with some extra methods over it, we are neither need to see all of them But :

---

One of the method, `toSrting()` that is available over both `Buffer()` and `Uint8Array()` : although its work totally in different ways over both -

```js
let a = new ArrayBuffer(5)

const uint8Array = new Uint8Array(a);
uint8Array[0] = 0x52
uint8Array[1] = 0x6f
uint8Array[2] = 0x62
uint8Array[3] = 0x69
uint8Array[4] = 0x6e

const nodeBuffer = Buffer.from(a)

console.log(nodeBuffer.toString()); //Robin
console.log(uint8Array.toString()); //82,111,98,105,110
```


---

Now the Question is what is the differences in the `ArrayBuffer` that is created behind the seen by these Syntaxes :

```js
const nodeBuffer = Buffer.alloc(4)
const nodeBuffer1 = Buffer.from([15, 59, 68])
const nodeBuffer2 = Buffer.allocUnsafe(4)
  
console.log(nodeBuffer.byteLength); // 4
console.log(nodeBuffer.byteLength); // 4
console.log(nodeBuffer.byteLength); // 4

console.log(nodeBuffer.buffer.byteLength); // 4
console.log(nodeBuffer1.buffer.byteLength); // 8192
console.log(nodeBuffer2.buffer.byteLength); // 8192
```

In the next section we will discuss why we are getting that much of differences in the `ArrayBuffer` length : from where 8192 number coming why some Buffer allocated as much lengthy `ArrayBuffer` , 


[[Alloc VS AllocUnsafe]]
