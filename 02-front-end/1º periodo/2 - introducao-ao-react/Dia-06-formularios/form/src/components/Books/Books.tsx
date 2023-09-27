import { BookType } from '../Type';
import './books.css'

type BooksProps = {
   book: BookType 
}

function Books({ book }: BooksProps) {
    const favoriteClass = book.isFavorite ? 'favorite-book' : '';
    return (
      <li className={`book-item ${favoriteClass}`}>
        <span>{book.isRead ? '✅' : '⏳'}</span>{' '}
        <span>{`${book.title} (${book.pages} páginas)`}</span>{' '}
        {book.isFavorite && <span>🤩</span>}
      </li>
    );
  }
  
export default Books;
  