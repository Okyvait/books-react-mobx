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
  }
}
