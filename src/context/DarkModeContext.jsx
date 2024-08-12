/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState.js';
import { useContext } from 'react';
import { useEffect } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme:dark)').matches,
    'isDarkMode'
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.className = 'dark-mode';
      } else {
        document.documentElement.className = 'light-mode';
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode(isDark => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error('DarkModeContext was used outside of DarkModeProvider');

  return context;
}

export { DarkModeProvider, useDarkMode };
