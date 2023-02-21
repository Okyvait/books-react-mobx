import * as styles from './topbar.module.css';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../routing/routes';

export function TopBar() {
    return <header className={styles.header}>
        <nav className={styles.nav}>
            <NavLink className={({ isActive }) => isActive ? styles.active : undefined}
                to={AppRoutes.main.path}>Home</NavLink>
            <a>Popular</a>
            <a>Random</a>
            <a>Collections</a>
        </nav>
    </header>;
}