```js
import crypto from "node:crypto";
import { createWriteStream } from "node:fs";
import { readFile } from "node:fs/promises";

const fileContent = await readFile("loan-agreement.md");
const mySecretKey = "my-super-secret-key";

const hmac = crypto
  .createHash("sha256")
  .update(fileContent)
  .update(mySecretKey)
  .digest("base64");

  console.log(hmac);

const writeStream = createWriteStream("loan-agreement-signed.md");

writeStream.write(fileContent);
writeStream.end(hmac);

// const hmac = createHash(originalData + secretData)
// SignedFile = originalData + signature
```


```js
import crypto from "node:crypto";
import { createWriteStream } from "node:fs";
import { readFile } from "node:fs/promises";


const signedFileContent = await readFile("loan-agreement-signed.md", "utf-8");
const [fileContent, signature] = signedFileContent.split("हस्ताक्षर:- ");
const mySecretKey = "my-super-secret-key";


const newSignature = crypto
  .createHash("sha256")
  .update(fileContent + "हस्ताक्षर:- ")
  .update(mySecretKey)
  .digest("hex");

console.log(newSignature);
console.log(signature);

if (newSignature === signature) {  
	 console.log("Perfect, the letter is valid. Here is your money.");
 } else {
	 console.log("Ohh no, this letter is invalid. I can't give you money.");
 }
```

[[Understanding MAC and HMAC]]

