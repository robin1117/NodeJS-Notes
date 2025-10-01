#### `aksar` CLI Project : Publishing CLI package

```js
'index.js'
#!/usr/bin/env node

import fs from "node:fs/promises";
let agrv = process.argv; //let us suppose provided array
let modifiedArr = agrv.splice(3);
let flags = modifiedArr.filter((value) => /-[a-z]/.test(value));
let [word] = modifiedArr.filter((value) =>
  /(?<!-)\b[A-Za-z0-9]+\b/.test(value)
);

  

const configration = {
  path: agrv[2],
  flags: flags,
  word: word,
};

console.log(configration);

  
async function wordCounder(config) {
  let counterObj = {};

  
  //If path not found
  if (!config.path) {
    return "Please Provide Path of file atleast !";
  }

  

  //This Read Data
  let data = await fs.readFile(config.path, "utf-8");
  let allWords = data.match(/\b\w+\b/g);

  

  //We have only Path
  if (!config.word && !config.flags.length) {
    allWords.forEach((word) => {
      if (!(word in counterObj)) {
        counterObj[word] = 1;
      } else {
        counterObj[word]++;
      }
    });
    return counterObj;
  }

  

  //We have Path and flag only
  if (!config.word && config.flags.length) {
    allWords.forEach((word) => {
      if (!(word.toLowerCase() in counterObj)) {
        counterObj[word.toLowerCase()] = 1;
      } else {
        counterObj[word.toLowerCase()]++;
      }
    });
    return counterObj;
  }


  // Search for Specific Word !
  if (config.word && !config.flags.length) {
    counterObj[config.word] = 0;
    allWords.forEach((testWith) => {
      if (config.word == testWith) {
        counterObj[config.word]++;
      }
    });
    return counterObj;

  }
  
  // Search for Specific Word with flags!
  if (config.word && config.flags.length) {
    counterObj[config.word.toLowerCase()] = 0;
    allWords.forEach((testWith) => {
      if (config.word.toLowerCase() == testWith.toLowerCase()) {
        counterObj[config.word.toLowerCase()]++;
      }
    });
    return counterObj;
  }
}


console.log(await wordCounder(configration));
```

Its time to publish this code as a `CLI` package over `npm website` :  
we have to follow this folder structure -

<font color="#c0504d">Folder Structure :</font>
```LS
wordcounter
	'index.js'
	'package.json'
```

```json
'package.json'
{
  "name": "aksar",
  "version": "1.0.1",
  "type": "module",
  "main": "index.js",
  "bin": {
    "aksar":"./index.js"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

```bash
npm publish
```


---
#### `npm link` & `bin`

##### What is `npm link`?
- `npm link` creates a **symlink** (shortcut) between your local package and the global `node_modules`.
- It is mainly used for **developing CLI tools locally** without publishing to `npm`.
- After linking, you can test your package globally.

##### Role of `bin` in `package.json`.
- The **`bin` field** tells `npm` and `npx` which file should be exposed as a CLI command.

```json
  "bin": {
    "aksar":"./index.js"  <-- entry file (with #!/usr/bin/env node)
  }
```
- After linking, you can run `aksar` directly in terminal.

##### How `npm link` Works ?
- <font color="#9bbb59">Go inside your package folder →</font>

```bash
npm link
```

- Creates a global symbolic to your package.
- If `bin` is defined, npm also creates an executable in global `.bin`.
- <font color="#9bbb59">In another project → </font>

```bash
npm link your-package-name
```

##### What Happens Without `bin` ?
If you don’t have `bin` in `package.json`:
- `npm link` still links your package globally.
- But **no command is available** in terminal, since npm doesn’t know what executable to create.

##### ✅ In short:
- Use `"bin"` for CLI.
- Use `npm link` to test it globally before publishing.

#FS_Module