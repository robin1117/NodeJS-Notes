In this Section we were gone discuss about How do Permissions work in Windows and Linux - How we can manipulate These for Files and Folders, and what are the different types of permission we have .
### What are the Basics Permission we have for <font color="#ffc000">File</font> and <font color="#ffc000">Folders</font> 

**File Permissions**
File permissions determine the actions that can be performed on individual files:
- **Read (`r`):** Allows viewing the contents of the file.
- **Write (`w`):** Allows modifying the content of the file, including adding, changing, or deleting data.
- **Execute (`x`):** Allows running the file as a program or script.

**Folder (Directory) Permissions**
Directory permissions govern actions that can be performed within a directory:
- **Read (`r`):** Allows listing the contents of the directory (i.e., seeing what files and subdirectories are inside using commands like `ls`).
- **Write (`w`):** Allows creating new files or subdirectories within the directory, deleting existing files or subdirectories, and renaming items within the directory.
- **Execute (`x`):** Allows navigating into the directory (using `cd`) and accessing files and subdirectories within it, even if you can't list their names (without read permission).
### Types of <font color="#ffc000">Permissions</font>

#### ✅Standard Permissions

- **Read (`r`):** Permission value 4
- **Write (`w`):** Permission value 2
- **Execute (`x`):** Permission value 1
#### 🫢Special Permissions

Beyond the basic read, write, and execute, Linux offers special permissions:

- **Set User ID (SUID):**
    - When applied to an executable file, it allows the file to be executed with the permissions of the **file's owner**, not the user running it.
    - Useful for programs requiring elevated privileges (e.g., `passwd` command).
- **Set Group ID (SGID):**
    - For executable files: Runs the file with the permissions of the **file's group**.
    - For directories: New files created within that directory will inherit the group ownership of the directory, rather than the primary group of the user who created the file. Very useful for collaborative work.
- **Sticky Bit:**
    - Primarily used on directories.
    - Ensures that **only the owner of a file** (or the directory owner or root) can delete or rename files within that directory, even if other users have write permission to the directory.
    - The `/tmp` directory often has the sticky bit set.

#### ✅Permission Categories

Linux permissions are organized into three categories of users:

- **Owner (`u`):** The user who owns the file or directory.
- **Group (`g`):** A specific group of users. All members of this group have the permissions assigned to the "group" category.
- **Others (`o`):** All other users on the system who are not the owner and are not part of the file's owning group.
- **All (`a`):** Represents all categories combined (owner, group, and others).

### Let's Play with Permissions of <font color="#00b0f0">Windows</font>
Here, we’ll just take a basic overview of the permission system in Windows OS.  
However, when we deploy our applications, we often get access to a **Linux terminal** on the server.
This means we’ll be working extensively with permissions in Linux.
Therefore, it’s far more crucial to understand the **Linux permission system** than the Windows one.

Mainly we have study 3 types of permissions here too. These are -
- **Read (`r`):** Permission value 4
- **Write (`w`):** Permission value 2
- **Execute (`x`):** Permission value 1

<font color="#76923c">Windows Just club Read(r) and Write(x) Permission</font>
Apart from these there is bad thing with Permissions System in Windows, it considered **Read** and **Execute** as single permission, means windows does not allow us to set Read and Execute Permission separately, If a file have read permission then by default it have Execute permission too.

<font color="#76923c">Windows Permission System does not work properly with bash Terminal</font>
In Windows, file and folder permissions can usually be managed through the **GUI**, which is the most convenient way for most users.  
![[Pasted image 20250810211833.png]]
However, there’s also the option to modify permissions using the **terminal** — either **Bash** or **PowerShell**.

Using These Commands you can insert any text with in the file even it had not have file read permission 

```bash
$ echo -n 'This is Robin' >>abc
```


![[Pasted image 20250810220701.png]]

