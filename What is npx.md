If someone asked from you hey ! what are these `npm` and `npx` , I mean is they are files or something else ?

Then you can say that these are just JS script file nothing more than this - you can open and modify these files in your Vs Code - let`s` do .

<font color="#9bbb59">To find the location of these magical files -</font>

```bash
which npx   -/c/Program Files/nodejs/npx
```

```bash
which npm   -/c/Program Files/nodejs/
```

<font color="#9bbb59">At this path you can get all of your magical files</font> - `npm` `npx` `etc`

![[Pasted image 20250729131401.png]]

- Over there you can see we have `npx` and `npm` files,  the code they contains is related to bash, you can understand this checking shebang in each `#!/usr/bin/env bash`

- whenever we type `npx` or `npm`, these files is gone executes every time, you can modifies these files too - but for tremendous modification we have to modify something else 

- In the `node_modules` we have some files related to these `npm` and `npx` which are imported inside these 

- Let`s` try modify these nested files too -