```js
import crypto from "crypto";
import { readFileSync } from "fs";

const fileData = readFileSync(
  "C:\\Users\\Devin\\Downloads\\Achha sila.mp4"
);

const hash = crypto
  .createHash("sha256")
  .update(fileData)
  .update("World")
  .digest("hex");

console.log(hash);

console.log(
  Buffer.from(
    "pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4",
    "base64url"
  ).toString("hex")
);
```

```ps
$ node app.mjs 
e12d1036ae13e37650d008b1364339708c8c9015b19f8fb82f1fa48de480e51d

$ openssl dgst -sha256 "C:\Users\Devin\Downloads\Achha sila.mp4"
SHA2-256(C:\Users\Devin\Downloads\Achha sila.mp4)= e12d1036ae13e37650d008b1364339708c8c9015b19f8fb82f1fa48de480e51d
```

[[Understanding Digital Signatures]]