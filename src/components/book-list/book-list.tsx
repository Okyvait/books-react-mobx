import { useContext } from 'react';
import { BookListItem } from './book-list-item';
import { observer } from 'mobx-react-lite';
import { BooksStoreContext } from '../../store/books-store';
import * as styles from './book-list.module.css';

export const BookList = observer(() => {
    const booksStore = useContext(BooksStoreContext);

    return <div className={styles.list}>
        {booksStore.books.map((book, i) => <BookListItem index={i + 1} key={book.id} book={book}></BookListItem>)}
    </div>;
});