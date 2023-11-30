/* eslint-disable */

class Currency {
  constructor(code, name) {
    this._validateString(code);
    this._validateString(name);
    this._code = code;
    this._name = name;
  }

  // getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name; // Added the missing return statement
  }

  // setters
  set code(code) {
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  _validateString(property) {
    if (typeof property !== 'string') { // Corrected the parameter name to be consistent
      throw TypeError(`${property} must be a string`);
    }
  }
}
