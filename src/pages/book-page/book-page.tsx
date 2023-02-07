import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { BooksStoreContext } from '../../store/books-store';

export const BookPage = observer(() => {
    const booksStore = useContext(BooksStoreContext);
    const { bookId } = useParams();

    useEffect(() => {
        booksStore.loadBook(bookId);
    }, [bookId]);


    if (booksStore.loading) return <div>...loading</div>;

    const book = booksStore.books.data[bookId];
    return <div>
        <div>
            <div>
                pic
                <div>Add to list</div>
            </div>
            <div>
                <div>title: {book.title}</div>
                <div>rating: {book.rating}</div>
                <div>genres: {book.genres}</div>
            </div>
        </div>
        <div>
            description: {book.description}
        </div>
    </div>;
});
