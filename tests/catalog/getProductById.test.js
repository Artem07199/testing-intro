const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  describe('Товар существует', () => {
    test('ID 1', () => {
      expect(getProductById(products, 1)).toEqual(products[0]);
    });

    test('ID 4', () => {
      expect(getProductById(products, 4)).toEqual(products[3]);
    });

    test('ID 6', () => {
      expect(getProductById(products, 6)).toEqual(products[5]);
    });
  });

  describe('Числовой ID отсутствует', () => {
    test('ID 0', () => {
      expect(getProductById(products, 0)).toBeNull();
    });

    test('ID 999', () => {
      expect(getProductById(products, 999)).toBeNull();
    });

    test('ID -1', () => {
      expect(getProductById(products, -1)).toBeNull();
    });
  });

  describe('ID неверного типа', () => {
    test('ID "1"', () => {
      expect(getProductById(products, '1')).toBeNull();
    });

    test('ID undefined', () => {
      expect(getProductById(products, undefined)).toBeNull();
    });

    test('ID NaN', () => {
      expect(getProductById(products, NaN)).toBeNull();
    });
  });
});