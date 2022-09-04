function encodeDec(func) {
  return class Temp extends func {
    constructor() {
      super();
      this._name = 'zhang';
    }
  };
}

@encodeDec
class Person {
  get name() {
    return this._name;
  }
}
const person = new Person();
console.log(person.name);
