const { calculate } = require('.test.js');

describe('calculate function tests', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculate('1', 1, 2)).toBe('1 + 2 = 3');
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(calculate('2', 5, 2)).toBe('5 - 2 = 3');
  });

  test('multiplies 3 * 4 to equal 12', () => {
    expect(calculate('3', 3, 4)).toBe('3 * 4 = 12');
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(calculate('4', 10, 2)).toBe('10 / 2 = 5');
  });

  test('division by zero returns error message', () => {
    expect(calculate('4', 10, 0)).toBe('Error: Division by zero is not allowed.');
  });

  test('invalid operation returns error message', () => {
    expect(calculate('5', 10, 2)).toBe('Invalid operation selected.');
  });
});