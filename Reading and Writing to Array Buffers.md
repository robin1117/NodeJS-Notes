#Buffers

So far we have only learned to create `ArrayBuffers`, we haven`t` know yet how to write or read data in `ArrayBuffers` : which is what actually we are going to talk about here -

To make `read/write` in Array buffers we require an separate object known as data-view : which we can create by `DataView()` constructor function.

```js
let a = new ArrayBuffer(4) // creating buffer
let view = new DataView(a,0(default)) // creating data View for 'a' ArrayBuffer
```

Now our `view` variable contains an object that have many properties, using those we can modify our `a` `ArrayBuffer` -

```js
1. DataView(4)
2. buffer: ArrayBuffer(4)
3. byteLength: 4
4. byteOffset: 0
5. [[Prototype]]: DataView
6. buffer: (...)
7. byteLength: (...)
8. byteOffset: (...)
9. constructor: ƒ DataView()
   
10. getBigInt64: ƒ getBigInt64()
11. getBigUint64: ƒ getBigUint64()
    
12. getFloat16: ƒ getFloat16()
13. getFloat32: ƒ getFloat32()
14. getFloat64: ƒ getFloat64()
    
15. getInt8: ƒ getInt8()
16. getInt16: ƒ getInt16()
17. getInt32: ƒ getInt32()
    
18. getUint8: ƒ getUint8()
19. getUint16: ƒ getUint16()
20. getUint32: ƒ getUint32()
    //---------------------------------------------------------------------
21. setBigInt64: ƒ setBigInt64()
22. setBigUint64: ƒ setBigUint64()
    
23. setFloat16: ƒ setFloat16()
24. setFloat32: ƒ setFloat32()
25. setFloat64: ƒ setFloat64()
    
26. setInt8: ƒ setInt8()
27. setInt16: ƒ setInt16()
28. setInt32: ƒ setInt32()
    
29. setUint8: ƒ setUint8()
30. setUint16: ƒ setUint16()
31. setUint32: ƒ setUint32()
    
32. Symbol(Symbol.toStringTag): "DataView"
33. get buffer: ƒ buffer()
34. get byteLength: ƒ byteLength()
35. get byteOffset: ƒ byteOffset()
36. [[Prototype]]: Object
```
#### Writing to `ArrayBuffers`
Let`s` we try to use : `setUint8: ƒ setUint8()`

```js
view.setInt8(0,80) //provding decimal 
view.setInt8(1,0b01010000) //provding binary 
view.setInt8(2,0x50) //provding hex
view.setInt8(3,0o120) //provding octal 
```

These are way we can setting a value in our Buffer using different Number System `octal` ,`Hex`, `binary`, `decimal` : But in the memory inspector you can see all these in `hex` form only 

Not only this you can write multiple bytes too. by just using other provided methods in `view` object : these methods write Bytes in Big Endianness by default, until we not passes `true` to the 3rd arguments. 
- `setInt16: ƒ setInt16()`
- `setInt32: ƒ setInt32()`

![[Pasted image 20250903114540.png]]

#### Reading from `ArrayBuffers`

Whatever the values we had stored in Byte Spaces of `ArrayBuffer`, we can read those values using : `getInt8: ƒ getInt8()` etc.

Not only this we can read Multiple Bytes too, using other available Properties like :
- `getInt16: ƒ getInt16()`
- `getInt32: ƒ getInt32()`

But the concept of Endianness comes in the Picture only when we are working with multiple bytes, By default all `Multibytes Reading Methods` uses Big Endianness until we haven`t` provide 3rd argument as `true`  to it !
- `view.getInt16(-, -, true)`

One Good thing here is you can decide in which way you are going to read those stored bytes ! for : 
- `unsigned` : you can use `getUint8()`
- `signed` : you can use `getInt8()`

This Proves that its our choice how we are interpreting those stored bytes : while reading

#### Conclusion :
We have learned about `DataView` because it provides more control over the `ArrayBuffer` in various ways. Now, we are going to learn a new JavaScript concept known as `Typed Arrays`, which are used by `Node.js` itself, instead of `DataView`.✅

[[Typed Array]]