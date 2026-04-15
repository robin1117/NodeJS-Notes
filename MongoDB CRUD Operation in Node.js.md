<font color="#c0504d">CREATE</font>
```js
import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017/");
await client.connect();

const db = client.db("school");
const studentsCollection = db.collection("students");
const teachersCollection = db.collection("teachers");


const result1 = await studentsCollection.insertOne({ name: "Aman", age: 15 });
const result2 = await teachersCollection.insertMany([
  { name: "Anurag", age: 89 },
  { name: "John", age: 55 },
]);


console.log(result1);
console.log(result2);

  
client.close();
```

<font color="#c0504d">READ</font>
```js
import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017/");
await client.connect();

  
const db = client.db("todoApp");
// console.log(await db.listCollections().toArray());
const collection = db.collection("todos");
// const todosData = await collection.find().toArray();
const todosData = await collection.find({ completed: false }).toArray();
console.log(todosData);

client.close();
```

<font color="#c0504d">UPDATE</font>
```js
import { MongoClient, ObjectId } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017/");
await client.connect();

  
const db = client.db("school");
const studentsCollection = db.collection("students");

const a = await studentsCollection.updateOne(
  { _id: new ObjectId("6790367f12aaab70d178d6fb") },
  { $set: { class: 10, age: 17 } }
 );
 
 const a = await studentsCollection.replaceOne(
   { _id: new ObjectId("6790367f12aaab70d178d6fb") },
   { test: "Testing" }
 );

console.log(a);

client.close();
```

<font color="#c0504d">DELETE</font>
```js
import { MongoClient, ObjectId } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017/");
await client.connect();


const db = client.db("school2");

// Delete a collection
 const studentsCollection = db.collection("students");
 console.log(await studentsCollection.drop());

  

// Delete a document
 const teachersCollection = db.collection("teachers");
 const a = await teachersCollection.deleteOne({
   _id: new ObjectId("679035dae900efa95c46f63f"),
 });

  

// Delete a field or property
 const teachersCollection = db.collection("teachers");
 const a = await teachersCollection.updateOne(
   {
     _id: new ObjectId("679035dae900efa95c46f640"),
   },
   { $unset: { age: "" } }
 );

  
console.log(a);

// Delete a Database
console.log(await db.dropDatabase());

  

client.close();
```

[[Understanding Cursors in MongoDB]]