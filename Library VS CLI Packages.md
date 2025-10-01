### <font color="#f79646">Library Package</font>
Library packages are those packages, which we have come to use within our code only not in CLI they have nothing to do with CLI, We can take advantage of these library by just importing it in our files
`axios`  is one of the example of Library Package- 
- We can use `axios` by just importing it into our module and use its functionality related to `fetch()` of JS , there functionality not related to CLI in anyway -

```bash
npm i axios
```

```js
import axios from 'axios'
console.log(axios) 
```

---
### <font color="#f79646">CLI Package</font>
CLI Packages on the other hand are those packages, which we have come to use with in terminal actually they provide functionality through CLI using commands. they have nothing to do with out code files. what`s` there identity after installing these packages generate a `.bin` file inside `node_modules`

`vite` is one of the example of CLI package-
- What`s` it does basically it start a server by just combining all the `HTML CSS JS` serves over overt it.
- We can`t` do like this `import vite from "vite"`  with `vite`.
- It provides functionality through terminal only.

---

❗NOTE : 
This is the general classification between <font color="#9bbb59">Library Package</font> and <font color="#9bbb59">CLI Package</font>, But there is also an possibility a package which may provide functionality of both in CLI and in code files. we can call those packages Hybrid  

#fundaMentalsNode 