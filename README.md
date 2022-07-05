# refactoring-2

리팩터링 2판 공부!

2022/06/20 : 시작

## 키워드

- 코드의 의도(목적)를 잘 나타내도록 하기
- 해당 Code에 대한 Test Code가 있어야한다.

- `refactoring` 중 bug를 발견해도 수정하면 안되고 `refactoring` 이 끝난 후의 수정해야 한다.
- 복잡하게 얽힌 구조를 잘게 쪼개는 작업
- 이름을 잘 짓는 것이 매우 중요하다.

> 변수명은 구체적일수록 좋고 의미있는 이름을 가져야한다.
> ex) student, students

> 함수명은 하는 일을 설명하는 것이 중요하다.

- 작은 단위로 만들자
- 동사
- get, set, display
- 서버에서 가져오면 fetch
- 매개변수도 작명 잘해야 함
- if문으로 도배하기 보단 삼항연산자로 가독성을 높이자
- 부정문을 조건문으로 사용하는 것은 좋지 않기에 의미있는 변수로 추출하던가 해야한다.

  ```js
  function calculateCharge(date, quantity, plan) {
    function isSummer() {
      return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
    }

    return (charge = isSummer()
      ? quantity * plan.summerRate
      : quantity * plan.regularRate + plan.regularServiceCharge);
  }
  ```
- if문의 내용이 1줄이어도 { }를 통해서 나타내자. 중첩된 if문이라면 가독성이 매우 떨어지기 때문이다.