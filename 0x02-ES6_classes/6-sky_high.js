import Building from './5-building';

export default class SkyHighBuiliding extends Building {
  constructor(sqft, floors) {
    super();
    this._sqft = sqft;
    this._floors = floors;
  }

  // getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // getter for the floors attribute
  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
