#redis

[ioredis - npm](https://www.npmjs.com/package/ioredis?activeTab=readme)

[redis - npm](https://www.npmjs.com/package/redis)

```js
import { createClient } from "redis";


const redisClient = await createClient().connect();

  
redisClient.on("error", (err) => {
  console.log("Redis Client Error", err);
  process.exit(1);
});

await redisClient.connect();

  
redisClient.getJSON = async function (key) {
  const data = await this.get(key);
  return JSON.parse(data);
};

  
redisClient.setJSON = async function (key, data) {
  return await this.set(key, JSON.stringify(data));
};

export default redisClient;
```