import { RouterProvider } from 'react-router-dom';
import { TopBar } from './components/topbar/topbar';
import './global-styles.module.css';
import { Router } from './routing/router';

export function App() {
    return <div>
        <TopBar/>
        <RouterProvider router={Router} />
    </div>;
}
