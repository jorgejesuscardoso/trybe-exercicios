import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export function Footer() {
  const { theme } = useContext(ThemeContext)

  return (
    <footer>Tema Atual: { theme }</footer>
  )
}