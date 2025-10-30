#Streams

## 🐢 Using `fs.appendFile()`

ASYNCHRONIOUS VERSION : This version not able write all numbers correctly in order
```js
console.time()

for (let i = 1; i <= 10000; i++) {
    if (i == 1) fs.writeFile('couter.txt', `${i},`, () => { })
    else fs.appendFile('couter.txt', `${i},`, () => {
        if (i === 10000) {
            console.timeEnd(); //default: 3.364s
        }
    })
}
```

SYNCHRONIOUS VERSION : This version able to write in correct order
```js
import fs from "fs";
console.time()

for (let i = 1; i <= 100000; i++) {
    if (i == 1) fs.writeFileSync('couter.txt', `${i},`)
    else fs.appendFileSync('couter.txt', `${i},`)
}

console.timeEnd() //default: 1:10.450 (m:ss.mmm)
```


### ❌ Performance

- Takes a lot of time (~23 seconds for 1 lakh entries)
- Loads the **entire string into memory** before writing

### 🧠 Reason

- `appendFile()` writes all data at once
- Blocks RAM and CPU due to large string allocation

---

## ⚡ Using `fs.createWriteStream()`

  
```js

import fs from "fs";

console.time();
const writeStream = fs.createWriteStream("streamedNumber.txt");
for (let i = 1; i <= 100000; i++) {
  writeStream.write(`${i}\n`);
}

writeStream.end();

writeStream.on("finish", () => {
  console.timeEnd(); // default: 889.575ms
});

```

  

### ✅ Performance

- **Super fast** (~889 ms for 1 lakh numbers)
- **Efficient memory usage**
- Writes **data chunk by chunk**
- Handles **backpressure** behind the scenes

---

## 📊 Comparison Table

| Method                   |    Time (Approx.)     | Memory Efficient | Best Use Case            |
| :----------------------- | :-------------------: | :--------------: | :----------------------- |
| `fs.appendFile()`        | ❌ Very Slow (~1minut) |       ❌ No       | Small / quick writes     |
| `fs.createWriteStream()` | ✅ Very Fast (~889ms)  |      ✅ Yes       | Large-scale data writing |

---

## 🧩 Key Takeaways

- Use **streams** (`fs.createWriteStream`) for **large files** like logs, analytics, or exports.  
- Avoid loading large data fully into memory — **stream it instead**.  
- Streams use **internal buffers** for optimal performance.  

---
### 💡 Tip

If your program needs to handle **massive file operations**, prefer:
- `fs.createReadStream()` + `fs.createWriteStream()`
- Use **piping** for efficient data transfer between streams.

---

**Conclusion:**  

> Streaming is the way to go for large-scale file operations in Node.js. 🔥


## [[Why Streams are so Fast ]]