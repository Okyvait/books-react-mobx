import * as classes from './book-list.module.css';
import { IBook } from '../../models/book-model';

interface IBookListItemProps {
    book: IBook;
    index: number;
}

export function BookListItem({ book, index }: IBookListItemProps) {
    const { rating, title, genres } = book;
    return <div className={classes.item}>
        <div className={classes.bookWrap}>#{index}</div>
        <div className={classes.bookWrap}>{rating}</div>
        <div className={classes.bookWrap}>{title}</div>
        <div className={classes.bookWrap}>{genres?.map((g, i) => <span key={g}>{g}{i === genres.length - 1 ? '' : ','} </span>)}</div>
    </div>;
}