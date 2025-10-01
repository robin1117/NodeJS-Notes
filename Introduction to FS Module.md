`FS-Module` is core native module which comes by default with `node.js` 
It is very powerful module using which we can read and write any file without worrying about its extension, Because it directly works on binary

You can import it like this way :
```js
import fs from 'fs:node'
```

It returns a vast object having lot of methods but we don`t` need to know all, as when we needed we can get to know
for now we see only how to <font color="#c0504d">Read files</font>

```bash
{
  appendFile: [Function: appendFile],
  appendFileSync: [Function: appendFileSync],
  access: [Function: access],
  accessSync: [Function: accessSync],
  chown: [Function: chown],
  chownSync: [Function: chownSync],
  chmod: [Function: chmod],
  chmodSync: [Function: chmodSync],
  close: [Function: close],
  closeSync: [Function: closeSync],
  copyFile: [Function: copyFile],
  copyFileSync: [Function: copyFileSync],
  cp: [Function: cp],
  cpSync: [Function: cpSync],
  createReadStream: [Function: createReadStream],
  createWriteStream: [Function: createWriteStream],
  exists: [Function: exists],
  existsSync: [Function: existsSync],
  fchown: [Function: fchown],
  fchownSync: [Function: fchownSync],
  fchmod: [Function: fchmod],
  fchmodSync: [Function: fchmodSync],
  fdatasync: [Function: fdatasync],
  fdatasyncSync: [Function: fdatasyncSync],
  fstat: [Function: fstat],
  fstatSync: [Function: fstatSync],
  fsync: [Function: fsync],
  fsyncSync: [Function: fsyncSync],
  ftruncate: [Function: ftruncate],
  ftruncateSync: [Function: ftruncateSync],
  futimes: [Function: futimes],
  futimesSync: [Function: futimesSync],
  glob: [Function: glob],
  globSync: [Function: globSync],
  lchown: [Function: lchown],
  lchownSync: [Function: lchownSync],
  lchmod: undefined,
  lchmodSync: undefined,
  link: [Function: link],
  linkSync: [Function: linkSync],
  lstat: [Function: lstat],
  lstatSync: [Function: lstatSync],
  lutimes: [Function: lutimes],
  lutimesSync: [Function: lutimesSync],
  mkdir: [Function: mkdir],
  mkdirSync: [Function: mkdirSync],
  mkdtemp: [Function: mkdtemp],
  mkdtempSync: [Function: mkdtempSync],
  open: [Function: open],
  openSync: [Function: openSync],
  openAsBlob: [Function: openAsBlob],
  readdir: [Function: readdir],
  readdirSync: [Function: readdirSync],
  read: [Function: read],
  readSync: [Function: readSync],
  readv: [Function: readv],
  readvSync: [Function: readvSync],
  readFile: [Function: readFile],
  readFileSync: [Function: readFileSync],
  readlink: [Function: readlink],
  readlinkSync: [Function: readlinkSync],
  realpath: [Function: realpath] { native: [Function (anonymous)] },
  realpathSync: [Function: realpathSync] { native: [Function (anonymous)] },
  rename: [Function: rename],
  renameSync: [Function: renameSync],
  rm: [Function: rm],
  rmSync: [Function: rmSync],
  rmdir: [Function: rmdir],
  rmdirSync: [Function: rmdirSync],
  stat: [Function: stat],
  statfs: [Function: statfs],
  statSync: [Function: statSync],
  statfsSync: [Function: statfsSync],
  symlink: [Function: symlink],
  symlinkSync: [Function: symlinkSync],
  truncate: [Function: truncate],
  truncateSync: [Function: truncateSync],
  unwatchFile: [Function: unwatchFile],
  unlink: [Function: unlink],
  unlinkSync: [Function: unlinkSync],
  utimes: [Function: utimes],
  utimesSync: [Function: utimesSync],
  watch: [Function: watch],
  watchFile: [Function: watchFile],
  writeFile: [Function: writeFile],
  writeFileSync: [Function: writeFileSync],
  write: [Function: write],
  writeSync: [Function: writeSync],
  writev: [Function: writev],
  writevSync: [Function: writevSync],
  Dirent: [class Dirent],
  Stats: [Function: deprecated],
  ReadStream: [Getter/Setter],
  WriteStream: [Getter/Setter],
  FileReadStream: [Getter/Setter],
  FileWriteStream: [Getter/Setter],
  _toUnixTimestamp: [Function: toUnixTimestamp],
  Dir: [class Dir],
  opendir: [Function: opendir],
  opendirSync: [Function: opendirSync],
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1,
  constants: [Object: null prototype] {
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    UV_DIRENT_UNKNOWN: 0,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_BLOCK: 7,
    EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
    EXTENSIONLESS_FORMAT_WASM: 1,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    O_CREAT: 256,
    O_EXCL: 1024,
    UV_FS_O_FILEMAP: 536870912,
    O_TRUNC: 512,
    O_APPEND: 8,
    S_IRUSR: 256,
    S_IWUSR: 128,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_COPYFILE_EXCL: 1,
    COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_FICLONE_FORCE: 4
  },
  promises: [Getter]
}
```

Majorly you can find two types of methods in this object : `sync`  and `non-sync`  based on the working behaviour-
- <font color="#4f81bd">synchronous</font> : Blocking main thread
- <font color="#4f81bd">non-synchronous</font> : Non-Blocking 

---

Let`s`  see What is the optimal ways for Reading a File -

#### `readFileSync(path,encoder)` 😒

```js
'app.js'

import fs from 'fs:node'
const content = fs.readFileSync("./nancy.txt","utf-8") //Usually it returns buffer if i have not provide `encoder`
console.log(content)
```

- Using `readFileSync` is strictly prohibited because of its Blocking Nature , this letting the below code waits until it reads the file completely .

#### `readFile(path, format, callback)` 😒

```js
'app.js'

import fs from 'fs:node'
const content = fs.readFile("./nancy.txt",(err, data)=>{
	console.log(data) //it contains buffer
	}) 
console.log(content) //void
```

- It executes Asynchronously without blocking the main thread , it allows the below code executes before reading the file - Still we haven`t` use it we have another optimal way ways :

---
#### `readFile()` - promises based -✅

<font color="#f79646">Instead all these we uses an promises based method which we can import like this : </font>

```js
import fs from 'fs:node/promises'
```


```js
'app.js'

import fs from 'fs:node/promises'
const content = await fs.readFile("./nancy.txt")  //This returns an promise so we have to get data use `await` or `then` 
console.log(content) //actual data in the form of buffer 
```

- Promised based `readFile()` is the most optimised and fastest way for reading the file - 
- It does not blocking the main thread instead it read the file simultaneously with the execution of code
- When we will created our server, where we uses Promise based method for reading files and handling API Requests, because it helps for handling both simultaneously
- `readFile(path, format, callback)` this also works same as too, but the problem with, it leads to call back hell and we know Which is what Promises was introduced to solve

#FS_Module


#### [[Word Counter CLI Project]]

#### [[Writing to a File Using Node.js]]

#### [[Rename, Delete, Move, Copy Using Node.js]]