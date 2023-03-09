import { Select } from '../select/select';
import { Label } from '../label/label';
import { filters } from './filters';
import { sorting } from './sorting';
import { useContext } from 'react';
import { booksStoreContext } from '../../init';
import * as styles from './filters.module.css';

export const FiltersRow = () => {
  const booksStore = useContext(booksStoreContext);

  const applyFilter = (item, value, event) => {
    if (!value) return;
    booksStore.applyFilter({ key: item.key, value });
    event.target.value = null;
  };

  return (
    <div className={styles.filterRow}>
      {sorting.map((x) => (
        <Label key={x.key} text={x.label}>
          <Select options={x.options} onSelect={() => {}} />
        </Label>
      ))}
      {filters.map((x) => (
        <span key={x.key}>{x.renderFn(x, (v, e) => applyFilter(x, v, e))}</span>
      ))}
    </div>
  );
};
