import { Option, Select } from '../select/select';
import { Label } from '../label/label';
import { FilterKey } from '../../models/filters/shared';
import { GenresEnum } from './filters-enum';
import { SyntheticEvent } from 'react';

interface FilterItem {
  key: FilterKey;
  options: Option[];
  label: string;
  renderFn: (x: FilterItem, action: (v: string, e?: SyntheticEvent) => void) => JSX.Element;
}

export const filters: FilterItem[] = [
  {
    key: 'genre',
    label: 'Genre',
    options: [
      {
        value: GenresEnum.action,
        name: 'action',
      },
      {
        value: GenresEnum.detective,
        name: 'detective',
      },
      {
        value: GenresEnum.horror,
        name: 'horror',
      },
      {
        value: GenresEnum.mystery,
        name: 'mystery',
      },
      {
        value: GenresEnum.romance,
        name: 'romance',
      },
    ],
    renderFn: (x, onSelect) => (
      <Label text={x.label}>
        <Select options={x.options} onSelect={onSelect} data-testid={`${x.key}FilterSelect`} />
      </Label>
    ),
  },
];

export const allFiltersKeys = filters.map((f) => f.key);
