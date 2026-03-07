
| **Data Type**                  | **Description**                                         | **Example**                                 |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------- |
| **ObjectId**                   | A unique identifier for documents                       | `ObjectId()`                                |
| **Number (Int32)**             | Stores integer values                                   | `NumberInt(42)`                             |
| **Number (Int64) (Long)**      | Stores 64-bit integer values                            | `NumberLong("9223372036854775807")`         |
| **Double**                     | Stores floating-point numbers                           | `NumberDouble(3.14)`                        |
| **Decimal128**                 | Stores high-precision decimal values                    | `NumberDecimal("123.4567890123456789")`     |
| **String**                     | Stores text data                                        | `"Hello, World!"`                           |
| **Boolean**                    | Stores true or false values                             | `true`, `false`                             |
| **Date**                       | Stores date and time values                             | `new Date()`                                |
| **Array**                      | Stores an array of values                               | `[1, 2, 3, "text"]`                         |
| **Embedded Document (Object)** | Stores nested documents                                 | `{ "key": "value" }`                        |
| **Null**                       | Represents a null value                                 | `null`                                      |
| **Binary Data**                | Stores binary data, such as images or files             | `BinData(0, "data")`                        |
| **Regular Expression**         | Stores regex patterns                                   | `/pattern/i`                                |
| **Code**                       | Stores JavaScript code                                  | `Code("function() { return 42; }")`         |
| **Code (Scoped)**              | Stores JavaScript code with a scope                     | `Code("function() { return x; }", {x: 42})` |
| **Min Key**                    | Represents the smallest possible value in BSON          | `MinKey()`                                  |
| **Max Key**                    | Represents the largest possible value in BSON           | `MaxKey()`                                  |
| **Timestamp**                  | Stores timestamp values                                 | `Timestamp()`                               |

---

<font color="#ffc000">ObjectId DataType </font>: 
- `ObjectId` is 12 bytes = 24-character hex string. 
- Structure: 4-byte timestamp, 5-byte machine info, 3-byte counter. 
- Ensures global uniqueness. 
- You can override _id, but if not provided, MongoDB generates it automatically.

---

<font color="#ffc000">MongoDB Number Data Types</font>  :

`Int32 (Standard Number) `
- Used for regular integers. 
- Suitable for most everyday use cases.
- Range is from -2,147,483,648 to 2,147,483,647. 

`Int64 – NumberLong() :`
- Used for very large integers that exceed the Int32 range.
- Required when numbers go beyond JavaScript's safe integer limit. 
- Range: −9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.

`Decimal128 – NumberDecimal() :`
- Used for high-precision decimal values. 
- Ideal for financial or scientific data where rounding errors must be avoided.

---

# BSON Types

| **Type**                | **Alias**             | **Numeric Code**  |
| ----------------------- | --------------------- | ----------------- |
| Double                  | `double`              | 1                 |
| String                  | `string`              | 2                 |
| Object                  | `object`              | 3                 |
| Array                   | `array`               | 4                 |
| Binary Data             | `binData`             | 5                 |
| Undefined (deprecated)  | `undefined`           | 6                 |
| ObjectId                | `objectId`            | 7                 |
| Boolean                 | `bool`                | 8                 |
| Date                    | `date`                | 9                 |
| Null                    | `null`                | 10                |
| Regular Expression      | `regex`               | 11                |
| JavaScript              | `javascript`          | 13                |
| Symbol (deprecated)     | `symbol`              | 14                |
| JavaScript (with scope) | `javascriptWithScope` | 15                |
| 32-bit Integer          | `int`                 | 16                |
| Timestamp               | `timestamp`           | 17                |
| 64-bit Integer          | `long`                | 18                |
| Decimal128              | `decimal`             | 19                |
| Min Key                 | `minKey`              | -1                |
| Max Key                 | `maxKey`              | 127               |
<font color="#c3d69b">Querying Using :</font>
```bash
test> db.bson.find({info:{$type:'bool'}})
[
  {
    _id: ObjectId('69a8fb32b5e22a37837c2918'),
    name: 'Charlie',
    info: true,
    age: 35
  }
]

test> db.bson.find({info:{$type:'object'}})
[
  {
    _id: ObjectId('69a8fb32b5e22a37837c2919'),
    name: 'Diana',
    info: { hobby: 'Reading', level: 'Expert' },
    age: 28
  }
]

test> db.bson.find({info:{$type:'number'}})
[
  {
    _id: ObjectId('69a8fb32b5e22a37837c2917'),
    name: 'Bob',
    info: 42,
    age: 30
  }
]

test> db.bson.find({info:{$type:'string'}})
[
  {
    _id: ObjectId('69a8fb32b5e22a37837c2916'),
    name: 'Alice',
    info: 'Hello, I am a string',
    age: 25
  }
]
```


[[Running MongoShell Scripts in JS Files]]