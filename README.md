# 🚀 Vite + React Assignments

This project contains multiple React assignments showcasing different concepts and techniques. Each assignment is organized in its own folder with dedicated components and documentation.

## 📁 Project Structure

```
vite-assignments/
├── src/
│   ├── assignments/
│   │   ├── assignment-1-theme-toggle/
│   │   │   ├── ThemeApp.jsx      # Theme toggle component
│   │   │   └── README.md         # Assignment 1 documentation
│   │   ├── assignment-2-quote-generator/
│   │   │   ├── QuoteGenerator.jsx # Quote generator component
│   │   │   └── README.md         # Assignment 2 documentation
│   │   └── ...
│   ├── App.jsx                   # Main app with navigation
│   └── ...
├── package.json
└── README.md
```

## 🎯 Assignments Overview

### 🎨 Assignment 1: Theme Toggle App

**Status:** ✅ Complete

**Objective:** Create a theme toggle app with reusable components and conditional styling.

**Key Features:**

- Light/Dark theme switching using `useState`
- Reusable `ThemedBox` component with props
- localStorage persistence using `useEffect`
- Smooth transitions and responsive design

**Technologies:** React Hooks, localStorage, conditional rendering

---

### 💭 Assignment 2: Daily Quote Generator

**Status:** ✅ Complete

**Objective:** Build an auto-refreshing quote viewer with API integration.

**Key Features:**

- Fetches quotes from `https://api.quotable.io/random`
- Auto-refresh every 30 seconds using `useEffect` and `setInterval`
- Manual refresh button
- Loading animations and error handling
- Glassmorphism design with fade effects

**Technologies:** React Hooks, API integration, setInterval, CSS animations

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd vite-assignments

# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage

1. Open your browser and navigate to `http://localhost:5173`
2. You'll see the assignment showcase homepage
3. Click on any assignment card to view and interact with it
4. Use the navigation buttons to switch between assignments

## 🧭 Navigation

The app includes:

- **🏠 Home:** Welcome screen with assignment overview
- **🎨 Assignment 1:** Theme Toggle App
- **💭 Assignment 2:** Daily Quote Generator

## 🔧 Development

### Adding New Assignments

1. Create a new folder: `src/assignments/assignment-X-name/`
2. Add your component: `ComponentName.jsx`
3. Add documentation: `README.md`
4. Update `src/App.jsx` to include navigation
5. Import your component and add it to the navigation

### Project Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📝 Assignment Requirements

Each assignment folder contains:

- **Component file** (`.jsx`) - The main React component
- **README.md** - Detailed documentation with:
  - Objective and requirements
  - Technical implementation details
  - Features and technologies used
  - Requirements checklist

## 🎨 Design Principles

- **Modular Architecture:** Each assignment is self-contained
- **Reusable Components:** Focus on component reusability
- **Modern UI/UX:** Clean, responsive, and accessible design
- **Best Practices:** Following React and JavaScript best practices
- **Documentation:** Comprehensive documentation for each assignment

## 🔗 Technologies Used

- **React 19.1.0** - UI library
- **Vite 6.0.5** - Build tool and dev server
- **Modern CSS** - Styling with animations and effects
- **ES6+ JavaScript** - Modern JavaScript features
- **API Integration** - External API consumption
- **localStorage** - Client-side data persistence

## 🎯 Learning Objectives

Through these assignments, you'll learn:

- React Hooks (`useState`, `useEffect`)
- Component composition and props
- State management and persistence
- API integration and error handling
- CSS animations and modern design
- Project organization and documentation

---

**Happy Coding!** 🎉
