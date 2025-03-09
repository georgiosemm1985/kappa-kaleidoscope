
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  // Check if user has dark mode preference saved or use system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('kappa-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Update theme when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('kappa-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('kappa-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center h-10 w-10 rounded-full bg-kappa-lightblue text-kappa-blue hover:bg-kappa-blue hover:text-white transition-colors duration-300 dark:bg-kappa-dark-gray dark:text-white dark:hover:bg-kappa-accent"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
