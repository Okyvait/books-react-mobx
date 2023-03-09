import { Option } from '../select/select';
import { SortingKey } from '../../models/filters/shared';
import { SortingEnum } from './sorting-enum';

interface SortingItem {
  key: SortingKey;
  options: Option[];
  label: string;
}
export const sorting: SortingItem[] = [
  {
    key: 'sortRating',
    label: 'Sort by',
    options: [
      { value: SortingEnum.desc, name: '↓ rating' },
      { value: SortingEnum.asc, name: '↑ rating' },
    ],
  },
];
