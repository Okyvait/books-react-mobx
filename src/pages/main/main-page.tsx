import { BookList } from '../../components/book-list/book-list';
import * as styles from './main.module.css';
import { Img } from '../../components/img/img';
import { FiltersContainer } from '../../components/filters/filters-container';

export function MainPage() {
  return (
    <div className={styles.content}>
      <div className={styles.bannerContainer}>
        <h1 className={styles.bannerText}>This is a banner</h1>
        <Img classNames={styles.banner} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.booksContainer}>
          <FiltersContainer />
          <BookList />
        </div>
      </div>
    </div>
  );
}
