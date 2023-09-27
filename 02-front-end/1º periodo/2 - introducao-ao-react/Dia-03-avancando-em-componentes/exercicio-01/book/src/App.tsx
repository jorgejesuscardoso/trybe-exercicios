
import Books from "./components/Books/Books";
import { Header } from "./components/Header/Header"
import { Title } from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import './App.css'
import booksLsit from "./data";
import { bestMovie } from "./data";
import interestellar  from "./assets/interestellar-src.jpg";

function App() {

  return (
     <div className='app'>
     <Header />
     <div className="container">
     <Title> <s>Livros emprestados</s>  Meus livros:</Title>
      <ul className="books-list">
        {booksLsit.map((s) => ( 
        <Books
        key={s.title}
         book={ s }
         />
         ))
        }
      </ul>
      <Title>{bestMovie}</Title>

        <div className="images-container">
        <img src={ interestellar } alt=""  />
        <img src="/interestelarPublic.webp" alt=""/>
        </div>




     </div>
      <Footer />
     </div>
  )
}

export default App
