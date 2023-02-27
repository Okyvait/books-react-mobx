module.exports = function () {
    const books = [
        { id: '311', rating: 4.5, title: 'Title 1', genres: ['detective', 'mystery', 'action'] },
        { id: '312', rating: 4.1, title: 'Title 2', genres: ['detective', 'action'] },
        { id: '313', rating: 3.7, title: 'Title 3', genres: ['romance', 'mystery'] },
        { id: '314', rating: 5.0, title: 'Title 4', genres: ['action', 'mystery'] },
        { id: '315', rating: 3.5, title: 'Title 5', genres: ['romance', 'horror'] },
        { id: '316', rating: 4.7, title: 'Title 6', genres: ['romance', 'mystery'] },
        { id: '317', rating: 3.7, title: 'Title 7', genres: ['action', 'mystery'] },
        { id: '318', rating: 2.3, title: 'Title 8', genres: ['detective', 'mystery'] },
        { id: '319', rating: 3.7, title: 'Title 9', genres: ['romance', 'horror'] },
        { id: '320', rating: 2.7, title: 'Title 10', genres: ['romance', 'mystery'] },
        { id: '321', rating: 5.0, title: 'Title 11', genres: ['action', 'mystery'] },
        { id: '322', rating: 3.3, title: 'Title 12', genres: ['detective', 'horror', 'action'] },
        { id: '323', rating: 4.3, title: 'Title 13', genres: ['romance', 'mystery'] },
    ];

    const additionalInfo = [
        { id: '311', description: 'This is an awesome book!' },
        { id: '312', description: 'This is an awesome book!' },
        { id: '313', description: 'This is an awesome book!' },
    ]

    const getAdditionalInfo = (id) => {
        const info = additionalInfo.find(b => b.id === id);
        if (info) {
            return { description: info.description || 'This is an awesome book!' };
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