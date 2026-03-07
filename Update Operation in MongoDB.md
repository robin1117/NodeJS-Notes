For updating a document we need to first find it.
- `db.<Collection>.updateOne(findingObj, {$set: updateObj});` 
- `db.expenses.updateOne({ title: "Grocery" }, {$set: { value: "20" }});`

- `db.<Collection>.replaceOne(findingObj, replaceObj);`
- It will replace the whole object

- `db.<Collection>.updateMany(findingObj, {$set: { value: 240 } });`
- It will update all the available finded objects.


# MongoDB update operations quick notes

  
update one document
``` js
db.users.updateOne(
  { name: "Robin" },
  { $set: { age: 24 } }
)
```


update many documents
``` js
db.users.updateMany(
  { age: 23 },
  { $set: { status: "active" } }
)
```

  
replace entire document
``` js
db.users.replaceOne(
  { name: "Robin" },
  { name: "Robin", age: 24, city: "Bhiwani" }
)
```

  
add new field
``` js
db.users.updateOne(
  { name: "Robin" },
  { $set: { city: "Bhiwani" } }
)
```


remove field
``` js
db.users.updateOne(
  { name: "Robin" },
  { $unset: { city: "" } }
)
```

  
increase numeric value
``` js
db.users.updateOne(
  { name: "Robin" },
  { $inc: { age: 1 } }
)
```


update array
``` js
db.users.updateOne(
  { name: "Robin" },
  { $push: { skills: "Node.js" } }
)
```


remove array element
``` js
db.users.updateOne(
  { name: "Robin" },
  { $pull: { skills: "PHP" } }
)
```


[[Delete Operation in MongoDB]]