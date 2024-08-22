/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./3-payment');

describe('test calculateNumber being called', () => {
  it('should call Utils at most, once', () => {
    const calculSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calculSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    calculSpy.restore();
  });
});
