import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount attribute
  get amount() {
    return this._amount;
  }

  // setter for amount attribute
  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // getter for currency attribute
  get currency() {
    return this._currency;
  }

  // setter for the currency attribute
  set currency(value) {
    if (value instanceof (Currency)) {
      this._currency = value;
    } else {
      throw new TypeError('Currency must be a class');
    }
  }

  // Method
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // Static Method
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('Amount and ConversionRate must be numbers');
  }
}
