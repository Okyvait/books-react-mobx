import * as styles from '../../app.module.css';
import { BookList } from '../../components/book-list/book-list';

export function MainPage() {
    {/*filters*/}
    return <div className={styles.booksContainer}><BookList /></div>;
}