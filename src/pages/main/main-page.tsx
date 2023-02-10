import { BookList } from '../../components/book-list/book-list';
import * as styles from './main.module.css';

export function MainPage() {
    {/*filters*/}
    return <div className={styles.booksContainer}><BookList /></div>;
}