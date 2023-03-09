import { Book, BookModel } from '../../models/book-model';

export function bookMapper(books = []): Map<string, Book> {
  const map = new Map();

  books.forEach((b) => {
    map.set(b.id, new BookModel(b));
  });

  return map;
}
