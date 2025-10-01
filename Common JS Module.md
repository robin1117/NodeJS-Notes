### Intro
The module system comes in handy when we have complex logic. Rather than writing everything in a single file, a better approach is to break down the code into smaller pieces using CommonJS modules. 
This greatly helps maintain readability and organization, especially in larger projects. By modularizing the code, each file has a specific responsibility, making it easier to manage and debug.

```js
'maths.js'
//files handles mathematical operations
function add(a,b){
	return a + b;
}

function substract(a,b){
	return a - b;
}


module.exports = {
	add,
	substract
}

```

```js
'app.js'
//import the math module using CommonJS
const math = require('./maths.js')

console.log(math.add(5, 3)) // 8
console.log(math.substract(5, 3)) // 2

```

### What is require (-) ? 

```js
let sum = require('./sum')
console.log(typeof require)//function ..Its basically an function which executes synchronously.
```

It means it takes <font color="#c3d69b">some arguments</font> and <font color="#00b0f0">returns</font> something ?

- **Argument** - Its takes single argument, which must be a path of module, quoted with double quotes " ".

- **What it returns** - Its executes the full module/file whose path is provided to it and imports it whatever we exported from there and return it.

```js
'product.js'

function product(...arg){
	return arg.reduce((pre,cur)=>pre*cur)
}
module.exports = 'Anything we can pass from there !'
```

```js
'app.js'

let sum = require('./product')

cosole.log(sum) //Anything we can pass from there !
```
### Some complex Destructuring --

<font color="#00b0f0">Example 1✅</font>
```js
'maths.js'

module.exports = "hii"
```

```js
'app.js'

let {sum, product} = require('./maths')
console.log(sum, product) //undefine undefine

let [sum, product] = require('./maths')
console.log(sum, product) //h i

```

---

<font color="#00b0f0">Example 2✅</font>
```js
'maths.js'

console.log(module.exports)//{}
```

```js
'app.js'

let {sum} = require('./maths')
console.log(sum) //{}
```

---

<font color="#00b0f0">Example 3✅</font>
```js
'maths.js'

module.exports
```

```js
'app.js'

let sum = require('./maths')
console.log(sum) //{}
```

---

<font color="#00b0f0">Example 4✅</font>
```js
'maths.js'

function product(...arg){
return arg.reduce((pre,cur)=>pre * cur)
}

function sum(...arg){
return arg.reduce((pre,cur)=>pre * cur)
}

module.exports.sum = sum
module.exports.product = product

//⚠️ We can also have option to eliminate module. they both work same

exports.sum = sum
exports.product = product
```


```js
'app.js'

let {sum, product} = require('./maths')
console.log(sum(1,2),product) // 3 [Function: product]
```


### Let`s` find the differences between <font color="#f79646">module.exports</font> & <font color="#d99694">exports</font>.

This might be seems that both <font color="#f79646">module.exports</font> and <font color="#d99694">exports</font> are same, but they are not exacetely same behind the seen--

```js
console.log(module.exports == exports) //true
console.log(typeof module.exports) //object
console.log(typeof exports) //object
```

To find Differences between them, lets take example of code -
```js
const user = {
  name: "robin isngh",
  age: 88,
  address: {
    city: "Bhiwani",
    state: "Haryana",
  },
  hobbies: ["Teaching", "Coding", "chasing"],
};

//Assigning reference of address object to a variable address-
let address = user.address;
 console.log(user.address == address) //true
```

🫢Trying to change value of object inside from address variable-
```js
address.pincode = 127021
address.country = 'india'
```

😒Both are representing one same address object, Which lies inside the user-
```js
console.log(address) 
//{ city: 'Bhiwani',state: 'Haryana',pincode: 127021,country: 'india'}
console.log(user.address)
//{ city: 'Bhiwani',state: 'Haryana',pincode: 127021,country: 'india'}
```

🤔what if I, Re assigning address variable-
```js
address = {
	pincode:127021,
	country:'india,
}
//Re-Assigning address variable will make the address variable Referring to another object
console.log(address) // {pincode:127021, country:'india'}
console.log(user.address) //{city:'bhiwani,state:'Haryana'} 
//Now they both reffering to different object.
```

---

 ⭐***module is equivalent to user object !***
 ⭐***export is equivalent to address object !***

Our `require()` function always return whatever we putted inside `module.exports` object 

`module` is type of bigger object {   }
`export` is type of smaller object { } 

The connection of the exports variable with `module.exports` will be broken if we reassign it

### Module Object ?

In `Node.js` every `.js` file contains there separate module Object, it contains some properties, which we are gonna see one by one what are these properties do.

```js
'app.js'
console.log(module)
```
<font color="#ff0000"><u>Output</u></font>
![[module object consoled.png]]

