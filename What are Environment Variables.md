### Intro
As a Computer Science Student you were definitely hear about environment variables , did you Remember when we install `gcc` compiler in our windows, over there then we have to add path of our `gcc` into Environment Variable - So that `gcc` becomes accessible though out your system -

<font color="#f79646">What we see here ?</font>
- What are Environment Variables -
- Where they get come in work -
- How we can made change in it -

---
- These are nothing but the `key value pairs of strings` -
- Environment Variables are something look like - you can open this in you system by a simple search -

![[Pasted image 20250801195021.png |470]]

<font color="#9bbb59">Majorly we have 3 kinds of Environment Variables -</font>
- <font color="#d83931">System Variables</font> : They Contains Values that are very important and many of the application dependent on it - So we should not touch these without knowledge ! -
- <font color="#d83931">User Variables</font> : They contain values that are for user specific, they are not as much important, even we can delete all of them 
- <font color="#d83931">Process Variables</font> : They contain values that are for user specific, I mean process uses these for there own purpose

### How we can add values through `gui` window  -
- You can simply add path by clicking `browse Directory` , `Browse file` or you can put any string manually  too -
- You can also add multiple valid paths by just separating each one with semi-colon `;` like this -

![[Pasted image 20250801225257.png|700]]

- The new menu will be activate only when we decided to put multiple paths value as we do above - This is our new menu 

![[Pasted image 20250801230305.png | 600]]

🤔Whatever we study till now about variables come in the categories of `system varibales` and `user variables` but apart from these two there is another type of variables exist  too.
Whose name is `Process specific variables` -

### Process Specific Variables -

#### What are Process `env`
- These are the variables which are used by process for there own purpose -
- For example, there is an environment variable called `PS1` that already exists in Bash. Bash uses it to define the prompt string. We can overwrite `PS1` to customize the appearance of the prompt.
- `PS1` is one of the environment variables that exists by default, but there are many other environment variables as well.
- These are Some Common Environment Variables:

|Variable|Description|
|---|---|
|`PS1`|Defines the appearance of the shell prompt|
|`PATH`|A list of directories the shell searches for commands|
|`HOME`|Path to the current user's home directory|
|`USER`|Current logged-in username|
|`SHELL`|The path of the shell being used|
|`PWD`|Present working directory|

- In most operating systems (including Linux, macOS, and Windows), when a parent process spawns a child process, the **environment variables are copied** into the child’s environment **by default**.

---

You can understand it by this way - 
```js
'app.js'
const environmentVaribale = process.env;
🔴console.log(environmentVaribale);
```

This executes `app.js` in Debugging Mode -
```bash
$ node --inspect app.js
```

This just holds your program `app.js` at break point - 
This way, we can view all the environment variables available to the `app.js` process — specifically, we can check if `PS1` is present.

![[Pasted image 20250802123452.png]]

---

#### You can also create your own `env` for your process -
- ✅We can create custom environment variables through the Bash terminal. These variables are transferred to the child process (e.g., `app.js`) when we execute a Node.js process using them.

```bash
$ export num=45
```

- ❌The variable which we create normally without using export keyword are not an Environment variable.

```bash
$ num=45
```

- 🤔Why don`t` we put this `export num=45`  in `.bashrc`, so that it builds every time when a new terminal open -

```bash
'.bashrc'
export num=45
```

➡️ Now you can check your `num`  env by this way -

```bash
$ node --inspect app.js
```

![[Pasted image 20250802145133.png |00]]

---

Till now we had understand that we can view all our environment variables using `System Informer`-
You can also view all these environment variables, like `NUM`, `PS1`, etc., in your `app.js` process by simply pausing execution at a breakpoint in VS Code :

```bash
$ node --inspect app.js
```

![[Pasted image 20250802151852.png]]

---
<font color="#d83931">Guys what we understand about Environment variables here ? </font>
- **Inheritance is default**: When a child process is spawned, it **inherits the parent’s environment variables** by default.
- **Can block or modify variables**: The parent can control what environment variables are passed to the child — by using a custom `env` option when spawning the child.
 - **Can send new variables**: The parent can pass environment variables to the child **that the parent itself doesn’t use** — these can be custom-made just for the child.

### [[Setting and Using Environment Variables]]

#Basic_OS