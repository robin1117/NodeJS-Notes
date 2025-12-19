#Streams
A **stream** in Node.js is a powerful way to handle data piece by piece (in _chunks_) rather than loading it all at once. Streams let you process data progressively, which saves memory and improves performance for large or continuous data flows.
## 📦 What is a Stream?
> "A stream is like a pipeline through which data flows continuously."

Streams are ideal for:
- Reading/Writing large files
- Handling video/audio data
- Transferring data over networks
- Processing real-time input/output

## 🏞️ Real-Life Analogy

Imagine a zipline in a village 🧺:  
You're sending a **10 GiB file** from one house to another. You can’t carry it all at once—so you send it in baskets, one after another via the zipline. Each basket is like a **chunk of data**. The receiver starts processing before all baskets arrive.

**Benefits of this approach:**
- ✅ Saves memory
- ✅ Efficient and faster
- ✅ No waiting for the entire file to load before processing

## 💡 Why Use Streams?

Without streams:
- 🚫 The entire file is read into memory before processing — this blocks the event loop and wastes RAM.

With streams:
- ✅ Data is read bit-by-bit (chunk-by-chunk)
- ✅ Low memory usage and non-blocking I/O
- ✅ Start processing sooner — good for large files and real-time data

## 🔧 Stream Types in Node.js

- **[[Readable Streams]]** — streams you can read data from (e.g., `fs.createReadStream`).  
- [[Writable Streams]] — streams you can write data to (e.g., `fs.createWriteStream`).  
- **Duplex** — both readable and writable (e.g., network sockets).  
- **Transform** — a duplex stream that can modify data as it is read/written (e.g., compression).
- [[Data Streams]]

## 📃 Types of Streams in Node.js
  
Node.js streams allow you to work with data efficiently by processing it incrementally, without loading the entire data into memory. Streams are particularly useful for handling large datasets or continuous data flows. There are four types of streams in Node.js:
#### 1. Readable Streams

Readable streams are used to **read data** from a source, such as reading files or receiving HTTP requests.
#### 2. Writable Streams

Writable streams are used to **write data** to a destination, such as writing to a file or sending HTTP responses.

#### 3. Duplex Streams

Duplex streams are streams that can **both read and write data**. These are useful for situations like network communication, where you both send and receive data.

#### 4. Transform Streams

Transform streams are a special type of duplex stream in which the **output is a transformed version of the input**. They modify or process the data as it passes through, such as by compressing or encrypting it.

## ✅ When to Use Streams

- Large files (video, audio, large logs)  
- Real-time data (sockets, telemetry)  
- When you want to start processing before full data arrival  
- Memory-sensitive environments

## 🧭 Quick Summary

- Streams = chunked, progressive data processing.  
- Use Readable/Writable/Duplex/Transform according to your needs.  
- Prefer `pipe()` for simple, efficient data transfers.  
- Streams preserve Node.js non-blocking, low-memory advantages for I/O-heavy tasks.


[[Writing One Lakh Numbers]]


