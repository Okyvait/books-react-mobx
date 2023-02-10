import { Book, BookModel } from '../models/book-model';

export interface BooksEntities {
    entities: string[];
    data: Record<string, BookModel>;
}

export function bookMapper(books): {[id: string]: Book} {
    return books.reduce((obj, item) => ({
        ...obj,
        [item.id]: new BookModel(item),
    }), {});
}