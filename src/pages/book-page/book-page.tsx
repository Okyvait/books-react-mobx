import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { BooksStoreContext } from '../../init';
import { Card } from '../../components/card/card';
import * as styles from './book-page.module.css';
import { Button } from '../../components/button/button';
import { Router } from '../../routing/router';

export const BookPage = observer(() => {
  const booksStore = useContext(BooksStoreContext);
  const { bookId } = useParams();

  useEffect(() => {
    booksStore.loadBook(bookId);
  }, [bookId]);

  const goBack = () => Router.navigate(-1);

  if (booksStore.loading) return <div>...loading</div>;

  const book = booksStore.books[bookId];
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.backBtnContainer}>
          <Button onClick={goBack}>
            <span className={styles.backTxt}>
              <span className={styles.backArrow}>←</span> <span>Back</span>
            </span>
          </Button>
        </div>
        <Card book={book} />
      </div>
    </div>
  );
});
