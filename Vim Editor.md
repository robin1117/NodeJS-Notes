#terminial

let’s move one level up with **Vim** (a bit more advanced but very powerful). I’ll give you the most **important Vim commands** so you can edit without feeling lost.

---
### Vim Basics
#### <font color="#8064a2">There are three main modes in Vim </font>

- **Normal Mode:** <font color="#fbd5b5">This is Vim's default mode when you open the editor. In this mode, you cannot type text directly; instead, you use commands to navigate, delete, copy, cut, and paste text, or to save the file.</font>

- **Insert Mode:** <font color="#fac08f">In this mode, you can type and edit text, just like in any standard text editor.</font>

- **Visual Mode:** <font color="#e36c09">This mode is used to select blocks of text, similar to how you would with a mouse. Once the text is selected, you can then perform actions on it like copying, cutting, or deleting it.</font>

---
#### <font color="#8064a2">How to Switch Between Modes?</font>

- **From Normal Mode to Insert Mode:**
    - Press `i` to start typing at the current cursor position.
    - Press `a` to start typing after the current cursor position.
    - Press `I` to start <font color="#9bbb59">typing at the beginning of the current line.</font>
    - Press `A` to start <font color="#c0504d">typing at the end of the current line.</font>
    - Press `o` to create a new line below the current one and start typing.
    - Press `O` to create a new line above the current one and start typing.
- **From Insert Mode back to Normal Mode:**
    - Press the `Esc` key. This is the most common way.
- **From Normal Mode to Visual Mode:**
    - Press `v` for character-by-character selection.
    - Press `V` for line-by-line selection.
- **From Visual Mode back to Normal Mode:**
    - Press the `Esc` key.

#### <font color="#8064a2">What commands can be used in Normal Mode?</font>

##### Cursor Movement

- `h`, `j`, `k`, `l`: To move the cursor left, down, up, and right, respectively.
- `w`: To move to the beginning of the next word.
- `b`: To move to the beginning of the previous word.
- `e`: To move to the end of the next word.
- `gg`: To go to the first line of the file.
- `G`: To go to the last line of the file.
- `0`: To go to the beginning of the current line.
- `$`: To go to the end of the current line.

##### Deleting and Changing Text

- `x`: To delete the character under the cursor.
- `dw`: To delete from the cursor to the end of the word.
- `dd`: To delete the entire line.
- `D`: To delete from the cursor to the end of the line.
- `r`: To replace the character under the cursor.
- `ce`: To delete from the cursor to the end of the word and enter Insert mode.
- `cc`: To delete the entire line and enter Insert mode.
- `c$`: To delete from the cursor to the end of the line and enter Insert mode.
##### Copy, Cut, and Paste

- `yy`: To copy the entire line.
- `yw`: To copy one word.
- `p`: To paste after the cursor.
- `P`: To paste before the cursor.

##### Save and Quit

- `:w`: To save the file.
- `:q`: To quit the file.
- `:wq`: To save and quit the file.
- `:q!`: To quit without saving.
- `:x`: To save and quit the file. This is similar to `:wq`, but it won't update the file's modification time if no changes were made.

---




















### 🤔 Operations Using `Vim` 

#### Starting and Exiting

| Command        | Action                   |
| -------------- | ------------------------ |
| `vim file.txt` | Open or create file      |
| `:q`           | Quit                     |
| `:q!`          | Quit without saving      |
| `:w`           | Save (write file)        |
| `:wq` or `:x`  | Save and quit            |
| `ZZ`           | Save and quit (shortcut) |

#### Inserting Text

|Command|Action|
|---|---|
|`i`|Insert before cursor|
|`a`|Append after cursor|
|`o`|Open new line below|
|`O`|Open new line above|
|`I`|Insert at beginning of line|
|`A`|Append at end of line|

#### Navigation

|Command|Action|
|---|---|
|`h`|Move left|
|`l`|Move right|
|`k`|Move up|
|`j`|Move down|
|`0`|Beginning of line|
|`$`|End of line|
|`w`|Next word|
|`b`|Previous word|
|`gg`|Start of file|
|`G`|End of file|
|`:n`|Go to line `n`|

---
#### Editing & Deleting

|Command|Action|
|---|---|
|`x`|Delete character|
|`dd`|Delete line|
|`D`|Delete to end of line|
|`yy`|Yank (copy) line|
|`p`|Paste after cursor|
|`P`|Paste before cursor|
|`u`|Undo|
|`CTRL + r`|Redo|

---
#### Searching & Replacing

|Command|Action|
|---|---|
|`/word`|Search forward for "word"|
|`?word`|Search backward|
|`n`|Next match|
|`N`|Previous match|
|`:%s/old/new/g`|Replace all in file|
|`:%s/old/new/gc`|Replace all with confirmation|

---
#### Visual Mode (selecting text)

|Command|Action|
|---|---|
|`v`|Start character selection|
|`V`|Start line selection|
|`CTRL + v`|Block selection|
|`y`|Yank (copy) selected|
|`d`|Delete selected|
|`>`|Indent selected|
|`<`|Un-indent selected|

---
#### Miscellaneous

|Command|Action|
|---|---|
|`:set number`|Show line numbers|
|`:set nonumber`|Hide line numbers|
|`:syntax on`|Enable syntax highlighting|
|`:noh`|Remove search highlight|

---

✅ With these, you can **open files, edit text, move around, search, and save/quit** — the essentials for Vim survival!