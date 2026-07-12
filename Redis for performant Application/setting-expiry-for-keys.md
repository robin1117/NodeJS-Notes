#redis
# Redis Expiry Commands

Redis allows setting expiry (TTL – Time To Live) for keys of any type, including strings. These commands can be categorized based on **when** you apply the expiry:

---

## 🟢 While Setting the Key

These commands **set the key and expiry in one step**.

### 🔹 `SET key value EX seconds`

Sets a string value and sets the expiration in seconds.

```bash
SET myKey "data" EX 60
```

### 🔹 `SET key value PX milliseconds`

Sets a string value and sets the expiration in milliseconds. The `P` stands for "precise" or "point-in-time".

```bash
SET myKey "data" PX 1500
```

### 🔹 `SETEX key seconds value`

Legacy version of `SET ... EX`. Only works with strings.

```bash
SETEX myKey 60 "data"
```

### 🔹 `PSETEX key milliseconds value`

Legacy version of `SET ... PX`. Only works with strings.

```bash
PSETEX myKey 1500 "data"
```

---

## 🔵 After the Key is Already Set

These commands **add or modify the expiry** of an existing key (any data type).

### 🔹 `EXPIRE key seconds`

Sets expiry in seconds.

```bash
EXPIRE myKey 60
```

### 🔹 `PEXPIRE key milliseconds`

Sets expiry in milliseconds.

```bash
PEXPIRE myKey 1500
```

### 🔹 `EXPIREAT key timestamp`

Sets expiry using a Unix timestamp (in seconds).

```bash
EXPIREAT myKey 1716459200
```

### 🔹 `PEXPIREAT key milliseconds_timestamp`

Sets expiry using a Unix timestamp (in milliseconds).

```bash
PEXPIREAT myKey 1716459200000
```

### 🔹 `TTL key`

Checks the time-to-live of a key (in seconds).

```bash
TTL myKey
```

### 🔹 `PTTL key`

Checks the time-to-live of a key (in milliseconds).

```bash
PTTL myKey
```

### 🔹 `PERSIST key`

Removes the expiry from a key, making it persistent.

```bash
PERSIST myKey
```

---

These commands work for **strings, hashes, lists, sets, sorted sets**, and all Redis key types.

For more info, visit the [Redis Expiration Documentation](https://redis.io/docs/latest/commands/expire/).
