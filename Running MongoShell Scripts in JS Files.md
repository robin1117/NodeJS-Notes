```js
  

use("todoApp")

let todosCollection = db.getCollection('noop')

for (let i = 0; i < 10; i++) {
    todosCollection.insertOne({
        title: `Completed NodeJS ${i}`,
        colpleted: i % 2 == 0
    })

}
// console.log(db.noop.find());
console.log(todosCollection.find());
```

```bash
mongosh mongo.js
```


[[MongoDB in Node.js]]