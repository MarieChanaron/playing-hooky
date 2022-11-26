import { useState, useEffect } from 'react';

function useTheme() {

  const [theme, setTheme] = useState('light');

  useEffect( () => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const isDarkTheme = theme === 'dark' ? true : false;

  return { onToggleTheme, isDarkTheme };

}

export default useTheme;