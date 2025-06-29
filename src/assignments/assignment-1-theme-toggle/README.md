# Assignment 1: Theme Toggle App

## 🎯 Objective

Create a theme toggle app with a reusable ThemedBox component that changes style based on the selected theme. Focus is on props, conditional rendering, and reusable design.

## ✅ Requirements Completed

### Core Requirements:

1. **ThemeApp Component** - ✅ Implemented with light and dark theme toggle using `useState`
2. **ThemedBox Component** - ✅ Reusable component that takes `theme` as prop and changes background/text colors accordingly
3. **Multiple Boxes** - ✅ Renders 2-3 boxes to show the theme effect

### Bonus Features:

4. **localStorage Persistence** - ✅ Store the theme in localStorage using `useEffect` to persist on reload

## 🔧 Technical Implementation

### Components:

- **`ThemeApp`**: Main component managing theme state
- **`ThemedBox`**: Reusable component that adapts to theme prop

### Key Features:

- **Theme State Management**: Uses `useState` to toggle between 'light' and 'dark' themes
- **Conditional Styling**: Components render different styles based on theme prop
- **Persistence**: Theme preference saved to localStorage and restored on page load
- **Smooth Transitions**: CSS transitions for better user experience
- **Responsive Design**: Works on all screen sizes

### React Hooks Used:

- `useState`: Managing theme state
- `useEffect`: Persisting theme to localStorage

## 🎨 Styling Approach

- Inline styles with conditional logic
- Light theme: Clean white backgrounds with dark text
- Dark theme: Dark backgrounds with light text
- Consistent spacing and modern design patterns

## 📱 User Experience

- Clear visual feedback showing current theme
- Smooth transitions between themes
- Persistent theme selection across browser sessions
- Hover effects for interactive elements
