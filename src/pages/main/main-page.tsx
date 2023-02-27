import { BookList } from '../../components/book-list/book-list';
import * as styles from './main.module.css';

export function MainPage() {
    return (
        <div className={styles.content}>
            <div className={styles.booksContainer}>
                <BookList />
            </div>
        </div>
    );
}
