import { FiltersRow } from './filters-row';
import { AppliedFilters } from './applied-filters';
import * as styles from './filters.module.css';
import { useContext, useEffect } from 'react';
import { useQueryParams } from '../../utils/query-params';
import { booksStoreContext } from '../../init';
import { Filter, FilterKey, Sorting, SortingKey } from '../../models/filters/shared';
import { allFiltersKeys } from './filters';
import { allSortingKeys } from './sorting';

export const FiltersContainer = () => {
  const [params] = useQueryParams();
  const booksStore = useContext(booksStoreContext);

  useEffect(() => {
    params.forEach((item: { key: string; value: string }) => {
      if (allFiltersKeys.includes(item.key as FilterKey)) {
        booksStore.applyFilter(item as Filter);
      }
      if (allSortingKeys.includes(item.key as SortingKey)) {
        booksStore.sortBooks(item as Sorting);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <FiltersRow />
      <AppliedFilters />
    </div>
  );
};
