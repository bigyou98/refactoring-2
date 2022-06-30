// 중개자,위임(composition) 제거하기
// 다른 클래스를 포함하여서 그 클래스에게 기능을 위임하여 사용한다.
class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  set department(arg) {
    this.#department = arg;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  get manager() {
    return this.#manager;
  }
}

const person = new Person("Tom", "aManager", "999");
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
