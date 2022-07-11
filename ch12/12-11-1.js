// 슈퍼클래스를 위임으로 바꾸기

class List {}

class Stack {
  constructor() {
    this.storage = new List();
  }
  pop() {}
  push() {}
}
