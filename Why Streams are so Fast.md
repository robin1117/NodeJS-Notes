#Streams

Streams offer **significant performance advantages** over traditional methods like `appendFileSync` or `writeFileSync`, especially when working with **large datasets**.
  
---
## 🔍 How Streams Work Internally

✅ A stream **opens the file only once**.  
✅ Uses an **internal buffer (in RAM)** to manage small chunks of data.  
✅ Data is **written efficiently and continuously** to the destination.  
✅ Once writing is done, the stream **closes the file**.  

➡️ **In short:**  

> File open → multiple efficient writes → file close = 🚀 *super fast performance*

  
---

## 🐢 Why `appendFileSync` / `writeFileSync` Are Slower

Each call to `appendFileSync` or `writeFileSync` does the following:

1. Opens the file 📂  
2. Writes data 💾 (directly to disk)  
3. Closes the file 🚪  

➡️ This process repeats **every single time inside a loop**, causing:  

- Thousands of open/write/close cycles  
- High I/O overhead  
- Much slower execution speed

---

```js

let data = "";

for (let i = 1; i <= 100000; i++) {  

  data += i + "\n";

}

fs.appendFile("numbers.txt", data, () => {});

```

In the above example we are using `appendFile()` open the file and write all data in once without opening and closing for multiple times.
As we know `appendFile()` and `writFile()` opens and close file for each write. 

---

## 🧠 Summary

| Method                             | File Handling                  | Buffering | Performance | Best Use                |
| :--------------------------------- | :----------------------------- | :-------- | :---------- | ----------------------- |
| `writeFileSync` / `appendFileSync` | Opens & closes file repeatedly | ❌ No      | 🐢 Slow     | Small writes            |
| `createWriteStream`                | Opens once, writes in chunks   | ✅ Yes     | ⚡ Fast      | Large continuous writes |
  
---

  **Conclusion:**  

- First Reason is it opens the for once and write and write whatever then only it close the file
- Second Reason is it Uses internal buffer `(fast)` before writing over HDD  

[[File Descriptor]]