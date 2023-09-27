
import Books from "./components/Books/Books";
import { Header } from "./components/Header/Header"
import { Title } from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import './App.css'
import { bestMovie } from "./data";
import interestellar  from "./assets/interestellar-src.jpg";
import { useState } from "react";
import { BookType } from "./components/Type";

function App() {
  const [ bookTitle, setBookTitle ] = useState('');
  const [ bookPages, setBookPages ] = useState(0);
  const [ books, setBooks ] = useState<BookType[]>([])

  function handleNameChange (event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
}
  function handlePagesChange (event: React.ChangeEvent<HTMLInputElement>) {
    setBookPages(event.target.valueAsNumber)
}
  function handleClick () {
    const newBook = {
      title: bookTitle,
      pages:bookPages,
      isRead: false,
      isFavorite: false,
    };
    setBooks( [...books, newBook] )
}
  

  return (
     <div className='app'>
     <Header />
     <div className="container">
     <Title> <s>Livros emprestados</s>  Meus livros:</Title>
      <ul className="books-list">
        {books.map((s) => ( 
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

        <div className='books-form'>
        <input
          type="text"
          placeholder="Titulo"
          value={bookTitle}
          onChange={ handleNameChange }
        />
        <input
          type="number"
          placeholder="Quantidade de páginas"
          value={bookPages}
          onChange={ handlePagesChange }
        />
        <button
           type='button'
           onClick={ handleClick }
        >
          Adicionar
        </button>
      </div>

     </div>
      <Footer />
     </div>
  )
}

export default App
