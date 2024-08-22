const request = require('request');
const { expect } = require('chai');

describe('gET index page', () => {
  it('responds with required information', () => {
    request('http://localhost:7865', (req, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});

describe('correct status code for when id is a number', () => {
  it('checks for valid id number', () => {
    request('http://localhost:7865/cart/10', (req, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 10');
    });
  });
  it('checks for invalid id number', () => {
    request('http://localhost:7865/cart/abc', (req, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.include('Cannot GET /cart/abc');
    });
  });
  it('checks for alphanumerics as id', () => {
    request('http://localhost:7865/cart/abc123', (req, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.include('Cannot GET /cart/abc123');
    });
  });
  it('checks for empty id endpoints as id', () => {
    request('http://localhost:7865/cart/', (req, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.include('Cannot GET /cart/');
    });
  });
});

describe('gET /available_payments endpoint', () => {
  it('should return available payment methods', () => {
    request('http://localhost:7865/available_payments', (req, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
    });
  });
});

describe('pOST /login endpoint', () => {
  it('should return a welcome message with username', () => {
    request.post({
      url: 'http://localhost:7865/login/',
      json: { userName: 'Azara' },
    },
    (req, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Azara');
    });
  });
});
