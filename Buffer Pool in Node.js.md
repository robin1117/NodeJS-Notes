In the last section we had seen basic Differences between `alloc` and `allocUnsafe` , we had found `allocUnsafe` is faster due to its non cleanliness allocation : <font color="#76923c">But here we will see how Buffer Pool contributes too for its Fastness</font>


```js
console.log(Buffer.poolSize); //8192
```