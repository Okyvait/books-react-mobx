import { useContext, useEffect } from 'react';
import { BookListItem } from './book-list-item';
import { observer } from 'mobx-react-lite';
import { BooksStoreContext } from '../../store/books-store';
import * as styles from './book-list.module.css';

export const BookList = observer(() => {
    const booksStore = useContext(BooksStoreContext);

    useEffect(() => booksStore.loadBooks(), []);

    return <div className={styles.list}>
        {
            booksStore.books.entities.map((id, i) =>
            <BookListItem index={i + 1} key={id} book={booksStore.books.data[id]} />)
        }
    </div>;
});