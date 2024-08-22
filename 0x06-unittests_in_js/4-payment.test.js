/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./4-payment');

describe('test calculateNumber being called', () => {
  it('should call Utils at most, once', () => {
    const calculStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const calculSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(calculStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(calculSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    calculStub.restore();
    calculSpy.restore();
  });
});
