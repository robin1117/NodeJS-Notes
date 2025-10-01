In this Section we will discuss about -
- What are Executable files ?
- How we can create Executable Files Using `Node.js`?
- What is this Executable files for ?

## <font color="#fac08f">We can Classify Executable Files in Two Categories --</font>
### <font color="#ffff00">Script Executable File :</font>
 If any text file contains some command we can say to this file to be Executable file - But all Files are not Executable, Some files requires permission to executes -By default, files in the windows have permission to executes that why here we can able to executes it.
#### <font color="#ffc000">Woking with in Windows OS -</font>
<font color="#d7e3bc">For Example I made different files of different names and extension -</font>

```
'abc'
node
```

```js
'app.js'
node
```

```css
'style.css'
node
```

```
'abc.xyz'
node
```

```bash
'abc.sh'
node
```

- We can execute any of the file by just providing its path to the bash Terminal - Terminal will just reads the file without worrying about its extension and name and try make it executes

<font color="#c0504d">Output : -</font>
```bash
Devin@ThisisNancy MINGW64 ~/Desktop/ROUGH/testing
$ ./style.css
Welcome to Node.js v22.12.0.
Type ".help" for more information.
>
```

--- 
#### <font color="#ffc000">Woking with in Linux using WSL -</font>
<font color="#fac08f">I made a file</font> `Text.txt` <font color="#fac08f">in</font> `WSL` <font color="#fac08f">Environment and put a magical command in to it -</font> Which makes a File `Neha.txt` and put a string into it `Soni Ki Ma Randi` -

```
'Text.txt'
 echo Soni Ki Ma Randi >Neha.txt
```

And you can made this file execute in your <font color="#4bacc6">WSL</font> environment - 

<font color="#f79646">Try to executes :</font>
```bash
evin@ThisisNancy:~/Learning$ ./text.txt
```

<font color="#f79646">Here is The result :</font>
![[Pasted image 20250807192524.png]]

---
### <font color="#c3d69b">Binary Executable File :</font> 
Binary files are computer files that store data in a non-text format, typically as sequences of bytes. These bytes can represent various types of data, including executable code, images, audio, and more, and are not directly readable by humans.
According to windows these files are ended with `.exe` extension -
#### <font color="#c4bd97">Now the Question is it Possible to make our own</font> `.exe` <font color="#c4bd97">file using</font> `Node.js` -
Yes, you can create `.exe` files using the `pkg` npm package. With this tool, you can even generate executables for macOS, ARM, and Linux.  
That’s one of the great things about Node.js — you can distribute your app as a standalone executable that runs without requiring Node.js to be installed on the target machine.

Add this to the end of your `.js` file before bundling in to `.exe`  to keep alive even complete execution 
```js
'app.js'

// 👇 This keeps the program alive if you double-click the exe
// (so the window won't close immediately)
process.stdin.resume();
```

```bash
npm install -g pkg
```

`pkg` bundles **your code + Node.js runtime** into one executable.
You can specify targets
```bash
pkg app.js --targets node18-win-x64,node18-linux-x64,node18-macos-x64
```

```bash
app-win.exe    # Windows
app-linux      # Linux
app-macos      # macOS
```

### <font color="#00b050">To cut Long Story in Short :</font> 

If you want to execute any file on your system, you just need to provide its path to the terminal. The terminal will then attempt to execute it.

The **only condition** is that the file must have **execute permission**.

It doesn’t matter whether the file is a **binary** or a **script** — as long as it has the proper execute permissions, the system will try to run it.

## <font color="#c4bd97">How are we able to execute commands like</font> `node` <font color="#c4bd97">or</font> `cat` <font color="#c4bd97">from anywhere?</font>

You’re right — the actual executable files for these commands are stored in different locations on our system.  
Yet, we can still run them from **anywhere** in the terminal without typing their full paths.

This is possible because of the **`PATH` environment variable**.  
The `PATH` variable tells the shell where to look for executable files when you type a command.

We’ll discuss the `PATH` environment variable in detail in future lectures.





#Basic_OS