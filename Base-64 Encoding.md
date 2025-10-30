#Buffers
Base64 is a character encoding that converts binary data into string/text format so that it can be safely transmitted over text-based mediums like emails, URLs, or APIs.

## 🧾 Key Facts

- 🎯 **Purpose:** Encode binary data (like files, images) as text.
- 🔢 **Uses 64 characters:** a–z, A–Z, 0–9, +, /
- 🧮 **Each character represents:** 6 bits
- 📦 **Base64 is a subset of ASCII**
## 🌐 In the Browser

| Method   | Purpose                    |
| -------- | -------------------------- |
| `btoa()` | 🔄 Binary ➡ ASCII (Base64) |
| `atob()` | 🔄 ASCII (Base64) ➡ Binary |

⚠️ **Limitation:**  
These only work on strings, not raw binary data (like `ArrayBuffer`, `Blob`, etc.)

## 📏 Byte Behavior

Rule 1 :  Its better if we provides minimum 3 bytes length of data string to it, otherwise it will have to make it 3bytes by own by adding extra zeros

Rule 2 : Its better if the Provided String byte length is multiple of 3 like `3`, `6`, `9`, `12`  

Base64 works in 3-byte chunks (3 × 8 = 24 bits ➡ 4 Base64 characters × 6 bits = 24 bits)
If the binary data is less than 3 bytes, padding is added using:
- `=`  → for 1 missing byte  
- `==` → for 2 missing bytes
➕ Extra 0s are filled in binary to complete the chunk.
  
## 🧪 Example Flow

You provide a string `"ABC"` → converted to binary (UTF-8) → broken into 6-bit chunks → each chunk mapped to a Base64 character → final output:

```
"QUJD"
```

![[base65.drawio.svg]]

## 🧵 TL;DR Summary

| 🔍 Feature       | 🔢 Value                         |
| ---------------- | -------------------------------- |
| Total Characters | 64                               |
| Used Bits        | 6 bits                           |
| Padding          | =                                |
| Common Use       | Emails, URLs, JSON APIs          |
| Works Best With  | Text-safe transmission of binary |
## 💡 Why Base64 Matters in Node.js

Buffers contain raw binary data (0s and 1s).  
But many systems — like:

- 🌐 HTTP headers
- 📧 Emails
- 📝 JSON payloads
- 🖼️ HTML, CSS (inline images)

…can’t handle binary safely.

✅ **Base64 solves this** by turning binary ➡ text.  

So instead of sending a file buffer as binary (which can get corrupted), you send it encoded in Base64.


[[Base-64 in Node.js]]