| Flag | Meaning                                                     | Example                                         |
| ---- | ----------------------------------------------------------- | ----------------------------------------------- |
| `-n` | Do **not** print the trailing newline at the end of output. | `echo -n "Hello"` → `Hello` (no new line after) |
| `-e` | Enable interpretation of **backslash escapes**.             | `echo -e "Hi\nRobin"` → `Hi`  <br>`Robin`       |
| `-E` | Disable interpretation of **backslash escapes** (default).  | `echo -E "Hi\nRobin"` → `Hi\nRobin`             |
<font color="#ffff00">Bash : </font>
When using Bash on Windows (such as in Git Bash or WSL), sometimes the results for permission commands may be incorrect or misleading. This happens because Bash is simulating a Linux environment, and the permission model in Linux doesn’t map perfectly to Windows. As a result, this method can be unreliable for managing native Windows file permissions.

<font color="#ffff00">PowerShell :</font>
When working directly on Windows, it’s better to use **PowerShell** (or Command Prompt) for permission management. PowerShell works with Windows’ native permission system and will give more accurate and stable results than Bash.

So this was all about basic overview windows Permission system Now we will discuss about the thing for what we are came her `Permission System in Linux`

---
### Let's Play with Permissions of <font color="#8064a2">Linux</font>

Before we gone deep dive into the Permission System of Linux but First we have to understand about How the <font color="#c0504d">User and Group</font> System works in Linux -
#### <font color="#e36c09">User and Group -</font>
In Linux, **users** and **groups** are part of the system’s **permission and ownership model**, which controls who can access files, directories, and resources.
##### <font color="#9bbb59">User (Account)</font> : A **user** is basically an account in the Linux system. we can have multiple user in our OS - every user have different level of Permission according to which it can access resources - `root` user have highest administrative level of permission it can do anything with system its god 

<font color="#9bbb59">Each user has :</font>
- **Username** (e.g., `robin`)
- **User ID (UID)** → A number that uniquely identifies the user in the system.
- **Home directory** (e.g., `/home/robin`)
- **Default shell** (e.g., `/bin/bash`)

<font color="#9bbb59">To get List of all the user with in your Environment : You can use these commands :</font>
- You need to look at the `/etc/passwd` file to find out all the user present in your system. It contains a list of all the user accounts on the system. It's the primary source of user information for various system processes.

```
cat /etc/passwd
cat /etc/passwd | cut -d: -f1
getent passwd 
```

<font color="#9bbb59">Types of Users :</font>
1. **Root user (superuser)** → UID 0
    - Has full control over the system.
    - Username: `root`
2. **Regular user** → UID 1000+ (by default)
    - Limited access, cannot make system-wide changes without `sudo`.
3. **System users** → UID 1–999
    - Used by services (e.g., `www-data`, `daemon`).


<font color="#9bbb59">Changing User in your System :</font>
- In Linux, you can **change the user** you’re operating as without logging out by using the `su` or `sudo` commands.

**Using `su` (Switch User)**
```bash
su alice       # Switch to user 'alice'
su             # Switch to root (needs root password)
```
- Prompts for that user's password.
- If no username is given, it switches to **root** by default.

**Using `su -` (Login Shell)**
```bash
su - robin
```
- Switches user **and** loads their environment (like you logged in fresh).
- Recommended when switching to root or another user fully.


**Using `sudo -u`**
```bash
sudo -u alice whoami
```
- If you have `sudo` rights, you can run commands as another user **without fully switching**:

<font color="#c0504d">Note:</font> Running `su root` usually does not work because, for security reasons, Linux systems often disable direct login to the root user. Instead, you can switch to root privileges using commands like `sudo -i` or by enabling the root account explicitly (not recommended unless necessary).

##### <font color="#ffff00">Group :</font> A **group** in Linux is a collection of users. We can create our own groups, add multiple users to them, and then assign these groups to specific files or folders. This way, all members of the group share the same access permissions for those resources.

