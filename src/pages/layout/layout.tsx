import { TopBar } from '../../components/topbar/topbar';
import { Outlet } from 'react-router-dom';
import * as styles from './layout.module.css';

export const Layout = () => {
    return <div id="layout" className={styles.layout}>
        <TopBar />
        <div id="content" className={styles.content}>
            <Outlet/>
        </div>
        <footer className={styles.footer}></footer>
    </div>;
};