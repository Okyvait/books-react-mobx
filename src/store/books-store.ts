import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';
import httpService from '../http/http-service';
import { urls, UrlsEnum } from '../http/urls';
import { bookMapper, BooksEntities } from '../mappers/book-mapper';

class BooksStore {
    books: BooksEntities = { entities: [], data: {} };
    loading = true;

    constructor() {
        makeAutoObservable(this);
    }

    loadBooks() {
        this.loading = true;
        httpService.get(urls.get(UrlsEnum.books)).then(this.setBooks);
    }

    loadBook(id) {
        if (this.books.data[id]) {
            this.books.data[id].loadAdditionalInfo();
            return;
        }
        this.loading = true;
        return httpService.get(urls.get(UrlsEnum.book, id)).then(this.addBook);
    }

    private addBook = (info) => {
        this.books.entities.push(info.id);
        this.books.data[info.id] = info;
        this.loading = false;
    };

    private setBooks = ({ books }) => {
        this.books = bookMapper(books);
        this.loading = false;
    };
}

export const BooksStoreContext = createContext(new BooksStore());