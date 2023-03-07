import { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { booksStoreContext } from '../../init';
import { Card } from '../../components/card/card';
import * as styles from './book-page.module.css';
import { Button } from '../../components/button/button';
import { AppRoutes } from '../../routing/routes';

export const BookPage = observer(() => {
  const booksStore = useContext(booksStoreContext);
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    booksStore.loadBook(bookId);
  }, [bookId]);

  const goBack = () => {
    if (history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else navigate(AppRoutes.main.path);
  };

  if (booksStore.loading) return <div>...loading</div>;

  const book = booksStore.books[bookId];
  return (
    <div className={styles.cardContainer}>
      <div className={styles.backBtnContainer}>
        <Button onClick={goBack}>
          <span className={styles.backTxt}>← Back</span>
        </Button>
      </div>
      {book ? (
        <Card book={book} />
      ) : (
        <div className={styles.noResults}>
          Nothing was found, please try search or return to <Link to={AppRoutes.main.path}>the home page</Link>
        </div>
      )}
    </div>
  );
});
