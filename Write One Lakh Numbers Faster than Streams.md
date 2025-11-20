#Streams
`This code open/close file for the multiple time for writing each time`
```js
import fs from "fs";
console.time()

for (let i = 1; i <= 100000; i++) {
    if (i == 1) fs.writeFileSync('couter.txt', `${i},`)
    else fs.appendFileSync('couter.txt', `${i},`)
}

console.timeEnd() //default: 1:10.450 (m:ss.mmm)
```


`This code openfile for the once and close at the end after complete writing`
```js
import fs from "fs";

console.time();
const writeStream = fs.createWriteStream("streamedNumber.txt");

for (let i = 1; i <= 100000; i++) {
    writeStream.write(`${i}\n`);
}

writeStream.end();
writeStream.on("finish", () => {
    console.timeEnd(); //default: 985.918ms
});
```


`Open - HDD - Close`
```js
import fs from "fs";

let fd = fs.openSync('./couter.txt', 'w')

console.time()
for (let i = 0; i < 100000; i++) {
    fs.writeSync(fd, `${i} `)
}
fs.closeSync(fd)
console.timeEnd() //default: 1.077s

```


`Open - RAM - HDD - Close`
```js
import fs from "fs";

let fd = fs.openSync('./couter.txt', 'w')

console.time()
let arr = []

for (let i = 0; i < 100000; i++) {
    arr.push(`${i} `)
}

fs.writeSync(fd, Buffer.from(arr.join("")))
fs.closeSync(fd)
console.timeEnd() //default: 42.859ms
```


```js

```