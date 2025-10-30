#Buffers
In the last section we had seen that how do we create `nodeBuffer`, but In this section we will go one step ahead and find what are the different methods available over the `nodeBuffer`

```js
import { Buffer, constants } from "buffer";
const nodeBuffer = Buffer.from("Hello World!");
```

There are lots of methods available over it, but we are not gone discuss about each and every, we will discuss about those only who mostly come in use.

#### Writing and Reading data :

**The Golden Rule:** Whatever The character encoding used to **write** data into a buffer or file you  must use the **same** encoding used to **read** (decode) that data. 

```js
const nodeBuffer = Buffer.from("Hello", "utf-8");
nodeBuffer[0] = 0
console.log(nodeBuffer); //<Buffer 00 65 6c 6c 6f>
console.log(nodeBuffer.toString("utf-8")); // ello
console.log(nodeBuffer.toString("utf-16le")); // 攀汬
console.log(nodeBuffer.toString("utf-8").length); // 5
fs.writeFile('text.txt',nodeBuffer)
```

```text
'text.txt' // Reading as utf-8
�ello
```

---

```js
import fs from 'fs/promises';
const nodeBuffer = Buffer.from("Hello", "utf-16le");

console.log(nodeBuffer); //<Buffer 48 00 65 00 6c 00 6c 00 6f 00>
console.log(nodeBuffer.toString("utf-16le")); //Hello
console.log(nodeBuffer.toString("utf-8")); //Hello
console.log(nodeBuffer.toString("utf-8").length); //10

fs.writeFile('text.txt',nodeBuffer)
```


```text
'text.txt' // Reading as utf-8
H�e�l�l�o�
```


**Consequence of Mismatch:** Using a different encoding for reading will lead to decoding errors, resulting in **corrupted data** or **mojibake** (unreadable characters).

---

# 🧃 Buffer Methods & Properties in Node.js 🧠


Buffers in Node.js are used to **handle binary data** (raw bytes).  
They’re especially useful when working with **files, streams, sockets, or network protocols** where data isn’t simple text

### ⚙️ Methods 🔧

#### 🧱 1. `Buffer.from(data)`
Creates a new buffer from an existing **string**, **array**, or **ArrayBuffer**.  
Great for converting human-readable data into raw binary format.


```js

const buf = Buffer.from("Hello World!");

console.log(buf);           // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>

console.log(buf.toString()); // Hello World!

```

**🔍 Why it’s used:**  
When you receive data (like text) and want to manipulate or send it as bytes (e.g., over TCP or to a file).

  

---


#### ✍️ 2. `Buffer.write(string)`
Writes a string into an existing buffer (starting from index `0` unless specified).  
Returns the **number of bytes written**.

```js

const buf = Buffer.alloc(8);

const written = buf.write("abc");

console.log(written); // 3

console.log(buf.toString()); // abc

```

  **🧠 Note:** If the string is longer than the buffer size, it will be truncated.

---
#### 📄 3. `Buffer.toJSON()`
Converts the buffer into a JSON object — mainly useful for debugging or transmitting buffer data over JSON APIs.

```js
const buf = Buffer.from("abc");
console.log(buf.toJSON());
/*
{
  type: 'Buffer',
  data: [97, 98, 99]
}
*/
```

**🧠 Use case:** When sending binary data (like images) in JSON format via APIs.

---

#### ✂️ 4. `Buffer.subarray(start, end?)`
Returns a **view** (not a copy) of the original buffer between indices `start` and `end`.

```js

const buf = Buffer.from("abc");
const part = buf.subarray(1);
console.log(part.toString()); // bc

```

**⚠️ Warning:** Modifying the subarray will also affect the original buffer since they share the same memory!

  
---

#### 🧬 5. `Buffer.copy(targetBuffer, targetStart, sourceStart, sourceEnd)`
Copies data from one buffer into another.

  ```js
const buf = Buffer.from("abc");
const target = Buffer.alloc(8);
buf.copy(target, 0, 0, 1);
console.log(target.toString()); // a
```

  
**💡 Use case:** Splitting or merging binary packets or file chunks efficiently.

---

#### 🔍 6. `Buffer.includes(value)`
Checks whether the buffer contains a specific **byte sequence**.

```js

const buf = Buffer.from("abc");

console.log(buf.includes('a')); // true

```

**✅ Works with:**  
Strings, numbers (byte values), or smaller buffers.

---
#### 🔁 7. `Buffer.fill(value)`
Fills the buffer with a specific value (number or string).

```js

const buf = Buffer.alloc(5);

buf.fill(0x41); // 0x41 = 'A' in ASCII

console.log(buf.toString()); // AAAAA

```

**🧠 Use case:** Quickly initialize buffers before use — avoids memory leaks or garbage data.

  

---

  

#### 🧾 8. `Buffer.readInt8(offset)`

Reads an **8-bit signed integer** from a specific position in the buffer.

