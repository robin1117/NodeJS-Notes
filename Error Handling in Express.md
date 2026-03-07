#Express

```js
In Express, a global error handler is a special middleware that catches all errors in the app. It has four parameters:
 (err, req, res, next)
 
You define it at the end of all routes:
app.use((err, req, res, next) => {
res.status(err.status || 500).json({ message: err.message || "Something went wrong!", 
});
});

You trigger it by throwing an error or calling next(err) in any route. Useful for showing proper error messages and avoiding server crashes.
```

[[What are Cookies]]