const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  const getIds = (items) => items.map((item) => item.id);

  describe('Точное совпадение', () => {
    test('запрос "Наушники"', () => {
      expect(getIds(searchProducts(products, 'Наушники'))).toEqual([1]);
    });

    test('запрос "Чистый код"', () => {
      expect(getIds(searchProducts(products, 'Чистый код'))).toEqual([6]);
    });

    test('запрос "Настольная лампа"', () => {
      expect(getIds(searchProducts(products, 'Настольная лампа'))).toEqual([4]);
    });
  });

  describe('Регистр не влияет на поиск', () => {
    test('запрос "javascript"', () => {
      expect(getIds(searchProducts(products, 'javascript'))).toEqual([3]);
    });

    test('запрос "ЧЕХОЛ"', () => {
      expect(getIds(searchProducts(products, 'ЧЕХОЛ'))).toEqual([5]);
    });

    test('запрос "наушники"', () => {
      expect(getIds(searchProducts(products, 'наушники'))).toEqual([1]);
    });
  });

  describe('Пустой запрос', () => {
    test('запрос ""', () => {
      expect(getIds(searchProducts(products, ''))).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('запрос "   "', () => {
      expect(getIds(searchProducts(products, '   '))).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('запрос "\\t\\n"', () => {
      expect(getIds(searchProducts(products, '\t\n'))).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});