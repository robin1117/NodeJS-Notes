We have mainly 3 types of modules in `Node.js` Environment
### <font color="#9bbb59">User Define Modules</font>
- User Define Modules are such modules which are created by user itself as per his requirement . we have talked a lot about these already in previous sections

```js
'maths.js'
export let num = 49 
```

```js
'app.js'
inport {num} from './maths.js' 
```

### <font color="#c3d69b">Native / Core Modules</font>
- These are the modules which comes by default with `Node.js` that why its name suggested its Core Module
- We can import these modules by just providing the name of the module like - without to provide extension.
	- `import fs from 'fs'`  or  `import fs from 'node:fs'` 
- Now your are thinking where the code of these files are get store ? 
	- Basically all these core modules are gets stored in `Node.exe` in form of  binary, So you can`t` access these directly.
	- You can find `Node.exe` in your `Pc` by just following these commands.
		- `which node`  ->`/c/Program files/nodejs/node`
		- `cd` `"/c/Program files/nodejs/"` 
		- `explorer .`
- When you are learning `Node.js` then notice we spent our most of the time to understand about these Core Modules. Mastering these Core modules is Becomes essential if you becomes professional `Node.js` Developer.

### <font color="#ebf1dd">NPM Modules</font>

- These module neither write it by own user nor they comes by default with `Node.js` then where they comes from? actually these are kind of external modules or 3rd party, we have to install these first before importing, using NPM package manager.
- While importing we need not to provide full path - its enough if I provide name only like native modules.
	- `import fs from 'axios'`

---

Let`s` Now its time to understand what exactly the NPM modules are, and is it possible to make our own NPM module ? I think So
So what you are waiting for ?
Let`s` make our own NPM module and add functionality of import and export to it.
What`s` exactly we are covered in next section !

[[NPM modules]]

[[Understanding package.json File in Depth]]



#fundaMentalsNode