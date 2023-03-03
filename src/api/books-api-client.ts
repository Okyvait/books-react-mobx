import { UrlsEnum } from './urls';
import { bookMapper, getFilters } from './mappers/book-mapper';
import { Books } from '../store/books-store';
import { Book, BookModel } from '../models/book-model';
import { fetchClient, booksUrls } from '../init';
import { Filter } from '../models/filters/shared';

export interface BooksFilters {
  filters: Filter[];
}

export class BooksApiClient {
  async loadBooks(filters?: BooksFilters): Promise<Books> {
    const filterQuery = getFilters(filters);
    const url = `${booksUrls.get(UrlsEnum.books)}?${filterQuery}`;
    const response = await fetchClient.get(url);
    return bookMapper(response?.books);
  }

  async loadBook(id: string): Promise<Book | undefined> {
    const book = await fetchClient.get(booksUrls.get(UrlsEnum.book, id));
    if (book) {
      return new BookModel(book);
    }
  }
}
