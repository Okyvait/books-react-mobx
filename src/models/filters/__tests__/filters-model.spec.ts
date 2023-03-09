import { FiltersModel } from '../filters-model';
import { GenresEnum } from '../../../components/filters/filters-enum';
import { Filter } from '../shared';
import { SortingEnum } from '../../../components/filters/sorting-enum';

describe('filter model', () => {
  const model = new FiltersModel();

  it('should apply filters', () => {
    model.apply({ key: 'genre', value: GenresEnum.detective });
    model.apply({ key: 'genre', value: GenresEnum.detective });

    expect(model.filters).toHaveProperty('genre');

    const filters = Array.from(model.filters.genre);

    expect(filters).toEqual([GenresEnum.detective]);
    expect(model.appliedFilters).toEqual([{ key: 'genre', value: GenresEnum.detective }]);
  });

  it('should remove filters', () => {
    const applied: Filter = { key: 'genre', value: GenresEnum.action };
    model.apply(applied);

    let filters = Array.from(model.filters.genre);

    expect(filters).toEqual(expect.arrayContaining([GenresEnum.action]));
    expect(model.appliedFilters).toEqual(expect.arrayContaining([applied]));

    model.remove(applied);

    filters = Array.from(model.filters.genre);
    expect(filters).toEqual(expect.not.arrayContaining([GenresEnum.action]));
    expect(model.appliedFilters).toEqual(expect.not.arrayContaining([applied]));
  });

  it('should apply and remove sorting', () => {
    model.sort({ key: 'sortRating', value: SortingEnum.asc });

    expect(model.sorting).toHaveProperty('sortRating');
    expect(model.sorting.sortRating).toEqual(SortingEnum.asc);
    expect(model.appliedSorting).toEqual([{ key: 'sortRating', value: SortingEnum.asc }]);

    model.sort({ key: 'sortRating', value: '' });

    expect(model.sorting).not.toHaveProperty('sortRating');
    expect(model.appliedSorting).toEqual([]);
  });
});
