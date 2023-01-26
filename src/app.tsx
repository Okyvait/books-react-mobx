import { BookList } from './components/book-list/book-list';
import { TopBar } from './components/topbar/topbar';
import * as styles from './app.module.css';
import './global-styles.module.css';

export function App() {
    return <div>
        <TopBar/>
        {/*filters*/}
        <div className={styles.booksContainer}><BookList /></div>
        {/*router*/}
    </div>;
}
