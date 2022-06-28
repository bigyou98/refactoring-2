class Person {
  #name;
  #telephoneNumber;

  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }
  get officeAreaCode() {
    return this.#telephoneNumber.officeAreaCode;
  }
  get officeNumber() {
    return this.#telephoneNumber.number;
  }
}

class TelephoneNumber {
  #officeAreaCode;
  #number;
  constructor(number, officeAreaCode) {
    this.#number = number;
    this.#officeAreaCode = officeAreaCode;
  }
  get number() {
    return this.#number;
  }

  set number(arg) {
    this.#number = arg;
  }

  get officeAreaCode() {
    return this.#officeAreaCode;
  }

  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }

  get telephoneNumber() {
    return `(${this.#officeAreaCode}) ${this.#number}`;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
