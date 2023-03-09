import { UrlsEnum } from './urls';
import { bookMapper } from './mappers/book-mapper';
import { Books } from '../store/books-store';
import { Book, BookModel } from '../models/book-model';
import { booksUrls, fetchClient } from '../init';
import { Filter, Sorting } from '../models/filters/shared';

export interface BooksFilters {
  filters?: Filter[];
  sorting?: Sorting[];
}

export class BooksApiClient {
  async loadBooks(filters?: BooksFilters): Promise<Books> {
    const filterQuery = this.getFiltersAndSorting(filters);
    const url = `${booksUrls.get(UrlsEnum.books)}${filterQuery ? '?' + filterQuery : ''}`;
    const response = await fetchClient.get(url);
    return bookMapper(response?.books);
  }

  async loadBook(id: string): Promise<Book | undefined> {
    const book = await fetchClient.get(booksUrls.get(UrlsEnum.book, id));
    if (book) {
      return new BookModel(book);
    }
  }

  private getFiltersAndSorting(filtersObj?: BooksFilters): string {
    const params = new URLSearchParams();

    function append<T extends { key: string; value: string }>(obj: T[]) {
      obj?.forEach(({ key, value }) => {
        params.append(key, value);
      });
    }
    append<Filter>(filtersObj?.filters);
    append<Sorting>(filtersObj?.sorting);
    return params.toString();
  }
}
