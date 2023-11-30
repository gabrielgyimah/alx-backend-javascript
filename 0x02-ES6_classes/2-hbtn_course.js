/* eslint-disable */

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }

    if (isNaN(length)) {
      throw TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || !students.every((std) => typeof std === 'string')) {
      throw TypeError('Students must be an array of strings');
    }

    // If no errors, proceed with initialization
    this._name = name;
    this._length = length;
    this._students = students;
  }
  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (isNaN(length)) {
      throw TypeError('Length must be a number');
    }
    this._length = length
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((std) => typeof std === 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
