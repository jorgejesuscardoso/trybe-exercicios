
import Books from "./components/Books/Books";
import { Header } from "./components/Header/Header"
import { Title } from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import './App.css'
import { bestMovie } from "./data";
import interestellar  from "./assets/interestellar-src.jpg";
import { useState } from "react";
import { BookType } from "./components/Type";
import { Form } from "./components/Form/Form";

function App() {

const [ books, setBooks ] = useState<BookType[]>([])

function updateState (title: string, pages: number) {
    const newBook = {
      title: title,
      pages:pages,
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

        <Form 
        submitFunction={updateState}
        />
       
     </div>
      <Footer />
     </div>
  )
}

export default App
