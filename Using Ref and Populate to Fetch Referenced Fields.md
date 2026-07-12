## ref
- Used to create relationships between collections.
- Stores another document's `_id`.

```js
parentId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
}
```

---
## populate()

- Replaces ObjectId with actual document data.

```js
const user = await User.find()
  .populate("parentId");
```

---
## Populate Specific Fields

```js
.populate("parentId", "name email")
```

- Fetches only:
  - `name`
  - `email`

---
## Object Syntax

  

```js
.populate({
  path: "parentId",
  select: "name email -_id"
})
```

### path

Field to populate.

### select

Fields to include/exclude.

---  
## Nested Populate

```js
.populate({
  path: "parentId",
  populate: {
    path: "post"
  }
})
```

- Used when referenced documents also contain references.

---
## Important

- `populate()` performs extra DB queries.
- Too much nested populate can reduce performance.


[[What are Virtuals in Mongoose]]