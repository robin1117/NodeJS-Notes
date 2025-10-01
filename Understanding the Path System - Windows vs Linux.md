In this section we are going to discuss about what are - <font color="#ffc000">Files</font>, <font color="#92d050">Folders</font> , <font color="#00b0f0">Symbolic-Links</font>
- <font color="#92d050">Folders</font> : Folder are nothing but the containers that can able to contains <font color="#ffc000">Files</font> and <font color="#92d050">Folders</font> -
- <font color="#ffc000">Files</font> : These are also containers too But can able to hold only <font color="#d83931">Data</font> - 

Files and folders are nothing much as complex, but apart from these there is a concept of <font color="#00b0f0">Symbolic-Links</font> which we have to discuss too -
### Symbolic-Links :
- These are the things that can not be visible as much easy in File Explorer directly, even its present in Directory -
- <font color="#ffc000">Then how we can view ?</font> Don`t` worries we can easily get a view of these in our terminal - 
- <font color="#ffc000">Now the Question What are these Links for ?</font> They’re not as complex as you might think. These links simply act like **pointers** — they point to other files or directories.

Let`s` see How we can view these with in the terminal - 

```Bash
ls -l
```

This Command Generate list of all <font color="#ffc000">Files</font>, <font color="#9bbb59">Folder</font>, <font color="#00b0f0">Symbolic-Links</font> present in Root Directory `~`

```bash
$ ls -l
total 22749
-rw-r--r-- 1 Devin 197121    11801 Apr  6 18:35  AMDRM_Install.log
drwxr-xr-x 1 Devin 197121        0 Dec  4  2024  AppData/
lrwxrwxrwx 1 Devin 197121       30 Dec  4  2024 'Application Data' -> /c/Users/Devin/AppData/Roaming/
drwxr-xr-x 1 Devin 197121        0 Dec  4  2024  Contacts/
lrwxrwxrwx 1 Devin 197121       58 Dec  4  2024  Cookies -> /c/Users/Devin/AppData/Local/Microsoft/Windows/INetCookies/
drwxr-xr-x 1 Devin 197121        0 Aug  5 21:02  Desktop/
drwxr-xr-x 1 Devin 197121        0 Oct  2  2024  Documents/
drwxr-xr-x 1 Devin 197121        0 Aug  5 08:02  Downloads/
drwxr-xr-x 1 Devin 197121        0 Dec  4  2024  Favorites/
drwxr-xr-x 1 Devin 197121        0 Dec  4  2024  Links/
lrwxrwxrwx 1 Devin 197121       28 Dec  4  2024 'Local Settings' -> /c/Users/Devin/AppData/Local/
drwxr-xr-x 1 Devin 197121        0 Dec  4  2024  Music/
lrwxrwxrwx 1 Devin 197121       24 Dec  4  2024 'My Documents' -> /c/Users/Devin/Documents/
-rw-r--r-- 1 Devin 197121 15466496 Aug  6 08:39  NTUSER.DAT
-rw-r--r-- 1 Devin 197121    65536 Dec  4  2024  NTUSER.DAT{2ad838bc-efea-11ee-a54d-000d3a94eaa1}.TM.blf
-rw-r--r-- 1 Devin 197121   524288 Dec  4  2024  NTUSER.DAT{2ad838bc-efea-11ee-a54d-000d3a94eaa1}.TMContainer00000000000000000001.regtrans-ms
-rw-r--r-- 1 Devin 197121   524288 Dec  4  2024  NTUSER.DAT{2ad838bc-efea-11ee-a54d-000d3a94eaa1}.TMContainer00000000000000000002.regtrans-ms
lrwxrwxrwx 1 Devin 197121       66 Dec  4  2024  NetHood -> '/c/Users/Devin/AppData/Roaming/Microsoft/Windows/Network Shortcuts'/
drwxr-xr-x 1 Devin 197121        0 Aug  6 13:33  OneDrive/
lrwxrwxrwx 1 Devin 197121       66 Dec  4  2024  PrintHood -> '/c/Users/Devin/AppData/Roaming/Microsoft/Windows/Printer Shortcuts'/
lrwxrwxrwx 1 Devin 197121       55 Dec  4  2024  Recent -> /c/Users/Devin/AppData/Roaming/Microsoft/Windows/Recent/
drwxr-xr-x 1 Devin 197121        0 Dec 27  2024 'RedGear COSMO7.1'/
drwxr-xr-x 1 Devin 197121        0 Dec  4  2024 'Saved Games'/
drwxr-xr-x 1 Devin 197121        0 Dec  4  2024  Searches/
lrwxrwxrwx 1 Devin 197121       55 Dec  4  2024  SendTo -> /c/Users/Devin/AppData/Roaming/Microsoft/Windows/SendTo/
lrwxrwxrwx 1 Devin 197121       59 Dec  4  2024 'Start Menu' -> '/c/Users/Devin/AppData/Roaming/Microsoft/Windows/Start Menu'/
lrwxrwxrwx 1 Devin 197121       58 Dec  4  2024  Templates -> /c/Users/Devin/AppData/Roaming/Microsoft/Windows/Templates/
drwxr-xr-x 1 Devin 197121        0 Jul 21 21:09  Videos/
drwxr-xr-x 1 Devin 197121        0 Oct  2  2024  ansel/
-rw-r--r-- 1 Devin 197121  4009984 Dec  4  2024  ntuser.dat.LOG1
-rw-r--r-- 1 Devin 197121  2555904 Dec  4  2024  ntuser.dat.LOG2
-rw-r--r-- 1 Devin 197121       20 Dec  4  2024  ntuser.ini

```

