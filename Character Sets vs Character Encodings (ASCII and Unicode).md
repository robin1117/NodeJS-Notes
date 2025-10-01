#data_Representation

In this section we will see for what these two thing `Character Sets` ,  `Character Encodings` are to exists in Computers System.

<font color="#9bbb59">Character Sets :</font> Its a collection of symbols `Letter`, `Digits`, `Special characters` etc. and for each symbol we assigned a number , so that computer understand about each symbol with it -
<font color="#fbd5b5">We have some Popular Character Sets</font> - which sets a standard relation between <font color="#92cddc">character --- > number</font> that every computer in this world should follow. 
- <font color="#fbd5b5">ASCII (American Standard Code for Information Interchange) :</font>
	- Supports 128 characters
	- Uses 7 bits to represent characters → 2<sup>7</sup> = 128
	- Includes: A–Z, a–z, 0–9, punctuation, and control characters 

- <font color="#fbd5b5">Unicode :</font> A much larger set capable of representing over 1.1 million characters Supports characters from all major languages, emojis, symbols, etc along with ASCII .  Unicode contains all the possible Characters in this world 

<font color="#9bbb59">Character Encoding :</font>  Character Encoding defines how characters from the set are represented as binary data (0s and 1s).
There are different <font color="#92cddc">Characters Encodings</font> that decides representation of characters in Binary form -
- `ASCII Character Encoding` : It uses `7 bit` to represent Characters in Binary `a` = `97` = `1100001`
- `UTF-8 Character Encoding` : It uses `8 bit` to represent Characters in Binary  `a` = `97` = `01100001`

Now the Question is How the `UTF-8` encoding represent characters which have higher number than `255` as it can represent number with in only `8 bit` ?
`UTF-8` not only stores numbers of `8bit` apart from it can also uses variables bytes too 
Which were gone discuss in next section.

### [[Understanding UTF-8 in Depth]]