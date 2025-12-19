#Streams
## 🖥️ Understanding `stdin`, `stdout`, and `stderr` in Processes

Every process in an operating system comes with **three standard data streams**:

1. **`stdin` (Standard Input)** – The data which gets received from the user or another program.
2. **`stdout` (Standard Output)** – The normal output a process sends back (usually visible in the terminal).
3. **`stderr` (Standard Error)** – The error messages a process sends back.
4. The `std` prefix simply stands for **standard**.

```bash-red
Nancy@ThisisNancy MINGW64 ~/Desktop/ROUGH/temp test
$ ls
temp.js  text.txt
```

1. Here ls command is the `stdin` given by the keyboard
2. And the output which you see in the bash terminal , is the `stdout`
3. And for the command `asd` , you can see the output in the terminal as : `command not found` , that is `stderr` , which typically tells us about the error

<font color="#d83931">Note : All three of them are associated with the process object in the node.js</font>

```js
let a = process.stdin; //Duplex Stream (Readable Stream)
let b = process.stdout; //Duplex Stream (Writeable Stream)
let c = process.stderr; //Duplex Stream (Wrieable Stream)
```

code :
```jsx
import fs from "node:fs";

const writeStream = fs.createWriteStream("vale.txt");

// writing data using writeable stream
process.stdin.on("data", (chunk) => {
  writeStream.write(chunk);
});
```

This is create the output file and we need to write the data via terminal

```bash
Nancy@ThisisNancy MINGW64 ~/Desktop/ROUGH/temp test
$ node "c:\Users\Devin\Desktop\ROUGH\temp test\temp.js"
Robin is a Good boy
```

```vale.txt
'vale.txt'
Robin is a Good boy
```

We got the same output , in the output file as well

```jsx
import fs from "node:fs";
const writeStream = fs.createWriteStream("vale.txt");
// writing data using pipe method 
process.stdin.pipe(writeStream);
```

You can also use the pipe method here , which does the same work for you

Note : All three of them also has FD ( File Descriptors ) values associated with them

```jsx
//FD value for all
console.log(process.stdin.fd); // 0
console.log(process.stdout.fd); // 1
console.log(process.stderr.fd); // 2
```


---

Let`s` Play with `import { spawn } from "child_process";` - 
<font color="#ffc000">spawn is capable to start new processes !</font>

```js
import { spawn } from "child_process";

let childprocess = spawn("cat", ["vale.txt"]); // this returns a process object,where too you can found all same type of 3 duplex streams.

childprocess.stdout.on("data", (chk) => {
  console.log(chk.toString());
});

```


```js
'child.js'
import { createReadStream, createWriteStream } from "fs";
let writeStream = createWriteStream("le.txt");
let readStream = createReadStream("C:\\Users\\Devin\\Desktop\\moti.mp4");

// readStream.on("data", (chk) => {
//   //   console.log(chk);
//   process.stdout.write(chk);
// });

readStream.pipe(process.stdout);
```

```js
'temp.js'
import { spawn } from "child_process";
import { createWriteStream } from "fs";

let writeStream = createWriteStream("vale.mp4");
let childprocess = spawn("node", ["child.js"]);

childprocess.stdout.pipe(writeStream)

```


[[Piping and Redirection of Data Streams]]