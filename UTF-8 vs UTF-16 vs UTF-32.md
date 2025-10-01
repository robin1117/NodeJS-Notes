In this section we were gone try to find the differences between `UTF-8` `UTF-16`  `UTF-32`, but Before understand about, what`s` the full form of  `utf` ?
`UTF` =`Unicode Transformation Format`

Weather `utf8` `utf16` `utf32` all these encoding Mechanism are based to Unicode character set ! and you may be pretends that `utf32` is more superior than others but these numbers does not represents superiority

So which one is Better ?
No one is inherently better—it depends on the use case. However, we can say that `UTF-8` is more memory-optimized because of its flexible behaviour, storing characters in 1, 2, 3, or 4 bytes

🔁 UTF-8 : 
- Characters in the ASCII range (0–127) use only 1 byte
- Higher Unicode characters use 2, 3, or 4 bytes
- Uses headers (prefix bits) to determine byte length
- 1 byte: 0xxxxxxx
- 2 bytes: 110xxxxx 10xxxxxx
- 3 bytes: 1110xxxx 10xxxxxx 10xxxxxx
- 4 bytes: 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
- More memory efficient for English-heavy text (where characters fit in 1 byte)
- Slightly slower for computation (due to decoding variable byte length)

🔁 UTF-16 :
- Uses 2 or 4 bytes
- Default size = 2 bytes (16 bits) for most characters
- For characters beyond U+FFFF, uses surrogate pairs (4 bytes)
- Has two variants:
	- LE (Little Endian) – Least significant byte first
	- BE (Big Endian) – Most significant byte first
- Does not use header bits, so decoding is faster and more consistent
- May consume more memory than UTF-8 for ASCII-heavy content

✅UTF-32 :
-  Its size is fixed and uses 4 bytes for storing, not matter even if we are storing single character.
- Does not use header bits, so decoding is faster and more consistent 
- May consume more memory than UTF-16 for ASCII-heavy content
