#NetworkingCoreNodeJS
```html
<!DOCTYPE html>
<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Home</title>
	</head>

	<style>
	    body{
	        background-color: black;
	        color: antiquewhite;
	    }
	</style>

	<body>
	    <h1>Your files are here</h1>
	    <ul>
	        ${dynamicString}
	    </ul>
	</body>

</html>
```


```js
import { createReadStream, } from 'fs';
import { readdir, stat, readFile } from 'fs/promises';
import http from 'http';
import mime from "mime-types";
import path from "path";

let server = http.createServer(async (req, res) => {
    // console.log(`http://${req.headers.host}${req.url}`);

    if (req.url == '/') {
        serverDirectory(req, res)
    }


    else {
        try {
            const fullUrl = new URL(req.url, `http://${req.headers.host}`);
            let encodedURL = decodeURIComponent(fullUrl.pathname)
            let actualurlPath = `./storage${encodedURL}`
            let fileNameWithExtension = path.basename(encodedURL)

            let status = await stat(actualurlPath)
            if (status.isDirectory()) {
                serverDirectory(req, res)
            }

            else {
                let action = fullUrl.searchParams.get('action')
                // let mimi_type = mime.lookup(`./storage${decodeURIComponent(fullUrl.pathname)}`)
                // console.log(mimi_type);

                if (!!action && action == 'preview') {
                    res.setHeader("Content-Disposition", "inline");
                    res.setHeader("Content-Type", mime.contentType(fileNameWithExtension));
                    res.setHeader("Content-Length", status.size);
                    // res.setHeader("Content-Type", `${mimi_type == 'text/plain' ? 'text/plain; charset=utf-8' : mimi_type}`);
                    let readStream = createReadStream(`./storage${decodeURIComponent(fullUrl.pathname)}`)
                    readStream.pipe(res)
                    return
                }

  
                if (!!action && action == 'download') {
                    res.setHeader("Content-Disposition", "attachment");
                    res.setHeader("Content-Type", mime.contentType(fileNameWithExtension));
                    res.setHeader("Content-Length", status.size);
                    // res.setHeader("Content-Type", mimi_type);
                    let readStream = createReadStream(`./storage${decodeURIComponent(fullUrl.pathname)}`)
                    console.log(`./storage${decodeURIComponent(fullUrl.pathname)}`);
                    readStream.pipe(res)
                    return
                }
            }

  
        } catch (error) {
            res.end(error.toString())
        }
    }

    // if (req.url == '/favicon.ico') {
    //     let readStream1 = createReadStream('./favicon.ico')
    //     readStream1.pipe(res)
    // }

})


async function serverDirectory(req, res) {
    try {
        let itemsLists = await readdir(`./storage${decodeURIComponent(req.url)}`)
        let dynamicString = ''
        itemsLists.forEach(async (filename) => {
            let status = await stat(`./storage/${decodeURIComponent(req.url)}/${filename}`)
            dynamicString += `<ul>
            ${status.isDirectory() ? `<a href="${req.url == '/' ? '' : req.url}/${filename}">${filename}</a>` : filename}
            ${!status.isDirectory() ? `<a href="${req.url == '/' ? '' : req.url}/${filename}?action=download">Dowanload</a>` : ""}
            ${!status.isDirectory() ? `<a href="${req.url == '/' ? '' : req.url}/${filename}?action=preview">Preview</a>` : ""}
            </ul>`
        });
        let boiler = await readFile('./boiler.html', 'utf-8')
        res.end(boiler.replace('${dynamicString}', `${dynamicString}`))
    } catch (error) {
        res.end(error.toString())
    }
}

server.listen({ port: 80, host: '0.0.0.0' }, () => {
    console.log('Server is listening at', server.address());
})
```

## Core Idea

Serve files and folders from `./storage` using an HTTP server.
- If the path is a **directory** → show directory listing (HTML links).
- If the path is a **file** → stream it to the browser.

---

## Important Modules

- `http` → create server.
- `fs/promises` → `open()`, `readdir()`, `stat()`.
- `fs` → `createReadStream()` for streaming files.
- `mime-types` → detect MIME type.

---

## Request Flow (Simple)

1. Decode URL → `decodeURIComponent(req.url)`.
2. Map URL to path → `./storage${url}`.
3. `open()` file/folder.
4. `stat()` to check:
    - **Directory** → use `readdir()`, build HTML.    
    - **File** → send using `createReadStream().pipe(res)`.    
5. Handle errors → send `Not Found`.

---

## Serving Directories (Short)

- `readdir()` returns files.
- Build HTML links:

```js
<a href="${url}/${file}">${file}</a>
```

- Set header: `text/html`.

---

## Serving Files (Short)

- Get MIME: `mime.lookup(file) || 'application/octet-stream'`.
- Stream:

```js
createReadStream(filePath).pipe(res);
```

- No memory issues (good for big files).

---

## Why Stream Instead of readFile?

- `readFile()` loads entire file → **bad for large files**.
- Stream sends chunks → **fast & memory‑efficient**.

---

## Errors & Cleanup

- Wrap operations in `try/catch`.
- Always close file handles if opened.
- Handle stream errors.

[[Difference Between CSR and SSR]]