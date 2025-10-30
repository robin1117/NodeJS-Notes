### 🧠 Overview

Node.js provides a **built-in EventEmitter class** to implement **Event-Driven Architecture (EDA)** in server-side applications. It allows asynchronous communication between different parts of your application using custom events.

### 🔧 How It Works

The **EventEmitter** class is part of the `events` module and allows objects to emit named events and register listeners for those events.

#### Import Example:

```js
import EventEmitter from "events";
const emitter = new EventEmitter();
```

### ⚙️ Common Methods

| Method                  | Description                                                              |
| ----------------------- | ------------------------------------------------------------------------ |
| `.on(event, listener)`  | Registers a listener (callback) for a specific event.                    |
| `.emit(event, ...args)` | Emits an event, triggering all listeners registered for it.              |
| `.once(event, handler)` | Registers a one-time listener that is removed after its first execution. |
| `.off(event, handler)`  | Removes a specific listener from an event.                               |
| `.setMaxListeners(n)`   | Sets the maximum number of listeners allowed for an event.               |

## 🧩 Internal Working

When you register an event using `.on()`:
- The event is stored inside an internal object named `_events`.
- The key represents the event name.
- The value is either a function or an array of functions (if multiple handlers are added).

  

When `.emit()` is called:
- Node.js looks for the event key in `_events`.
- Executes all listener functions attached to that event in order.


## ✨ Example
  
```js

import EventEmitter from "events";
const emitter = new EventEmitter();

emitter.on("abc", () => {
  console.log("abc event fired 1");
});


emitter.on("abc", () => {
  console.log("abc event fired 2");
});

  
emitter.on("x", () => {
  console.log("x event fired");
});

  
emitter.emit("x");

```


### 🧠 Explanation:

- `"abc"` has **two handlers**, stored as an array in `_events.abc`.
- `"x"` has a single handler.
- When `emitter.emit("x")` runs, only the `"x"` listener executes.

## 🧠 Building a Custom EventEmitter Class

### Example: Simplified Implementation

```js

class MyEventEmitter {
    constructor(){
        this._events = {};
    }

    on(event, listener) {
        if (!this._events[event]) {
            this._events[event] = [listener];
        } else {
            this._events[event].push(listener);
        }
    }

    emit(event, ...args) {
        if (this._events[event]) {
            this._events[event].forEach(listener => listener(...args));
        }
    }

    off(event, listener) {
        if (this._events[event]) {
            this._events[event] = this._events[event].filter(l => l !== listener);
        }
    }

    once(event, listener) {
        const onceListener = (...args) => {
            listener(...args);
            this.off(event, onceListener);
        };
        this.on(event, onceListener);
    }
}

  

const emitter = new MyEventEmitter();

emitter.on('abc', (a, b) => {
    console.log('abc event triggered with args:', a, b);
});

emitter.emit('abc', 1, 2);

```

  

### 🧩 How It Works

- `on()` → Registers a listener.
- `emit()` → Triggers all listeners.
- `off()` → Removes a specific listener.
- `once()` → Runs a listener only once, then removes it automatically.


## 💡 Additional Notes
- Node.js internally extends `EventEmitter` in several core modules (like HTTP, Streams, etc.).
- You can extend `EventEmitter` to make your own custom event-based classes.


### Example:

```js

import EventEmitter from "events";  

class MyServer extends EventEmitter {
  start() {
    console.log("Server started!");
    this.emit("ready");
  }
}

const server = new MyServer();
server.on("ready", () => console.log("Server is ready!"));
server.start();

```

## 🧾 Summary

| Concept                 | Explanation                                                 |
| ----------------------- | ----------------------------------------------------------- |
| **EventEmitter**        | Built-in Node.js class for handling events.                 |
| **_events object**      | Stores all event names and their handlers.                  |
| **Multiple Handlers**   | Automatically stored as arrays under the same event name.   |
| **once()**              | Runs handler only once.                                     |
| **off()**               | Removes a listener.                                         |
| **Custom EventEmitter** | You can create your own class to simulate Node.js behavior. |


🧠 **In Short:**  

EventEmitter makes Node.js **reactive**, **asynchronous**, and **non-blocking** by allowing communication through events.