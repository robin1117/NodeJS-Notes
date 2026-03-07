## 1️⃣ application/x-www-form-urlencoded (Default)

-   Fields are separated by `&`\
    Example:
       ` name=John&age=30`
-   File data is **not sent**, only filenames
-   Commonly used for simple form submissions
-   Use in Express:

``` js
app.use(express.urlencoded({ extended: false }));
```

------------------------------------------------------------------------
## 2️⃣ multipart/form-data

-   Fields are separated by boundaries like:

        --WebKitFormBoundary

-   File data is sent as **binary along with fields**
-   Used for **file uploads**
-   Handled in Express using **Multer middleware**

Example:

``` js
const multer = require("multer");
const upload = multer();

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded");
});

```

------------------------------------------------------------------------

## 3️⃣ text/plain

-   Fields are separated by new lines (`\n`)
-   File data is **not sent**, only filenames
-   Use in Express:

``` js
app.use(express.text());
```

------------------------------------------------------------------------

## 4️⃣ application/json

-   Data is sent as a **JSON string**
-   Most commonly used in modern APIs
-   Use in Express:

``` js
app.use(express.json());
```

------------------------------------------------------------------------
# 🔥 Summary Table

| Content Type                      | File Upload | Express Middleware Support |
| --------------------------------- | ----------- | -------------------------- |
| application/x-www-form-urlencoded | ❌ No        | express.urlencoded()       |
| multipart/form-data               | ✅ Yes       | Multer                     |
| text/plain                        | ❌ No        | express.text()             |
| application/json                  | ❌ No        | express.json()             |

* extended true *
- allows parsing of nested objects *
- uses `qs` library for parsing *
- allows rich objects and arrays to be encoded into the URL-encoded format *

* extended false 
- does not allow parsing of nested objects * 
- uses `querystring` library for parsing * 
- does not support rich objects and arrays * 
- example: { person: { name: 'John', age: 30 } } => person=%5Bobject+Object%5D

[[Nested Dynamic Routes]]