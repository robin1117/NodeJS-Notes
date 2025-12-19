#NetworkingCoreNodeJS 

```js
import { createReadStream, write } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";

  
let server = net.createServer(async (socket) => {
    let fileHandel = await open("D:\\Camo Studio Recording 2025-06-10 13-32-18.mp4")
    let readStream = fileHandel.createReadStream() // we can also set {highWaterMark:10000} to decrease reading speed
    let { size } = await fileHandel.stat();

  
    //<Response Heder that make browser Understand what the comming file is related to>

    console.log('I resently made a connection', socket.remotePort);
    socket.write('HTTP/2\n')
    socket.write('Access-Control-Allow-Origin:*\n')
    socket.write('Content-Type:video/mp4\n')
    socket.write('Content-Disposition:attached\n') \
    socket.write(`Content-Length:${size}`)
    socket.write('\n\n')

  
	// This code keep pausing and resuming reading so that we make slowdown the reading. 
    readStream.on('data', (chunk) => {
        socket.write(chunk)
        readStream.pause()
        
        setTimeout(() => {
            readStream.resume()
        }, 10)
        
    })

  
    socket.write('{"name":"Roboin"}')
    socket.end()

    //readStream.pipe(socket)
    // This methods handels backpressure by automatically pausing and resuming readStream | 
    // This calls socket.end() automatically if i note set this { end: false }
    // so we should not use this !

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


[[Inspecting TCP Data Packets in Wireshark]]