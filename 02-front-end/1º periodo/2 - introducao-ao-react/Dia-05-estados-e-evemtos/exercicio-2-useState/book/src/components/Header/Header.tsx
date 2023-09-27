import User from "../User/User"
import './header.css'

export function Header() {
    return (
        <header className="header">
          <p className="header-user">
            Olá, <User />
          </p>
        </header>
      );
}
