import * as classes from './book-list.module.css';

interface BookListItemProps {
    book
}

export function BookListItem({ book }: BookListItemProps) {
    return <div className={classes.item}>
        <div className={classes.bookWrap}>{book}</div>
        <div className={classes.bookWrap}></div>
        <div className={classes.bookWrap}></div>
        <div className={classes.bookWrap}></div>
    </div>
}