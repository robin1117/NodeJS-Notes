Here we discuss about how `npx` works ?
what actually happen to the terminal when we put `npx hello` in it ? Let`s` see.

```bash
$ npx hello
```

<font color="#fac08f">What</font> `npx` <font color="#fac08f">does ?</font> 
If I Explain in single line what `npx` does, then you can understand it by this way It just make a search for the file `hello` and executes as it is, that it. 
But where is will look for that file ? 🤔

<font color="#fac08f">How</font> `npx` <font color="#fac08f">made this execution ?</font>
`npx` just execute the file as it is , no matter for what that file is made for weather its for `.js`, `.bash`, etc , -`npx` just reads the file and executes using terminal as it is.
If we provides <font color="#c0504d">shebang</font> in the file then `npx` executes it accordingly

### Basically `npx` finds that file steps by step . Let`s` see one by one what are these steps are ?

Let`s` take an example and see how `npx`. works
<font color="#d7e3bc">What it does to the terminal ? </font>
```bash
$ npx hello 
```

---
#### Search Step 1 - <font color="#9bbb59">Package.json</font>
- Searches for `package.json` in current working directory, If its found.
- Over there Searches for `name` key in the `package.json`
- And executes the file referring by `bin` key in `package.json` 
❗*In any case if its not able to find `package.json` - then its directly jump over the Second Step -*

**PRACTICLE** 
```js
'app.js'
#!/usr/bin/env node
console.log('Hello Yrr');
```

- *Providing shebang is mandatory* - with it `npx` knows how to execute the script.
- Without it - `npx` doesn’t know **how to run** the file. On Windows, it will **open in your default `.js` handler** (VS Code in your case).

```json
'package.json'
{
    "name": "hello",
    "bin": "app.js"
}
```

```bash
$ npx robin
Hello Yrr
```

#### Search Step 2 - <font color="#9bbb59">node_modules</font>
-  Searches for `node_modules/.bin/hello` in the current working directory, and if found, `npx` executes it using the default terminal (unless a different one is explicitly set).
❗*If it's not able to find the exact file in any case then it go for the Third step -*

![[Pasted image 20250727184520.png]]
Some times this default Terminal may leads to error , then we have to fixed it by own .
![[Pasted image 20250727184536.png]]

The reason of this <font color="#ff0000">error</font> is due to because here `npx`  executing our `hello` file using the CMD rather than `bash`. basically in our windows operating system we have other types of terminal too like `CMD`, `powerShell` etc 

You have to keep one thing about CMD in your mind that CMD can run only file with specific extensions, such as `.bat`, `.cmd`, etc

So here we have to explicitly set using which terminal should `npx` executes the file `hello`  

First let`s` we check which default shell is set over the `npx`-
```bash
$ npm config get script-shell 
null
```

❗It returns null, means `npx` uses the default shell of the OS to execute files. In case of windows the default shell is CMD
✅ so we have to set default shell for `npx` to `bash`

```bash
npm config set script-shell "C:\Program Files\Git\usr\bin\bash"
```

✅With this our error fixed, and Now you can executes `npx hello`
![[Pasted image 20250727212122.png]]

#### Search Step 3 - <font color="#9bbb59">Global Packages</font>
- In the third step, it searches for `hello` in the directory where all global packages are stored on your system.
- The good thing with  global packages , We can executes them with or without `npx` too
- To understand step 3 more clearly, you first need to know where these global packages are stored on your system.

To check where global packages are installed.
```bash
$ npm root -g
```

- `C:\Users\Devin\AppData\Roaming\npm\node_modules` - This is the path where all global modules are get`s` stored.

![[Pasted image 20250728092329.png]]

😒These are the packages which are stored in the folder which is globally accessible.  
🤔Now the question is why these packages are accessible globally ?

🔥Because the path `C:\Users\Devin\AppData\Roaming\npm` is set in our environment variable.
so the folder `npm` is accessible globally along with its content -

![[Pasted image 20250728095623.png | 400]]
To make global packages executable from anywhere, the location where they are stored must be added to the environment variable.

---

➡️🫢 If `npx` could not find that package globally too, then it go ahead on Step 4, lets see over there what it did -


#### Search Step 4 - <font color="#9bbb59">npm_chase</font>
- In the fourth step `npx` check `npm_chase` folder in our system and try to find is there any package present whose for we are actually looking for -
- if its found, `npx` directly  execute it.
#### Search Step 5 - <font color="#9bbb59">NPM website</font>
- If we are on step fifth means `npx` yet can`t` able to find `hello` globally nor in `npm_chase`  too, So it decided to go out of system find `hello` over the NPM website.

- If it successfully finds it there, it returns a prompt in the terminal asking, “Do you want to install it?”
- One thing you should keep it in your mind that - `npx` can install only the packages of `ClI` (Executable Packages)
- if `npx` couldn`t` find any of the package over there too - then its just return an <font color="#ff0000">error</font>

![[Pasted image 20250728114539.png]]

- Now, the question is: where on your PC does `npx` download that package?
- Whatever packages `npx` downloads, it puts all of them in a folder called `npm_cache`
- `C:\Users\Devin\AppData\Local\npm-cache`

### Further Elaboration and differences about `npx` and `npm` !
- In the recent version of `Node.js`, a new syntax has been introduced for `npx` and `npm`.
- According to this syntax - `npx create-react-app` == `npm create react-app` they both will do the same thing - Both command try to find and executes the package `create-react-app` 
- In the new syntax, Node.js has made a convention with `npm` — if we append the word `create` before any package name, then `Node.js` combines them together with a hyphen and performs a search, just like `npx` does.

Look at the below example showing, how we can install `create-vite` package using `npx` & `npm`
syntax -

![[Pasted image 20250728221944.png]]

![[Pasted image 20250728222021.png]]

- `create-vite` and `vite` are two different packages — we use the `create-vite` package to create a new Vite project, while `vite` is used to start the local development server.
- You can also install these packages directly from the `NPM` website using `npm` — as a `webdependency-D`, `globally-g`, or however you prefer. It's all up to you.

```Bash
$ npm i vite
```

```Bash
$ npm i create-vite
```

- but the Good thing with global - packages we can execute it from any where even without using `npm` or `npx` 

you can directly do like this -
```bash
vite
```



### So This was all about How `npx` Works ! Now we go one step ahead and try to find What is `npx` ? [[What is npx]]

#fundaMentalsNode