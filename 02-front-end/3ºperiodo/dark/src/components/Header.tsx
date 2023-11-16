import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <header>
      <h1>Trybe</h1>
      <button onClick={ () => toggleTheme() }>
        {theme === 'dark' ? '☀️' : '🌒'}
      </button>
    </header>
  )
}