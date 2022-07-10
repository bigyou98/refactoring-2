// 메서드 올리기

// 예시 1
class Employee {
  get name() {}
}
class Salesperson extends Employee {}
class Engineer extends Employee {}

// 예시 2
class Party {
  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }
}
class Department extends Party {}
class Employee extends Party {}
