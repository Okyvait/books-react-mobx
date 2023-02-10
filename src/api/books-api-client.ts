import { fetchClient } from './fetch-client';
import { urls, UrlsEnum } from './urls';
import { bookMapper } from './mappers/book-mapper';
import { Books } from '../store/books-store';
import { Book } from '../models/book-model';

export class BooksApiClient {
    async loadBooks(): Promise<Books> {
        const response = await fetchClient.get(urls.get(UrlsEnum.books));
        const mapped = bookMapper(response?.books);
        return mapped || {};
    }

    loadBook(id: string): Promise<Book> {
        return fetchClient.get(urls.get(UrlsEnum.book, id));
    }
}

export const booksApiClient = new BooksApiClient();