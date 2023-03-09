import { useContext } from 'react';
import { booksStoreContext } from '../../init';
import { observer } from 'mobx-react-lite';
import { Button } from '../button/button';
import * as styles from './filters.module.css';
import { useQueryParams } from '../../utils/query-params';

export const AppliedFilters = observer(() => {
  const booksStore = useContext(booksStoreContext);
  const [, , removeQueryParams] = useQueryParams();

  const onRemoveFilter = (key, value) => {
    booksStore.removeFilter({ key, value });
    removeQueryParams(key, value);
  };

  return (
    <div className={styles.appliedWrap}>
      <div className={styles.applied}>
        {booksStore.filterModel.appliedFilters.map(({ key, value }) => (
          <Button key={value} onClick={() => onRemoveFilter(key, value)}>
            <>
              {value}
              <span className={styles.deleteText}>x</span>
            </>
          </Button>
        ))}
      </div>
    </div>
  );
});
