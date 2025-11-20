#Streams

Till now we had seen that how the Streams in `Node.js` comes to use , But you can uses these stream in your browser too you should know about it .

```js
'script.js'
const input = document.querySelector("input");

let decoder = new TextDecoder()

input.addEventListener("change", async () => {
  const file = input.files[0];
  // console.log(await file.text());
  let stream = file.stream()


  for await (let chk of stream) { //async iterable
    console.log(chk);
  }

  let reader = stream.getReader()
  
  while (true) {
    let { done, value } = await reader.read()
    console.log(decoder.decode(value));
    if (done) {
      break
    }
  }
})
```

```html

```
