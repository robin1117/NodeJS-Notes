#Networking
# 🌐 TCP/IP Model (Transmission Control Protocol / Internet Protocol)

## 🔎 Definition

The TCP/IP Model is the practical model used in real-world internet communication. It simplifies OSI’s 7 layers into 4 efficient layers.

## 📶 Layers of the TCP/IP Model (Top → Bottom)

### 1️⃣ Application Layer

- Combines OSI’s Application + Presentation + Session layers.
- Closest to end users.
- Handles data generation and communication.
- **Protocols:** HTTP, HTTPS, FTP, SMTP, DNS.
- **Example:** Browser sending GET/POST request to a server.

### 2️⃣ Transport Layer

- Handles service-to-service communication.
- **TCP:** Reliable, uses acknowledgments and retransmission. (Segment)
- **UDP:** Fast, lightweight, best for streaming/gaming. (Datagram)
- Assigns port numbers.

```
Source Port: 54321 → Destination Port: 443
```

### 3️⃣ Internet Layer

- Equivalent to OSI Network Layer.
- Provides end-to-end delivery using IP addresses.
- **Unit:** Packet
- **Protocols:** IPv4, IPv6, ICMP, ARP

```
Source IP: 192.168.1.5 → Destination IP: 142.250.74.14
```


### 4️⃣ Network Access Layer (Link Layer)

- Combines OSI Data Link + Physical layers.
- Uses MAC addresses.
- Deals with frames, bits, and physical transmission (Ethernet, WiFi, Fiber).

```
Source MAC: 24-9A-43-2B → Dest MAC: 1A-42-F9-4B
```

## 🛰️ Journey of Data

1. **Application Layer:** Creates HTTP request  
2. **Transport Layer:** Adds TCP/UDP + port numbers  
3. **Internet Layer:** Adds IP addresses → Packet  
4. **Network Access Layer:** Adds MAC + physical signal → Frame  
5. **Switch:** Uses MAC  
6. **Router:** Uses IP  
7. **Firewall:** Allows/blocks  
8. **Server:** Decapsulation back to application

## 📌 Key Differences (OSI vs TCP/IP)

- OSI = 7 layers → Theoretical  
- TCP/IP = 4 layers → Practical  
- OSI’s Presentation & Session → TCP/IP Application  
- TCP/IP is the actual foundation of the internet.

## 🧠 Easy Mnemonic

```
TCP/IP = A T I N
Aaj Tera Internet Nikal gaya 😂
```


[[What is SSH]]