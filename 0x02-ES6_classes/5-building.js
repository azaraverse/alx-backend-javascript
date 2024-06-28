export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    } else {
      this._sqft = sqft;
    }
  }

  // getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // settter for the sqft attribute
  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }
}
