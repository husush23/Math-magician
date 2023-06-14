/*eslint-disable*/
import operate from '../logic/operate';

describe('check all Arithmetic operations', () => {
  test('performs addition correctly', () => {
    expect(+operate(3, 5, '+')).toBe(8);
  });

  test('Subtract numbers corerctly', () => {
    expect(+operate(3, 5, '-')).toBe(-2);
  });

  test('Multiply numbers correctly', () => {
    expect(+operate(2, 2, 'x')).toBe(4);
  });

  test('Divide numbers correctly', () => {
    expect(+operate(10, 2, '÷')).toBe(5);
  });

  //   test('thow errro for an invalid operation', () => {
  //     expect(() => operate(6, 3, '%')).toThrow('Invalid operation');
  //   });
});