<font color="#ffff00">Groups help assign permissions to multiple users at once.</font>
- Each group has :
    - **Group name** (e.g., `developers`)
    - **Group ID (GID)`**
    - **Members** (users in that group)


<font color="#ffff00">In Linux, every file/folder has :</font>
1. **Owner** → A user.
2. **Group** → A group of users.
3. **Permissions** → Set separately for:
    - **Owner**
    - **Group**
    - **Others** (everyone else)

```bash
$ ls -l 
-rw-r--r--  1 robin developers  1234 Aug 11  file.txt
```

- **robin** → owner (user)
- **developers** → group
- Permissions:
    - `rw-` → owner can read & write
    - `r--` → group can read
    - `r--` → others can read

<font color="#ffff00">To get list of all the groups in your System You can use these commands :</font>
- You need to look at the `/etc/group` file to find out all the groups present in your system. This file stores information about all the groups on your system, their ID (GID), and their members.

```bash
cat /etc/group
cut -d: -f1 /etc/group
```

##### <font color="#fac08f">Creating New User and Group :</font> 
In Linux, when we create a new user, two things happen behind the scenes:
- The user account is created.
- A group with the **same name as the user** is also created automatically.
This is called the **user private group** system, and it helps in managing permissions more easily.

```bash
sudo adduser alice
```

- User created: `alice`
- Group created: `alice`
- when we <font color="#c0504d">create any file</font> with Alice user then there :

```bash
Owner: alice
Group: alice
```

---
In Linux You can create your own custom group :
- To create group you can use `groupadd` command which is an Administrative command so we have to use `sudo` with it

```bash
sudo groupadd Teachers
```

- This command will create a fresh group `Teachers` in your Environment 
- If you want to check is your group is build successfully then you can check the file `/etc/group` using `cat` command

##### <font color="#92d050">Adding Removing User From Groups :</font>

###### <font color="#c0504d">Add a user to a group</font>

**a) `usermod` (recommended for permanent change)**

```bash
sudo usermod -aG <groupname> <username>
```

- `-a` → append (without removing from other groups)

- `-G` → specify group(s) to add  

**b) `gpasswd`**

```bash
`sudo gpasswd -a <username> <groupname>`
````

###### <font color="#c0504d">Remove a user from a group</font>

```bash
`sudo gpasswd -d <username> <groupname>`
```

```bash
sudo deluser <username> <groupname>
```

- Note
```mark
- Changes take effect **next login** or after re-login.
- You must have **root/sudo** privileges to modify group membership.
- `/etc/group` file stores all group memberships — you can check it manually.
```

###### <font color="#b7dde8">User Belonging to How any Groups :</font>

```bash
groups robin
```
###### <font color="#b7dde8">Group Belonging to How many Users :</font>

```bash
getent group sudo
```

#### <font color="#b7dde8">How Permissions Work in Linux :</font>
Each of the three categories (owner, group, others) can have a combination of read (`r`), write (`w`), and execute (`x`) permissions.
##### Permission Structure Representation

When you list files using `ls -l`, you'll see a permission string like `-rwxr-xr--`. Let's break this down:

```
-rwxrwxrwx
|||||||||
|||||||||__ Others execute
||||||||___ Others write
|||||||____ Others read
||||||_____ Group execute
|||||______ Group write
||||_______ Group read
|||________ User execute
||_________ User write
|__________ User read
```

The permission string consists of 10 characters:

1. **First character (File Type):** Indicates the type of file:
    - `-`: Regular file
    - `d`: Directory
    - `l`: Symbolic link
    - `b`: Block device
    - `c`: Character device
    - `p`: Named pipe
    - `s`: Socket
2. **Next nine characters (Permissions):** Divided into three sets of three:
    - **1st triplet (Owner):** Permissions for the file's owner (e.g., `rwx` for read, write, execute).
    - **2nd triplet (Group):** Permissions for the file's owning group (e.g., `r-x` for read and execute).
    - **3rd triplet (Others):** Permissions for all other users (e.g., `r--` for read only).

