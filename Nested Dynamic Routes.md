```js
import express from "express";

const app = express()

app.get("/blog/:blogId/comment/:cmtId", (req, res) => {
    console.log(req.params);
    res.json(req.params)
})

let server = app.listen(4000, () => 
    console.log(server.address());
})
```


[[RegEx in Routes]]