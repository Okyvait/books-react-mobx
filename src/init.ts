import { createContext } from 'react';
import { BooksStore } from './store/books-store';
import { Urls } from './api/urls';
import { FetchClient } from './api/fetch-client';
import { BooksApiClient } from './api/books-api-client';

const config = {
  baseUrl: process.env.BASE_URL,
};

export const BooksStoreContext = createContext(new BooksStore());

export const booksUrls = new Urls(config);
export const fetchClient = new FetchClient();
export const booksApiClient = new BooksApiClient();
