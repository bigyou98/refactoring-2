// 생성자를 팩터리 함수로 바꾸기
// 생성자를 직접 호출해 생성을 하는 것이 아닌
// 클래스 내부에 생성자 함수를 만들어서 인스턴스를 생성하는 방식

export class Employee {
  // 생성자 함수는 private로 둬야하는데 JS는 그런게 없음!
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  // 팩토리 함수
  static createEngineer(name) {
    return new Employee(name, "E");
  }
}

const sanghoon = Employee.createEngineer("상훈");
