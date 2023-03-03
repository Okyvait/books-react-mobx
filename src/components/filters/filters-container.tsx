import { FiltersRow } from './filters-row';
import { AppliedFilters } from './applied-filters';
import * as styles from './filters.module.css';

export const FiltersContainer = () => {
  return (
    <div className={styles.container}>
      <FiltersRow />
      <AppliedFilters />
    </div>
  );
};
