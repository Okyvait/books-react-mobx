interface Route {
  path: string;
  getUrl: (id?: string) => string;
}

export const AppRoutes: Record<string, Route> = {
  main: {
    path: '/',
    getUrl: () => '/',
  },
  book: {
    path: '/book/:bookId',
    getUrl: (id) => `/book/${id}`,
  },
};
