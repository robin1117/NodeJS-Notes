Node.js provides multiple methods in the **`fs` (File System)** module to copy, rename, and move files or folders. Below are the important methods and their details.


####  **`fs.copyFile(source, destination, callback)`**
- **Purpose:** Used to copy a single file from `source` to `destination`.
- Usage Example:

```js
const fs = require("fs");

fs.copyFile("./test.txt", "F:/video/myfile.txt", (err) => {
  if (err) throw err;
  console.log("File copied successfully!");
});
```

- Works only with **files**, not directories.
- 