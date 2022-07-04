// 9-4 참조를 값으로 바꾸기 => 값을 바꿀 때마다 새로운 값을 재할당해줌으로써 불변성을 지킨다

// 참조를 통한 업데이트가 아닌 새로운 인스턴스를 만들어서 불변성을 지키자.
// 계속 새로운거 반환해주는 식이다. 즉, 불변 하는 것처럼 동작하게 한다

// 의구심 : 그러면 계속해서 인스턴스를 생성해서 메모리 측면에서 안좋을 것 같다.
// 정말 문제가 되면 그때 해결해라!
// 아주 작은 임베디드에 들어갈 코드가 아니라면 성능에 문제가 되지 않는다!
// 정말 미세한 성능이 떨어진다 하더라도 불변성을 얻음으로서 안전해졌기에 더 나은 선택이다.
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

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    this.#telephoneNumber = new TelephoneNumber(value, this.officeNumber);
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value) {
    this.#telephoneNumber = new TelephoneNumber(this.officeAreaCode, value);
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  get number() {
    return this.#number;
  }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
