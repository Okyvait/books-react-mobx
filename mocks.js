module.exports = function () {
    const books = [
        { id: '311', rating: 4.5, title: 'Title 1', genres: ['detective', 'mystery', 'action'] },
        { id: '312', rating: 4.1, title: 'Title 2', genres: ['detective', 'action'] },
        { id: '313', rating: 3.7, title: 'Title 3', genres: ['romance', 'mystery'] },
    ];

    const additionalInfo = [
        { id: '311', description: 'This is an awesome book 1!' },
        { id: '312', description: 'This is an awesome book 2!' },
        { id: '313', description: 'This is an awesome book 3!' },
    ]

    const getAdditionalInfo = (id) => {
        const info = additionalInfo.find(b => b.id === id);
        if (info) {
            return { description: info.description };
        }
    }

    const getBook = (id) => {
        const book = books.find(b => b.id === id);
        if (book) {
            const info = getAdditionalInfo(id) || {};
            return { ...book, ...info }
        }
    }

    return {
        books,
        getBook,
        getAdditionalInfo: getAdditionalInfo
    };
};