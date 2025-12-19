#NetworkingCoreNodeJS
A method is idempotent if making the same request multiple times results in the same effect as making it once.

| **HTTP Method** | **Description**                                       | **Idempotent**  | **Safe**    |
| --------------- | ----------------------------------------------------- | --------------- | ----------- |
| **GET**         | Retrieves data from the server.                       | Yes             | Yes         |
| **POST**        | Sends data to the server to create a new resource.    | No              | No          |
| **PUT**         | Updates or creates a resource at a specific URL.      | Yes             | No          |
| **DELETE**      | Deletes the specified resource from the server.       | Yes             | No          |
| **HEAD**        | Same as GET, but only retrieves headers.              | Yes             | Yes         |
| **OPTIONS**     | Describes communication options for a resource.       | Yes             | Yes         |
| **PATCH**       | Partially updates a resource at a specific URL.       | No              | No          |

| **Status Code**         | **Reason Phrase**                     | **Description**                                                                 |
| ----------------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| **1xx: Informational**  |                                       |                                                                                 |
| 100                     | Continue                              | The server has received the request headers and is waiting for the body.        |
| 101                     | Switching Protocols                   | The server is switching protocols as requested by the client.                   |
| **2xx: Success**        |                                       |                                                                                 |
| 200                     | OK                                    | The request was successful.                                                     |
| 201                     | Created                               | The request was successful, and a resource was created.                         |
| 204                     | No Content                            | The server successfully processed the request, but no content is returned.      |
| **3xx: Redirection**    |                                       |                                                                                 |
| 301                     | Moved Permanently                     | The resource has been permanently moved to a new location.                      |
| 302                     | Found                                 | The resource is temporarily located at a different URL.                         |
| 304                     | Not Modified                          | The cached version of the requested resource is still valid.                    |
| **4xx: Client Error**   |                                       |                                                                                 |
| 400                     | Bad Request                           | The server could not understand the request due to invalid syntax.              |
| 401                     | Unauthorized                          | Authentication is required to access the resource.                              |
| 403                     | Forbidden                             | The client does not have permission to access the resource.                     |
| 404                     | Not Found                             | The requested resource could not be found.                                      |
| 405                     | Method Not Allowed                    | The HTTP method used is not allowed for the resource.                           |
| 429                     | Too Many Requests                     | The client has sent too many requests in a given time frame.                    |
| **5xx: Server Error**   |                                       |                                                                                 |
| 500                     | Internal Server Error                 | The server encountered an unexpected condition.                                 |
| 501                     | Not Implemented                       | The server does not recognize or cannot fulfill the request method.             |
| 502                     | Bad Gateway                           | The server received an invalid response from an upstream server.                |
| 503                     | Service Unavailable                   | The server is temporarily unable to handle the request.                         |
| 504                     | Gateway Timeout                       | The server did not receive a timely response from an upstream server.           |

```js
  

let server = http.createServer((request, response) => {

    request.on('data', (chk) => {
        console.log(chk.toString());
    })

    // console.log(request.method);
    // console.log(request.url);
    // console.log(request.headers);
    // response.setHeader('Content-Length', '9')
    // response.setHeader('Access-Control-Allow-Origin', '*')

    response.writeHead(200, 'Bhot sai', { 'Name': 'Robin singh' })
    // response.statusMessage= 'Ma chud gayi'
    // response.statusCode = 429
    response.write('Hello Yrr')
    response.end()
})


server.listen(4000, '0.0.0.0', () => {
     console.log('Server started at', server.address());
})
```

[[Node.js HTTP Server & Client Notes]]