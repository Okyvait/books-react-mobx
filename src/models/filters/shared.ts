import { Books } from '../../store/books-store';

export interface Filter {
  key: string;
  apply(books: Books): Books;
}
