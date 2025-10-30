#EventDriven
## 🎯 Introduction

**Event-Driven Architecture (EDA)** is a **design pattern** where the flow of a program is determined by **events** — signals that something has happened.  

Node.js is built around this concept, using events to efficiently handle asynchronous, non-blocking operations like file reads, network requests, and database queries.

## 🧩 Core Components of Event-Driven Architecture

### 1️⃣ Event Emitter 📨

The **source** that generates or emits events.  
In Node.js, many core modules (like `http`, `fs`, and `net`) are built on the `EventEmitter` class.

### 2️⃣ Event Listener 👂

A **function** that listens for a specific event emitted by the Event Emitter.

### 3️⃣ Event Handler 🛠️

The **logic or callback function** that executes when the event is detected.

## 💡 Example in Browser (EDA in Action)


```js

const h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  console.log("h1 clicked");
});

```

  
🧠 **Explanation:**
- `h1` → **Event Emitter**
- `addEventListener()` → **Event Listener**
- The callback function → **Event Handler**

## ⚙️ Example in Node.js

  
```js

import { EventEmitter } from "events";
const event = new EventEmitter();

// Event Listener
event.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});


// Emit an Event
event.emit("greet", "Robin");

```

🧠 **Explanation:**
- `event` → Event Emitter  
- `on()` → Registers the Event Listener  
- The callback → Event Handler  
- `emit()` → Emits the event triggering the listener


## 🔁 Real-Life Examples of EDA
  
| Example                      | Description                      |
| ---------------------------- | -------------------------------- |
| 🧠 **Node.js**               | Handles I/O using events         |
| 💬 **Chat Applications**     | “Message received” events        |
| 🧭 **Browser DOM Events**    | Click, input, keypress, etc.     |
| 💻 **Operating System**      | Handles keyboard/mouse input     |
| 🔔 **YouTube Notifications** | Event-based notifications        |
| 💳 **Payment Systems**       | “Success” or “Failure” callbacks |

## 🧠 Why EDA Matters in Node.js

- Node.js runs on a **single thread**, but can handle **thousands of concurrent operations** using events.  
- The **Event Loop** continuously checks for new events and executes their handlers asynchronously.  
- This pattern makes Node.js ideal for **I/O-heavy** applications such as:
  - APIs and Web Servers 🌐
  - Real-time apps (chat, notifications) 💬
  - File-handling systems 📁
## ⚡ Summary

| Concept                       | Meaning                              |
| ----------------------------- | ------------------------------------ |
| **Event-Driven Architecture** | Flow of program controlled by events |
| **Event Emitter**             | Generates events                     |
| **Event Listener**            | Waits for events                     |
| **Event Handler**             | Executes logic when event occurs     |
| **Used in**                   | Node.js, browsers, OS, APIs, etc.    |

## 🧭 Quick Takeaway
  
> “Event-Driven Architecture in Node.js is what allows it to handle multiple tasks efficiently without blocking — by reacting to events through emitters, listeners, and handlers.”


## [[EventEmitter in Node.js]]