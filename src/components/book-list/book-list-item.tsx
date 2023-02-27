import * as styles from './book-list.module.css';
import { Book } from '../../models/book-model';
import { AppRoutes } from '../../routing/routes';
import { Router } from '../../routing/router';
import { Img } from '../img/img';

interface BookListItemProps {
    book: Book;
}

export const BookListItem = ({ book }: BookListItemProps) => {
    const { rating, title, genres, id } = book;

    const goToDetails = () => {
        Router.navigate(AppRoutes.book.getUrl(id));
    };

    return <div className={styles.item} onClick={goToDetails}>
        <div className={styles.wrap}>
            <Img />
            <div>
                <h4 className={styles.title}>{title}</h4>
                <h6>Rating: {rating}</h6>
                <div>{genres?.map((g, i) => <span key={g}>{g}{i === genres.length - 1 ? '' : ','} </span>)}</div>
            </div>
        </div>
    </div>;
};