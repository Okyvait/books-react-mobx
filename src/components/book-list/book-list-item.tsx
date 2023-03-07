import * as styles from './book-list.module.css';
import { Book } from '../../models/book-model';
import { AppRoutes } from '../../routing/routes';
import { Img } from '../img/img';
import { Genres } from '../genres/genres';
import { Link } from 'react-router-dom';

interface BookListItemProps {
  book: Book;
}

export const BookListItem = ({ book }: BookListItemProps) => {
  const { rating, title, genres, id } = book;

  return (
    <Link className={styles.item} to={AppRoutes.book.getUrl(id)}>
      <div className={styles.wrap}>
        <Img />
        <div>
          <h3 className={styles.title}>{title}</h3>
          <h6>Rating: {rating}</h6>
          <Genres genres={genres} />
        </div>
      </div>
    </Link>
  );
};
