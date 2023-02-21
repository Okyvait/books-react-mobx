import { RouterProvider } from 'react-router-dom';
import { Router } from './routing/router';
import './global-styles.module.css';

export function App() {
    return <RouterProvider router={Router} />;
}
