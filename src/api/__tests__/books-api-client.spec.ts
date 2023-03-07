import { booksApiClient, fetchClient } from '../../init';
import { GenresEnum } from '../../components/filters/filters-enum';
import clearAllMocks = jest.clearAllMocks;

describe('books api client', () => {
  const client = booksApiClient;
  const fetchGetSpy = jest.spyOn(fetchClient, 'get').mockImplementation(() => Promise.resolve());

  afterEach(() => clearAllMocks());

  it('should call api without filters', async () => {
    await client.loadBooks();
    expect(fetchGetSpy).toBeCalledWith('/books');
  });

  it('should create query params string and load results', async () => {
    await client.loadBooks({
      filters: [
        { key: 'genre', value: GenresEnum.horror },
        { key: 'genre', value: GenresEnum.action },
      ],
    });
    expect(fetchGetSpy).toBeCalledWith('/books?genre=horror&genre=action');
  });
});
