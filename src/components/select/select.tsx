import * as styles from './select.module.css';
import { SyntheticEvent } from 'react';

export type Option = {
  value: string | number;
  name: string | JSX.Element;
};

interface SelectProps {
  options: Option[];
  emptyOption?: boolean;
  onSelect(v: string, e?: SyntheticEvent);
}

export const Select = ({ options, emptyOption = true, onSelect }: SelectProps) => {
  const handleSelect = (e) => {
    onSelect(e.target.value, e);
  };

  return (
    <select className={styles.select} onChange={handleSelect}>
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
