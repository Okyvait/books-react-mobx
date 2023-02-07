export enum UrlsEnum {
    books = '/books',
    book = '/books/',
    additionalInfo = '/books/additionalInfo/'
}

class Urls {
    baseUrl: string;

    // todo: config
    constructor(config?) {
        this.baseUrl = config?.baseUrl || 'http://localhost:3000/api';
    }

    get(url: UrlsEnum, params = '') {
        return `${this.baseUrl}${url}${params}`;
    }

}

export const urls = new Urls();