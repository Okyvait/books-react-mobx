import { Book } from '../../models/book-model';
import { Img } from '../img/img';
import { Genres } from '../genres/genres';
import { Button } from '../button/button';
import * as styles from './card.module.css';
import { readingListsContext } from '../../init';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

interface CardProps {
  book: Book;
}

export const Card = observer(({ book }: CardProps) => {
  const readingListsStore = useContext(readingListsContext);
  const addOrRemove = () => {
    readingListsStore.has(book.id) ? readingListsStore.remove(book.id) : readingListsStore.add(book.id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.titleBlock}>
        <div>
          <Img classNames={styles.img} title={'book cover'} data-testid={'bookCover'} />
          <Button onClick={addOrRemove} classNames={styles.btn}>
            {readingListsStore.has(book.id) ? 'Remove from the list' : 'Add to the list'}
          </Button>
        </div>
        <div>
          <h1 data-testid={'bookTitle'} className={styles.title}>
            {book.title}
          </h1>
          <h4>Rating: {book.rating}</h4>
          <div>
            <b>Genres:</b> <Genres genres={book.genres} />
          </div>
        </div>
      </div>
      <div className={styles.descriptionBlock}>
        <h2>Description</h2>
        <p className={styles.descriptionText} data-testid={'description'}>
          {book.description}
        </p>
      </div>
    </div>
  );
});
