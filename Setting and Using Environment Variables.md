Till now we had seen how we can view these variables using `System-Informer` and in the `Vs-Code`  
But we have not seen yet, how we can print these environment variables in our Terminal ? and  how we can set these `env` through terminal too ? <font color="#c0504d">What is actually we will discuss  here .</font>

```bash
$ env  
$ printenv
	both the commands works exactly same -
```

This command prints all the `env` with in the terminal that are exist with in the process terminal -
You might be gets scared to see how such a big list of all `env` but you neither need to know all,
only few are important one like `PATH`, `PS1` etc

In the `PATH` variables one thing you can Notice that all the paths are separate by `:`  this is because our bash terminal stimulates Linux Environment and in Linux we uses `:`  for separation 
while in windows it is convention that `;` for path separation -

### How we can set `env` through bash commands -
- We already know that, if we wanna create Environment Variable with in our terminal process only then we can do something like this way `export robin=45` -

```bash
$ export robin=49
```

- Now I am curious about How we can setup `env` through bash terminal, that`s` works through out your system - `System Environment Variable`  or  `User Environment Variable`

```bash
$ setx robin "49"
```

This command set `robin` as `User Environment Variable` of your system - you can see in `env` section of your system -

![[Pasted image 20250804095958.png|500]]

Now If you wanna delete it without even touch using bash terminal only - another command for it.
<font color="#c0504d">But unfortunately this command di not even work in</font> `bash`  its for `Powershell`

<font color="#ff0000">Error</font> ❌
```bash
$ REG delete HKCU\Environment /F /V robin
```

😁But the good news is you can use any `powershell` command in `bash` too.

<font color="#00b050">Work </font>✅
```bash
powershell -Command "REG delete HKCU\Environment /F /V robin"
```

---

🤔So this was all about how we can add or delete `User Variables` , but haven't seen yet how we can play like same with `system variables`

There is another command for it that we can use for it - which is another a command of `powershell`, so to make it work in `bash`  -   

<font color="#00b050">Work </font>✅
```bash
powershell -Command "setx name 'Robin singh' /M"
```

This adds a key `name` whose  value is `Robin singh` - to the `System Variable`

### Can we set `env` through Node ?
Why not ! we know that guys we can execute any bash command with in the `node.js` file  like this - So why we cannot not add it ! , even we can do all whatever we did above.

```js
'app.js'
const {exec} = require('child_process')
exec(`powershell -Command "setx name 'Robin singh' /M"`)
```

### Transfer `env` to child process that is not in parent process-

Till now we have seen that whatever the `env` a parent process contains - all they are inhered to the child process by default - <font color="#c0504d">As copy not by reference</font> - Means the child process cannot make changes to the `env`  of parent process - <font color="#c0504d">Directly</font> - !

Like this -
```js
'app.js'
process.env.num = 264 //This made changes only in local num 
```

<font color="#c0504d">But If the child process have capabilities  to Access files or run commands then there may be chances it can change environment variable of parent process too.  </font>
<font color="#00b050">Is it possible ? </font>can we transfer a `Environment variable` to child process even if its not in parent process ?

---
#### There is an Tremendous way of Debugging through browser :

##### <font color="#00b0f0">Debug with in VS Code -</font>

- I just build a file `app.js` and write some basic code, a breakpoint is also added at console to made the code pause here for debugging -

```js
'aap.js'

let temp = process.env;
🔴console.log(temp);
```

- And I use this command to executes the above code using `JavaScript Debugger (Nightly)` Extension -

```bash
$ node --inspect app.js
```

- That`s` it now you can easily view your all the variable in the debugging Section of VS Code -

![[Pasted image 20250805124721.png]]


##### <font color="#9bbb59">Debug with in Browser too -</font>

- The Extension `JavaScript Debugger (Nightly)` is very Powerful, when you executes your code with command `node --inspect app.js` - 
- This Extension definitely provides feature of debugging with in the VS Code but apart from this it also provides debugging in Browser too -

- <font color="#c3d69b">But How ? </font>

![[Pasted image 20250805131652.png]]
- By just clicking over green `node.js` icon in your browser `Dev Tools` you can Debug you code within the browser too - 
- This green color icon is only visible when you executes code using this command `node --inspect app.js` and you should have break point in your code - 


##### <font color="#f79646">Transferring variable thru bash Command while executing -</font>

<span style="background:#fdbfff"> This Way we can set env implicitly while executing </span>
<font color="#9bbb59">In this command, we are providing some variables as prefix arguments. These variables act as environment variables in the child process.</font>
```bash
num8=9 age=54 node --inspect app.js
```


<span style="background:#ff4d4f"> This Way we can Restrict env implicitly while executing </span>
<font color="#c0504d">In this command we are just apply Restricting some of the Environment variables of parent process so that should not be accessible with in the child process -  </font>
```bash
env -u PS1 node --inspect app.js
```



### Now Let`s` Se how we can use `Process.env` while in Development process -

Let`s` Create a file whose name can be anything, but  the convention the wise its should be like `.env` , `.env.local` etc -

<font color="#8064a2">So I create</font> `abc` <font color="#8064a2">file even without providing any extension -</font>
<font color="#e36c09">Ant I put some data in format of</font> `key` : `value` <font color="#e36c09">pairs , as our environments variables also like same too</font>
While development there is a file usually contains some credentials in form of `key` `value` pairs - like `API_KEY`,`Databas paswords` , and we have`t`  through it over git hub - 

```file
'abc'

xyz=npm
b=p

```

```js
`app.js`

const fs = require("fs");
const fileData = fs.readFileSync("./abc").toString();

fileData.split("\n").forEach((variable) => {
  const [key, value] = variable.split("=");
  process.env[key] = value;
});

console.log(process.env);

```

What's happening here is that our `app.js` reads a file named `adc`, which contains some dummy variables. It parses them into key-value pairs and then attaches these variables to the environment of the `app.js` process.

![[Pasted image 20250805213305.png]]

Now you might be get confused why we get `\r`  in `xyz : "npm\r"`  ?
- This is Because in our windows OS, the new line is represented in with two characters `\n\r` 
- While in `Mac` , `linux` its just with `\n` 

---

✅ <font color="#9bbb59">This was all about how we can read variables from a file and attaching to the environment !</font>
<font color="#9bbb59">To get it work done like this we generally uses a Library which makes this easy for us - in more reliable way</font> 

`Dotenv Library`  


#Basic_OS