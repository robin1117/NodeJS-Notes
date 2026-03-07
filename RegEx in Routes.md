```js
import express from "express";
const app = express();


app.get('/:id([0-9])', (req, res) => {
  res.json({ mesasge: 'Hello' });
});

  
// app.get('/:id?', (req, res) => {
//   res.json({ mesasge: 'Hello' });
// });

// app.get('/directory|folder', (req, res) => {
//   res.json({ mesasge: 'Hello' });
// });


// app.get(/^\/(\d+)$/, (req, res) => {
//   res.json({ double: req.params[0] * 2 });
// });


const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

```text
Express lets you use regular expressions to match route paths more flexibly. Instead of a fixed path string, you use a RegEx pattern to define routes.

Benefits :
Flexible matching: Match complex or variable patterns that can’t be expressed easily with normal params.
Fine control: You can restrict allowed values (e.g., digits only).
Useful for legacy URLs or when paths don’t follow simple patterns.

Drawbacks :
Harder to read and maintain: RegEx can be complex and confusing for others reading your code.
No named params: Captured groups are accessed by index (req.params[0]), not by names.
Can be error-prone if regex is not carefully written.
```

`Using Arrays to Define Multiple Routes`

```js
import express from "express";

const app = express();


app.get(["/directory", "/folder", "/test", "/hi", /\d/], (req, res) => {
  res.json({ message: "Hello Directory" });
});


const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```


```text
Route handlers can accept an array of paths * 
- The route will match any of the paths in the array * 
- Useful for handling multiple similar routes with the same logic * 
- Example: app.get(['/path1', '/path2'], handler) * 
- In this example, the handler will be invoked for both /path1 and /path2 * 
- This helps to reduce code duplication and improve maintainability
```