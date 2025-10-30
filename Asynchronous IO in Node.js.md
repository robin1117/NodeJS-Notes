#EventDriven
You might already ever Read this definition of Node.js :


> [!NOTE] Node.js
> Node.js is a single-threaded, ==event-driven==, ==non-blocking==, ==asynchronous I/O== runtime that allow developers to build scalable and high-performance applications, particularly suited for I/O-bound task such as file handling and network requests

## 🧠 Overview

Node.js is a :
- 🧵 **Single-threaded**
- ⚙️ **Event-driven**
- 🚫 **Non-blocking**
- 🔄 **Asynchronous I/O runtime**

It allows developers to build **scalable and high-performance applications**, especially for I/O-bound tasks such as :
- 📄 File handling
- 🌐 Network requests
- 🗄️ Database operations
## 🔍 What is Asynchronous I/O?

**Asynchronous I/O (Input/Output)** refers to a **non-blocking** way of handling input/output operations like reading files, querying databases, or making API calls.

Instead of waiting for one task to finish before starting the next, Node.js can start a task and **continue executing other code**, then come back when the I/O task is done.
## 🔧 How It Works in Node.js

1. You start an I/O operation (e.g., reading a file).
2. Node.js **delegates this task** to the OS or its **libuv thread pool**.
3. Node.js continues executing **other code** while waiting.
4. Once the I/O operation completes, a **callback**, **Promise**, or **async/await** returns the result.
## 🧩 Synchronous vs Asynchronous I/O

| Type                   | Behavior                                                             | Effect                       |
| ---------------------- | -------------------------------------------------------------------- | ---------------------------- |
| 🧱 **Synchronous I/O** | Waits for each operation to complete before moving to the next line. | ⏸️ Blocks the main thread    |
| ⚡ **Asynchronous I/O** | Initiates an operation and continues executing other tasks.          | ✅ Non-blocking and efficient |
#### 🧱 Synchronous (Blocking)

```js
const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data); //1
console.log('Finished reading file'); //2
```


```js
import fs from "fs";

setTimeout(() => {
  console.log("Hello Guys"); //3
}, 0);

let out = fs.readFileSync("temp.txt", "utf-8"); //1
console.log(out);

console.log('Nichey'); //2
```


➡️ The program waits until the file is read before executing the next line.

#### ⚡ Asynchronous (Non-blocking)

```js

const fs = require('fs');
fs.readFile('file.txt', 'utf-8', (err, data) => {
  console.log(data); //2
});
console.log('Finished reading file'); //1

```

```js
import fs from "fs/promises";

setTimeout(() => {
  console.log("Hello Guys"); // 2nd
}, 0);

let out = await fs.readFile("temp.txt", "utf-8");
console.log(out); // 3rd

console.log('Nichey'); // 1st
```

➡️ The program continues execution without waiting for the file read to complete.

## 💬 What Are “Asynchronous I/O Primitives”?

  The term **“asynchronous I/O primitives”** refers to the **core building blocks (functions or methods)** provided by Node.js and its underlying C++ library (**libuv**) that perform non-blocking I/O operations.

These include functions like:
- `fs.readFile()`
- `fs.writeFile()`
- `http.get()`
- `net.connect()`

They are called **primitives** because they are **low-level, foundational operations** that higher-level abstractions (like Promises, async/await, streams) are built upon.
## 🧠 Real-World Analogy

👨‍🍳 Imagine a chef (Node.js) puts food in the oven (I/O operation).  
Instead of standing idle, the chef starts cooking other dishes.  
When the oven timer rings (callback or Promise resolution), the chef handles the baked dish.

That’s how **Async I/O** works — efficient and multitasking!
## 🚀 Benefits of Async I/O

✅ Non-blocking performance  
✅ Efficient use of CPU time  
✅ High scalability for I/O-heavy apps  
✅ Ideal for APIs, servers, chat apps, etc.
## 🧾 Summary

| Concept              | Description                                               |
| -------------------- | --------------------------------------------------------- |
| **Asynchronous I/O** | Allows multiple tasks to run concurrently without waiting |
| **Event Loop**       | Handles callback execution once I/O tasks are done        |
| **libuv**            | C++ library that manages I/O thread pool                  |
| **Primitives**       | Low-level async I/O functions like fs.readFile, http.get  |
| **Goal**             | Maximize performance, avoid blocking the main thread      |

📘 **In Short:**  

Asynchronous I/O makes Node.js powerful for handling thousands of concurrent tasks efficiently — without getting stuck waiting for slow I/O operations.

#### [[What is Event Driven Architecture]]