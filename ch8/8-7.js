// 반복문 쪼개기
// 바꾸기전 :  한번에 두가지 일을 하고있다
// 1. 가장 작은 age를 선정한다
// 2. 모두의 age를 더한다

// 성능 측면에서 2N은 N이니 나누는 것은 상관이 없다.
// 가독성 측면에서 더 좋다.

let people = [
  { age: 12, salary: 20 },
  { age: 132, salary: 20 },
  { age: 2, salary: 20 },
  { age: 1, salary: 20 },
];
export function reportYoungestAgeAndTotalSalary(people = []) {
  function youngestAge() {
    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary() {
    let totalSalary = 0;

    people.forEach(({ salary }) => {
      totalSalary += salary;
    });
    return people.reduce((total, p) => (total += p.salary), 0);
  }

  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;
}

console.log(reportYoungestAgeAndTotalSalary(people));
