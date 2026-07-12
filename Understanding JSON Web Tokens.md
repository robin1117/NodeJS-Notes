JWT is a secure, compact token used for authentication and authorization, containing 3 parts:
- Header: Token type & algorithm. 
- Payload: Data (e.g., user ID, role). 
- Signature: Verifies data integrity. 

Common JWT Methods 

➤` jwt.sign(payload, secret, options) `
Creates a token.
Example:
`jwt.sign({ userId: 1 }, 'secret', { expiresIn: '1h' });`

➤ `jwt.verify(token, secret)`
Verifies and decodes token. 
Example:
`jwt.verify(token, 'secret');`

➤ `jwt.decode(token)`
Decodes token without verifying.
Example: 
`jwt.decode(token);`


```js
import jwt from "jsonwebtoken";
import { createHmac } from "node:crypto";


const token = jwt.sign({ name: "Bilal" }, "secret", {
  algorithm: "HS256",
  expiresIn: 10,
});


console.log(token);

console.log(jwt.decode(  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmlsYWwiLCJpYXQiOjE3NDM2NDc4NDksImV4cCI6MTc0MzY0Nzg1OX0.sdf"));

console.log(Buffer.from("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmlsYWwiLCJpYXQiOjE3NDM2NDYxMjV9","base64url").toString());

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmlsYWwiLCJpYXQiOjE3NDM2NDYyMDR9.yC98vaKasra-utjWHrXTZDRKxLkDn_0HQJDHDICmUIU";

console.log(createHmac("sha256", "secret").update("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmlsYWwiLCJpYXQiOjE3NDM2NDYyMD").digest("base64url"));
```

[[Do Not Use JWT for Login]]