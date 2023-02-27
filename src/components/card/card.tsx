import { Book } from '../../models/book-model';
import { Img } from '../img/img';
import { Genres } from '../genres/genres';
import { Button } from '../button/button';
import * as styles from './card.module.css';

interface CardProps {
    book: Book;
}

export const Card = ({ book }: CardProps) => {
    // todo:
    const addToList = () => {};

    return (
        <div className={styles.card}>
            <div className={styles.titleBlock}>
                <div>
                    <Img classNames={styles.img} />
                    <Button onClick={addToList} classNames={styles.btn}>
                        Add to the list
                    </Button>
                </div>
                <div>
                    <h1 className={styles.title}>{book.title}</h1>
                    <h4>Rating: {book.rating}</h4>
                    <div>
                        <b>Genres:</b> <Genres genres={book.genres} />
                    </div>
                </div>
            </div>
            <div className={styles.descriptionBlock}>
                <h2>Description</h2>
                <p className={styles.descriptionText}>{book.description}</p>
            </div>
        </div>
    );
};
