At the time of Deployment, We got Linus System where we can get Bash shell only, so it is good to Learn About Bash shell As Backend Developer. Investing time in learning Bash will greatly enhance your productivity and capability as a backend developer.
Basic Installation of Git Bash From Website- https://git-scm.com/downloads

Bash is a scripting language used in Unix-based systems, and it does indeed contain features like loops, conditionals, functions, and variables, similar to other programming languages. These features allow you to automate tasks, process text, manage files, and much more.

<font color="#c0504d">echo</font> : this command is used to print the variables or string
```bash
'test.sh'
num0=9
num1=9
echo $(num0+num1)
```

<font color="#c0504d">For loop</font> : this is the for loop 
```bash
'test.sh'
for i in {1..5}
do
	echo "Welcome $i times"
done
```

<font color="#c0504d">if-else</font> : this is for conditions
```bash
'test.sh'
read -p "Enter a number:" number
then
	echo "The number is greater than 10."
else
```

### These are some basics Commands that You can use with in bash Terminal : 

- **`pwd`**
    - Prints the **current working directory** (the folder you are in).
    - `pwd   # /home/robin/Documents`

- **`whoami`**    
    - Shows the **current logged-in username**.
    - `whoami   # robin`

- **`cd`**
    - Used to **change directory** (move to another folder).
    - `cd /home/robin/Desktop   # moves into Desktop folder 
    - `cd ..   # goes one step back`

- **`ls`**
    - Lists **files and folders** inside the current directory.
    - `ls       # shows names of files/folders 
    - `ls -l    # shows details (permissions, owner, size) ls -a    # shows hidden files also`

- **`touch`**
    - Creates an **empty file**.
    - Updates the timestamp of an existing file
    - `touch file.txt   # creates file.txt`

- **`mkdir`**
    - Creates a **new directory (folder)**.
    - `mkdir myfolder   # creates a directory named myfolder`

- **`cp`**
	- **Copies** files or directories.
	- `cp file.txt copy.txt     # copies file.txt to copy.txt
	- `cp -r dir1 dir2          # copies directory dir1 to dir2`

- **`mv`**
    - **Moves** or **renames** files/directories.
    - `mv file.txt newfile.txt  # renames file
    - `mv file.txt /home/user/  # moves file to another folder`

- **`rm`**
    - **Deletes (removes)** files or directories.
    - `rm file.txt       # deletes file.txt 
    - rm -r folder/     # deletes a folder and its contents`

- **`rmdir`**
    - **Removes empty directories only**.
    - `rmdir myfolder   # deletes myfolder if it is empty`


### What is `cat` in Bash?

- `cat` stands for **concatenate**.
- It’s a standard Unix/Linux command used to:
    - Read files
    - Display their contents
    - Combine (concatenate) multiple files
    - Redirect or create new files from text

<font color="#f79646">Basic Usage</font>
- `cat file.txt` : This will print the content of `file.txt` on your terminal.
- `cat file1.txt file2.txt` : It will show content of both files, one after another.

- `cat > newfile.txt` : Type your text → press CTRL + D to save. (⚠️ This overwrites if file already exists!)
- `cat >> existing.txt` : Type your text → press **CTRL + D** → content gets added at the end.

- `cat file1.txt file2.txt > combined.txt` : This merges `file1.txt` and `file2.txt` into a new file `combined.txt`.

<font color="#f79646">Useful Options</font>
- `cat -n file.txt` : Number lines
- `cat -s file.txt` : Remove extra blank lines
- `cat -E file.txt` : Show line endings ($)
- `cat -T file.txt` : Show tabs as ^I


<font color="#f79646">Possible Things You Can Do With</font> `cat`
- `cat part1.txt part2.txt > full.txt` : Merge multiple files into one
- `cat file.txt > copy.txt` : Make a copy of a file
- `cat log1.txt >> all-logs.txt` : Append one file into another
- `cat -n code.c` : View line numbers
- `cat -T -E myfile.txt` : Check for hidden characters (tabs, line breaks)

<font color="#f79646">Use as input for other commands (with pipes)</font>
```bash
cat file.txt | grep "hello"
cat file.txt | less
```

👉 Pro Tip: For just viewing long files, use `less` or `more` instead of `cat`, because `cat` will dump everything at once.



### [[Vim Editor]]

### [[nano Editor]]

### [[New Bash Commands]]

### [[What Is Prompt in Terminal]]

[[What is an Alias in Bash]]

#terminial 

