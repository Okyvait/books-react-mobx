import { useContext, useEffect } from 'react';
import { BookListItem } from './book-list-item';
import { observer } from 'mobx-react-lite';
import * as styles from './book-list.module.css';
import { booksStoreContext } from '../../init';
import { Button } from '../button/button';

export const BookList = observer(() => {
  const booksStore = useContext(booksStoreContext);

  useEffect(() => {
    const fetchBooks = () => booksStore.loadBooks();
    fetchBooks();
  }, []);

  return (
    <div>
      <div className={styles.list}>
        {booksStore.booksList.length
          ? booksStore.booksList.map((key) => <BookListItem key={key} book={booksStore.books[key]} />)
          : 'Nothing was found... :( '}
      </div>

      {/*todo: implement*/}
      <div className={styles.loadMoreContainer}>
        <Button onClick={() => {}}>Load more...</Button>
      </div>
    </div>
  );
});
