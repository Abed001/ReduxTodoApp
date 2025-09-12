// Import React and necessary hooks
import React, { useState, useEffect } from 'react';

// Import your custom ThemeContext
import { ThemeContext } from './ThemeContext';

// Define the ThemeProvider component, which wraps your entire app
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Check if the user's system prefers dark mode (e.g. macOS dark theme)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Function to determine the initial theme
  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme'); // Try to get saved theme from localStorage

    if (saved === 'dark') return true; // If saved theme is 'dark', return true
    if (saved === 'light') return false; // If saved theme is 'light', return false

    return prefersDark; // If no saved theme, fallback to system preference
  };

  // State to track whether dark mode is active (true = dark, false = light)
  const [dark, setDark] = useState(getInitialTheme); // Initialize using saved or system theme

  // Function to toggle between dark and light mode
  const toggleDark = () => {
    const newTheme = !dark; // Flip the current theme
    setDark(newTheme); // Update state
    localStorage.setItem('theme', newTheme ? 'dark' : 'light'); // Save new theme to localStorage
  };

  // Side effect: whenever theme changes, update the <body> class
  useEffect(() => {
    document.body.classList.remove('light', 'dark'); // Remove any existing theme class
    document.body.classList.add(dark ? 'dark' : 'light'); // Add the current theme class
  }, [dark]); // Runs every time `dark` changes

  // Provide the theme state and toggle function to all children components
  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children} {/* Render all child components inside the provider */}
    </ThemeContext.Provider>
  );
};
