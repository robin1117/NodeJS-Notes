In this section we were gone discuss How we can make write in any file using `node.js` .

There are some important methods that we can use too, which are present in the `fs` module, 
It better for us to import `fs` module from of its promise version as its works in more optimise way.

#### `writeFile(path,data)`

```js
'app.js'
import fs from "node:fs/promises"
fs.writeFile('file-1.txt', 'My Name Is Robin')
```

- If the File `file-1.txt` does not exist to the provided path then it just creates a new one as the same name you provided.
- If the file already exists then it overwrite the data without worrying earlier data, <font color="#c0504d">means you loss the earlier data</font>

#### `appendFile(path,data)`

```js
'app.js'
import fs from "node:fs/promises"
fs.appendFile('file-1.txt', 'My Name Is Robin')
```

- This one too also creates new file, if the file does not exist at the provide location.
- If file already exist then it add data in the existing content. without overwriting it completely.
- Means you does not have to<font color="#c0504d"> scared of loosing data</font> 

---

`readFile()` and `writeFile()` are not limit to the txt file but we can read and write any kind of files, because both methods worked over the binary data, so we can work with any file not matter of its extension.

Let`s` take an example where I will read and write an image file from one location to another, that make you understand very well : 😒

```js
'app.js'
import fs from "node:fs/promises";

let data = await fs.readFile("./robin.jpg");
console.log(data) // buffer
fs.appendFile("C:\\Users\\Devin\\Desktop\\ramu.jpg", data);
```

- In the above code we are just transferring one image `robin.jpg` from one location to the Desktop as the name `ramu.jpg` .
- `data` variable will hold a binary level buffer which we are just stored as it is in `ramu.jpg` , But we can also modifies this buffer in between before storing, but this may leads to corrupt the file.
- In the future lectures we will do this so

#### Practice Problem -
Create a CLI application named `copy` that can be used from any terminal.

Creating our Project  `npm init -y`

```json
'packaage.json'
{
  "name": "derox",
  "version": "1.0.0",
  "main": "app.js",
  "bin": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "pkg": "^5.8.1"
  }
}
```

```js
'app.js'
const fs = require("fs/promises");
// import fs from "fs/promises";

async function name() {
  try {
    let data = await fs.readFile(process.argv[2]);
    console.log(data);
    fs.writeFile(process.argv[3], data);
  } catch (error) {
    console.log('This is Error Kuch to gad bad hey daya 🤔');
  }
}
name();

// 👇 This keeps the program alive if you double-click the .exe
// (so the window won't close immediately)
process.stdin.resume();
```

For Making our `copy.exe` from `app.js` : For that we uses a `npm` package .
- `npm i pkg -d` installing `pkg` as dev dependency .

```bash
npx pkg . -t node18-win-x64 -o copy
```


This commands generate a `copy.exe` file
<font color="#9bbb59">NOTE :</font>  To make it executes from any where using any terminal we have to put its absolute path to `env` 

<font color="#c0504d">NOTE :</font> Use `appendFile` while doing error logging in the catch block use convention `.log` with the file like `fileError.log`

Over all whatever the `copy.exe` file we made here its good enough for small size files - But if we are working with large files like `2gb` ,`8gb`  its not good or optimize so. because this fills our RAM memory in unnecessary way which is not good.

Therefore we uses the concept of streams for solving these problems !
we will discuss about it in future lectures.

#FS_Module