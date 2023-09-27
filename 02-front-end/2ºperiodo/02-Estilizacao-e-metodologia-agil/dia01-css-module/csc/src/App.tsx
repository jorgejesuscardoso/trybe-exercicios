import { Header, Container } from './components/style';
import { createGlobalStyle } from 'styled-components';
import './App.css'
import { ABC } from './components/abc';
import { Provid } from './components/provid';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #333;
    color: white;
  }

`;

function App() {
  return (
    <div>
      <GlobalStyle />
    <Header>
      <h1>Titúlo</h1>
    </Header>
    <Container>
      <p>Conteúdo</p>
    </Container>
    <ABC />
    <Provid />
    </div>
  )
}

export default App
