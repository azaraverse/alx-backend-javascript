export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter for the code attribute
  get code() {
    return this._code;
  }

  // setter for the code attribute
  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // getter for the name attribute
  get name() {
    return this._name;
  }

  // setter for the name attribute
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
