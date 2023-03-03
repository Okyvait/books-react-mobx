import { Filter, FilterKey, SortingKey } from './shared';
import { computed, makeAutoObservable } from 'mobx';

export class FiltersModel {
  filters: Partial<Record<FilterKey, Set<string>>> = {};
  sorting: Partial<Record<SortingKey, Set<string>>> = {};

  constructor() {
    makeAutoObservable(this, {
      appliedFilters: computed,
    });
  }

  apply({ key, value }: Filter) {
    this.filters[key] = this.filters[key] || new Set();
    this.filters[key].add(value);
  }

  remove({ key, value }: Filter) {
    if (this.filters[key]) {
      this.filters[key].delete(value);
    }
  }

  get appliedFilters(): Filter[] {
    const applied = [];
    Object.entries(this.filters).forEach(([key, values]) => {
      values.forEach((value) => applied.push({ key, value }));
    });
    return applied;
  }
}
