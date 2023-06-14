/*eslint-disable*/
import calculate from '../logic/calculate';

describe('Check all buttons to work and calculate correctly', () => {
  test('Clear all when clicked AC button', () => {
    const obj = {
      total: 2,
      next: 1,
      operation: '+',
    };
    const emptyObj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toEqual(emptyObj);
  });
});
