import './Header.css';

type HeaderProps = {
  title: string;
  color?: string;
};

function Header({ title, color = 'red' }: HeaderProps) {
  return (
    <header>
      <h1 style={ { color } }>
        {title}
      </h1>
    </header>
  );
}

export default Header;
