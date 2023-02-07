import { createBrowserRouter } from 'react-router-dom';
import { BookPage } from '../pages/book-page/book-page';
import { MainPage } from '../pages/main/main-page';
import { AppRoutes } from './routes';

export const Router = createBrowserRouter([
    {
        path: AppRoutes.main.path,
        element: <MainPage />,
    },
    {
        path: AppRoutes.book.path,
        element: <BookPage />
    }
]);