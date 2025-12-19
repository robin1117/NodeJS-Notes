#NetworkingCoreNodeJS
## 🔌 Basic Idea
- A single TCP server can handle **multiple clients**.
- Every new client connection gets a **unique socket** object.
- Store these sockets (clients) in an array to broadcast messages.

## 🖥 Server Flow (`app.js`)
- `clientsList` → stores all connected client sockets.
- `createServer()` callback gives a **new socket per client**.

### Events
- `data`: message receive & broadcast  
- `close`: client disconnected  
- `error`: client lost  

## 💬 Client Flow (`client.js`)
- Connects using `net.createConnection()`.
- User input → sent to server.
- Receives server data → prints.
- Handles server disconnect.

## 📡 Broadcasting Flow
1. Client A sends message  
2. Server receives in `data` event  
3. Server loops over client list  
4. Sends message to all clients  

## 🧠 Key Concepts
- Each client has unique socket  
- Store sockets in array  
- Chatroom-like broadcast system  
- Optional username assignment  

---

```JS
// tcp-chat-server.js
// Simple TCP chat server using Node's `net` module.
// Features:
// - Asks each client for a name when they connect
// - Maintains an array of { name, socket } for live clients
// - Prevents duplicate names (asks client to choose another name)
// - Broadcasts join/leave notifications
// - Broadcasts user messages to all other connected clients
// - Allows server operator to broadcast from stdin

  

import net from 'net';

const PORT = 4000;
const HOST = '0.0.0.0';

/**
 * clients: Array of { name: string, socket: net.Socket }
 */
const clients = [];


const server = net.createServer((socket) => {
    socket.setEncoding('utf8');

    // Send welcome + ask for name
    socket.write('Hi! Welcome to Dynasti. What\'s your name?\n');

    // Temporary flag: until the client sends a valid name
    socket._gotName = false; // internal property

    socket.on('data', (raw) => {
        const data = raw.toString().replace(/\r?\n$/, ''); // trim newline only
        if (!data) return; // ignore empty lines

        // If this socket hasn't provided a name yet, treat first valid message as the name
        if (!socket._gotName) {
            const desiredName = data.trim();
            // check duplicates

            const already = clients.find((c) => c.name.toLowerCase() === desiredName.toLowerCase());
            
            if (!desiredName) {
                socket.write('Please enter a non-empty name:\n');
                return;
            }

            if (already) {
                socket.write(`Name "${desiredName}" is already taken. Choose a different name:\n`);
                return;
            }

            // register client
            socket._gotName = true;
            socket._name = desiredName;
            clients.push({ name: desiredName, socket });
            socket.write(`Welcome, ${desiredName}! You can now chat. Type messages and press Enter.\n`);
            
            // Announce to others
            broadcast(`${desiredName} has joined the chat.`, socket);
            console.log(`${desiredName} connected from ${socket.remoteAddress}:${socket.remotePort}`);
            return;
        }

        // Normal message: broadcast to others
        const senderName = socket._name || 'unknown';
        broadcast(`${senderName}: ${data}`, socket);
    });

  

    socket.on('close', (hadError) => {
        removeClientBySocket(socket);
    });

    socket.on('end', () => {
        // 'end' is emitted when the other end closes the connection politely
        removeClientBySocket(socket);
    });

    socket.on('error', (err) => {
        console.log('Socket error for', socket._name || socket.remoteAddress, err.message);
        removeClientBySocket(socket);
    });

});

server.on('error', (err) => {
    console.error('Server error', err);
});

  
server.listen(PORT, HOST, () => {
    console.log('Server listening on', server.address().address, server.address().port);
});

  

// Broadcast a message to all clients. If exceptSocket provided, skip sending to that socket.
function broadcast(message, exceptSocket) {
    const payload = message + '\n';
    clients.forEach(({ socket }) => {
        if (socket === exceptSocket) return; // skip sender
        socket.write(payload);
    });
}

function removeClientBySocket(socket) {
    // const idx = clients.findIndex((c) => c.socket === socket);
    // if (idx !== -1) {
    //     const [removed] = clients.splice(idx, 1);
    //     try {
    //         if (!socket.destroyed) socket.end();
    //     }
    //     catch (e) { }
    //     const name = removed.name || 'unknown';
    //     console.log(`${name} disconnected.`);
    //     broadcast(`${name} has left the chat.`);
    // }
    clients = clients.filter((c) => {
        if (c.socket === socket) {
            const name = removed.name || 'unknown';
            console.log(`${name} disconnected.`);
            broadcast(`${name} has left the chat.`);
        }
        return c.socket !== socket
    })
}

// Allow server operator to broadcast by typing into stdin
process.stdin.setEncoding('utf8');

process.stdin.on('data', (line) => {
    const msg = line.toString().replace(/\r?\n$/, '');
    if (!msg) return;
    broadcast(`[SERVER]: ${msg}`);
});

// Graceful shutdown on SIGINT
process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    clients.forEach(({ socket }) => {
        try { socket.end('Server is shutting down. Bye!\n'); } catch (e) { }
    });
    server.close(() => process.exit(0));
});
```


`BASIC CLIENT CODE FOR TCP :`

```js
import net from 'net'


let socket = net.createConnection({ port: 4000, host: '192.168.1.10', localPort: 5001, })

process.stdin.on('data', (typed) => {
    socket.write(typed)
})

socket.on('data', (MSGfromServer) => {
    console.log(MSGfromServer.toString());
})

  
socket.on('connectionAttempt', () => {
    console.log('connectionAttempt');
})


socket.on('connectionAttemptFailed', () => {
    console.log('connectionAttemptFailed');
    process.exit()
})

  
socket.on('connect', () => {
    console.log('connected');
})

socket.on('error', () => {
    console.log('Server Lost');
    socket.closed()
    process.exit()
})

socket.on('close',()=>{
    process.exit()
})
```


[[Transferring Files Using TCP]]