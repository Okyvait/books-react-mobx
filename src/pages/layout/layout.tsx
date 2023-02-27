import { TopBar } from '../../components/topbar/topbar';
import { Outlet } from 'react-router-dom';
import * as styles from './layout.module.css';

export const Layout = () => {
    return <div id="layout" className={styles.layout}>
        <TopBar />
        <div id="content" className={styles.content}>
            <Outlet/>
        </div>
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div>This is some footer content</div>
                <div>
                    Some long footer link #1<br/>
                    Some long footer link #2<br/>
                    Some footer link #3<br/>
                    Some footer link #4
                </div>

                <div>
                    Some footer link #1<br/>
                    Some footer link #2<br/>
                    Some footer link #3
                </div>
            </div>
        </footer>
    </div>;
};