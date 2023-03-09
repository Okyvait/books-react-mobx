import { Input } from '../input/input';
import * as styles from './search.module.css';

export const Search = () => {
  return (
    <div className={styles.searchWrap}>
      <Input placeholder={'Search...'} disabled={true} title={'to be implemented...'} />
    </div>
  );
};
