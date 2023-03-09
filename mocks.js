module.exports = function () {
  const books = [
    {
      id: '311',
      rating: 4.5,
      title: 'Title 1',
      genres: ['detective', 'mystery', 'action'],
    },
    {
      id: '312',
      rating: 4.1,
      title: 'Title 2',
      genres: ['detective', 'action'],
    },
    {
      id: '313',
      rating: 3.7,
      title: 'Title 3',
      genres: ['romance', 'mystery'],
    },
    { id: '314', rating: 5.0, title: 'Title 4', genres: ['action', 'mystery'] },
    { id: '315', rating: 3.5, title: 'Title 5', genres: ['romance', 'horror'] },
    { id: '317', rating: 3.7, title: 'Title 7', genres: ['action', 'mystery'] },
    {
      id: '318',
      rating: 2.3,
      title: 'Title 8',
      genres: ['detective', 'mystery'],
    },
    { id: '319', rating: 3.7, title: 'Title 9', genres: ['romance', 'horror'] },
    {
      id: '322',
      rating: 3.3,
      title: 'Title 10',
      genres: ['detective', 'horror', 'action'],
    },
    {
      id: '323',
      rating: 3.3,
      title: 'Title 11',
      genres: ['detective', 'action'],
    },
  ];

  const description = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras elementum. Vivamus porttitor turpis ac leo. Aenean placerat. Praesent dapibus. Vestibulum fermentum tortor id mi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Praesent dapibus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed convallis magna eu sem. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Cras elementum. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        Nullam eget nisl. Maecenas lorem. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Quisque tincidunt scelerisque libero. Sed ac dolor sit amet purus malesuada congue. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Integer pellentesque quam vel velit. Fusce suscipit libero eget elit. Nunc tincidunt ante vitae massa. Nulla pulvinar eleifend sem. Donec iaculis gravida nulla. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est.`;

  const getBook = (id) => {
    const book = books.find((b) => b.id === id);
    if (book) {
      return { ...book, description: description };
    }
  };

  const filterByGenre = (filters, book) => {
    if (typeof filters.genre === 'string') return book.genres.includes(filters.genre);
    return filters.genre?.every((f) => book.genres.includes(f));
  };

  const getBooks = (filters) => {
    if (!Object.keys(filters)?.length) {
      return books;
    }

    let filtered = books;

    if (filters.genre) {
      filtered = books.filter((book) => {
        return filterByGenre(filters, book);
      });
    }

    if (filters.sortRating) {
      const sign = filters.sortRating === 'asc' ? 1 : -1;
      return filtered.sort((a, b) => {
        if (a.rating > b.rating) return sign;
        else if (a.rating < b.rating) return -1 * sign;
        return 0;
      });
    }

    return filtered;
  };

  return {
    books,
    getBook,
    getBooks,
  };
};
