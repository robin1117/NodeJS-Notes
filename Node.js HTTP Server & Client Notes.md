#NetworkingCoreNodeJS 
## 🖥️ 1. HTTP Server Code


```js
import http from "node:http";

const server = http.createServer((request, response) => {
  console.log("Got the request");
  console.log(request.method);
  console.log(request.url);

  request.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  response.end("Hello from http server.");

});

  
server.listen(4000, "0.0.0.0", () => {
  console.log("Server started");
});

```

### 🔍 Explanation

- `http.createServer()` creates an HTTP server.
- `request` is a **readable stream**:
  - Contains HTTP method, URL, and body chunks.
- `response` is a **writable stream**:
  - Server replies using `response.end()`.

---

## 💻 2. HTTP Client Code

```js
import http from "http";
const clientRequest = http.request({
  method: "POST",
  hostname: "192.168.1.10",
  port: 4000,
});

clientRequest.end("Hii I am client");

clientRequest.on("response", (response) => {
  response.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});

```

### 🔍 Explanation

- `http.request()` creates an outgoing HTTP request.
- Client request is a **writable stream**:
  - Sends body using `.end("Hii I am client")`
- Client response is a **readable stream**:
  - Reads server reply using `response.on("data")`.

---

## 🔗 How Communication Works

### **Client → Server**

- Sends POST request  
- Sends body `"Hii I am client"`

### **Server → Client**

- Logs method, URL, and body  
- Sends response `"Hello from http server."`

---
## 🧠 Key Concepts

| Concept         | Server Side          | Client Side            |
| --------------- | -------------------- | ---------------------- |
| Request Object  | Readable Stream      | Writable Stream        |
| Response Object | Writable Stream      | Readable Stream        |
| Body Handling   | `request.on("data")` | `.write()` or `.end()` |

---
## 📘 Summary

- Node.js HTTP module is fully stream-based.
- Server request: readable  
- Server response: writable  
- Client request: writable  
- Client response: readable  
- Streams allow efficient, non-blocking communication.

---

```js
import http from "http";
let server = http.createServer((request, response) => {
    request.on('data', (chk) => {
        console.log(chk.toString());
    })

    //Getting Detals About Request Side !
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

	//Setting Header for Response for browser(client-side)
    response.setHeader('Content-Length', '9')
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.writeHead(200, 'Bhot sai', { 'Name': 'Robin singh' })
    //response.statusMessage= 'Ma chud gayi'
    //response.statusCode = 429

	//Sending data as response to the client !    
    response.write('Hello Yrr')

	//After 2 second we calls response.end() 
	//this will close the response for the client-side (closing connection)
     setTimeout(() => {
         response.end()
     }, 2000)	
  
	//this event will fires when client side close the connection! 
	//clentRequest.end()
    request.on('close', () => {
        console.log("CLOSE FIRED!!! Client disconnected.");
    });
})


server.on('connection', (socket) => {
    socket.on('close', () => {
        console.log('Connection closed');
    });
});


server.listen(4000, '0.0.0.0', () => {
    console.log('Server started at', server.address());
})
```


```js
import http from 'http';

let clentRequest = http.request({
 method: 'POST',
 port: 4000,
 host: '192.168.1.10'
  })

 clentRequest.write('Hello  from client')

//This Fires when A response comes from Server !
clentRequest.on('response', (response) => {

    console.log(response.headers);
    response.on('data', (chk) => {
        console.log(chk.toString());
    })

    response.on('close', () => {
        console.log('response from server close');
    })

})


clentRequest.on('close', (chk) => {
    console.log('Connection closed');
})

  
clentRequest.on('error', (chk) => {
    console.log('Connection Error');
})


setTimeout(() => {
    clentRequest.write('Hello  from client2')
    clentRequest.end()
}, 5000)
```


[[Anatomy of HTTP Request and Response]]