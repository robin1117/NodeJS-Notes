#AuthenticationVsAuthorization

Understanding the difference between **authentication** and **authorization** is crucial for designing secure systems. While they often go hand-in-hand, they serve **very different purposes**.

---
## ✅ Authentication
  
**Authentication** is the process of **verifying who a user is**.
  
> “Are you who you say you are?”

### 🔍 Example:

- Entering your **username and password** to log in.
- Logging in with **Google OAuth**.
- Using **biometrics** (like fingerprint or Face ID).

### 💡 Key Points:

- Happens **before** authorization.
- Establishes **identity**.
- Usually results in generating a **token** or session.

---
## 🔓 Authorization  

**Authorization** is the process of **verifying what a user can access or do**.

> “What are you allowed to do?”

### 🔍 Example:

- A logged-in user can **view their profile**, but not others'.
- An admin can **delete** users, a normal user cannot.
- A student can **view course content**, but cannot **edit** it.

### 💡 Key Points:

- Happens **after** authentication.
- Deals with **permissions and access control**.
- Often implemented using **roles**.

---

## 🧠 Quick Comparison Table

| Feature       | Authentication               | Authorization                |
| ------------- | ---------------------------- | ---------------------------- |
| Purpose       | Who you are                  | What you can do              |
| Happens when? | First                        | After authentication         |
| Determines    | Identity                     | Permissions                  |
| Based on      | Credentials (password, OTP)  | Roles, policies              |
| Result        | Session, token               | Access granted/denied        |
  

---

## 🔗 Real-World Analogy


- **Authentication**: Showing your **ID card** at the building entrance.
- **Authorization**: Being allowed to enter **specific rooms** based on your role.

---

## 🚀 Summary

- ✅ **Authentication** checks **identity**.
- 🔓 **Authorization** checks **permissions**.
- You **must authenticate before you can be authorized**.
- Both are essential for securing applications.

---

[[Stateful VS Stateless Auth]]