```js
const buf = Buffer.alloc(1);
buf.writeInt8(-10, 0);
console.log(buf.readInt8(0)); // -10
```

**🧮 Tip:** Useful when decoding raw binary data like file headers or protocol packets.

---
#### ✏️ 9. `Buffer.writeInt8(value, offset)`

Writes an **8-bit signed integer** at the given offset.

```js

const buf = Buffer.alloc(1);
buf.writeInt8(-20, 0);
console.log(buf.readInt8(0)); // -20

```


**💡 Use case:** Encoding numerical data in compact binary form.

---
#### 🔢 10. `Buffer.at(index)`

Returns the byte value at a given index.  
Supports **negative indexing** (like arrays).

```js

const buf = Buffer.from("ABCD");
console.log(buf.at(0));  // 65  (ASCII of 'A')
console.log(buf.at(-1)); // 68  (ASCII of 'D')

```

  
---

  
### 🧩 Properties 📐

#### 📏 1. `buffer.buffer`

Returns the **underlying ArrayBuffer** that stores the raw bytes.

```js
const buf = Buffer.from("abc");
console.log(buf.buffer);
```

**📘 Use case:** For interoperability with Web APIs or TypedArrays.

---

#### 📐 2. `buffer.byteLength`

Shows how many bytes are used in the buffer.

```js
console.log(Buffer.byteLength("abc")); // 3
```

**✅ Useful for:** Knowing data size before transmission.

---

#### 🔁 3. `buffer.byteOffset`

Indicates where the buffer starts inside its underlying `ArrayBuffer`.

```js
const buf = Buffer.from("abc");
console.log(buf.byteOffset); // Usually 0
```

  
**🧠 Advanced use:** When working with shared memory views or sub-buffers.

---
#### 🧮 4. `buffer.length`

Gives the **total allocated size** of the buffer in bytes.

```js
const buf = Buffer.alloc(8);
console.log(buf.length); // 8
```

  
**📘 Tip:** Usually equal to `byteLength`, unless working with subarrays or slices.

  
---

### 🧭 Quick Summary Table

  

| Category     | Method / Property                       | Purpose                         |
| ------------ | --------------------------------------- | ------------------------------- |
| Creation     | `Buffer.from()`                         | Create buffer from string/array |
| Writing      | `Buffer.write()` / `Buffer.writeInt8()` | Store data into buffer          |
| Reading      | `Buffer.readInt8()` / `Buffer.at()`     | Extract bytes or numbers        |
| Conversion   | `Buffer.toJSON()`                       | Convert to readable JSON        |
| Manipulation | `Buffer.subarray()` / `Buffer.copy()`   | Slice or duplicate parts        |
| Checking     | `Buffer.includes()`                     | Find data in buffer             |
| Fill         | `Buffer.fill()`                         | Initialize or overwrite         |
| Metadata     | `buffer.byteLength`, `buffer.length`    | Get size info                   |
| Memory info  | `buffer.buffer`, `buffer.byteOffset`    | Inspect low-level details       |



  

# Node.js Buffer Instance Methods and Properties

This is a list of commonly used methods and properties for `Buffer` instances in Node.js.
## Properties

  
1. **`buffer.length`**  
   - Returns the size (in bytes) of the buffer.

1. **`buffer.byteLength`**  
   - Returns the actual byte length of the buffer content.
## Methods

1. **`buffer.toString([encoding], [start], [end])`**  
   - Converts the buffer data to a string using a specified encoding.

1. **`buffer.write(string, [offset], [length], [encoding])`**  
   - Writes a string to the buffer using the specified encoding.

2. **`buffer.slice([start], [end])`**  
   - Returns a new `Buffer` that references a subset of the original buffer.

1. **`buffer.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])`**  
   - Copies data from one buffer to another.

1. **`buffer.equals(otherBuffer)`**  
   - Compares two buffers and returns `true` if they are equal.

5. **`buffer.fill(value, [offset], [end], [encoding])`**  
   - Fills a buffer with a specified value.

6. **`buffer.readUInt8(offset)` / `buffer.writeUInt8(value, offset)`**  
   - Reads or writes an unsigned 8-bit integer at the specified offset.

6. **`buffer.readInt16LE(offset)` / `buffer.writeInt16LE(value, offset)`**  
   - Reads or writes a signed 16-bit integer, little-endian format.

1. **`buffer.subarray([start], [end])`**  
   - Creates a subarray view of the buffer without copying data.

1. **`buffer.includes(value, [byteOffset], [encoding])`**  
    - Returns `true` if the buffer contains the specified value.

  

## Additional Methods

- **`buffer.swap16()`**: Swaps the byte order in the buffer (for 16-bit values).
- **`buffer.swap32()`**: Swaps the byte order in the buffer (for 32-bit values).
- **`buffer.swap64()`**: Swaps the byte order in the buffer (for 64-bit values).


# [[Practical Use of Buffers]]