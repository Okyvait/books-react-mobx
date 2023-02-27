import { BookList } from '../../components/book-list/book-list';
import * as styles from './main.module.css';
import { Img } from '../../components/img/img';
import { Input } from '../../components/input/input';

export function MainPage() {
  return (
    <div className={styles.content}>
      <div className={styles.bannerContainer}>
        <h1 className={styles.bannerText}>This is a some banner</h1>
        <Img classNames={styles.banner} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.booksContainer}>
          {/*todo: add filters, move them to a new component*/}
          <div className={styles.filters}>
            <b>Some filters:</b> <Input /> <Input /> <Input /> <Input />
          </div>
          <BookList />
        </div>
      </div>
    </div>
  );
}
