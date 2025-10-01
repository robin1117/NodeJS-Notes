
| Feature                          | CommonJS (CJS)                                                   | ES6 Modules (ESM)                                           |
| -------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------- |
| **File Loading**                 | Synchronous (blocks main thread)                                 | Asynchronous (non-blocking)                                 |
| **File Extension**               | Optional (.js or no extension)                                   | Mandatory (.js or .mjs)                                     |
| **Custom File Loading**          | Can load any file with full path                                 | Only supports valid extension `.js` and `.mjs`              |
| **File Extension Convention**    | `.cjs` when using both CJS and ESM in one project                | `.mjs` when using both CJS and ESM in one project           |
| **`package.json` Configuration** | `"type": "commonjs"` (optional; it's default)                    | `"type": "module"` (mandatory for ESM)                      |
| **`this` Keyword**               | Refers to an empty object `{}` (same as `module.exports`)        | Refers to `undefined`                                       |
| **Import/Export Hoisting**       | Not hoisted                                                      | Hoisted                                                     |
| **Top-level `await`**            | Not allowed                                                      | Allowed                                                     |
| **Export Capability**            | Only one value can be exported (via `module.exports`)            | Multiple values can be exported (named and default exports) |
| **Browser Compatibility**        | Not natively supported in browsers; needs bundler (like Webpack) | Natively supported in modern browsers                       |
| **Strict Mode**                  | Not enabled by default                                           | Enabled by default                                          |
#fundaMentalsNode