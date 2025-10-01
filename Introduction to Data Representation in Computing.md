In this section we will gone discuss how do the computer stores data at base level.
what are the different number system are exist usually day to day life we uses Decimal Number System but apart from these we have other too.

If you wana go into more depth How Number System works you can read it from COA, Digital Logic etc over there you can tremendously go in depth, Here were just gone take basic overview of Number System and focussing on Practical rather than theory

To understand Decimal <font color="#9bbb59">Number System </font>I made a function that builds decimal number if we just provide Array of digits.

```js
'app.js'

function digitsToNumber(arr) {
	let num = arr.reduce((pre, curr) => {
	let ret = pre * 10 ** 0 + curr * 10 ** arr.indexOf(curr);
	return ret;
  });
console.log(num);
}

let arr = [2, 4, 5, 6];
//let arr = [9, 2];
digitsToNumber(arr);
```

 ---
## Number Systems in JavaScript

JavaScript supports working with numbers in different bases (radix).  
The most common bases are:

- **Binary (base 2)** → digits `0` and `1`
- **Octal (base 8)** → digits `0–7`
- **Decimal (base 10)** → digits `0–9` (default)
- **Hexadecimal (base 16)** → digits `0–9` and `A–F`

---
  
### ✅ Binary (base 2)

Prefix: `0b` or `0B`

```js

let bin = 0b1010; // binary for decimal 10

console.log(bin); // 10

```

  
### ✅ Octal (base 8)

Prefix: `0o` or `0O`

```js

let oct = 0o12; // octal for decimal 10

console.log(oct); // 10

```

  
### ✅ Hexadecimal (base 16)

Prefix: `0x` or `0X`

```js

let hex = 0xA; // hexadecimal for decimal 10

console.log(hex); // 10

```

  

⚠️ **Old octal syntax**: `012` (leading zero) was once octal, but now it's discouraged in strict mode because it’s confusing.

  

---

## Converting Numbers Between Bases

### 🔹 `toString(radix)`

Converts a number into a **string** with the given base (radix = 2 to 36).
  

```js

let num = 42;

  
console.log(num.toString(2));  // "101010"   (binary)
console.log(num.toString(8));  // "52"       (octal)
console.log(num.toString(10)); // "42"       (decimal)
console.log(num.toString(16)); // "2a"       (hexadecimal)

```

  

👉 If you want **uppercase hex**, just do:

```js

console.log(num.toString(16).toUpperCase()); // "2A"

```

  

---

  

## Parsing Strings into Numbers


### 🔹 `parseInt(string, radix)`

Converts a string in the given base into a decimal number.

```js
console.log(parseInt("1010", 2));  // 10 (binary → decimal)
console.log(parseInt("12", 8));    // 10 (octal → decimal)
console.log(parseInt("A", 16));    // 10 (hex → decimal)
console.log(parseInt("42", 10));   // 42 (decimal → decimal)
```

  

⚠️ If you don’t pass `radix`, JavaScript tries to **guess**:
- `"0x..."` → hex
- `"0..."` (in old browsers) → octal  
That’s why it’s **best practice** to always specify `radix`.

  

---

  

## Practical Example: Conversion Round Trip

  
```js

let num = 255;


// Decimal to other bases
console.log(num.toString(2));  // "11111111"
console.log(num.toString(8));  // "377"
console.log(num.toString(16)); // "ff"
  

// Back to decimal
console.log(parseInt("11111111", 2)); // 255
console.log(parseInt("377", 8));      // 255
console.log(parseInt("ff", 16));      // 255

```

  

---

  

## Useful Tricks

### ➝ Padding Binary/Hex/Octal

```js

let n = 5;

console.log(n.toString(2).padStart(8, "0"));  // "00000101" (8-bit binary)

```

### ➝ Convert directly between bases

```js

let hexNum = "ff";

let binary = parseInt(hexNum, 16).toString(2);

console.log(binary); // "11111111"

```


---

✅ **Summary Table**

| Base | Prefix  | Example | With `toString()` | With `parseInt()` |
|------|---------|---------|-------------------|-------------------|
| Binary | `0b` | `0b1010` → 10 | `num.toString(2)` | `parseInt("1010", 2)` |
| Octal | `0o` | `0o12` → 10 | `num.toString(8)` | `parseInt("12", 8)` |
| Decimal | none | `42` → 42 | `num.toString(10)` | `parseInt("42", 10)` |
| Hex | `0x` | `0xA` → 10 | `num.toString(16)` | `parseInt("A", 16)` |


#data_Representation


## [[Digital Data Units]]

## [[Binary Data on Physical Level]]

## [[Why Do We Use Decimal System]]

## [[Character Sets vs Character Encodings (ASCII and Unicode)]]

## [[Byte Order Mark (BOM) and Endianness (Big Endian & Little Endian)]]
