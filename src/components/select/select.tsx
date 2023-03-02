import * as styles from './select.module.css';

export type Option = {
  value: string | number;
  name: string | JSX.Element;
};

interface SelectProps {
  options: Option[];
  emptyOption?: boolean;
}

export const Select = ({ options, emptyOption = true }: SelectProps) => {
  return (
    <select className={styles.select}>
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
