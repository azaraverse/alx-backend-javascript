export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // getter for the size attribute
  get size() {
    return this._size;
  }

  // getter for the location attribute
  get location() {
    return this._location;
  }

  // setter for the size attribute
  set size(value) {
    if (typeof value === 'number') {
      this._size = value;
    }
  }

  // setter for the location attribute
  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    }
  }

  // custome conversion to number (valueOf)
  valueOf() {
    return this._size;
  }

  // custom conversion to string (toString)
  toString() {
    return this._location;
  }
}
