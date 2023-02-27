import * as styles from './topbar.module.css';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../routing/routes';
import { Search } from '../search/search';

export function TopBar() {
  return (
    <header className={styles.header}>
      <Search />
      <nav className={styles.nav}>
        <NavLink className={({ isActive }) => (isActive ? styles.active : undefined)} to={AppRoutes.main.path}>
          Home
        </NavLink>
        <a>Random</a>
        <a>Collections</a>
      </nav>
      <div className={styles.user}>User info</div>
    </header>
  );
}
