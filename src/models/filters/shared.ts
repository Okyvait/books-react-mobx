export interface Filter {
  key: FilterKey;
  value: string;
}

export interface Sorting {
  key: SortingKey;
  value: string;
}

export type FilterKey = 'genre';
export type SortingKey = 'sortRating';
