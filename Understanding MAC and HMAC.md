# Message Authentication Code (MAC) and HMAC

## 🔐 What is a Message Authentication Code (MAC)?

A **Message Authentication Code (MAC)** is a short piece of information (also called a *tag*) used to verify:
  
- **Data integrity**: Ensures the message hasn’t been altered.
- **Authenticity**: Confirms the message came from a legitimate sender who possesses the secret key.

It is generated using:
- A **secret key**
- A **message**
- A **MAC algorithm**

The receiver, who also knows the secret key, can verify the MAC to confirm the message is valid and unmodified.  

> ⚠️ If the message is changed, even by one bit, the MAC will not match during verification.

  
---

## 🔑 What is HMAC?

  
**HMAC** stands for **Hash-based Message Authentication Code**.

It is a specific type of MAC that uses a **cryptographic hash function** (like SHA-256 or SHA-512) along with a secret key.

### 🔧 How HMAC Works:

1. Combines the **message** with a **secret key**
2. Applies the hash function in a specific way (with inner and outer padding)
3. Outputs a fixed-length tag

This tag is then sent along with the message. The receiver uses the same process and compares the result.
### ✅ Why HMAC is Popular:

- Works with existing hash functions (e.g., SHA-256)
- Easy to implement
- Resistant to known cryptographic attacks
- Widely used in APIs, authentication protocols, and secure communications

---
## 🧠 Example Use Case

  Imagine you’re sending an important file over the internet. Along with the file, you send a MAC generated using your secret key. When the recipient receives the file, they use the same key and verify the MAC. If the MAC matches, the message is authentic and unaltered.

---
## ✨ Summary

| Concept  | Purpose                                 | Uses Secret Key? | Algorithm              |
| -------- | --------------------------------------- | ---------------- | ---------------------- |
| **MAC**  | Verify message integrity & authenticity | ✅ Yes            | Varies                 |
| **HMAC** | A secure MAC using a hash function      | ✅ Yes            | SHA-256, SHA-512, etc. |
|          |                                         |                  |                        |


```js

import crypto from "node:crypto";
import { readFile } from "node:fs/promises";

const fileContent = await readFile("mac.md");
const mySecretKey = "my-super-secret-key";

const hmac = crypto
  .createHmac("sha256", mySecretKey)
  .update(fileContent)
  .digest("hex");

const simpleHmac = crypto
  .createHash("sha256")
  .update(mySecretKey)
  .update(fileContent)
  .digest("hex");

console.log(hmac);
console.log(simpleHmac);

```

---

[[MAC or Tag Vs Digital Signature]]