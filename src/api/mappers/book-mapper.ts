import { Book, BookModel } from '../../models/book-model';
import { BooksFilters } from '../books-api-client';

export function bookMapper(books = []): { [id: string]: Book } {
  return books.reduce(
    (obj, item) => ({
      ...obj,
      [item.id]: new BookModel(item),
    }),
    {}
  );
}

export function getFilters(filtersObj?: BooksFilters): string {
  const params = new URLSearchParams();
  filtersObj.filters.forEach(({ key, value }) => {
    params.append(key, value);
  });
  return params.toString();
}
