When you type a command into your terminal and press Enter, the shell (like Bash or Zsh) doesn't just immediately run a program. Instead, it goes through a lookup process to determine what you're asking it to do.
### Main Types of Commands

There are five primary types of commands the shell considers:

1. 💫 **Alias**: An alias is a shortcut or a custom name you define for a longer command or sequence of commands. They are primarily for convenience and to customize your shell environment. For example, you might alias `ll` to `ls -alF` for a more detailed listing. Aliases are expanded by the shell **before** any other command lookup.
2. ⚙️ **Function**: A shell function is a block of shell commands grouped together and given a name. Functions are more powerful than aliases because they can accept arguments, have local variables, and contain complex logic (like loops and conditionals). They are often used to encapsulate more complex operations that you frequently perform.
3. 🛠️ **Builtin**: Builtin commands are integral parts of the shell itself and are executed directly by the shell without invoking an external program. They are faster and more efficient as they don't require the shell to search for an executable file on the system's PATH. Examples include `cd`, `pwd`, `echo`, `export`, and `alias`.
4. ⚡️ **Hash**: The shell maintains a hash table of previously found executable commands. When you run an external executable for the first time, the shell searches your PATH (explained below) to find it. Once found, its location is stored in the hash table. Subsequent executions of the same command will first check this hash table, leading to faster execution as the shell doesn't need to rescan the PATH.
5. 🚀 **Executable**: These are external programs or scripts located in directories specified in your system's PATH environment variable. When none of the above types match, the shell searches through the directories listed in PATH for a file with the command's name that has executable permissions. Examples include `node`, `python`, `git`, or any other application installed on your system.

### How to Check Command Type

You can use the `type` command in your terminal to determine the type of a given command:

```bash
type cd
type ll
type my_custom_function
type node
```

- `type cd` will likely output `cd is a shell builtin`.
- `type ll` might output `ll is aliased to ls -alF` (if you have that alias defined).
- `type my_custom_function` will indicate it's a shell function.
- `type node` will show you the path to the `node` executable (e.g., `node is /usr/local/bin/node` or similar).

### Command Execution Priority

When you enter a command, the shell follows a strict order of precedence to determine which version of the command to execute:

1. **Aliases**: The shell first checks if the command is an alias. If it is, the alias is expanded, and the shell then processes the expanded command as if you had typed it directly.
2. **Functions**: If no alias matches, the shell then checks if a shell function with that name exists. If it does, the function is executed.
3. **Builtins**: Next, the shell checks for built-in commands. If the command is a builtin, it's executed directly by the shell.
4. **Hashed Commands**: The shell then consults its hash table to see if it has previously located an executable with that name. If found, it executes that specific executable.
5. **PATH Search (Executables)**: Finally, if none of the above match, the shell searches through each directory listed in the PATH environment variable from left to right. The first executable file it finds with the given name is then executed.

### Example: cd as a Function and Alias

Let's consider your example where `cd` is both a function and an alias. This is a bit of a trick scenario, as `cd` is almost always a builtin command for efficiency. However, if you _were_ to define an alias and a function for `cd` (which would be highly unusual and likely problematic), the alias would take precedence, followed by the function, and then the actual builtin. The shell always tries to resolve the command in this order. Since `cd` is a builtin, even if you define an alias `cd='builtin cd'`, the alias would be expanded to the builtin. If you define a function `cd() { echo "Hello from cd function"; }`, this function would override the builtin `cd` because functions take precedence over builtins in this lookup.

### node.exe Execution Example

Let's break down your `node.exe` scenario:

You have `node.exe` located inside your C drive (e.g., `C:\Program Files\nodejs\node.exe`). Your terminal's current directory is `F:\my_project`.

When you type `node.exe` in the terminal and press Enter, here's what happens:

1. **Alias Check**: The shell first checks if `node.exe` is an alias. (Unlikely in this case).
2. **Function Check**: Then, it checks if `node.exe` is a shell function. (Also unlikely).
3. **Builtin Check**: It checks if `node.exe` is a builtin. (It's not).
4. **Hash Check**: The shell checks its hash table for `node.exe`. If you've run `node.exe` before, its full path might be cached here.
5. **PATH Search**: This is the crucial step. The shell will iterate through each directory listed in your system's PATH environment variable. The PATH is a semicolon-separated list of directories on Windows (colon-separated on Linux/macOS) where the shell looks for executables.

For `node.exe` to run from anywhere, the directory containing `node.exe` (e.g., `C:\Program Files\nodejs\`) **must be included in your PATH environment variable**.

If `C:\Program Files\nodejs\` is in your PATH, the shell will eventually find `node.exe` there and execute it, regardless of your current working directory (`F:\my_project`). The `node` process will then start.

If the directory containing `node.exe` is not in your PATH, and you're not in that directory, the shell will report "command not found" or similar. To run it, you'd have to specify the full path: `C:\Program Files\nodejs\node.exe`.

In summary, the shell's intelligent lookup mechanism, combined with the PATH environment variable, allows you to execute commands efficiently and from any directory, abstracting away the exact location of the executable.


#Basic_OS