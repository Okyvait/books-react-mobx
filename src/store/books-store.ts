import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';
import { BookModel } from '../models/book-model';
import httpService from '../http/http-service';
import { urls, UrlsEnum } from '../http/urls';

class BooksStore {
    books: BookModel[] = [];
    
    constructor() {
        makeAutoObservable(this);
    }

    loadBooks() {
        httpService.get(urls.get(UrlsEnum.books)).then(this.setBooks);
    }

    private setBooks = ({ books }) => {
        this.books = books.map(b => new BookModel(b));
    };
}

export const BooksStoreContext = createContext(new BooksStore());