<font color="#ff0000"><u>Run & Debug MODE</u></font>
![[Run and debug Local.png]]
When we will study about module wrapper function, then we understand about all these Local variables that shown in above picture & why they came Local section ?
😒<font color="#e36c09">For now we will discuss about module object -</font>

In the `module` object you can Notice `Children: []` what its actually for ?

- Children Array contains a list of modules that were required by this module.
```js
'app1.js'
let pr0 = require ('./maths')
let pr1 = require ('./maths1')
console.log(module.children)//[Module,Module]
```
* You can see that when we request 2 modules simultaneously, then your (children Array) gets filled with 2 modules of that whatever requested


#### What happen when we did like this ?

```js
exports.sum = 5
```

This will set two things simultaneously- 
-  It will set local variable `export` = { sum : 5 } 
-  It also set `module.export` = { sum : 5 }
- Behind the seen they are connected with each other like as we above connected <font color="#9bbb59">user & address variable.</font>

```js
console.log(exports) // {sum : 5}
console.log(module.exports) // {sum : 5}
```

#### `isPreloading = false`
- <font color="#f79646"> what is this ? </font>this actually present <font color="#4bacc6">inside module object</font> and it show that particular module is it already loaded(preloaded) or will I have to get it loaded later when I needed using require

![[isPreloading in run and debug.png]]

- By default `isPreloading` is false – Because Till now we used to load it through require() function. But we also have another option of preloading the module in this we will keep the module loaded in advance so that it executes fastely at the time of execution

- Preloading a module in Node.js allows it to be loaded in advance, which can improve performance by ensuring the module is already available when your code needs it, rather than loading it on-demand using `require()` .
##### Why Use Preloading ?
- <font color="#c0504d">Performance:</font> Modules are preloaded before your app executes, meaning the code doesn’t need to wait for `require()` at runtime. 
- <font color="#c0504d">Global Setup:</font> If a module needs to set up some global state (like logging or configuration), preloading ensures that it's available before the application starts.
- <font color="#c0504d">Testing/Debugging:</font> You can preload a test framework or debugging tool before running the actual application, streamlining the workflow.

##### Preloading Modules with `--require` flag

```Bash
node --require ./maths.js app1.js
true
```
- Above command try to preload the `./maths.js`  before executing `app1.js`
- One thing keep it in your mind, set the name of the file properly whose you want to preload it ex-`maths.js`

```js
'maths.js'

module.exports='Robin Singh'
console.log(module.isPreloading)
```

```js
'app1.js'
let pr0 = require('./maths')
```

- ❗We can also set this command in our `launch.json` so that, it preload the module every time when I Start `Run and Debug`
- A new file is generated know as `launch.json` by just clicking over `create a launch.json file` then we need to configure `launch.json` little bit. By adding `runtimeArgs` to it –

```json
'launch.json'
//------
"runtimeArgs": ["--require", "${workspaceFolder}\\app1.js"]
```

#### `Paths : [ ]`

- This paths array helps node.js to access node_modules easily not matter wherever node_modules it is placed in its parents

![[path array.png]]

### Module Wrapper Function ?

- In this Article we will discuss about what is <font color="#c3d69b">Module Wrapper Function</font> in Node.js, And because of this we will get access of many of things like - `__dirname`, `__filename`, `export = {}` etc

![[Local varibale store.png]]

- In Node.js, every module is wrapped in a function before it is executed. This function is called the <font color="#c3d69b">module wrapper function</font>. It helps Node.js provide scope to your modules, so variables and functions defined in a module are private to that module and do not pollute the global scope.

#### The Module Wrapper Function -

- The module wrapper function looks something like this :
 ```js
 (function (exports, require, module,__filename, __dirname){
 //you module code here
 })
```

When you write a module in Node.js, Node.js automatically wraps your code inside this function. The parameters of this function are : 
- `exports` : A reference to `module.exports` which is used to export values from the module.
- `require` : The function to import other modules. 
- `module` : An object representing the current module, including `module.exports`. 
- `__filename` : The full path to the current file. 
- `__dirname` : The directory path of the current module.

#### The concept of `strict` mode -
We know that Whenever we declare a variable without any keyword `let`, `const`, it always goes to Global scope, No matter whether it is inside function or not.

```js
'use strict' // this will be enable `strict mode` with in the whole file.
function hi(){
	a = 5
}
hi()
```

❗🫢You also above option enable `strict mode` with in the function only like this.
```js

function hi(){
	'use strict' // this will be enable `strict mode` with in the function only.
	 //a = 5 //error keyword is require `let` or `const`
}
hi()
a = 5
consoel.log(a) //5
```





#fundaMentalsNode