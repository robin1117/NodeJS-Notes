#Networking
## 📘 Definition

The OSI Model is a conceptual framework that explains how data travels from one device to another through 7 structured layers.

## 🏛 OSI Model Layers (Top → Bottom)

### 7. Application Layer

- Closest to end user.
- Handles human-readable data.
- Examples: Browsers, APIs.
- Protocols: HTTP, HTTPS, FTP, SMTP, DNS.

### 6. Presentation Layer

- Transforms, encrypts, compresses data.
- Examples: HTTPS encryption, gzip, JSON serialization.

### 5. Session Layer

- Manages sessions between devices.
- Maintains, creates, and terminates connections.
- Examples: TCP sessions, remote login sessions.

### 4. Transport Layer

- Breaks data into segments.
- Adds port numbers.
- Ensures delivery using TCP or fast delivery using UDP.
- Example Segment:
  Source Port: 54321 → Destination Port: 4000

### 3. Network Layer

- Adds IP addresses.
- Forms packets.
- Handles routing.
- Example Packet:
  Source IP: 192.168.0.5 → Destination IP: 142.3.4.1

### 2. Data Link Layer

- Adds MAC addresses.
- Forms frames.
- Hop-to-hop delivery.
- Example Frame:
  Source MAC: 24-9A-43-2B  
  Dest MAC: 1A-42-F9-4B

### 1. Physical Layer

- Converts data into signals (electrical, optical, radio).
- Includes cables, Wi-Fi, fiber optics

---
## 📦 Encapsulation & Decapsulation

- **Encapsulation:** Data moves from Layer 7 → 1, each layer adds headers.
- **Decapsulation:** Reverse process at destination.

## 🔑 Delivery Types

- **Hop to Hop:** Layer 2  
- **End to End:** Layer 3  
- **Service to Service:** Layer 4  

## 📌 Important Notes

- Node.js apps operate at the Application Layer.
- OSI is theoretical; real-world uses TCP/IP (4 layers).
  
---
# [[Understanding TCP-IP Model]]