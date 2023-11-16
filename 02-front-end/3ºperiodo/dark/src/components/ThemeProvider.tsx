import { useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../style.css';

type ThemeProviderProps = {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [pageTheme, setPageTheme] = useState<'dark' | 'light'>('dark')

  function toggleTheme() {
    setPageTheme(pageTheme === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeContext.Provider value={{ theme: pageTheme, toggleTheme }} >
      <div className={ `app ${pageTheme}` }>
        { children }
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
