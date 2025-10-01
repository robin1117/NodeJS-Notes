Its a concept of terminal and it can mainly works for only Linux base Terminals, so in our case its can work in <font color="#953734">Bash</font> not in <font color="#953734">CMD</font>.

Guys Suppose we make a file with or without any extension let`s` say  `command` , and for now let`s` we write `ls -l` a bash command inside it . 

![[Pasted image 20250725211454.png]]

😒Now what the magic happen here ! 

Wait a minute 🤔 what will happened when we provide path of `command` file to the bash terminal directly. 

![[Pasted image 20250725213306.png]]

Actually the terminal bash will directly executes those commands whatever written inside it by <font color="#953734">supposing</font> all they are bash command.

its exactly same as we are writing ⬇️
```bash
./command === bash ./command === bash command
```

---
What`s` the good thing here we can did using `shebang` is ? actually we can attached extra information related to the executable to our file, so that bash understand using which executable it executes all provided commands .

![[Pasted image 20250725222943.png]]
Output -
![[Pasted image 20250725223331.png]]

`#!` this thing is work only and only in bash terminal - 

---
`#!node` for Now its working well in windows OS because node is globally available, But if you are working over Linux then you have to provide full path of node after `#!`
`#! node` for `windows ✅`
`#! node` for `linux ❌` 


🤔So we have to write shebang in such a way so that it should works with any OS. but How ?

---
There is another way we can write `shebang` with the help of `env.exe` file, which contains list of all environment variables of our system. 

First I have to find path of `env` in your system and you can find it by using `which env` , so that `shebang` can able to find executables( `node`, `bash` etc ) from your environmental variable.

✅Good thing with `env` file is its available in Every OS and even over the same path .

✅`#!/usr/bin/env node` So Now This shebang becomes OS independent .

![[Pasted image 20250726101609.png]]

![[Pasted image 20250726101623.png]]

Now its Working like Wow !

---
As becoming a pro `Node.js` Developer you have to know the differences between -
- [[Library VS CLI Packages]] 
- [[Local VS Global Packages]]


[[How NPX Works]]


#fundaMentalsNode 