#### <font color="#f79646">Changing Permission in Linux :</font>

The primary command to change permissions is `chmod`. It supports two modes: symbolic and numeric (octal).
##### 1. Symbolic Method (`chmod`)

Uses letters (`u`, `g`, `o`, `a`) and symbols (`+`, `-`, `=`) to modify permissions.

- `u`: owner, `g`: group, `o`: others, `a`: all
- `+`: add permission
- `-`: remove permission
- `=`: set exact permissions (overwrites existing)

###### Examples:

```
# Add execute permission for the owner
chmod u+x script.sh

# Remove write permission for the group
chmod g-w file.txt

# Set read, write, and execute permissions for others (overwriting previous)
chmod o=rwx mydir

# Add read permission for everyone
chmod a+r file.txt

# Set owner to read/write, group and others to read
chmod u=rw,go=r myfile
```

##### 2. Numeric (Octal) Method (`chmod`)

Assigns numerical values to each permission, then sums them for each category.

- Read (`r`) = 4
- Write (`w`) = 2
- Execute (`x`) = 1
- No permission (`-`) = 0

You form a three-digit octal number by summing these values for owner, group, and others respectively.

###### Common Permission Combinations:

- `0 (000)` = `---` = No permissions
- `1 (001)` = `--x` = Execute only
- `2 (010)` = `-w-` = Write only
- `3 (011)` = `-wx` = Write and execute
- `4 (100)` = `r--` = Read only
- `5 (101)` = `r-x` = Read and execute
- `6 (110)` = `rw-` = Read and write
- `7 (111)` = `rwx` = Read, write, and execute

###### Examples:

```
# Owner rwx (7), Group r-x (5), Others r-x (5)
chmod 755 filename

# Owner rw- (6), Group r-- (4), Others r-- (4)
chmod 644 filename

# Owner rw- (6), Group --- (0), Others --- (0)
chmod 600 filename
```

##### Applying Special Permissions with Numeric Mode:

Special permissions add a fourth digit to the beginning of the octal number:

- SUID: Add `4` as the first digit (e.g., `chmod 4755`).
- SGID: Add `2` as the first digit (e.g., `chmod 2775`).
- Sticky Bit: Add `1` as the first digit (e.g., `chmod 1777`).

##### Changing Ownership (`chown` and `chgrp`)

- `chown <new_owner> file.txt`: Changes the owner of `file.txt`. (Requires `sudo`)
- `chown <new_owner>:<new_group> file.txt`: Changes both the owner and group. (Requires `sudo`)
- `chgrp <new_group> file.txt`: Changes only the group ownership.

##### Recursive Changes

To apply permissions or ownership to a directory and all its contents recursively, use the `-R` option:

```
chmod -R 755 mydirectory/
chown -R newuser:newgroup mydirectory/
chgrp -R newgroup mydirectory/
```


#### <font color="#92cddc">Checking Permission Statistics in Linux :</font>

The most common command to view permissions is `ls -l`. For more detailed statistics, use `stat`.

##### Basic Permission Checking (`ls -l`)

Example Output:

```
-rw-r--r-- 1 user group 1024 Jul 14 08:00 my_file.txt
drwxr-xr-x 2 user group 4096 Jul 14 08:05 my_directory/
```

###### Explaining the `ls -l` Output:

1. **`-rw-r--r--` (Permissions String):**
    - First character (`-` or `d`): File type.
    - Next nine characters (e.g., `rw-r--r--`):
        - `rw-`: Owner permissions (read, write).
        - `r--`: Group permissions (read only).
        - `r--`: Others permissions (read only).
2. **`1` or `2` (Number of Hard Links):**
    - For files: Number of hard links to the file.
    - For directories: Number of entries within the directory (including `.` and `..`).
