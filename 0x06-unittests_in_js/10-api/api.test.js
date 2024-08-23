const request = require('request');
const { expect } = require('chai');

describe('GET /', () => {
  it('responds with required information', () => {
    request('http://localhost:7865', (req, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});

describe('GET /cart/:id', () => {
  it('checks for valid id number', () => {
    request('http://localhost:7865/cart/10', (req, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 10');
    });
  });
});

describe('GET /cart/:id', () => {
  it('checks for id not a number', () => {
    request('http://localhost:7865/cart/abc', (req, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.include('Cannot GET /cart/abc');
    });
  });
});

describe('GET /cart/:id', () => {
  it('checks for alphanumerics as id', () => {
    request('http://localhost:7865/cart/abc123', (req, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.include('Cannot GET /cart/abc123');
    });
  });
});

describe('GET /cart/:id', () => {
  it('checks for empty id endpoints as id', () => {
    request('http://localhost:7865/cart/', (req, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.include('Cannot GET /cart/');
    });
  });
});

describe('GET /available_payments', () => {
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

describe('POST /login', () => {
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
