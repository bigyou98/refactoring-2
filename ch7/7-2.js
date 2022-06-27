// class 안에 배열이 get으로 접근이 가능한데
// 그때문에 해당 배열의 메소드를 통해서 수정이 가능하다
// 그래서 배열은 조심해서 다뤄야한다.
// 해당하는 data를 보여주는게 아닌 복사본을 return해준다.
// 추가, 삭제 기능을 class 내부에서 기능을 만들어줘야 한다.

export class Person {
  #name;
  #courses = [];
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get courses() {
    // 새로운 배열을 만들어서 내보낸다.
    return [...this.#courses];
  }

  // 추가 기능
  addCourse(course) {
    this.#courses.push(course);
  }

  // 삭제 기능
  removeCourse(course) {
    const index = this.#courses.indexOf(course);
    if (index === -1) return;
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}

const ellie = new Person("엘리");
const temp = new Course("리팩토링3");
// 외부에서 private 변수를 맘대로 접근한다
ellie.addCourse(new Course("리팩토링1"));
ellie.addCourse(new Course("리팩토링2"));
ellie.addCourse(temp);
ellie.removeCourse(temp);
console.log(ellie.courses.length);
