export enum UrlsEnum {
    books = '/books'
}

class Urls {
    baseUrl: string;

    // todo: config
    constructor(config?) {
        this.baseUrl = config?.baseUrl || 'http://localhost:3000/api';
    }

    get(url: UrlsEnum) {
        return this.baseUrl + url;
    }

}

export const urls = new Urls();