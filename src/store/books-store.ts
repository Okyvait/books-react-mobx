import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';
import { BookModel } from '../models/book-model';

class BooksStore {
    books: BookModel[] = [];
    
    constructor() {
        makeAutoObservable(this);
        this.loadBooks();
    }
    
    loadBooks() {
        const books = [
            { id: '311', rating: 4.5, title: 'Title 1', genres: ['detective', 'mystery', 'action'] },
            { id: '312', rating: 4.1, title: 'Title 2', genres: ['detective', 'action'] },
            { id: '313', rating: 3.7, title: 'Title 3', genres: ['romance', 'mystery'] },
        ];
        
        this.books = books.map(b => new BookModel(b));
    }
}

export const BooksStoreContext = createContext(new BooksStore());