#Streams 

One thing you should keep in mind that all these things will only get works at `wsl` or `Linux Terminal` properly.

In `Node.js` and terminals, data streams can be **piped** or **redirected** to efficiently transfer data between processes or files.

## 🌊 Piping Streams

With piping, the **output (stdout)** of one process becomes the **input (stdin)** of another.

### 🛠️ Syntax

```bash
command1 | command2
```

### 🔹 Example

```bash
echo hii | node index.js
```

- `echo hii` outputs to **stdout**
- That stdout is **piped into stdin** of `node index.js`

### 🔸 Another Example

```bash
node script.js | node index.js
```

- The **stdout** of `script.js` becomes the **stdin** for `index.js`

📌 **Note:** The pipe `|` only connects **stdout → stdin**.

```js
'app.js'
process.stdin.on('data',(chk)=>{
    console.log(chk.toString());
})
```

```js
'script.js'
process.stdout.write('Hi from script.js')
```

```bash
evin@ThisisNancy:~/Learning/srp$ node script.js | node app.js
```

---
## 📝 Redirection of Streams

Redirection is used when you want to **store stream output into a file** or **read from a file**.
### 🔹 Redirect stdout → File

```bash
node script.js > command.txt
```

- The **stdout** of `script.js` goes into `command.txt`

### 🔸 Redirect stderr → File

```bash
node script.js 2> command.txt
```

- The **stderr (FD: 2)** is redirected to `command.txt`

### 🔁 Redirect Both stdout & stderr

```bash
node script.js > command.txt 2>> command.txt
```

- `stdout` is **overwritten**
- `stderr` is **appended**
## 📥 Input Redirection (File → stdin)

```bash
node index.js < command.txt
```

- Reads data from `command.txt`
- Passes it into **stdin** of `index.js`

✅ **Summary**

| Operation | Description                         | Example                 |             |             |
| :-------- | :---------------------------------- | :---------------------- | ----------- | ----------- |
| `         | `                                   | Pipe stdout → stdin     | `node a.js` | `node b.js` |
| `>`       | Redirect stdout to file (overwrite) | `node a.js > out.txt`   |             |             |
| `>>`      | Redirect stdout to file (append)    | `node a.js >> out.txt`  |             |             |
| `2>`      | Redirect stderr to file (overwrite) | `node a.js 2> err.txt`  |             |             |
| `<`       | Redirect file → stdin               | `node a.js < input.txt` |             |             |
