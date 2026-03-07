#Express
## 🌐 The Problem

When you open a video URL like:

```
http://localhost:4000/test
```

and your Express route does this:

```js
res.sendFile(`${import.meta.dirname}/yash.mp4`);
```

The browser **starts downloading the video** instead of playing it.

---
## ❓ Is This an Express Bug?

❌ No.  

This is **expected browser behavior**, not an Express issue.
Express correctly sends the file with proper headers.

---
## 🧠 What’s Actually Happening Behind the Scenes

1. Browser makes a **normal navigation request**
2. Server sends the `.mp4` file
3. Browser decides how to handle the file
4. Browser often chooses to **download** media files

⚠️ Browsers do **NOT auto-play videos on direct URL navigation**

---
## 🔑 Golden Rule (Very Important)

> **Videos play in the browser only when embedded inside HTML using the `<video>` tag.**

Opening a `.mp4` URL directly ≠ video player.

---
## ❌ Why `res.sendFile()` Causes Download

```js
res.sendFile("yash.mp4");
```

- Sends the file correctly
- But does NOT tell the browser *how to render it*
- Browser assumes: “User wants the file” → download

This is normal behavior.

---
## ✅ Correct Way to Play Video in Browser

### Step 1: Serve static files

```js
app.use(express.static("public"));
```

Put your video here:

```
public/yash.mp4
```

---
### Step 2: Serve an HTML page with `<video>` tag

```js

app.get("/watch", (req, res) => {
  res.send(`
    <html>
      <body>
        <h2>Video Player</h2>
        <video width="600" controls>
          <source src="/yash.mp4" type="video/mp4">\
          Your browser does not support video.
        </video>
      </body>
    </html>
  `);
});
```

Now open:

```
http://localhost:4000/watch
```

✅ Video plays  
✅ Controls work  
✅ Seeking works  

---
  
## 📦 Does `express.static()` Support Streaming?

Yes ✔️

`express.static()` automatically handles:

- Correct MIME types
- HTTP range requests
- Large media files
- Efficient streaming

But **only when used with `<video>` or `<audio>` tags**.

---
## ❌ Common Mistake

Opening:

```
http://localhost:4000/yash.mp4
```

and expecting:
- autoplay
- player UI
- seek support

❌ This is unreliable and browser-dependent.

---
## ✅ Best Practices (Production)

| Goal             | Recommended Approach       |
| ---------------- | -------------------------- |
| Serve files      | `express.static()`         |
| Play videos      | HTML `<video>` tag         |
| Send single file | `res.sendFile()`           |
| Media apps       | Static files + HTML player |

---
## 🎯 Interview-Ready Answer

> Videos download instead of playing because browsers do not auto-play media files on direct navigation. Videos play correctly only when embedded in HTML using the `<video>` tag. Express serves the file correctly.

---
## 🧠 Final Takeaway

- Express is **doing the right thing**
- Browser behavior decides download vs play
- Always embed videos using `<video>`
- Never rely on direct `.mp4` URLs

---
## ✅ One-Line Summary

**Direct video URLs download files; HTML `<video>` embeds play them.**


[[Sending JSON using Express]]
[[kj]]


[[Making File storage App Express]]