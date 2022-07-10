// 메서드 내리기
// 서브 클래스에만 속하는 기능은 서브 클래스에서만 정의해라
// 전체적으로 공통 사용하는 함수만 부모 클래스에 올려라

class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}
