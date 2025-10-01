In Node `package.json` contains details of our Projects, we can create `package.json`in two ways. either <font color="#92d050">manually</font> or by using <font color="#92d050">commands</font>-

These prompt will help you to automatically generate a `package.json` file.
- `npm init` : his will guide you through a series of prompts for project details.
- `npm init -y` : This will automatically generate a `package.json` file with default values.

Once you have done with this your `package.json` is ready ↙️

![[Pasted image 20250725164225.png]]

### <font color="#92d050">main</font> :  refers to the entry point, from where our execution is  start.
### <font color="#92d050">scripts</font> : inside the script we can define our own <font color="#fac08f">custome commands</font>, which we can execute later.

- These commands are essentially shortcuts for terminal commands, and they can be for anything from running a build process to starting a server.
```json
----------
"scripts":{
"start":"app.js",
"test":"ls",
"restart":"node",
"hi":"pwd",
"dev":"pwd",
"dev":"node--watch app.js"
},
----------
```

- **we can run it like this way !**

```bash
npm run start
npm run build
npm run test
// npm run custome-commands
```

### <font color="#00b050">dependencies</font> : The concept of dependencies comes in picture when we install package using `npm`-
```json
-----------------
"dependencies":{
"axios":"^1.7.7"
}
-----------------
```

In above picture dependencies represents something like a Version-`axios : ^1.7.7`
This version system is known as <font color="#e36c09">Semantic Versioning !</font>
<font color="#953734">MAJOR</font>, <font color="#d99694">MINOR</font>, <font color="#f2dcdb">PATCH+</font>

### `package-lock.json`

There is a new `package-lock.json` file come in directory when we install `npm -i axios`.
Whatever its name is , that is its work. It contains details of the packages that we install and lock the version when we install first time.

### <font color="#00b050">dev-dependencies</font>
- `devDependencies` are packages that are only required during the development of an application and not needed in the production environment
- We can install any package as dev-dependencies, when we install any package as with `–D` flag

```bash
npm install <package-name> --save-dev
```



#fundaMentalsNode