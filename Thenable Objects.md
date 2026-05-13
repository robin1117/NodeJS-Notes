## What is a Thenable?


- A thenable is any object that contains a `.then()` method.
- It behaves like a Promise, but is not necessarily created using the `Promise` constructor.
- JavaScript treats thenables similarly to promises.

---

## Key Points
  
- Works with `await`
- Works with `Promise.resolve()`
- Can be used in asynchronous operations

---

## Example


```js
const thenable = {
  then: (resolve, reject) => {
    resolve("Done!");
  }
};

await thenable;
```

### Output

```js
"Done!"
```

---
## How It Works

When JavaScript sees:

```js
await thenable;
```

it checks whether the object has a `.then()` method.

If `.then()` exists:

- JavaScript treats the object like a promise.
- The `resolve()` function provides the final value.
- The `reject()` function handles errors.

---

## Equivalent Promise Example  

```js
const promise = new Promise((resolve, reject) => {
  resolve("Done!");
});

await promise;
```

### Notes

- Both behave similarly.
- The first is a thenable object.
- The second is a real Promise.

---

## Promise.resolve() with Thenables

```js
Promise.resolve(thenable)
  .then((data) => {
    console.log(data);
  });
```

### Output  

```js
Done!
```

---
## Important Difference

### Thenable

- Any object with a `.then()` method.
### Promise

- Built-in JavaScript asynchronous object created using:

```js
new Promise()
```

---

## Simple Rule

If an object has:

```js
.then()
```


JavaScript can usually treat it like a Promise.

[[Mongoose Query and Query Chaining]]