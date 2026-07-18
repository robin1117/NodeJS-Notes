#redis 

```js
'redisconfig.mjs'
import { createClient } from "redis";

let redisClient = createClient();

redisClient.on("connect", () => {
  console.log("redish is connect");
});

redisClient.on("error", () => {
  console.log("redish is err");
});


await redisClient.connect();

export default redisClient;
```


```js
'app.js'
import express from "express";
import redisClient from "./redisconfig.mjs";

const app = express();


app.get("/users/:id", async (req, res) => {
  try {
    let datafromRedis = await redisClient.json.get(
      `fetchData:${req.params.id}`,
    );
    if (datafromRedis) {
      return res.json({ ...datafromRedis, from: "Redish" });
    }
    const userData = await getUser(req.params.id);
    await redisClient.json.set(`fetchData:${req.params.id}`, "$", userData);
    await redisClient.expire(`fetchData:${req.params.id}`, 6);
    res.json({ ...userData, from: "ThridPartyApi" });
  } catch (error) {
    res.json({ error });
  }
});

app.listen(4000, () => {
  console.log("Server started on 4000");
});

async function getUser(userId) {
  const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
  return await response.json();
}
```