import { ReadingListsStore } from '../reading-lists-store';
import clearAllMocks = jest.clearAllMocks;

describe('reading list store', () => {
  const store = new ReadingListsStore();
  const setItemSpy = jest.spyOn(localStorage, 'setItem');
  const getItemSpy = jest.spyOn(localStorage, 'getItem');
  const id = '123';
  afterEach(() => clearAllMocks());

  it('should do nothing if there is no saved lists in localstorage', () => {
    store.loadLists();
    expect(getItemSpy).toBeCalledTimes(1);
    expect(Object.keys(store.lists).length).toBe(0);
  });

  it('should throw err when parse did not work', () => {
    getItemSpy.mockImplementation(() => '{"default:{125":true}}');
    expect(() => store.loadLists()).toThrow("Couldn't load reading lists");
  });

  it('should load lists from the storage', () => {
    getItemSpy.mockImplementation(() => '{"default":{"125":true}}');
    store.loadLists();
    expect(getItemSpy).toBeCalledTimes(1);
    expect(store.has('125')).toBeTruthy();
  });

  it('should add an item to the default list', () => {
    getItemSpy.mockImplementation(() => '{}');
    store.loadLists();
    store.add(id);
    expect(store.has(id)).toBeTruthy();
    expect(setItemSpy).toBeCalledTimes(1);
  });

  it('should remove an item from the default list', () => {
    store.remove(id);
    expect(store.has(id)).toBeFalsy();
    expect(setItemSpy).toBeCalledTimes(1);
  });

  it("should return false if list doesn't exist", () => {
    expect(store.has(id, 'customList')).toBeFalsy();
  });

  it('should do nothing if list not found', () => {
    store.remove('newList', id);
    expect(setItemSpy).toBeCalledTimes(0);
  });
});
