#data_Representation
Just like we measure physical things (length in meters, weight in kilograms), digital data also has its own measurement units.

While we can't measure the smallest creation of nature (like a soul or consciousness), we can measure the smallest unit of data --- something created by humans.
## 🧮 Base Units

| Unit   | Value                          |
| ------ | ------------------------------ |
| 1 Bit  | Smallest unit of data (0 or 1) |
| 4 Bits | 1 Nibble (Half Byte)           |
| 8 Bits |  1 Byte                        |

## 🌐 Two Systems of Measurement

 SI (International System of Units)

- **Base: 10 → Powers of 10**
- Used by manufacturers, shows larger sizes (but technically less data than IEC).

| Unit | Meaning    | Bytes                                     |
| ---- | ---------- | ----------------------------------------- |
| 1 KB | 1 Kilobyte | 1,000 Bytes (10<sup>3</sup>)              |
| 1 MB | 1 Megabyte | 1,000,000 Bytes (10<sup>6</sup>)          |
| 1 GB | 1 Gigabyte | 1,000,000,000 Bytes (10<sup>9</sup>)      |
| 1 TB | 1 Terabyte | 1,000,000,000,000 Bytes (10<sup>12</sup>) |
 
 IEC (International Electrotechnical Commission)

- **Base: 2 → Powers of 2**
- Used by operating systems and programmers, actual usable data shown here.

| Unit  | Meaning    | Bytes                                    |
| ----- | ---------- | ---------------------------------------- |
| 1 KiB | 1 Kibibyte | 1,024 Bytes (2<sup>10</sup>)             |
| 1 MiB | 1 Mebibyte | 1,048,576 Bytes (2<sup>20</sup>)         |
| 1 GiB | 1 Gibibyte | 1,073,741,824 Bytes (2<sup>30</sup>)     |
| 1 TiB | 1 Tebibyte | 1,099,511,627,776 Bytes (2<sup>40</sup>) |

## ❗ Common Confusion

basic difference : 
- `1000 Bytes = 1 KB`  
- `1000 Bytes = 0.9765625 KiB`

| Term       | Often | Misunderstood       | Actual (IEC)                   |
| ---------- | ----- | ------------------- | ------------------------------ |
| 1 Kilobyte | KB    | 1,000 Bytes         | ❌ It's not 1,024               |
| 1 Kibibyte | (KiB) | 1,024 Bytes         | ✅ Correct binary form          |
| 1 Megabyte | (MB)  | 1,000,000 Bytes     | ❌ It's not 1,048,576 Bytes     |
| 1 Mebibyte | (MiB) | 1,048,576 Bytes     | ✅ Correct binary form          |
| 1 Gigabyte | (GB)  | 1,000,000,000 Bytes | ❌ It's not 1,073,741,824 Bytes |
| 1 Gibibyte | (GiB) | 1,073,741,824 Bytes | ✅ Correct binary form          |

## 🧾 Real-World Example

A **1TB hard drive** (manufacturer labeled in SI) appears as only ~931GB on your computer (which reads in IEC). The missing space? Just the difference between TB vs TiB.