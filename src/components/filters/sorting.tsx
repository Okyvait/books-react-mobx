import { Option } from '../select/select';
import { SortingKey } from '../../models/filters/shared';

interface SortingItem {
  key: SortingKey;
  options: Option[];
  label: string;
}
export const sorting: SortingItem[] = [
  {
    key: 'rating',
    label: 'Sort by',
    options: [
      { value: 'desc', name: '↓ rating' },
      { value: 'asc', name: '↑ rating' },
    ],
  },
];
