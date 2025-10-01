#Buffers
Arrays of Buffer is nothing but its <font color="#00b0f0">Array of Bytes</font> - which we can simply create using JavaScript its a Concept of JS and we can store any data inside it

| 1-byte | 1-byte | 1-byte | 1-byte |
| ------ | ------ | ------ | ------ |
- This is the Array of of `4 Bytes`  or `32 bits` -
- And we can create any size of Array within the limit of `2GiB` but it should not be of maximum limit , Because this `2GiB` is the limit of  our JS Engine and there are some variables that already occupy some space -

Lets I show you how we can create Array Buffers in the browser console and `node.js` to.

#### <font color="#9bbb59">Creating</font> `ArrayBuffer` <font color="#9bbb59">using Browser Console : </font>
- In the Browser Console we can create Array Buffer using the Constructor function - called `ArrayBuffer()` -

```js
let a = new ArrayBuffer(4)
```

![[Pasted image 20250901114944.png]]

![[Pasted image 20250901115045.png |670]]

- In the Memory Inspector Tab you can see How these `4 Bytes` or `32 bits` are arranged in Hexadecimal form, for now all these values are Zero. because its empty for now
- Until we have not provide any data to that Buffer, Our memory is not filled.
- Why we call `ArrayBuffer` as Array ? Because it allocates memory in contiguous behaviour as like in array did.

#### <font color="#e36c09">Now the Question is How we can provide data to Array Buffer ?</font>
We cannot update or modify `ArrayBuffer` as easy as we can modify Array or Objects in JS - 
To update any `ArrayBuffer` we uses Two things -
- Typed Array
- Data View

Later in some other video we will discuss How we can modify `ArrayBuffer` using `Data view` and `Typed Array`. likewise how we can write `ArrayBuffers` by own way :


---
We decided to make a program that can read the files from your PC and stored it as Binary in `ArrayBuffer`, So that we can practically see how this data looks like in `ArrayBuffer`

```html
'index.html'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Select a file to read:</h1>
    <input type="file" id="fileInput">
</body>
</html>
```

```js
'script.js'

const fileInput = document.getElementById("fileInput");


fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.addEventListener("load", function (e) {
    console.log(e);
    const arrayBuffer = e.target.result;
    console.log(arrayBuffer);
  });

  reader.readAsArrayBuffer(file);

});
```


```txt
'abc.txt'
abc
```

![[Pasted image 20250902111941.png]]

One of the Important thing about Endianness that you should keep in mind - Endianness comes in picture only when its is required multiple bytes to represent single character -


[[Reading and Writing to Array Buffers]]