Before we Understand about NPM modules, let`s` we create two files, and trying to export `num` variable from maths ➡️ app.js .

```js
'maths.js'
export const num = 5
```

```js
'app.js'
import {num} from './maths.js'
console.log(num) 
```
✅its work great .

----

The ways we can write import statement ❗

```js
import {num} from './maths.js' //Node.js consider it as local module,
```

-  When we specified any file path , node try to access that file from locally available files (find that`s` file on the provided path) 
- <font color="#ff0000">if it not found it return an error Cannot find module………</font>

```js
import {num} from 'maths' //Node.js conside it as package,
```

- If we just provided an name of to import , node first try to access that file from there `core modules` if it not secondly search it inside `node_modules` folder.
- <font color="#ff0000"> if it not found it return an error Cannot find package………</font>

<font color="#e5b9b7">You must have understood the differences in both of the errors </font>🤔

---

### ***Creating Own Custom Package***

If you want to create a custom package(maths) that works well without any error , for that we need to follow these steps.
- First make `node_module` folder so that node can find it as package & and put `maths.js` inside into it.
<font color="#fac08f">Try to import it as package !</font>
![[importing es6.png]]
But it returns <font color="#ff0000">error</font> on execution !

---

<font color="#fac08f">Let s we try to import using common js module !</font>
![[importing CJS.png]]

Now you will Notice its work 🥲 Means Common js system can easily export `maths.js` as <font color="#d99694">package</font> from `node_module`, this shows CJS is more flexible than ES6 MJS

---

🤔But still we cannot say its fully flexed package - Because we have to make it as way so, it should also work with ES6 module - it still Require some modifications for that -

For that We need to create new folder(`maths`) inside `<node_modules>` and put `maths.js` inside in to it. Now we can rename `maths.js` to any name, but its recommended to set it as `index.js` So that its work well with ES6 and Common JS without any extra modifications.

If you want it should work with any name then you have to Explicitly define `main` property inside `package.json` present inside `maths` folder.

![[Pasted image 20250725112017.png]]

🔥Now you will notice it will again start working with both ES6 and CJS. by just setting `main` property inside `package.json`

✅Working with ES6 -
![[Pasted image 20250725112821.png]]

✅Working with CJS -
![[Pasted image 20250725112943.png]]

---

❗But there is a problem with this package – it support only one ES6 or CJS at a time, and it requires manually export every time for CJS and ES6 separately.
to make it more flexible. it still needs little bit modifications.


![[Pasted image 20250725133430.png]]

✅ To make it work like as fully flexed package , we just made two files  inside `maths` folder `.cjs` and `.mjs`  and setup export mechanism according to that in each, and in the `package.json`  we just define some properties So that it can automatically manipulates itself according to through which we are exporting it whether it's CJS or MJS

✅ <font color="#c3d69b">Now this is our fully flexed package, that actually we want !</font> Finally



### **Publishing our Package over NPM website !**

Before we publish this package on NPM first we have to understood what is NPM -
- Basically NPM is of two things –
	- First NPM is a <font color="#c0504d">Command line tool</font> which we uses to install packages.
	- Second one is <font color="#9bbb59">NPM is a Website</font> like `github` , where we can get different types of packages and we can also publish own package over there.

To publish our package on NPM website first we have to create an account on it, after that you should get into Login inside VS code Terminal with CMD-

```bash
npm login
```

Before publishing we need to add some more details-to `package.json`

![[Pasted image 20250725160158.png]]`“Name” :”Robin”` – Name must be unique
`“Version”:”1.0.0”` -- its mandatory

Then publish this package using CMD -
```bash
npm publish
```

One thing you should kept in your mind – Your CLI should be there, which you want to publish on NPM
![[Pasted image 20250725160610.png]]

 **Publish Successfully --** 

- ❗ We can also update our NPM Package, by just changing its version after modification. And re-Publish it.
- 😒Whatever the The method of making packages that we have taught here is a kind of jugaad method
- 😒For making fully fleshed packages we need to follow some kind of rules, we need to did all things in a separate workspace. we will studied when we needed
 



#fundaMentalsNode