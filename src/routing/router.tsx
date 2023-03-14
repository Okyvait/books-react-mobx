import { createBrowserRouter } from 'react-router-dom';
import { BookPage } from '../pages/book-page/book-page';
import { MainPage } from '../pages/main/main-page';
import { AppRoutes } from './routes';
import { Layout } from '../pages/layout/layout';

export const Router = createBrowserRouter([
  {
    path: AppRoutes.main.path,
    element: <Layout />,
    hasErrorBoundary: true,
    errorElement: (
      <div>
        <h1>Something went wrong</h1>
        <p>Please, try again later, or contact us</p>
      </div>
    ),
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: AppRoutes.book.path,
        element: <BookPage />,
      },
    ],
  },
]);
