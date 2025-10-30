 #Buffers
Whatever So far we had learned it's based on JS concepts, we had  run it  in `Node.js` as well in `Browser.` Likewise Typed Array is also the concept JS, and can work in both -
and `Node.js` uses Type Array, but for what purpose ? 

As we know Data View provides maximum control over a single byte, if our work can get done without even require as much control then its not necessary to stick with `Data View`, just like it does not take an elephant to kill an ant.

If we have simple fixed length data we can go with `Typed Arrays` instead `Data View` 

<font color="#00b0f0">The ways we can create Type Array : </font>
when we are work with Type Arrays, You should consider it as Category which have multiple function and we can use these functions based on size, as much we want our single element should occupy in Array -

For Signed :
```js
Int8Array()
Int16Array()
Int32Array()
BigInt64Array()
```

For Unsigned :
```js
Uint8Array()
Uint16Array()
Uint32Array()
BigUint64Array()
```

For Floats :
```js
Float32Array()
Float64Array()
```

Working with Example :
```js
let a = new ArrayBuffer(4) // 4bytes buffer 

let a_8 = new Int8Array(a) // Array whose single element is of 8bits
let a_16 = new Int16Array(a) // Array whose single element is of 16bits
let a_32 = new Int32Array(a) // Array whose single element is of 32bits

console.log(a_8);
console.log(a_16);
console.log(a_32);
```

Output :
```bash
Int8Array(4) [ 0, 0, 0, 0 ] //Typed Array 
Int16Array(2) [ 0, 0 ] //Typed Array 
Int32Array(1) [ 0 ] //Typed Array 
```

Over These typed arrays you can find all those methods that a simpler arrays consist, expect the methods that make changes in the arrays like `pop` , `push` etc 
Array buffer`s` size is unchangeable 

<font color="#9bbb59">Why we call it as Typed Array ?</font>
Because these arrays are kind <font color="#c0504d">most specific</font>, means the element that they can hold should be of specific type it may be `integer` or `float`, unlike simpler heterogeneous arrays which can hold any data regardless of its type.

---
Till now we have seen how do we create `Typed Arrays` but we haven`t` see yet how we can manipulate data with it - as in case of Data View we had different functions for manipulation in `Array Buffer. `
Here, we can simply perform manipulations by treating a `TypedArray` as a regular array. However, due to this ease of use, we had to compromise on the fine-grained level of control over the `ArrayBuffer`, which is usually available when using `DataView`.

#### How do we `Manuplate` Data of `ArrayBuffers` Using `TypedArray`

One of the way we have by just connecting your `ArrayBuffer`  with `TypedArray` after that you can read and write in your `ArrayBuffer`. But this method sometime make you confuse when multiple `TypeArray` Points same `ArrayBuffer`.

```js
let a = new ArrayBuffer(4) // 4bytes buffer 

let au_8 = new Uint8Array(a) 
let au_16 = new Uint16Array(a) 
au_8.buffer == au_16.buffer //true
```

There is a another more convenient method exist too in which `TypedArray` Implicitly create there own `ArrayBuffer` , after that we have not worried about `ArrayBuffer` 

```js
let au_8 = new Uint8Array(4)
let au_16 = new Uint16Array(4)
au_8.buffer == au_16.buffer //false
au_8[0] = 0xf3
au_8[1] = 0xca
au_8[2] = 0xab
au_8[3] = 0xa8
```

Its Not enough we have another method too. which becomes most convenient method using which we can fill data directly while creating `TypedArray`

```js
let au_8 = new Uint8Array([0xf3,0xca,0xab,0xa8])
```

---
<font color="#ffc000">Some Important Insights about</font> `TypedArray` :
- One thing you should keep in mind about `TypedArray`  it cannot exist without `ArrayBuffer` whatever the methods we had seen for creating `TypedArrays` All those uses `ArrayBuffer` Behiend the seen in any way  

- By default `TypedArray` uses `LittleEndian` Endianness when we are work with multi Bytes Data like `16bit`, `32bit` `etc`
---

#### `fill()` function over `TypedArrays` :

The `fill()` function on a `TypedArray` allows us to fill all the elements in the `TypedArray` with a specified value.

`fill(value,start,end)` : It takes 3 Arguments for more convenience and control .

Lets make a biggest possible `TypedArray`, as we know that its not be greater than or equal to `2gb` so we try to make it slightly lesser than its limit .

```js
let a_8 = new Int8Array(1.9*1024*1024*1024) //this generates a 1.9gb arraysbuffer
a_8.fill(0xff) //this will instantly fill all the space with ff
```

<font color="#d83931">Note :</font> Here Actual memory is occupying by `ArrayBuffer` not `TypedArray`, but the `TypedArray` is just working over it, act as interface for creating and modifying `ArrayBuffer` 

#### Some Important Properties over `ArrayBuffer()` 

Till now we had seen that to make a fresh buffer we provide first Argument to the constructor function `ArrayBuffer(size_bytes)` : 
But we had not talk about second argument that too also can be passed to it which is an `{ }`.
To make your `ArrayBuffer` `resizable:true` we can provide second Argument `{maxByteLength:16}` , basically we are defining till how much this array buffer can be grown ,

```js
let a = new ArrayBuffer(4,{maxByteLength:16})
```

Initially the size of the buffer be `4B` , and the second argument purposes that you can later increment it up to `16B` , Now its becomes resizable.

---
The `transfer()` method on an `ArrayBuffer` creates a new `ArrayBuffer` with the same byte content as the original and then detaches the original buffer, effectively transferring its ownership to the new buffer. This allows for efficient memory management and data transfer between different execution contexts, such as from the main thread to a Web Worker, without copying the data.

```js
let a = new ArrayBuffer(4)
let b = a.transfer()
console.log(a)
console.log(b)
```


#### Now its Time to see How I can [[Transferring Array Buffer Data from Memory to Disk and Network]]
