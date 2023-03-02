import { Filter } from './shared';
import { Books } from '../../store/books-store';
import { Option } from '../../components/select/select';

export class RatingFilter implements Filter {
  key = 'rating';

  options: Option[] = [
    { value: 'desc', name: 'descending' },
    { value: 'asc', name: 'ascending' },
  ];

  apply(books: Books): Books {
    return books;
  }
}

export const ratingFilter = new RatingFilter();
