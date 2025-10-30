#Buffers
Base64 is used to encode binary data (like images, PDFs, or files) into a text-based format — especially useful when the communication medium supports only text.

#### 📦 Base64 Characteristics
- ✅ **Encodes binary into 64 ASCII characters:** A–Z, a–z, 0–9, +, /  
- ⚠️ **Padding:** Adds `=` if data isn’t divisible by 3  
- 📈 **File size:** Increases by approximately **1.3x**  
- 📤 **Common uses:**
  - HTML, CSS (inline images)
  - JSON, query strings
  - Email attachments

#### 🔡 Encode image to Base64 in Terminal

```bash
base64 image.png
```

#### 🌐 Generate Data URL for inline use in Terminal

```bash
echo "data:image/png;base64,$(base64 image.png)"
```

  
💡 You can paste the output directly into HTML:

```html
<img src="data:image/png;base64,iVBORw0KGg..." />
```

#### 🧬 Why Base64?

Many systems such as HTTP, SMTP, and JSON support **only plain text**, not raw binary.  
🔁 **Base64 ensures safe transmission and storage** of binary data in those systems.

#### 🧪 Base64url – URL-Safe Variant

Base64url is a modified version of Base64 designed for use in **URLs and query parameters**.

| Base64 | Base64url   |
| ------ | ----------- |
| `+`    | `-`         |
| `/`    | `_`         |
| `=`    | *(removed)* |
#### 📌 Common Use Cases

- 🔐 **JWT tokens**
- 🌐 **Query strings**
- 📁 **Web APIs**
##### Example:

```
abc+123/== ➡ becomes ➡ abc-123-
```

 Converting any file to base64 String : - 
```js
let a = await fs.readFile("zamli.mp3", "base64");
fs.writeFile("aud.txt", a);
```

```js
let a = await fs.readFile("zamli.mp3");
let b = a.toString("base64");
fs.writeFile("aud.txt", b);
```

 Converting any base64 to original once : -

```js
let a = await fs.readFile("song.txt", "utf-8");
fs.writeFile("song.mp3", a, "base64");
```

```js
let a = await fs.readFile("song.txt");
let b = a.toString("utf-8");
fs.writeFile("song.mp3", b);
```
#### ✅ Summary

| Feature          | Description                 |
| ---------------- | --------------------------- |
| Encoding Type    | Binary ➡ Text               |
| Character Set    | 64 ASCII chars              |
| Padding          | `=`                         |
| File Size Growth | ~1.3x                       |
| Common Uses      | JWTs, Emails, Inline Images |
| Variant          | Base64url for URLs          |
