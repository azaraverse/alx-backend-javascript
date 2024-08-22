/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('return sum of two floored numbers', () => {
    assert.equal(calculateNumber(1.3, 2.6), 4);
  });
  it('return sum of one number and another floored number', () => {
    assert.equal(calculateNumber(10, 5.5), 16);
  });
  it('return sum of one negative number and another floored number', () => {
    assert.equal(calculateNumber(-2.3, 4.3), 2);
  });
  it('return sum of two zero numbers', () => {
    assert.equal(calculateNumber(0.4, 0.1), 0);
  });
});
