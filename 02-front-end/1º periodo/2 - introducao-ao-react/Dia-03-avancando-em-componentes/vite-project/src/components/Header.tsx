import Container from '../assets/Container';
import './Header.css';

type HeaderProps = {
  title: string;
  color?: string;
};

function Header({ title, color = 'red' }: HeaderProps) {
  return (
    <header>
      <Container>
        <h1 style={ { color } }>
          {title}
        </h1>
      </Container>
    </header>
  );
}

export default Header;
