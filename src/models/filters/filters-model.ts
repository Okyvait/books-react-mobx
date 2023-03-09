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

  apply({ key, value }: Filter): boolean {
    this.filters[key] = this.filters[key] || new Set();
    const alreadyHasVal = this.filters[key].has(value);
    this.filters[key].add(value);
    return !alreadyHasVal;
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
