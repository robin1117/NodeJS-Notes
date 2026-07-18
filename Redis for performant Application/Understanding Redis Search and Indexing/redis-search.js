// 🔍 Redis Search with JSON Data (Node.js Equivalents)

import { createClient, SchemaFieldTypes } from "redis";

const redisClient = createClient();

await redisClient.connect();

// ---
// 📌 Check Existing Indexes
const indexes = await redisClient.ft._list();
console.log(indexes);

// ---
// 📋 Get Information About an Index
const indexInfo = await redisClient.ft.info("cityIdx");
console.log(indexInfo);

// ---
// 📌 Create Indexes for JSON Data

// 🔹 Index on `city` field (as TAG)
await redisClient.ft.create(
  "cityIdx",
  {
    "$.city": { type: SchemaFieldTypes.TAG, AS: "city" },
  },
  {
    ON: "JSON",
    PREFIX: "user:",
  },
);

// 🔹 Index on `age` field (as NUMERIC)
await redisClient.ft.create(
  "ageIdx",
  {
    "$.age": { type: SchemaFieldTypes.NUMERIC, AS: "age" },
  },
  {
    ON: "JSON",
    PREFIX: "user:",
  },
);

// 🔹 Index on `name` field (as TEXT)
await redisClient.ft.create(
  "nameIdx",
  {
    "$.name": { type: SchemaFieldTypes.TEXT, AS: "name" },
  },
  {
    ON: "JSON",
    PREFIX: "user:",
  },
);

// ---
// 🔍 Searching with Redis (Node.js)

// 🔸 Search by City (exact match)
const citySearch = await redisClient.ft.search("cityIdx", "@city:{Delhi}");
console.log(citySearch);

// 🔸 Search Users by Exact Age
const exactAgeSearch = await redisClient.ft.search("ageIdx", "@age:[25 25]");
console.log(exactAgeSearch);

// 🔸 Search Users with Age Greater Than or Equal to 28
const gteAgeSearch = await redisClient.ft.search("ageIdx", "@age:[28 +inf]");
console.log(gteAgeSearch);

// 🔸 Search Users with Age Less Than 28
const ltAgeSearch = await redisClient.ft.search("ageIdx", "@age:[-inf (28]");
console.log(ltAgeSearch);

// 🔸 Search by Name (full-text)
const nameSearch = await redisClient.ft.search("nameIdx", "@name:Kumar");
console.log(nameSearch);

// 🔸 Get Only the Matched Count
const result = await redisClient.ft.search("nameIdx", "@name:Kumar", {
  LIMIT: {
    from: 0,
    size: 0,
  },
});
console.log(result);

// 🔸 Get the Selected Fields (It will work only for the field on which the search is being performed.)
const selectedResult = await redisClient.ft.search("nameIdx", "@name:Kumar", {
  RETURN: ["name"],
});

console.log(selectedResult);

// ---
// ❌ Drop an Index

// 🔹 Drop Index Only (keep documents)
await redisClient.ft.dropIndex("nameIdx");

// 🔹 Drop Index and Delete Documents
await redisClient.ft.dropIndex("ageIdx", { DD: true });
