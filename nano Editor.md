#terminial 
### 📝 What is `nano`?
- **`nano`** is a command-line text editor.
- It’s lightweight, easy to use, and available on almost all Linux systems.
- It’s used to create or edit files directly in the terminal.

🔹 Opening Files with `nano`
`nano filename.txt`
- If `filename.txt` exists → it will open the file for editing.
- If it doesn’t exist → `nano` creates a new file with that name.

🔹 Basic Commands in `nano`

⚠️ Important: In nano, the **`^` symbol means the `CTRL` key**.  
Example: `^X` = **CTRL + X**


📌 File Operations
- **Open/Create file**:
    `nano file.txt`
- **Save file**:  
    `CTRL + O` → press `Enter` to confirm.
- **Exit nano**:  
    `CTRL + X`  
    (If unsaved changes, nano will ask whether to save.)

📌 Editing
- **Cut a line**: `CTRL + K`
- **Paste line**: `CTRL + U`
- **Undo**: `ALT + U`
- **Redo**: `ALT + E`

 📌 Navigation
- **Move cursor**: Arrow keys
- **Go to beginning of line**: `CTRL + A`
- **Go to end of line**: `CTRL + E`
- **Go to specific line**: `CTRL + _` → then enter line number

📌 Searching
- **Search for text**: `CTRL + W` → type word → Enter
- **Find next occurrence**: `ALT + W`

📌 Other Handy Shortcuts
- **Show help menu**: `CTRL + G`
- **Mark text (for copy/cut)**: `CTRL + ^`
- **Justify text (align paragraphs)**: `CTRL + J`