import httpService from '../http/http-service';
import { urls, UrlsEnum } from '../http/urls';
import { action, makeObservable, observable } from 'mobx';

export interface Book {
    id: string;
    rating: number;
    title: string;
    genres: string[];
    description: string;
}

export class BookModel implements Book {
    id: string;
    rating: number;
    title: string;
    genres: string[];
    description = '';

    constructor(params: Book) {
        Object.assign(this, params);
        makeObservable(this, {
            description: observable,
            setAdditionalInfo: action
        });
    }

    loadAdditionalInfo() {
        if (!this.description) {
            httpService.get(urls.get(UrlsEnum.additionalInfo, this.id)).then(this.setAdditionalInfo);
        }
    }

    setAdditionalInfo(info: { description: string }) {
        this.description = info.description;
    }
    
}