#Buffers
In the last section we had seen basic Differences between `alloc` and `allocUnsafe` , we had found `allocUnsafe` is faster due to its non cleanliness allocation : <font color="#76923c">But here we will see how Buffer Pool contributes too for its Fastness</font>

Whenever our NodeJS application initialised a special `Arraybuffer` known as `pool` is created automatically.

```js
console.log(Buffer.poolSize); //8192
```

```js
const a = Buffer.alloc(4)
const au = Buffer.allocUnsafe(4)

console.log(a.byteLength); //4
console.log(au.byteLength); // 4

console.log(a.buffer.byteLength); // 4
console.log(au.buffer.byteLength); // 8192
```

- `Buffer.alloc(4)` : This every time creates their own separate `ArrayBuffer` behind the scenes, and the top of it each Node Buffer depends . Byte offset for each Buffer would be same as Zero.

```js
const a = Buffer.alloc(4)
const b = Buffer.alloc(4)
const c = Buffer.alloc(4)
//They all are depend on there separeate ArrayBuffers
```

---
#### Buffer and `allocUnsafe()`

- `Buffer.allocUnsafe(4)` : This every time just occupy the provided space from common `ArrayBuffer` whose size is `8192` , which is know as `pool`  , it neither need to create new pool till this will not get exhausted

- This might confuses you how they all share a common Array buffer without overlapping each other, basically they uses the concept of `byteOffset`. 

- you can think it like this way pool is big Array and there element are these `Node.js` Buffers which may have different sizes and they resides contiguously in `poolSize`

```js
const au1 = Buffer.allocUnsafe(4)
const au2 = Buffer.allocUnsafe(4)
const au3 = Buffer.allocUnsafe(4)

console.log(au1.buffer == au2.buffer); //true
```


#### Till when the `allocUnsafe()` not create new pool ?

I mean How much the maximum size we can provide to `allocUnsafe()` so that it can occupy memory from default `pool`  of size `8192`  : for that the size should be in the range :

```js
size < (8192 >>> 1)Right_Shift = 4096;
size = 1 to 4095
allocUnsafe(size);
```

The advantage of this buffer pool makes the memory allocation very fast because `allocUnsafe()` neither need to go to RAM to ask for Memory, occupies it from the readymade memory.
This buffer pool makes `allocUsafe()` really fast 

```js
Buffer.poolSize = 10000 // Explicitly defining pool size !
//Im my case we have 256 byte offset
const au1 = Buffer.allocUnsafe(4095) // 4095 < ((8192 >>> 1) = 4096)
const au2 = Buffer.allocUnsafe(4095-255) // 3840
const au3 = Buffer.allocUnsafe(10) //this creates new pool(8192) by default if we not set explicitly pool size
au1[0] = 9
au2[0] = 8
au3[0] = 11

console.log(au1.buffer.byteLength); // 8192
console.log(au1.buffer === au2.buffer); // true
```

#### `Buffer.from('abc')`

`Buffer.form('abc')` also uses the same `Arraybuffer` what the `Buffer.allocUnsafe(10)` uses, till the `poolSize` not get exhausted.

```js
const a = Buffer.allocUnsafe(4095);
const b = Buffer.from([1, 2, 3]);
console.log(a.buffer == b.buffer); // true
```

```js
const a = Buffer.allocUnsafe(4096);
const b = Buffer.from([1, 2, 3]);
console.log(a.buffer == b.buffer); // false
```

#### `Buffer.concat([a, z])`

The function `concat` over Buffer is capable to `concat` any Buffer, weather it contains data or not.

```JS
const a = Buffer.alloc(4);
const z = Buffer.alloc(4);
//const a = Buffer.allocUnsafe(4);
//const z = Buffer.allocUnsafe(4);

const c = Buffer.concat([a, z]); ////this concat creates bufferPool(8192) in same way as allocUnsafe creates    
console.log(a.buffer == c.buffer); //false
console.log(z.buffer == c.buffer); //false
```

```js
const a = Buffer.allocUnsafe(3960);
const z = Buffer.allocUnsafe(1);


const c = Buffer.concat([a, z]);
console.log(a.buffer == c.buffer); //true
```

#### `constants` object from buffer :

There is an object `constants` that we get from `buffer`. over this `constants` object we found two properties :  -
`{ MAX_LENGTH: 9007199254740991, MAX_STRING_LENGTH: 536870888 }`
These value are based on our computer CPU Architecture .

```JS
import { Buffer, constants } from "buffer";
console.log(constants.MAX_LENGTH); //9007199254740991 Bytes  =  7.99pb
```

- `constants.MAX_LENGTH` is a _theoretical cap_ (7.99 PB)
- **Practical max** is typically **a few GB**
- You can check your real limit by gradually increasing allocation

```js
❌let p = Buffer.allocUnsafe(9007199254740991); //RangeError: Array buffer allocation failed
```

---

Similarly `MAX_STRING_LENGTH` defines the maximum length for String.

```js
let s = Buffer.from('a'.repeat(constants.MAX_STRING_LENGTH+1)); //RangeError: Invalid string length
```

```js
let s = Buffer.from("a".repeat(constants.MAX_STRING_LENGTH - 1)); // sucess✅
console.log(s.toString());// aaaaaaaaaaaaaaaaaa..............
```


#### `Buffer.allocUnsafeSlow()`

- If you want your `Node.js` Buffer should be fast enough as compared to `Buffer.alloc` and neither occupy memory from `BufferPool`, then `Buffer.allocUnsafeSlow()` is the best choice.

```js
const a = Buffer.allocUnsafeSlow(19);
const b = Buffer.allocUnsafe(19);

console.log(a.buffer.byteLength); //19
console.log(b.buffer.byteLength); //8192
```

#### Conclusion :
As we seen if we create huge Buffer or Sting, how we are getting trouble and we see how our Ram gets fulled.

Till now, we have seen how to create `ArrayBuffers` and discussed some of their static functions like `concat`, etc.

In the next section, we will talk about the built-in `Buffer` that Node.js provides.

Buffers are quite useful, but they come with a disadvantage — when they become too large, they can fill up our system’s RAM, which directly affects overall performance.

This is the main drawback of Buffers. To solve this problem, **Streams** were introduced — a concept we’ll discuss in detail later.

We’ll learn how both **Buffers** and **Streams** work efficiently without negatively impacting system performance.


[[Buffer Methods and Properties]]