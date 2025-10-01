## Intro..

Before we studied about different types of module in Node.js, first we have to study about the **ES6 Module System**.

I am sure you are getting confused between **Module system** and **Module**.

**Module system** refers to something that helps us create modules. Like we previously studied the **CommonJS module system**, in which we use `require()` and `module.exports`.

---
## Now it's time to study the ES6 module system

  In ES6 modules, we use `import` and `export` for accessing data.
## Named Export

We create two files: `app.js` and `maths.js` and try to transfer data.
```js
'maths.js'
export let a = 59
export {a}
```

```js
'app.js'
import {a} from "./maths.js"
console.log(a)
```

😒But an <font color="#ff0000">error</font> will occur if you do not set the <font color="#ff0000">script as a module.</font>

🤔To avoid this error I will create an `pacakage.json` and set `type=’module’` inside it.

```json
"type": "module"
```

  **Now this becomes ES6 module properly-**
  
## Some Questions Arises in your mind :

- ❓ Can we use `CommonJS` stuff like `require`, `__filename`, etc., in ES6 modules?
- ❌ No, if you try, you will get an error.
- ❗ In ES6 modules, there are only **two types of scope**. <span style="background:#d3f8b6"> Module </span> and <span style="background:#b1ffff"> Global </span>

## Additional Facts

- ✅ **Strict mode** is enabled by default in ES6 modules.
- ✅This means you **cannot create variables without keywords** like `let`, `const`, etc.
- ✅All variables go to **module scope**, whether <font color="#00b0f0">declared</font> or <font color="#00b0f0">imported</font>.

## Let's see about `export default`

```js
'maths.js'
let p = 45
export default p
```

```js
'app.js'
import num from './maths.js'
console.log(num)//46
```
<font color="#ff0000">We cannot do this thing in `common js`</font>

## Comparison: `ES6 Modules` vs `CommonJS`

| Feature | ES6 Modules | CommonJS |
|--------|--------------|----------|
| File Types | Only valid JS files like `.js`, `.mjs` | Any type of file |
| Syntax | `import` / `export` | `require()` / `module.exports` |
- By using <font color="#f79646">ES6 module</font> we are able to import or export only valid files such as `.js` ,`.mjs`

- <font color="#f79646">Common js</font> – By using CJ module we can able import or export any type of file no matter what it's <font color="#00b0f0">extension</font> or <font color="#00b0f0">name</font>

## Accessing `__filename` and `__dirname` in ES6 Modules

For accessing these properties in `ES6 module system` we have to follow different approach we cannot directly access these properties as like we in `Common JS module system` because they are not directly available at global or module .

To access filename and `__dirname` in ES6, before that we have to know the property named as `import.meta`,

Here `import.meta` is a single unit in itself, separately import❌ is not an object and meta❌ is nor the property on it ! Other than this `import.meta` together they are an single object- 

`import.meta` is present in `Node.js` as well as in Browser 

```js
console.log(import.meta)
```
<font color="#ff0000">Output in Node.js</font>
![[import.meta.png]]
<font color="#ff0000">Output in Browser</font>
![[Browser import .meta.png]]

- We can not access `import.meta` outside of the <font color="#9bbb59">module</font>, and it can`t` be present in global scope !
- Means it can`t` be accessible in console directly

Means in our module we get access of special variable known as `import.meta` its an object and it contains some properties - According to Environment.
- <font color="#9bbb59">Browser </font>: It contains information related URL.
- <font color="#9bbb59">Node.js</font> : it contains information related to files like `__dirname`, `__filename` etc

Now simply we can access `__dirname` & `__filename` from here !

```js
'app.js'
let {filename, dirname} = import.meta
console.log(filename, dirname)
```

![[directory returns output.png]]

### `process` object is available Globally !
- process object comes with lots of properties in it , among them some properties are `cwd()` ,`chdir()` etc  some of these are useful to us.

- Some people uses this to get `dirname` of app.js
```js
console.log(process.cwd()) // returns Current working Directory
```
- But this is not right way get `dirname`, sometimes this may be give you wrong result 
```js
'app.js'
console.log(dirname) //this returns static directory name
process.chdir('./src') //this changes current working directory at run time !
console.log(process.cwd()) // get returns the changed current working directory
```

- `console.log(dirname)` is not equal to `console.log(process.cwd())`
- both of these are made for different purposes and we will do it for that purpose !

- `process.cwd()` : Basically it return the current working directory its dynamic it can change, actually it returns path from where the `node.js` gets executed, if we are executing the `app.js` from different location then `process.cwd()` returns the same.

- `dirname` : It returns static directory path which is actually correct.


#fundaMentalsNode