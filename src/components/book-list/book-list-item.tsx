import * as classes from './book-list.module.css';
import { Book } from '../../models/book-model';
import { AppRoutes } from '../../routing/routes';
import { Router } from '../../routing/router';

interface BookListItemProps {
    book: Book;
    index: number;
}

export function BookListItem({ book, index }: BookListItemProps) {
    const { rating, title, genres, id } = book;

    const goToDetails = () => {
        Router.navigate(AppRoutes.book.getUrl(id));
    };

    return <div className={classes.item} onClick={goToDetails}>
        <div className={classes.bookWrap}>#{index}</div>
        <div className={classes.bookWrap}>{rating}</div>
        <div className={classes.bookWrap}>{title}</div>
        <div className={classes.bookWrap}>{genres?.map((g, i) => <span key={g}>{g}{i === genres.length - 1 ? '' : ','} </span>)}</div>
    </div>;
}