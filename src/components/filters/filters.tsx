import { Input } from '../input/input';
import * as styles from './filters.module.css';
import { Select } from '../select/select';
import { Label } from '../label/label';
import { ratingFilter } from '../../models/filters/rating-filter';

export const Filters = () => {
  return (
    <div className={styles.filtersContainer}>
      <b>Some filters:</b>
      <Label text={'Rating'}>
        <Select options={ratingFilter.options} />
      </Label>
      <Input /> <Input /> <Input />
    </div>
  );
};
