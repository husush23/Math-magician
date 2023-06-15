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
  test('Handle dividing by 0', () => {
    expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('throws an error for an unknown operation', () => {
    expect(() => operate(6, 3, '#')).toThrow("Unknown operation '#'");
  });
  test('Modulus operation should return the correct result', () => {
    const result = operate('5', '2', '%');
    expect(result).toBe('1');
  });
});
