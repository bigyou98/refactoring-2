// 서브 클래스 제거하기
// 단순히 type만 다른데 상속을 해서 서브 클래스를 만드는 것은 과하다.

class Person {
  #name;
  #genderCode;

  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode;
  }

  get name() {
    return this.#name;
  }

  get gender() {
    return this.#genderCode;
  }

  // 생성자를 만들어두기
  static create(record) {
    switch (record.genderCode) {
      case "M":
        return new Person(record.name, "M");
      case "F":
        return new Person(record.name, "F");
      default:
        return new Person(record.name, "X");
    }
  }

  get isMale() {
    return this.#genderCode === "M";
  }
}
