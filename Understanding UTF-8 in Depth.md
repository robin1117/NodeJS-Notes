#data_Representation

### Intro to the `xxd` 

In this section we will gone discuss about how we can get view of binary form of any character which are just written in a file
In the Linux Terminal (Bash) we have some commands using which we can do so, for example
- The `xxd` command in Linux is a utility used to create a <font color="#92cddc">hexadecimal dump of a given file</font> or standard input. It can also perform the reverse operation, converting a hexadecimal dump back into its original binary form

Suppose we have a file - `robin.txt`
```txt
'robin.txt'
Robin is a good Boy ࠏ
```

<font color="#f79646">Displays the hexadecimal (Unicode-like) content of a file in groups of two bytes.</font>
```bash
Nancy@ThisisNancy MINGW64 ~/Desktop/ROUGH/utf-8
$ xxd robin.txt 
00000000: 526f 6269 6e20 6973 2061 2067 6f6f 6420  Robin is a good 
00000010: 426f 7920 e0a0 8f                        Boy ...
```

<font color="#f79646">Displays the hex content grouped per byte (very useful for byte-level analysis).</font>
```bash
Nancy@ThisisNancy MINGW64 ~/Desktop/ROUGH/utf-8
$ xxd -g 1 robin.txt
00000000: 52 6f 62 69 6e 20 69 73 20 61 20 67 6f 6f 64 20  Robin is a good 
00000010: 42 6f 79 20 e0 a0 8f                             Boy ...
```

 <font color="#f79646">Displays the binary representation of each byte in the file.</font>
```bash
Nancy@ThisisNancy MINGW64 ~/Desktop/ROUGH/utf-8
$ xxd -b robin.txt
00000000: 01010010 01101111 01100010 01101001 01101110 00100000  Robin 
00000006: 01101001 01110011 00100000 01100001 00100000 01100111  is a g
0000000c: 01101111 01101111 01100100 00100000 01000010 01101111  ood Bo
00000012: 01111001 00100000 11100000 10100000 10001111           y ...
```

<font color="#f79646">This makes a new file</font> `hexDump.txt` <font color="#f79646">if not exists and put everything it inside -</font>
```bash
Nancy@ThisisNancy MINGW64 ~/Desktop/ROUGH/utf-8
$ xxd robin.txt > hexDump.txt
```

<font color="#f79646">This Just appends the new data inside</font> `hexDump.txt`
```bash
Nancy@ThisisNancy MINGW64 ~/Desktop/ROUGH/utf-8
$ xxd robin.txt >> hexDump.txt
```

🔧 <font color="#9bbb59">Bonus: Install a Hex Editor extension in your code editor to visually inspect the bytes of a file.</font>


---
### Encoding and UTF-8

<font color="#9bbb59">Encoding :</font> Encoding is the process of converting information from one format or system into another, often to make it suitable for storage, transmission, or efficient use by a computer or other system.
<font color="#d99694">So now Question is When it comes to use for work in the context files ?</font>
<font color="#d99694">Basically Encoding is applied in two phases :</font>
- <font color="#fbd5b5">When we opening the file </font>: The reader (another program or system) decode the bytes back to characters using the same encoding, which was used for saved

- <font color="#fbd5b5">When we saving that file</font> : Your text editor encodes characters into bytes based on the specified encoding (e.g., UTF-8).

<font color="#ff0000">NOTE :</font> you come to know the importance of Encoder when you try to re open the text file with different Encoder(UTF-16 LE) , which was not gets used at time of saving that file -

---

Now its time has come for which we are here , to deeply understand<font color="#31859b"> UTF-8 </font>Encoding Mechanism,
UTF-8 has **4 formats** (1-byte, 2-byte, 3-byte, 4-byte) depending on the Unicode code point range. Each format has a “header pattern” (leading bits) and then carries the binary bits of the code point.

| Bytes | Leading Bits                          | Code Point Range   | Bits Available |
| ----- | ------------------------------------- | ------------------ | -------------- |
| 1     | `0xxxxxxx`                            | U+0000 – U+007F    | 7              |
| 2     | `110xxxxx-10xxxxxx`                   | U+0080 – U+07FF    | 11             |
| 3     | `1110xxxx-10xxxxxx-10xxxxxx`          | U+0800 – U+FFFF    | 16             |
| 4     | `11110xxx-10xxxxxx-10xxxxxx-10xxxxxx` | U+10000 – U+10FFFF | 21             |
<font color="#92cddc"> 1-byte form (7 bits)</font>
- For code points `U+0000 – U+007F` (0–127)
- **7 bits available** for the code point. `0xxxxxxx`
- `U+0041 = 65 = "A"` → <font color="#ff0000">0</font>1000001 → `0x41`

<font color="#92cddc"> 2-byte form (11 bits)</font>
 - For code points `U+0080 – U+07FF` (128–2047)
- **11 bits available** for the code point. `110xxxxx 10xxxxxx`
- `U+0080 = 255 = ÿ` → <font color="#ff0000">110</font>00011 <font color="#ff0000">10</font>111111 → `0xC3 0xBF`

<font color="#92cddc">3-byte form (16 bits)</font>
- For code points `U+0800 – U+FFFF` (2048–65535)
- **16 bits available** for the code point. `1110xxxx 10xxxxxx 10xxxxxx`
- `U+20AC = 8364 = €` →<font color="#ff0000"> 1110</font>0010 <font color="#ff0000">10</font>000010 <font color="#ff0000">10</font>101100 → `0xE2 0x82 0xAC`

<font color="#92cddc">4-byte form (21 bits)</font>
- For code points `U+10000 – U+10FFFF` (65536–1,114,111)
- **21 bits available** for the code point. `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx`
- `U+1F600 = 😀` →  <font color="#ff0000">11110</font>000 <font color="#ff0000">10</font>011111 <font color="#ff0000">10</font>011000 <font color="#ff0000">10</font>000000 → `0xF0 0x9F 0x98 0x80`

📁 Real-World Use Case If you read a file using `fs.readFile()` in `Node.js`, it gives you a buffer. That buffer contains these raw UTF-8 encoded byte values. If you print that buffer in hexadecimal or binary, you’ll see exactly how each character was stored.

```txt
Hi this is Robin singh
```

```bash
Nancy@ThisisNancy MINGW64 ~/Desktop/ROUGH/utf-8
$ node app.js
<Buffer 48 69 20 74 68 69 73 20 69 73 20 52 6f 62 69 6e 20 73 69 6e 67 68>
```

### [[UTF-8 vs UTF-16 vs UTF-32]]