It is a node REPL. Since it is a node REPL, we can do all the operations of NodeJS.
mongo shell uses full `node.exe` but has modified it for handling database operations. 

Difference between node REPL and mongoSh REPL 

<font color="#00b0f0">Node REPL</font>
Undefined is return if there is no return value. 
Does not highlights the code.
In case of promise, it returns the full promise object. 
We cannot redeclare, redefine a const variable. 
await can de used in global space. 
NPM can be accessed and used. 
Don't have extra commands for handling databases. 
`process.exit()` is used for exiting. 

<font color="#ffff00">MongoSH REPL</font>
Newline character (Empty line) is returned if there is no return value. 
Highlights the code. 
In case of promise, it returns resolve value of promise, Highlights the Error in case of rejection. 
We can redeclare, redefine a const variable. 
await cannot be used in global space. ( use async function ) 
NPM cannot be accessed. 
Have extra commands for handling databases. 
exit command use to exit the shell

<font color="#00b0f0">Clients to Connect to MongoDB Server </font>
MongoDB Compass: Official GUI client for interacting with the server. 

<font color="#00b0f0">MongoDB VS Code Extension</font>
Acts as another client to connect to the server. Often provides more detailed views and features than Compass (like document preview, schema, and queries within the editor).

<font color="#00b0f0">MongoDB Server Summary </font>
MongoDB Server is mainly built in C++, along with other languages. 
Port: It uses a fixed default port 27017 (other ports won't work unless configured). 
On installation, MongoDB defaults to a virtual test database, which isn’t created on disk until data is stored. 
You can view available databases with: show("databases") or its short form show dbs.

---

<font color="#de7802">Behinds the Scenes Mongo Data Packets </font>
- MongoDB Protocol is built on top of TCP. 
- It make a three way TCP handshake. 
- Send request-response in every 3-5 Secs for checking it connection is alive or not. 
- For every DB call(Operation) a request is send to server. 
- DB calls in <font color="#00b0f0">Shell is Synchronous</font>

[[Create Operation in MongoDB]]