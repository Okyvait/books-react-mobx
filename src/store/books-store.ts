import { computed, makeAutoObservable } from 'mobx';
import { Book } from '../models/book-model';
import { booksApiClient } from '../init';
import { FiltersModel } from '../models/filters/filters-model';
import { Filter } from '../models/filters/shared';

export interface Books {
  [id: string]: Book;
}

export class BooksStore {
  books: Books = {};
  loading = true;
  filterModel: FiltersModel;

  constructor() {
    this.filterModel = new FiltersModel();
    makeAutoObservable(this, {
      booksList: computed,
    });
  }

  get booksList(): string[] {
    return Object.keys(this.books) || [];
  }

  loadBooks() {
    this.loading = true;
    const filters = { filters: this.filterModel.appliedFilters };
    return booksApiClient.loadBooks(filters).then(this.setBooks);
  }

  loadBook(id) {
    this.loading = true;
    return booksApiClient.loadBook(id).then(this.addBook);
  }

  applyFilter(filter: Filter) {
    if (this.filterModel.apply(filter)) {
      this.loadBooks();
    }
  }

  removeFilter(filter: Filter) {
    this.filterModel.remove(filter);
    this.loadBooks();
  }

  private addBook = (info: Book) => {
    this.loading = false;
    if (!info?.id) return;
    this.books[info.id] = info;
  };

  private setBooks = (books: Books) => {
    this.books = books;
    this.loading = false;
  };
}
