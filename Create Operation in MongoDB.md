
show databases
``` bash
show dbs
```

select database
``` bash
use expenseApp
```


show collections
``` bash
show collections
```

  
insert data
``` js
db.users.insertOne({ name: "Robin", age: 23 })
db.users.insertMany([{name:"A"}, {name:"B"}])
```

read data
``` js
db.users.find()
db.users.findOne({name:"Robin"})
db.users.find({age:23})
```

update data
``` js
db.users.updateOne({name:"Robin"}, {$set:{age:24}})
db.users.updateMany({age:23}, {$set:{status:"active"}})
```

delete data
``` js
db.users.deleteOne({name:"Robin"})
db.users.deleteMany({age:23})
```

count documents
``` js
db.users.countDocuments()
```

helpers
``` js
db.users.find().limit(5)
db.users.find().sort({age:1})
db.users.find().sort({age:-1})
```

expense example
``` js
db.expenses.insertOne({title:"Food", amount:200, date:new Date()})
db.expenses.find()
```


[[Read Operation in MongoDB]]