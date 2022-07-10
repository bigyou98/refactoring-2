// 타입 코드를 서브 클래스로 바꾸기

class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get type() {
    return "employee";
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }

  static createEmployee(name, type) {
    switch (type) {
      case "engineer":
        return new Engineer(name);
      case "manager":
        return new Manager(name);
      case "salesperson":
        return new Salesperson(name);
      default:
        throw new Error(`${type}라는 직업 유형은 없습니다.`);
    }
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}
class Manager extends Employee {
  get type() {
    return "manager";
  }
}

class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}
const sanghoon = new Employee("상훈");
const ellie = new Engineer("엘리");
const bob = new Manager("밥");

console.log(sanghoon.toString());
console.log(ellie.toString());
console.log(bob.toString());

let qwe = Employee.createEmployee("상훈", "engineer");
console.log(qwe);
