import { computed, makeAutoObservable } from 'mobx';
import { Book } from '../models/book-model';
import { booksApiClient } from '../init';

export interface Books {
    [id: string]: Book;
}

export class BooksStore {
    books: Books = {};
    loading = true;

    constructor() {
        makeAutoObservable(this, {
            booksList: computed,
        });
    }

    get booksList(): string[] {
        return Object.keys(this.books) || [];
    }

    loadBooks() {
        this.loading = true;
        booksApiClient.loadBooks().then(this.setBooks);
    }

    loadBook(id) {
        this.loading = true;
        return booksApiClient.loadBook(id).then(this.addBook);
    }

    private addBook = (info: Book) => {
        this.books[info.id] = info;
        this.loading = false;
    };

    private setBooks = (books: Books) => {
        this.books = books;
        this.loading = false;
    };
}
