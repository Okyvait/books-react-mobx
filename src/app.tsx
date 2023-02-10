import { RouterProvider } from 'react-router-dom';
import { TopBar } from './components/topbar/topbar';
import { Router } from './routing/router';
import './global-styles.module.css';

export function App() {
    return <div>
        <TopBar/>
        <RouterProvider router={Router} />
    </div>;
}
