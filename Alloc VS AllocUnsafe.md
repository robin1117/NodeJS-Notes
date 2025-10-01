#Buffers
In this section mainly we will gone discuss about two methods `Alloc` & `AllocUnsafe` that are Available over the `Buffer` .

```js
const nodeBuffer2 = Buffer.alloc(4)
const nodeBuffer3 = Buffer.allocUnsafe(4)

console.log(nodeBuffer2); //<Buffer 00 00 00 00>
console.log(nodeBuffer3); //<Buffer 00 00 00 00>
```

The above example might compelled you both of them work in same way but in realty is something different in there working.

- `alloc()` :  It allocates memory space by explicitly making them all the bytes zeros. which act as hinderance in term of optimization , but its good if you don`t` want extra unnecessary garbage in the allocated buffer. 
- `Buffer.alloc(n)` has O(n) time complexity because we are writing zeros per byte .
---
- `allocUnsafe()` : while it allocates memory space as it is, means its doesn't ensure that the given space will be empty , this behaviour somehow good in term of optimization but it can be risky since it may reveal some sensitive information. that may be present in the Garbage, that`s` why its name is `Unsafe`
- whereas `Buffer.allocUnsafe` has O(1) time complexity because we ain't writing anything

By executing this code you can find how the `allocUnsafe` is faster than `alloc` !

```js
console.time("Buffer.alloc")
for (let i = 0; i < 100000; i++) {
    Buffer.alloc(1024)
}
console.timeEnd("Buffer.alloc")

  
console.time("Buffer.allocUnsafe")
for (let i = 0; i < 100000; i++) {
    Buffer.allocUnsafe(1024)
}
console.timeEnd("Buffer.allocUnsafe")
```

```bash
$ node "c:\Users\Devin\Desktop\ROUGH\temp test\temp.js"
Buffer.alloc: 243.69ms
Buffer.allocUnsafe: 101.542ms
```

According to our needs if our concern is speed but as much security we can go with `allocUnsafe` either we can go with `alloc` which is most safest. 

<font color="#e36c09">Conclusion : </font>
One of the reason for `allocUnsafe` fastness is it does not think its necessary to make all the bytes zero, it just occupy memory space as it is. without cleaning it
But there is another a reason too which even make it faster too. ? [[Buffer Pool in Node.js]]

