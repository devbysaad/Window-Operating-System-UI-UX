# 📂 Starter React Project Structure (Browser OS UI/UX)

- **public/**
  - `index.html` → main HTML entry  

- **src/**
  - **components/**
    - `Desktop.jsx` → show all icons (folders, recycle bin, This PC, etc.)  
    - `Taskbar.jsx` → bottom bar with start button, open apps, clock  
    - `StartMenu.jsx` → opens when Windows/start button is clicked  
    - `Window.jsx` → a draggable/resizable window for folders or apps  
    - `Icon.jsx` → one desktop icon (folder, file, etc.)  
    - `ContextMenu.jsx` → right-click menu for new folder, delete, etc.  

  - **redux/**
    - `store.js` → main Redux store setup  
    - `osSlice.js` → keeps all state (folders, files, windows, recycle bin)  

  - `App.jsx` → main app entry (renders Desktop + Taskbar)  
  - `index.js` → renders React app into `index.html`  
  - `styles.css` → global styles  

- **package.json** → dependencies (React, Redux Toolkit, etc.)  
- **README.md** → project guide  

---

⚡ **Redux Note:**  
Use **Redux Store with slices** (`createSlice`) for managing state (folders, files, windows). You don’t need separate actions/reducers manually. Redux Toolkit handles everything in one place.