3. **`user` (Owner's Username):** The user account that owns the file/directory.
4. **`group` (Owner's Group Name):** The primary group that owns the file/directory.
5. **`1024` or `4096` (Size):**
    - For files: Size in bytes.
    - For directories: Typical block size allocated (not sum of contents).
6. **`Jul 14 08:00` (Last Modification Date and Time).**
7. **`my_file.txt` or `my_directory/` (File/Directory Name).**

##### Detailed Permission Statistics (`stat`)

```
stat myfile.txt
```

###### Sample Output and Explanation:

```
  File: myfile.txt
  Size: 1024      	Blocks: 8          IO Block: 4096   regular file
Device: 801h/2049d	Inode: 123456      Links: 1
Access: (0644/-rw-r--r--)  Uid: (1000/username)   Gid: (1000/username)
Access: 2024-01-15 10:30:00.000000000 +0000
Modify: 2024-01-15 10:25:00.000000000 +0000
Change: 2024-01-15 10:25:00.000000000 +0000
```

- **File:** Filename.
- **Size:** File size in bytes.
- **Blocks:** Number of blocks allocated on disk.
- **IO Block:** Optimal block size for I/O.
- **Device:** Device ID.
- **Inode:** Unique inode number (identifier for the file system object).
- **Links:** Number of hard links.
- **Access: (0644/-rw-r--r--):** Displays permissions in both numeric (octal) and symbolic (text) formats.
- **Uid:** User ID and username of the owner.
- **Gid:** Group ID and group name of the owner.
- **Access time:** Last time the file was accessed (read).
- **Modify time:** Last time the file's content was modified.
- **Change time:** Last time the file's metadata (permissions, ownership, etc.) was changed.

##### Advanced Permission Checking with `umask` and ACLs

###### Using `umask`:

`umask` determines the default permissions for newly created files and directories. It's a "mask" that subtracts permissions from the default (666 for files, 777 for directories).

```
# Check current umask
umask

# Set umask (e.g., 022 for typical permissions)
umask 022
# This means:
# Files: 666 - 022 = 644 (-rw-r--r--)
# Directories: 777 - 022 = 755 (drwxr-xr-x)
```

###### Access Control Lists (ACLs):
If you want the file to be accessible by members of multiple groups, you have to:

**Use ACL (Access Control Lists) → lets you add multiple groups with different permissions:

```bash
setfacl -m g:designers:r file.txt 
setfacl -m g:developers:rw file.txt
```

Put users into the same group → so they all get the same group permissions.

ACLs provide a more granular way to manage permissions beyond the traditional owner/group/others model. They allow you to define permissions for specific users or groups, regardless of their primary group membership.

```
# Check if ACLs are supported and view them
getfacl filename

# Set an ACL: grant 'username' read, write, execute permissions
setfacl -m u:username:rwx filename

# Remove an ACL for a specific user
setfacl -x u:username filename
```

#### <font color="#953734">Does Git Tracks Permission of Files ?</font>
There Might be possibility you had used lot Git but Most people don`t` know the behaviour of Git Regarding to the Permissions of files, They think Git only Tracks changes related to the content but his is Half True -
Git tracks Permission too but how ?
While creating Git Repo, Git expect `rw` permissions from files by default, so that it tracks the content of it - So your files should have `read`, `write`  permissions -
Due to this sometimes you even don't know come to know, what the thing our Git is Tracking - For that you have a command to find changes -

```bash
git diff --summary
```

Git Tracks only These Types of File Permission : -
- 100644 : Normal file with non-executable permission
- 100755 : Normal file with executable Permission
- 120000 : Symbolic links
- 040000 : Directory 

Git, as a version control system, primarily tracks the **executable bit (`x` permission)** for files. It generally does not track the full range of Linux file permissions (read/write for owner, group, and others) in the same granular way the file system does. This is due to:

- **Cross-platform compatibility:** Permission models vary significantly across operating systems.
- **Focus on content:** Git's core purpose is tracking changes to file content, with the executable status being the most critical permission for version control purposes.



#Basic_OS