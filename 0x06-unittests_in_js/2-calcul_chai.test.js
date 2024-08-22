/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculateNumber', () => {
  it('return sum of two round numbers', () => {
    expect(calculateNumber('SUM', 1.3, 2.6)).to.equal(4);
  });
  it('return difference of one number from another round number', () => {
    expect(calculateNumber('SUBTRACT', 10, 5.5)).to.equal(4);
  });
  it('return quotient of one number and another round number', () => {
    expect(calculateNumber('DIVIDE', 6, 2.3)).to.equal(3);
  });
  it('return quotient of two zero numbers', () => {
    expect(calculateNumber('DIVIDE', 0.4, 0.1)).to.equal('Error');
  });
});
