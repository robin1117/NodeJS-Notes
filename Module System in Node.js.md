Here we studded, how do the module System works in Node.JS , Basically There are Two types of <font color="#d99694">Modules System</font> Exist -
- [[Common JS Module]]
- [[ES6 Modules]]

Before we going to deep dive into Modules System of Node.js, Let`s` see how do we can create `Local Varibale` and `Global Variable`  in Node.

```js
//The ways we can create global variables in Node.js❗
global.amp1 = 49
amp2 = 48

//The ways we can create local variables in Node.js❗
var amp3 = 46
let apm4 = 47
```

```js
"use strict";
// if i convert the script to 'strict mode' then what`s new thing happens Here
// Now we were unable to create globale varibles, by this syntax -
a = 56 ❌ //in strict mode this syntax will give Error
var a = 49; ❌

//for that we have should do like this way !
global.a = 100
```

You can use *Run and Debug* tool along with *breakpoints* in VS code to get a view of variables, how they get`s` stored as <font color="#fac08f">Locally</font> and <font color="#fac08f">Globally</font> 

![[Run and debug.png]]


😒After Studying as much about `Common JS Module` and `ES6 Module`, we have to  know the major differences  between them, interviewer may ask. 
[[CommonJS (CJS) vs ES6 Modules (ESM)]]

---

🤔Now its time to study what are the different types of modules we have in `Node.js` Environment, but before that you have to know what actually the module is ?
### <font color="#c0504d">Module</font> ?
**Module** are nothing but the files which contains code that do some specific tasks. whenever we need this particular code anywhere in or program we can import that module and get your work done.

Whatever the module till now we have studied all are comes under the category of <font color="#fac08f">User Define modules</font> because we made these all by own, but Apart from these we have other types too.
which we have to study about Now 🫢

[[Types of Modules]]


There is also an Concept that we have to study , as we know that we are mastering our `Node.js`  So its become crucial to understand the concept of `shebang` ?

[[What is Shebang]]



#fundaMentalsNode