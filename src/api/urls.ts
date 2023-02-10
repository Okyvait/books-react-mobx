export enum UrlsEnum {
    books = '/books',
    book = '/books/',
}

export class Urls {
    baseUrl: string;

    constructor(config: { baseUrl: string }) {
        this.baseUrl = config.baseUrl;
    }

    get(url: UrlsEnum, params = '') {
        return `${this.baseUrl}${url}${params}`;
    }
}