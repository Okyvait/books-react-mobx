import { BookModel } from '../models/book-model';

export interface BooksEntities {
    entities: string[];
    data: Record<string, BookModel>;
}

export function bookMapper(books): BooksEntities {
    return {
        data: books.reduce((obj, item) => ({
                ...obj,
                [item.id]: new BookModel(item),
            }), {}),
        entities: books.map(b => b.id)
    };
}