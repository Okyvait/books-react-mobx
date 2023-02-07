export const AppRoutes = {
    main: {
        path: '/',
        getUrl: () => '/'
    },
    book: {
        path: '/book/:bookId',
        getUrl: (id) => `/book/${id}`
    }
};