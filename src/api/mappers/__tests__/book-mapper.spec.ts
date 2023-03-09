import { bookMapper } from '../book-mapper';
import { Book, BookModel } from '../../../models/book-model';

describe('book mapper', () => {
  it('should return object key: id, value: object', () => {
    const book1 = { id: '1', title: 'title 1', description: 'descr 1' } as Book;
    const book2 = { id: '2', title: 'title 2', description: 'descr 2' } as Book;

    expect(bookMapper([book1, book2])).toEqual(
      new Map([
        [book1.id, new BookModel(book1)],
        [book2.id, new BookModel(book2)],
      ])
    );
  });

  it('should return an empty obj', () => {
    expect(bookMapper([])).toEqual(new Map());
  });
});
