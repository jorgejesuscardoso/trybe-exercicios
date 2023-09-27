import { NavLink } from 'react-router-dom';
import './nav-bar.css'

function NavBar() {
  return (
    <nav>
      <NavLink to="/" id='b'>Home</NavLink>
      <NavLink to="/coffees" id='a'>Cafés</NavLink>
    </nav>
  )
}

export default NavBar;
