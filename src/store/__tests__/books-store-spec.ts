import clearAllMocks = jest.clearAllMocks;
import { fetchClient } from '../../init';
import { BooksStore } from '../books-store';
import { GenresEnum } from '../../components/filters/filters-enum';

describe('books store', () => {
  const fetchGetSpy = jest.spyOn(fetchClient, 'get');
  const store = new BooksStore();

  afterEach(() => {
    clearAllMocks();
  });

  it('should load and set books', async () => {
    expect(store.booksList.length).toBe(0);

    const id = '111';
    fetchGetSpy.mockImplementation(() =>
      Promise.resolve({
        books: [{ id, rating: 4.5, title: 'Title 1', genres: ['detective', 'action'] }],
      })
    );

    await store.loadBooks();

    expect(fetchGetSpy).toBeCalledTimes(1);
    expect(store.booksList).toEqual([id]);
    expect(store.books[id]).toBeDefined();
    expect(store.loading).toBeFalsy();
  });

  it('empty results', async () => {
    fetchGetSpy.mockImplementation(() => Promise.resolve());

    await store.loadBooks();

    expect(fetchGetSpy).toBeCalledTimes(1);
    expect(store.booksList.length).toBe(0);
  });

  it('should load book by id', async () => {
    const id = '155';
    const book = { id, rating: 4.5, title: 'Title 1', genres: ['detective', 'action'] };
    fetchGetSpy.mockImplementation(() => Promise.resolve(book));

    await store.loadBook(id);

    expect(fetchGetSpy).toBeCalledTimes(1);
    expect(fetchGetSpy).toBeCalledWith(expect.stringContaining(id));
    expect(store.books[id]).toBeDefined();
    expect(store.loading).toBeFalsy();
  });

  it('book was not found', async () => {
    const id = '188';
    fetchGetSpy.mockImplementation(() => Promise.resolve(undefined));

    await store.loadBook(id);

    expect(fetchGetSpy).toBeCalledTimes(1);
    expect(fetchGetSpy).toBeCalledWith(expect.stringContaining(id));
    expect(store.books[id]).toBeUndefined();
  });

  it('should apply and remove filters', async () => {
    await store.applyFilter({ key: 'genre', value: GenresEnum.detective });
    await store.applyFilter({ key: 'genre', value: GenresEnum.action });
    await store.applyFilter({ key: 'genre', value: GenresEnum.detective });
    await store.applyFilter({ key: 'genre', value: GenresEnum.horror });

    expect(store.filterModel.appliedFilters.length).toBe(3);
    expect(store.filterModel.appliedFilters).toEqual([
      { key: 'genre', value: GenresEnum.detective },
      { key: 'genre', value: GenresEnum.action },
      { key: 'genre', value: GenresEnum.horror },
    ]);
    expect(fetchGetSpy).toBeCalledTimes(4);

    store.removeFilter({ key: 'genre', value: GenresEnum.action });

    expect(store.filterModel.appliedFilters.length).toBe(2);
    expect(store.filterModel.appliedFilters).toEqual([
      { key: 'genre', value: GenresEnum.detective },
      { key: 'genre', value: GenresEnum.horror },
    ]);
    expect(fetchGetSpy).toBeCalledTimes(5);
  });
});
