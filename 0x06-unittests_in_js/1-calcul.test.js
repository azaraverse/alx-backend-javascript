/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('return sum of two round numbers', () => {
    assert.equal(calculateNumber('SUM', 1.3, 2.6), 4);
  });
  it('return difference of one number from another round number', () => {
    assert.equal(calculateNumber('SUBTRACT', 10, 5.5), 4);
  });
  it('return quotient of one number and another round number', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 2.3), 3);
  });
  it('return quotient of two zero numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 0.4, 0.1), 'Error');
  });
});
