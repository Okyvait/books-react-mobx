import * as styles from './select.module.css';
import { SyntheticEvent } from 'react';

export type Option = {
  value: string | number;
  name: string | JSX.Element;
};

interface SelectProps {
  value?: string | number;
  options: Option[];
  emptyOption?: boolean;
  onSelect(v: string | number, e?: SyntheticEvent);
  'data-testid'?: string;
}

export const Select = ({ options, emptyOption = true, onSelect, value, ...props }: SelectProps) => {
  const handleSelect = (e) => {
    onSelect(e.target.value, e);
  };

  return (
    <select className={styles.select} onChange={handleSelect} value={value} data-testid={props['data-testid']}>
      {emptyOption && <option />}
      {options?.length ? (
        options.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))
      ) : (
        <span>No options</span>
      )}
    </select>
  );
};
