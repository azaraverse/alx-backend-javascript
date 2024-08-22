/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;

const sendPaymentRequestToApi = require('./5-payment');

describe('test sendPaymentRequestToApi console output', () => {
  let calculSpy;
  beforeEach(() => {
    calculSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculSpy.restore();
  });

  it('should return expected information in the console', () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should return expected information in the console for new test', () => {
    sendPaymentRequestToApi(10, 10);

    expect(calculSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
