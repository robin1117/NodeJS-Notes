#Streams
These are advanced types of streams in Node.js used for **reading and writing data simultaneously** — useful in networking, compression, or real-time processing.


---
## 1. Duplex Stream

- **What it is:** A stream that can both read and write independently.  
- **Analogy:** Like a walkie-talkie — talk and listen at the same time, but separately.  
- **Use case:** Network sockets (`net.Socket`), receiving and sending data simultaneously.  
- **Import:** `import { Duplex } from "stream";`


---
  
## 2. Transform Stream (Subclass of Duplex)

- **What it is:** A Duplex stream that **modifies data** as it is written and before it’s read.  
- **Analogy:** Like a translator — input comes in one format/language, output comes out transformed.  
- **Use case:** Compression, encryption, format conversion (e.g., CSV → JSON).  
- **Import:** `import { Transform } from "stream";`

---

## 3. PassThrough Stream (Special Case of Transform)

- **What it is:** A Transform stream that **does not modify the data**, just passes it through.  
- **Analogy:** Like a glass tube — data goes in one end and comes out exactly the same.  
- **Use case:** Debugging, logging, monitoring traffic without altering content.  
- **Import:** `import { PassThrough } from "stream";`



