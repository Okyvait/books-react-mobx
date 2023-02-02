export interface Book {
    id: string;
    rating: number;
    title: string;
    genres: string[];
}

export class BookModel implements Book {
    id: string;
    rating: number;
    title: string;
    genres: string[];

    constructor(params: Book) {
        Object.assign(this, params);
    }
}