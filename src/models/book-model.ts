export interface IBook {
    id: string;
    rating: number;
    title: string;
    genres: string[];
}

export class BookModel implements IBook {
    id: string;
    rating: number;
    title: string;
    genres: string[];

    constructor(params: IBook) {
        Object.assign(this, params);
    }
}