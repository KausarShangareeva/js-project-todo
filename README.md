# ☕ Todo App

Welcome to **Todo App** — a simple and stylish task management application built with React and Zustand.
This project features **multiple themes**, **local storage persistence**, and a **clean, responsive design**.

---

## 🔗 Demo

Check out the project live: [Todo App on Netlify](https://todo-zustand.netlify.app/)

---

## 🚀 Features

- ✅ **Add, remove, and toggle tasks** — simple task management
- 🎨 **4 unique themes** — Coffee (light), Dark, Banana, Sky
- 💾 **Local storage** — your tasks persist after refresh
- ⏰ **Timestamps** — see when each task was created
- 🔍 **Filters** — view All, Active, or Completed tasks
- ✔️ **Complete All** — mark all tasks as done with one click
- 📱 **Responsive design** — works on desktop, tablet, and mobile

---

## 📦 Tech Stack

- **React 19** — UI library
- **Zustand** — state management
- **styled-components** — CSS-in-JS styling
- **date-fns** — date formatting
- **Vite** — build tool

---

## 📂 File Structure

```
📂 src/
  📂 components/
    AddTask.jsx       # Form to add new tasks
    Button.jsx        # Reusable button component
    DarkModeToggle.jsx # Theme switcher
    EmptyState.jsx    # Empty state with theme-specific content
    Filter.jsx        # All/Active/Completed filters
    Header.jsx        # Title, counter, Complete All button
    TaskItem.jsx      # Individual task card
    TaskList.jsx      # List of tasks
  📂 stores/
    useTaskStore.js   # Zustand store with persist
  App.jsx             # Main app component
  GlobalStyles.js     # Global styles and themes
  main.jsx            # Entry point
```

---

## 🎨 Themes

| Theme  | Icon | Description |
|--------|------|-------------|
| Coffee | ☕   | Warm, cozy light theme |
| Dark   | 🌙   | Easy on the eyes at night |
| Banana | 🍌   | Bright and cheerful yellow |
| Sky    | 🪐   | Dreamy sunset gradient |

---

## 🧠 How It Works

1. **Add tasks** using the input field
2. **Toggle completion** by clicking the checkbox
3. **Delete tasks** with the X button
4. **Filter tasks** by All, Active, or Completed
5. **Switch themes** by clicking the icon in the top right
6. **All data saved** automatically to local storage

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/KausarShangareeva/js-project-todo.git

# Navigate to project
cd js-project-todo

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📄 License

This project is free for educational use.
