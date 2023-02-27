import { Book, BookModel } from '../../models/book-model';

export function bookMapper(books): { [id: string]: Book } {
    return books.reduce(
        (obj, item) => ({
            ...obj,
            [item.id]: new BookModel(item),
        }),
        {}
    );
}
