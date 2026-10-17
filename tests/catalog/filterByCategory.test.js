const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  const getIds = (items) => items.map((item) => item.id);

  describe('Все категории', () => {
    test('категория "all"', () => {
      expect(getIds(filterByCategory(products, 'all'))).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('категория undefined', () => {
      expect(getIds(filterByCategory(products, undefined))).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('пустая строка ""', () => {
      expect(getIds(filterByCategory(products, ''))).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('Существующая категория', () => {
    test('категория "electronics"', () => {
      expect(getIds(filterByCategory(products, 'electronics'))).toEqual([1, 2]);
    });

    test('категория "books"', () => {
      expect(getIds(filterByCategory(products, 'books'))).toEqual([3, 6]);
    });

    test('категория "home"', () => {
      expect(getIds(filterByCategory(products, 'home'))).toEqual([4, 5]);
    });
  });

  describe('Несуществующая категория', () => {
    test('категория "clothes"', () => {
      expect(getIds(filterByCategory(products, 'clothes'))).toEqual([]);
    });

    test('категория "toys"', () => {
      expect(getIds(filterByCategory(products, 'toys'))).toEqual([]);
    });

    test('категория "sports"', () => {
      expect(getIds(filterByCategory(products, 'sports'))).toEqual([]);
    });
  });
});