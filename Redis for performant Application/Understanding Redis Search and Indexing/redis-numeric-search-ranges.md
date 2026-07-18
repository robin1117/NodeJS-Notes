#redis
# 🔍 Redis Search Numeric Range Examples (Exclusive & Inclusive)

This guide provides examples of how to use inclusive `[]` brackets and exclusive bounds using `()` within numeric ranges in Redis Search.

Redis Search supports inclusive bounds on both sides or exclusive bounds on either or both sides **within square brackets**.

---

## 🔢 Common Range Query Variations with `@age`

### 🔸 Exact Match (inclusive)

```bash
@age:[25 25]         # age == 25
```

### 🔸 Greater Than or Equal (inclusive)

```bash
@age:[25 +inf]       # age >= 25
```

### 🔸 Greater Than (exclusive)

```bash
@age:[(25 +inf]      # age > 25
```

### 🔸 Less Than or Equal (inclusive)

```bash
@age:[-inf 28]       # age <= 28
```

### 🔸 Less Than (exclusive)

```bash
@age:[-inf (28]      # age < 28
```

### 🔸 Between (inclusive on both ends)

```bash
@age:[25 30]         # 25 <= age <= 30
```

### 🔸 Between (inclusive lower, exclusive upper)

```bash
@age:[25 (30]        # 25 <= age < 30
```

### 🔸 Between (exclusive lower, inclusive upper)

```bash
@age:[(25 30]        # 25 < age <= 30
```

### 🔸 Between (exclusive on both ends)

```bash
@age:[(25 (30]       # 25 < age < 30
```

> ✅ Use square brackets `[]` to wrap the entire range.
> ✅ Use `(` on either side **inside** the square brackets to make a bound exclusive.
> ✅ Use `+inf` and `-inf` for unbounded ends.

---

## 🔍 Example Full Search Command

```bash
FT.SEARCH ageIdx "@age:[(25 (30]"
```

This returns users where age is strictly greater than 25 and strictly less than 30.

Let me know if you'd like to merge this into your main Redis Search documentation.
