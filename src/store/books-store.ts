import { computed, makeAutoObservable } from 'mobx';
import { createContext } from 'react';
import httpService from '../http/http-service';
import { urls, UrlsEnum } from '../http/urls';
import { bookMapper } from '../mappers/book-mapper';
import { Book } from '../models/book-model';

class BooksStore {
    books : {[id: string]: Book} = { };
    loading = true;

    constructor() {
        makeAutoObservable(this, {
            booksList: computed
        });
    }

    get booksList(): string[] {
        console.log('computing..');
        return Object.keys(this.books) || [];
    }

    loadBooks() {
        this.loading = true;
        httpService.get(urls.get(UrlsEnum.books)).then(this.setBooks);
    }

    loadBook(id) {
        this.loading = true;
        return httpService.get(urls.get(UrlsEnum.book, id)).then(this.addBook);
    }

    private addBook = (info) => {
        this.books[info.id] = info;
        this.loading = false;
    };

    private setBooks = ({ books }) => {
        this.books = bookMapper(books);
        this.loading = false;
    };
}

export const BooksStoreContext = createContext(new BooksStore());