#Networking
## What is SSH Config File?

- The `~/.ssh/config` file stores predefined SSH connection settings.
- It allows creating shortcuts for multiple servers.
- Removes the need to type long SSH commands repeatedly.

## Basic Structure

```config
Host local-server
    HostName 192.168.0.104
    User anurag
    IdentityFile ~/.ssh/local-key

Host aws-server
    HostName 65.2.122.85
    User ubuntu
    IdentityFile ~/.ssh/aws-key
```

## Key Fields

- **Host**: Shortcut name for the connection.
- **HostName**: Server IP or domain.
- **User**: SSH login username.
- **IdentityFile**: Path to the private key used for authentication.

## Without Config File

```bash
ssh -i ~/.ssh/aws-key ubuntu@65.2.122.85
```
## With Config File

```
ssh aws-server
ssh local-server
```
## Benefits

- Faster connections.
- Easier management of multiple servers.
- No need to remember IPs or key paths


[[Networking Topics]]