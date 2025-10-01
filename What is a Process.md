### ⚙️ What is a **Process**?

A **Process** is an **instance of a program in execution**.  
It is a **running program** that is loaded into memory and managed by the operating system.

---

### 🧩 Key Components of a Process:

- **Program Code** (also called _text section_)
- **Program Counter** (keeps track of which instruction to execute next)
- **Stack** (stores temporary data like function parameters, return addresses)
- **Heap** (for dynamic memory allocation)
- **Data Section** (contains global variables)

---

### 🧠 Types of Processes:

- **User Process**: Created and executed by users (e.g., your browser)
- **System Process**: Managed by OS for system-level tasks

---

### 🌀 Process States:

1. **New** – process is being created
2. **Ready** – waiting to be assigned to the CPU
3. **Running** – instructions are being executed
4. **Waiting/Blocked** – waiting for some event (like I/O)
5. **Terminated** – process has finished execution

---
### 📌 Notes:

- Each process has a **unique Process ID (PID)**.
- A process may create **child processes** (e.g., via `fork()` in Unix).

#Basic_OS 


### 🫢Next - Level - Software -

#### <font color="#f79646">Task-Manage</font>
- If you are using Windows OS, you can use Task Manager to view a list of all processes running on your system, along with information about resource usage. -- which serves a basic over view about process and the resources they holding .

#### <font color="#f79646">Some-Third-Parties-Software</font>
- There are some other software too. using which can view extra advance things like `PPID`, `contex-switches`, `parent-proces` etc.

- `Software-informer` 