If you notice in the detailed list, the Bash terminal classifies each entry in a clever way — by prefixing some details. For example :
These prefixes help quickly identify the type of each entry in the terminal :
- `-rw-r--r--`  : `-` Represents that this is <font color="#ffc000">File</font>   
- `drwxr-xr-x`  : `d` Represents that this is <font color="#92d050">Folder</font> 
- `lrwxrwxrwx` : `l` Represents that this is <font color="#00b0f0">Symbolic-Link</font>

If you Notice Some of the <font color="#92d050">green colour symbolic links</font> in the list, you can see they are pointing somewhere right ? Where they are pointing that is exactly a path -

So this is all about how we can represent Files Folder and Symbolic-Links, Usually we haven`t` use Symbolic links But you have to know about it -
### Now we discuss about path System for what actually we are here -

We can Classify Paths is of two Categories -
- <font color="#f79646">Absolute Path </font>: **Absolute Path**: This is the full path to a file or folder starting from the root directory. It always begins with `/` in Linux or a drive letter like `C:\` in Windows.
- <font color="#fbd5b5">Relative Path </font>: **Relative Path**: This is the path to a file or folder **relative to the current working directory**. It does not start from the root, and instead depends on where you are in the system.

```example
Absolute : C:\Users\Devin\Desktop\ROUGH\Leet code\script3.js
Relative : script3.js
```

---
#### Windows
<font color="#fbd5b5">Windows uses the backslash</font> (`\`) to separate directories and files in a path. However, this can cause problems in many programming languages, because the backslash is also used as an **escape character** (for example, `\n` for a newline or `\t` for a tab).

This often leads to **ambiguity or errors** when writing file paths in code, especially when hardcoding strings. That’s why it's generally recommended to:

- Use **double backslashes** (`\\`) in Windows paths:  - 
Example: `"C:\\Users\\Robin\\Documents"`
- Or better, use **forward slashes** (`/`), which many programming languages (and Node.js) accept even on Windows:  
Example: `"C:/Users/Robin/Documents"`

---
#### Linux 
<font color="#fbd5b5">Linux Uses the Forward</font>(`/`)  to separate directories and files in a path. which is more Convenient as compared to backslash -

See this - Let`s` Take an example -

```bash
Devin@ThisisNancy MINGW64 ~/Desktop/ROUGH/Leet code
$ pwd
/c/Users/Devin/Desktop/ROUGH/Leet code
```

```bash
Devin@ThisisNancy MINGW64 ~/Desktop/ROUGH/Leet code
$ explorer "/c/Users/Devin/Desktop/ROUGH/Leet code"
```

- Here the `explorer` command should open explorer in the directory `Leet code` But does not work like as we  might - rather it takes us to the `Docment` directory 
- Because the path `"/c/Users/Devin/Desktop/ROUGH/Leet code"`  is seems not to be for windows rather its for Linux
- So in order to `explorer` work correctly, we have to provide path that is for Windows -

We can use a utility command `cygpath` to convert windows path to Linux and Vice Versa

**Paths Conversion :**
<font color="#92d050">Linux path to Windows</font>
```bash
Devin@ThisisNancy MINGW64 ~/Desktop/ROUGH/Leet code
$ cygpath -w "/c/Users/Devin/Desktop/ROUGH/Leet code"
C:\Users\Devin\Desktop\ROUGH\Leet code
```

<font color="#92d050">Windows path to Linux</font>
```bash
Devin@ThisisNancy MINGW64 ~/Desktop/ROUGH/Leet code
$ cygpath -u "C:\Users\Devin\Desktop\ROUGH\Leet code"
/c/Users/Devin/Desktop/ROUGH/Leet code
```

---

Understanding Differences Between Paths of Linux and Windows becomes crucial As Backend Developer Because when we are deploying ,over the server we get a Terminal of Linux which we have to use too -


### Some Special Commands -

- `realpath` : This returns the absolute path of provide Directory or file -
- `/` : This represents root directory
- `~` : This represents home directory 



#Basic_OS