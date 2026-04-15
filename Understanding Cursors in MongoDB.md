<font color="#9bbb59">Why is it Called a "Cursor ?</font>
The word cursor means "a moving indicator" (like a blinking text cursor in a text editor). In databases, it works similarly—it moves through query results one by one, instead of retrieving all data at once.

<font color="#9bbb59">What is a Cursor ?</font>
A Cursor is a JS object returned by .find(). 
It stores query metadata and doesn't hit DB until a method like `.toArray()` or `.next()` is called.

<font color="#9bbb59">Cursor as an Async Iterator </font>
`const cursor = collection.find();` // returns a cursor 
`cursor[Symbol.asyncIterator]; `// true ⇒ it's iterable

You can use :
`for await (const doc of cursor) { console.log(doc); }`

Cursor Methods(few)  :
`await cursor.next()` // Returns next document or null
`await cursor.hasNext();` // Returns true/false


#### <font color="#31859b">Cursor Methods in MongoDB</font>
Cursor Chaining :
- Methods like `.limit()`, `.skip()`, `.sort()` return the cursor itself (not a promise).
- You can chain them before executing with `.toArray()` or iterating.

Common Methods
- `.limit(5)` // Limit result to 5 docs 
- `.skip(2)` // Skip first 2 docs
- `.sort({ name: 1, age: -1 })` // Sort by name ↑, then age ↓

<font color="#c0504d">No DB call is made until you use</font> `.toArray()`, `.next()`, or a loop.


```js
import { MongoClient } from 'mongodb'
let client = new MongoClient('mongodb://localhost:27017')

await client.connect();

const db = client.db('mongodbVSCodePlaygroundDB')
let collection = db.collection('sales')

let curser = collection
.find()
.limit(5)
.skip(2)
.sort({quantity:-1})

let data = await curser.toArray()

console.log(data);

client.close()
```

#### <font color="#c0504d">Batch Size in MongoDB</font>

What is Batch Size ? 
- MongoDB returns documents in batches, not all at once. 
- Batch size controls how many docs are returned per network request.

Set Batch Size 
- const cursor = `collection.find().batchSize(10)`;
- This sets the batch size to 10 documents. 
- MongoDB will send results in chunks of 10 until all are returned.

#### <font color="#4bacc6">Projection in MongoDB</font>

What is Projection ? 
- Projection controls which fields are returned in the query result. Include Fields 

Include only "name" and "email" 
- `const users = await collection.find({}, { projection: { name: 1, email: 1 } }).toArray() ;`

Exclude Fields 
- `Exclude "age"` 
- `const users = await collection.find({}, { projection: { age: 0 } }).toArray();`

Note 
1 = include
0 = exclude 
You can't mix include and exclude (except for _id).

```js
import { MongoClient } from 'mongodb'

let client = new MongoClient('mongodb://localhost:27017')

await client.connect();

const db = client.db('todoApp')

let collection = db.collection('noop')

let curser = collection.find({},{projection:{title:1,_id:0}}) 
//this way we can define whatever we want to fetch like specfic fields (title) instead of unessary field :

let data = await curser.toArray()

console.log(data);

client.close()
```

[[MongoDB Limits and Thresholds]]