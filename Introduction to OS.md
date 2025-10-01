### 🖥️ **Operating System (OS)**

An **Operating System** is system software that acts as an **interface between the user and the computer hardware**.  
It **manages hardware resources** (CPU, memory, I/O) and **controls program execution**.

**Examples**: Windows, Linux, macOS, Android

**Main Functions**:

- Process Management
- Memory Management
- File System Management
- Device Management
- Security & User Interface

---

### 🧠 **Kernel**

The **Kernel** is the **core part of the OS**. It sits between the hardware and software.  
It **directly interacts with the hardware** and **manages system resources**.

**Types of Kernels**:

- **Monolithic Kernel** (e.g., Linux): All services run in one large block.
- **Microkernel** (e.g., Minix): Minimal services in kernel; others in user space.

**Responsibilities**:

- Scheduling processes
- Memory handling
- Interrupt handling
- System calls


---

### 🔄 **Context Switching**

**Context Switching** is the process of **saving the state of a running process** and **loading the state of another process**.

**Why it's needed**:  
In multitasking OS, many processes run “at once.” Only one process can run on a CPU core at a time, so the OS switches between them rapidly.

**Steps in Context Switch**:

1. Save current process state (Program Counter, Registers, etc.)
2. Load the next process's saved state
3. Resume execution

**Result**:  
Efficient CPU usage and the illusion of parallel processing.


#Basic_OS


### [[What is a Process]]
### [[What Is Thread, Concurrency, and Parallelism]]

### [[What are Environment Variables]]

### [[Installing Linux (WSL)]]

### [[What are Executable Files]]

### [[Managing File Permissions]]

### [[ How Commands Get Executed ]]