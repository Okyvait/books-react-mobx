import * as styles from './select.module.css';

export type Option = {
  value: string | number;
  name: string | JSX.Element;
};

interface SelectProps {
  options: Option[];
  emptyOption?: boolean;
  onSelect(v);
}

export const Select = ({ options, emptyOption = true, onSelect }: SelectProps) => {
  const handleSelect = (v) => onSelect(v.target.value);

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
