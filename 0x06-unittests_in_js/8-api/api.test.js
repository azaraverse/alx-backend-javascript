const request = require('request');
const { expect } = require('chai');

describe('GET index page', () => {
  it('responds with required information', () => {
    request('http://localhost:7865', (req, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});
