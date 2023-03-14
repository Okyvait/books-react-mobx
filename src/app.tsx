import { RouterProvider } from 'react-router-dom';
import { Router } from './routing/router';
import './global-styles.module.css';
import { readingListsContext } from './init';
import { useContext } from 'react';
import { ErrorBoundary } from './components/error-boundary/error-boundary';

export function App() {
  const readingListsStore = useContext(readingListsContext);
  readingListsStore.loadLists();

  return (
    <ErrorBoundary>
      <RouterProvider router={Router} />
    </ErrorBoundary>
  );
}
