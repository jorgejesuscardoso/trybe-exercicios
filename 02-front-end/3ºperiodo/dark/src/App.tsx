import { Header } from './components/Header';
import ThemeProvider from './components/ThemeProvider';
import { Footer } from './components/footer';
import { Image } from './components/imagem';

function App() {
  return (
    <ThemeProvider>
        <Header />
        <Image />
        <Footer />
    </ThemeProvider>
  );
}

export default App
