MongoDB provides drivers for every popular backend language to work with it. 
We also have Driver for NodeJS 
Installation: `npm i mongodb` 

<font color="#ffc000">Import and Connect</font>
```js
import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017/");
await client.connect(); // Connect to MongoDB server 
```

<font color="#ffc000">Database Access</font>
```js
const db = client.db(); //Default 'test' DB
const db = client.db("DataBaseName"); //Use a specific DB
```

<font color="#ffc000">View Collections</font>
```js
console.log(await db.listCollections().toArray());
 // Lists all collections in the selected DB 
```

<font color="#ffc000">Access Documents in a Collection</font>
```js
const collection = db.collection("fruits");
console.log(await collection.find().toArray());
// Fetches all documents in the 'fruits' collection
```

<font color="#ffc000">List All Databases</font>
```js
const admin = client.db().admin();
console.log(await admin.listDatabases());
// Lists all databases on the server
```


[[MongoDB CRUD Operation in Node.js]]