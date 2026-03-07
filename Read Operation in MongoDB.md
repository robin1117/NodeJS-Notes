basic find

``` js
db.collection.find()
```

find with filter
``` js
db.users.find({ age: 23 })
db.users.find({ name: "Robin" })
```

  
find one document
``` js
db.users.findOne({ name: "Robin" })
```

projection (select fields)
``` js
db.users.find({}, { name: 1, age: 1 })
db.users.find({}, { password: 0 })
```
  
limit results
``` js
db.users.find().limit(5)
```

skip documents
``` js
db.users.find().skip(5)
```

sort results
``` js
db.users.find().sort({ age: 1 })   // ascending
db.users.find().sort({ age: -1 })  // descending
```

count documents
``` js
db.users.countDocuments()
```

comparison operators
``` js
db.users.find({ age: { $gt: 20 } })
db.users.find({ age: { $lt: 30 } })
db.users.find({ age: { $gte: 18 } })
db.users.find({ age: { $lte: 25 } })
```

logical operators
``` js
db.users.find({ $and: [{age:{$gt:20}}, {age:{$lt:30}}] })
db.users.find({ $or: [{name:"Robin"}, {name:"A"}] })
```

[[Update Operation in MongoDB]]