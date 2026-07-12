A grant type is a way for a client to request authorization and receive tokens. It determines how the client authenticates itself and/or the user.

## Common OAuth 2.0 Grant Types

OAuth 2.0 defines several grant types, each designed for specific use cases and client types. Here's a comparison table summarizing the most common ones.


| Grant Type                   | User Involved?  | Client Type          | Use Case                          | Security Level  | Notes                                                  |
| ---------------------------- | --------------- | -------------------- | --------------------------------- | --------------- | ------------------------------------------------------ |
| `authorization_code`         | ✅ Yes           | Confidential         | Web apps with backend             | 🔐🔐🔐          | Most secure; uses `client_secret`                      |
| `implicit` ⚠️ Deprecated     | ✅ Yes           | Public               | SPAs (legacy)                     | ❌               | Tokens in URL; now deprecated in OAuth 2.1             |
| `authorization_code` + PKCE  | ✅ Yes           | Public               | Mobile apps, SPAs                 | 🔐🔐🔐          | Secure alternative for apps without `client_secret`    |
| `client_credentials`         | ❌ No            | Confidential         | Server-to-server APIs             | 🔐🔐            | No user context; uses `client_secret`                  |
| `password` ⚠️ Deprecated     | ✅ Yes           | First-party apps     | Legacy apps with trusted UIs      | ❌               | User gives password directly; now discouraged          |
| `refresh_token`              | ⚠️ Partial      | Confidential/Public  | Renew expired access tokens       | 🔐🔐🔐          | Issued in `authorization_code` flows                   |
| `device_code`                | ✅ Yes           | Public               | TVs, consoles, CLI apps           | 🔐🔐            | User logs in on separate device                        |
| `jwt_bearer` (RFC 7523)      | ⚠️ Optional     | Confidential         | Auth using signed JWT assertions  | 🔐🔐🔐          | Often used in service accounts / backend integrations  |