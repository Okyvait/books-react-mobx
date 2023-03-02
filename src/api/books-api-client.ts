import { UrlsEnum } from './urls';
import { bookMapper } from './mappers/book-mapper';
import { Books } from '../store/books-store';
import { Book, BookModel } from '../models/book-model';
import { fetchClient, booksUrls } from '../init';

export class BooksApiClient {
  async loadBooks(): Promise<Books> {
    const response = await fetchClient.get(booksUrls.get(UrlsEnum.books));
    return bookMapper(response?.books);
  }

  async loadBook(id: string): Promise<Book | undefined> {
    const book = await fetchClient.get(booksUrls.get(UrlsEnum.book, id));
    if (book) {
      return new BookModel(book);
    }
  }
}
