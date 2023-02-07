module.exports = function () {
    const books = [
        { id: '311', rating: 4.5, title: 'Title 1', genres: ['detective', 'mystery', 'action'] },
        { id: '312', rating: 4.1, title: 'Title 2', genres: ['detective', 'action'] },
        { id: '313', rating: 3.7, title: 'Title 3', genres: ['romance', 'mystery'] },
    ];

    const getBook = (id) => {
        const book = books.find(b => b.id === id);
        if (book) {
            return { ...book, description: 'This is an awesome book-page!' };
        }
    }

    return {
        books,
        getBook
    };
};