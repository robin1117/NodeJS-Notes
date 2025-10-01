### 🧵 What is a **Thread**?

- A **thread** is the smallest unit of execution within a process.
- A single **process** can have **multiple threads** sharing the same memory space.
- Each thread runs independently but shares code, data, and OS resources with other threads of the same process.

> 📝 Think of threads as workers (threads) in a company (process) working on different tasks using shared tools (memory/resources).

---

### 🔄 What is **Concurrency**?

- **Concurrency** means multiple tasks are **in progress**, but **not necessarily at the same time**.
- It focuses on **task switching** and **managing multiple tasks** efficiently.
- Often seen in **single-core systems** using time-slicing (CPU switches between tasks quickly).

> 📝 Like one chef cooking multiple dishes by switching between them quickly.

---

### ⚡ What is **Parallelism**?

- **Parallelism** means multiple tasks are **executed at the same time**, usually on **multiple cores/processors**.
- It improves performance by doing real **simultaneous execution**.

> 📝 Like multiple chefs each cooking their own dish at the same time.

---

### 🔁 Summary Table

|Concept|Description|Example|
|---|---|---|
|**Thread**|Smallest unit of execution in a process|Multiple tabs running in one browser|
|**Concurrency**|Tasks run independently, maybe not together|One core switching between tasks|
|**Parallelism**|Tasks run at the same time on multiple cores|Two cores running two tasks simultaneously|
### 😒Common Definition- 
- ❗When a parent process starts or tiggers a child process -
- ❗Thread Lifecycle: After execution, a thread moves to a terminated state, is cleaned up, removed from the scheduler, and its memory is freed.  
- ❗Zombie Threads: If threads aren't properly cleaned up, they can become zombie threads, consuming resources. Detached threads are automatically cleaned up by the OS.  
- ❗Concurrency: Multiple tasks making progress at the same time, but not necessarily simultaneously. The CPU switches between tasks rapidly.
- ❗Parallelism: Tasks running at the same time, requiring multiple CPU cores or processors.

### 🤔Why don`t` we Spawn a Process and instead rely on thread 
- A process is an active entity, and it can not exist without thread - means a process have atleast one thread, to get its work done -
- As we know a process can have multiple threads, which have is own benefits it helps to improve overall responsiveness of system - even we have single core CPU - Each thread get CPU time slice and get there work done concurrently - 
- Spawning a process is considered to be expensive task because the whole process have is own memory space - and spawning a other too is expensive, So its convenient to generate thread which is more reliable and fast.

### 🔥Creating our own threads using `Node.js`

- First we have create `aap.js`  -

```js
'aap.js'
console.time()
for(let i = 0; i<1000000000; i++){
	if(i%4000000000 == 0){
	console.log(`Running loop 2 ${i}`);
	}
}
console.timeEnd()
```

```bash
$ node "c:\Users\Devin\Desktop\ROUGH\node.os\app.js"
Running loop 2 0
default: 6.946s
```

- As our one single loop takes `6 sec` to complete its execution - 
- What if I tries to replicates this loop  for 3 times ,then how much it taken time complete execution?
- As we are executing over single thread, So it takes `6.94 * 3 = 20s` -

```js
'aap.js'
console.time()

for(let i = 0; i<1000000000; i++){
    if(i%4000000000 == 0){
    console.log(`Running loop 1 ${i}`);
    }
}

for(let i = 0; i<1000000000; i++){
    if(i%4000000000 == 0){
    console.log(`Running loop 2 ${i}`);
    }
}

for(let i = 0; i<1000000000; i++){
    if(i%4000000000 == 0){
    console.log(`Running loop 3 ${i}`);
    }
}

console.timeEnd()
```

- This is the out put result which is nearly expected to `20s`  - 
- Here we are executing all 3 loops one by one over single thread only - 

```bash
$ node "c:\Users\Devin\Desktop\ROUGH\node.os\app.js"
Running loop 1 0
Running loop 2 0
Running loop 3 0
default: 19.444s
```

- What if I say I have ability to executes all three in just `6s` as we did with single for loop -Ya we can achieve it using multithreading -
- We have to generate multiple threads for each loop - in order to execute all for loops simultaneously

```js
'1.js'
for(let i = 0; i<1000000000; i++){
    if(i%4000000000 == 0){
    console.log(`Running loop 2 ${i}`);
    }
}
```

```js
'2.js'
for(let i = 0; i<1000000000; i++){
    if(i%4000000000 == 0){
    console.log(`Running loop 2 ${i}`);
    }
}
```

```js
'3.js'
for(let i = 0; i<1000000000; i++){
    if(i%4000000000 == 0){
    console.log(`Running loop 2 ${i}`);
    }
}
```

---

```js
'app.js'
import { Worker } from "worker_threads";
console.time();
new Worker("./1");
new Worker("./2");
new Worker("./3");
console.timeEnd();
```

```bash
$ node "c:\Users\Devin\Desktop\ROUGH\node.os\app.js"
Running loop 2 0
Running loop 2 0
Running loop 2 0
default: 6.946s
```

- Now you can find that all 3 loops will gets complete within time that as one loop takes -
- Here we uses `worker_thread` a default module which was introduced in `node.js`  on 2019 -
- **Apart from these `worker_thread` also provides lots of other features too. about it we will discuss in the video where we talk seperatly for `worker_thread`**

### ➿Debugging Worker Threads
- In the `node.js` we can have multiple processes with multiple threads and we can pause these threads by just adding breakpoint any of it.
- This way we can debug our application even our application uses multiple thread.

#Basic_OS