#terminial
An **alias** is like a shortcut or nickname for a command in Linux.  
Instead of typing a long command again and again, you can create a short name for it.

## 🔹 Syntax

```bash
alias name='command'
```

- `name` → the shortcut you want to use.
- `command` → the actual command you want to run.

## 🔹 Viewing Aliases

To see all currently defined aliases:
```bash
alias
```

## 🔹 Removing Alias

```bash
unalias name
```

## 🔹 Making Aliases Permanent

Aliases set like above will **disappear when you close the terminal**.  
To make them permanent, you need to add them into your shell configuration file (like `.bashrc` or `.bash_profile`):

1. Open `.bashrc` in your home directory:
```bash
nano ~/.bashrc
```

2. Add your aliases, e.g.:
```bash
alias ll='ls -la'
alias gs='git status'
alias update='sudo apt update && sudo apt upgrade -y'
```

3. Save and reload:
```bash
source ~/.bashrc
```
  

## 🔹 Useful Aliases Examples

```bash
alias ..='cd ..'
alias ...='cd ../..'
alias h='history'
alias c='clear'
alias please='sudo'
alias ports='netstat -tulanp'
```