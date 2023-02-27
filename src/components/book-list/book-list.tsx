import { useContext, useEffect } from 'react';
import { BookListItem } from './book-list-item';
import { observer } from 'mobx-react-lite';
import * as styles from './book-list.module.css';
import { BooksStoreContext } from '../../init';

export const BookList = observer(() => {
    const booksStore = useContext(BooksStoreContext);

    useEffect(() => booksStore.loadBooks(), []);

    return <div className={styles.list}>
        {
           booksStore.booksList
               .map((key) => <BookListItem key={key} book={booksStore.books[key]} />)
        }
    </div>;
});