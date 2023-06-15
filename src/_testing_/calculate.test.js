import calculate from '../logic/calculate';

describe('Testing Math Magician', () => {
  describe('Testing events', () => {
    it('Should numbers correctly', () => {});
  });

  describe('Check all buttons to work and calculate correctly', () => {
    it('Clear all when clicked AC button', () => {
      expect(
        calculate(
          {
            total: 2,
            next: 1,
            operation: '+',
          },
          'AC',
        ),
      ).toEqual({
        total: null,
        next: null,
        operation: null,
      });
    });

    it('returns an empty object when button is "0" and obj.next is "0"', () => {
      expect(
        calculate(
          {
            total: '10',
            next: '0',
            operation: '+',
          },
          '0',
        ),
      ).toEqual({});
    });

    it('If there is an operation, update next', () => {
      const obj = {
        total: null,
        next: '12',
        operation: '+',
      };

      const newObj = calculate(obj, '3');

      expect(newObj.next).toBe('123');
    });

    it('If there is no operation, update next and clear the value', () => {
      const obj = {
        total: null,
        next: '2',
      };
      const newObj = calculate(obj, '2');
      expect(newObj.next).toBe('22');
      expect(newObj.total).toBe(null);
    });

    it('If buttonName is ".", update next if there is a next number and it does not already contain a decimal point', () => {
      const obj = {
        total: null,
        next: '12',
      };

      const newObj = calculate(obj, '.');

      expect(newObj.next).toBe('12.');
    });

    it('If buttonName is "=" and there is a next number and an operation, calculate the total and clear the next number and operation', () => {
      const obj = {
        total: 10,
        next: 20,
        operation: '+',
      };

      const newObj = calculate(obj, '=');

      expect(newObj.total).toBe('30');
      expect(newObj.next).toBe(null);
      expect(newObj.operation).toBe(null);
    });

    it('If buttonName is "+/-" and there is a next number, negate it', () => {
      const obj = {
        total: null,
        next: '12',
      };

      const newObj = calculate(obj, '+/-');

      expect(newObj.next).toBe('-12');
    });

    it('If buttonName is "+/-" and there is a total, negate it', () => {
      const obj = {
        total: 12,
        next: null,
      };

      const newObj = calculate(obj, '+/-');

      expect(newObj.total).toBe('-12');
    });

    it('If the user pressed an operation after pressing "=" and there is a total but no operation, set the operation to the buttonName', () => {
      const obj = {
        total: 12,
        next: null,
        operation: null,
      };

      const newObj = calculate(obj, '+');

      expect(newObj.total).toBe(12);
      expect(newObj.operation).toBe('+');
    });

    it('User pressed 20 and ÷ button ( 10 ÷) but then he press x button the result will be x10', () => {
      const operateTest = { total: '20', next: null, operation: '÷' };
      expect(calculate(operateTest, '+')).toEqual({
        total: '20',
        next: null,
        operation: '+',
      });
    });

    it('User pressed 5 and +/- button (5 +/-) result will be -5', () => {
      const operateTest = { total: null, next: '5', operation: null };
      expect(calculate(operateTest, '+/-')).toEqual({
        total: null,
        next: '-5',
        operation: null,
      });
    });

    it('User pressed 10 and ÷ button ( 10 ÷) but then he press x button the result will be x10', () => {
      const operationTest = { total: '10', next: null, operation: '÷' };
      expect(calculate(operationTest, 'x')).toEqual({
        total: '10',
        next: null,
        operation: 'x',
      });
    });
  });
});
