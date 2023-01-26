import { BookListItem } from './book-list-item';
import * as styles from './book-list.module.css';

export function BookList() {
    const books = [1, 2, 3];
    return <div className={styles.list}>
        {books.map(b => <BookListItem key={b} book={b}></BookListItem>)}
    </div>
}