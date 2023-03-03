import { Option, Select } from '../select/select';
import { Label } from '../label/label';
import { FilterKey } from '../../models/filters/shared';

interface FilterItem {
  key: FilterKey;
  options: Option[];
  label: string;
  renderFn: (x: FilterItem, action: (v) => void) => JSX.Element;
}

export const filters: FilterItem[] = [
  {
    key: 'genre',
    label: 'Genre',
    options: [
      {
        value: 'action',
        name: 'action',
      },
      {
        value: 'detective',
        name: 'detective',
      },
      {
        value: 'horror',
        name: 'horror',
      },
      {
        value: 'mystery',
        name: 'mystery',
      },
      {
        value: 'romance',
        name: 'romance',
      },
    ],
    renderFn: (x, onSelect) => (
      <Label text={x.label}>
        <Select options={x.options} onSelect={onSelect} />
      </Label>
    ),
  },
];
