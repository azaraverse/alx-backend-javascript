export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value === 'string') {
      this._brand = value;
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value === 'string') {
      this._motor = value;
    }
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value === 'string') {
      this._color = value;
    }
  }

  // Method
  cloneCar() {
    return new this.constructor();
  }
}
