import { action, makeObservable, observable } from 'mobx';

const READING_LISTS = 'READING_LISTS';
const DEFAULT_LIST = 'default';

export class ReadingListsStore {
  lists: Record<string, Record<string, boolean>> = {};

  constructor() {
    makeObservable(this, {
      lists: observable,
      add: action,
      remove: action,
    });
  }

  private saveLists() {
    localStorage.setItem(READING_LISTS, JSON.stringify(this.lists));
  }

  loadLists() {
    const lists = localStorage.getItem(READING_LISTS);
    if (lists) {
      try {
        this.lists = JSON.parse(lists);
      } catch (e) {
        throw new Error("Couldn't load reading lists");
      }
    }
  }

  add(bookId: string, name = DEFAULT_LIST) {
    if (!this.lists[name]) this.lists[name] = {};
    this.lists[name][bookId] = true;
    this.saveLists();
  }

  remove(bookId: string, name = DEFAULT_LIST) {
    if (!this.lists[name]) return;
    delete this.lists[name][bookId];
    this.saveLists();
  }

  has(bookId: string, name = DEFAULT_LIST): boolean {
    return this.lists[name]?.[bookId];
  }
}
