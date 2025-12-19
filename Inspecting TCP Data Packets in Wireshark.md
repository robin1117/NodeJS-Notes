#NetworkingCoreNodeJS 
In this section we are going to see how the every single `.`write() over socket perform a network activity. we will see that process using `wireShark`.

I implement a short JS code to access my Server as `API` using `fetch()` so that we can able to see how exactly the response is from server , because browser sends make request some extra things like `Favicon` `etc`. 

```js
'browser.js'

// The first await over the fetch resolves only after the response headers are fully received till to \n\n.
// And the second await resolves after the data is received.

let response = await fetch('http://192.168.1.10:4000')
let data = await response.text()
    console.log(data);
```


```js
'serve.js'

import { createReadStream, write } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";

  

let server = net.createServer(async (socket) => {
    let fileHandel = await open("C:\\Users\\Devin\\Desktop\\bigger.txt")
    let readStream = fileHandel.createReadStream({highWaterMark:32*1024})
    let { size } = await fileHandel.stat();

    //<Response Heder that make browser Understand what the file is related to>
    console.log('I resently made a connection', socket.remotePort);
    socket.write('HTTP/2\n')
    socket.write('Access-Control-Allow-Origin:*\n')
    socket.write('Content-Type:video/mp4\n')
    socket.write('Content-Disposition:inline\n')
    socket.write(`Content-Length:${size}`)
    socket.write('\n\n')

  

    readStream.pipe(socket)

  
    readStream.on('end', () => {
        console.log('File Ended');
        fileHandel.close()
    })

    readStream.on('resume', () => {
        console.log('Stream Resume');
    })

  

    readStream.on('pause', () => {
        console.log('Stream Paused');
    })


    socket.on('data', (data) => {
        console.log(data.toString());
    })

  
    socket.on('close', (data) => {
        console.log('Client Disconnected', socket.remoteAddress, "🥲");
        fileHandel.close()
    })


    socket.on('error', () => {
        console.log('Disconnected');
        fileHandel.close()
    })

  
    socket.on('end', () => {
        console.log('Disconnected with end');
        fileHandel.close()
    })

  
})

  
server.listen(4000, '0.0.0.0', (a, b) => {
    console.log('server is listening on :', server.address());
})
```


[[Understanding Double Await in Fetch API]]