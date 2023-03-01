import { createContext } from 'react';
import { BooksStore } from './store/books-store';
import { Urls } from './api/urls';
import { FetchClient } from './api/fetch-client';
import { BooksApiClient } from './api/books-api-client';
import { ReadingListsStore } from './store/reading-lists-store';

const config = {
  baseUrl: process.env.BASE_URL,
};

export const booksStoreContext = createContext(new BooksStore());
export const readingListsContext = createContext(new ReadingListsStore());

export const booksUrls = new Urls(config);
export const fetchClient = new FetchClient();
export const booksApiClient = new BooksApiClient();
