const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  const getIds = (items) => items.map((item) => item.id);

  describe('По возрастанию', () => {
    test('все products, направление "asc"', () => {
      expect(getIds(sortProductsByPrice(products, 'asc'))).toEqual([3, 6, 5, 4, 2, 1]);
    });

    test('все products, направление не передано', () => {
      expect(getIds(sortProductsByPrice(products))).toEqual([3, 6, 5, 4, 2, 1]);
    });

    test('товары с ID [1, 3, 4], направление "asc"', () => {
      const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
      expect(getIds(sortProductsByPrice(subset, 'asc'))).toEqual([3, 4, 1]);
    });
  });

  describe('По убыванию', () => {
    test('все products, направление "desc"', () => {
      expect(getIds(sortProductsByPrice(products, 'desc'))).toEqual([1, 2, 4, 5, 6, 3]);
    });

    test('товары с ID [3, 1, 4], направление "desc"', () => {
      const subset = [
        products.find((p) => p.id === 3),
        products.find((p) => p.id === 1),
        products.find((p) => p.id === 4),
      ];
      expect(getIds(sortProductsByPrice(subset, 'desc'))).toEqual([1, 4, 3]);
    });

    test('товары с ID [5, 2, 6], направление "desc"', () => {
      const subset = [
        products.find((p) => p.id === 5),
        products.find((p) => p.id === 2),
        products.find((p) => p.id === 6),
      ];
      expect(getIds(sortProductsByPrice(subset, 'desc'))).toEqual([2, 5, 6]);
    });
  });

  describe('Исходный массив не меняется', () => {
    test('товары с ID [1, 3, 4], вызов с "asc"', () => {
      const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
      sortProductsByPrice(subset, 'asc');
      expect(getIds(subset)).toEqual([1, 3, 4]);
    });

    test('товары с ID [1, 3, 4], вызов с "desc"', () => {
      const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
      sortProductsByPrice(subset, 'desc');
      expect(getIds(subset)).toEqual([1, 3, 4]);
    });

    test('все products, направление не передано', () => {
      const clone = [...products];
      sortProductsByPrice(clone);
      expect(getIds(clone)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});