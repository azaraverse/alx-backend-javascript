export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}

Airport.prototype[Symbol.for('nodejs.util.inspect.custom')] = function () {
  return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
};
