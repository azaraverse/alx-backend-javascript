const { expect } = require('chai');
const getPaymentTokenFromApi = require('./6-payment_token');

describe('get response from API', () => {
  it('should return a desired response from the API', () => getPaymentTokenFromApi(true)
    .then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
    }));
});
