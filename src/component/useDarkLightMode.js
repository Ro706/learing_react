import { useState } from 'react';

export function useDarkLightMode() {
    // Function implementation
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return { isDarkMode, toggleTheme };
}