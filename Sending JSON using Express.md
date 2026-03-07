#Express
## 🌐 Express `res.json()` Method

The `res.json()` method in Express is the **recommended and simplified way** to send a JSON response from the server to the client.

It automatically:
- Sets the `Content-Type` header to `application/json`
- Converts JavaScript objects into JSON format

So, you **do not need** to manually set headers or use `JSON.stringify()`.

### Example: Sending JSON Response

```js
app.get("/", (req, res) => {

  // Manual approach (old style)
  // res.setHeader("Content-Type", "application/json");
  // res.end(JSON.stringify({ message: "Hello World!!" }));

  // Recommended Express approach
  res.json({ message: "Hello World!!" });

});
```

### Sending JSON with Status Code

`res.status(201).json({ message: "Hello World!!" });`

- `res.status(code)` sets the HTTP status code
- `.json()` sends the response body as JSON


[[What is CORS]]