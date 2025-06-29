import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Assignment 1: Toggle Theme with Props and Conditional Styling

// ThemedBox Component - Takes theme as prop and changes style accordingly
function ThemedBox({ theme, title, content }) {
  const lightTheme = {
    backgroundColor: "#ffffff",
    color: "#333333",
    border: "2px solid #e0e0e0",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const darkTheme = {
    backgroundColor: "#2d3748",
    color: "#e2e8f0",
    border: "2px solid #4a5568",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
  };

  const boxStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <div style={boxStyle}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

// ThemeApp Component - Main component with theme toggle
function ThemeApp() {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // Bonus: Persist theme in localStorage using useEffect
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const appStyle = {
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#f7fafc" : "#1a202c",
    color: theme === "light" ? "#2d3748" : "#e2e8f0",
    transition: "all 0.3s ease",
    padding: "20px",
  };

  const buttonStyle = {
    backgroundColor: theme === "light" ? "#4299e1" : "#63b3ed",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "30px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <h1>🎨 Theme Toggle App</h1>
        <p>
          Current Theme:{" "}
          <strong>{theme === "light" ? "☀️ Light" : "🌙 Dark"}</strong>
        </p>

        <button
          style={buttonStyle}
          onClick={toggleTheme}
          onMouseOver={(e) => (e.target.style.opacity = "0.8")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ThemedBox
            theme={theme}
            title="📊 Dashboard"
            content="This is a dashboard component that adapts to the current theme. Notice how the colors change based on the selected theme!"
          />

          <ThemedBox
            theme={theme}
            title="📝 Content Card"
            content="This card shows how reusable components can receive theme props and render conditionally based on the theme state."
          />

          <ThemedBox
            theme={theme}
            title="⚙️ Settings Panel"
            content="The theme preference is automatically saved to localStorage and persists across browser sessions. Try refreshing the page!"
          />
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return <ThemeApp />;
}

export default App;
