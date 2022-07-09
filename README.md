# refactoring-2

리팩터링 2판 공부!

2022/06/20 : 시작

## 키워드

- 코드 상에서 -23, 25 처럼 알수 없는 값은 변수로 만들어서 이름을 지정해줘야 한다.
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
- 중첩 조건문은 보기도 어렵고 더러워지고 유지보수하기도 어렵다
- 함수가 빨리 종료될 수 있도록 if-else로 나누는 게 아닌 쉽게 결과가 도출될 수 있는 부분을 앞에 배치한다.

  ```js
  export function adjustedCapital(instrument) {
    if (!isEligibleForAdjustCapital(instrument)) {
      return 0;
    }
    return (
      (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
    );
  }
  function isEligibleForAdjustCapital(instrument) {
    return (
      instrument.capital > 0 &&
      instrument.interestRate > 0 &&
      instrument.duration > 0
    );
  }
  ```

- 좋은 모듈/클래스의 내부 구현사항은 캡슐화 되어 있어야 한다.
- 필요한 것만 노출해야 한다.
- 내부 구현을 아무리 잘해도 함수의 이름이나 인자를 받는 방식이 이상하다면 해당 모듈은 좋은 코드는 아니다.
- side-effect 없는 함수 만들기!
- 함수는 한가지 일만 하게 해라~~!!!
  ex) 계산하는 함수면 계산만하셈 어디 전송하고 그러지말고~!
- 공통된 로직은 함수로 뽑아내고 살짝 다른 부분은 매개변수로 전달해라(함수여도 OK)!
- 매개변수는 3개를 넘기지 않도록!
- 가장 좋은 함수는 매개변수가 아예 없는 함수이다.
- 계속 값을 갖고 있어야 한다면 프로퍼티로 만들어 두자
- 계속 값을 가질 필요가 없을 때는 일시적으로 값을 1번만 반환해주는 함수로 만들자
  - instance를 계속 가지고 있으면 낭비만 된다.

- 예외처리는 정말 예외인 경우에만 해주는 것이 좋다.
  - 예상 가능한 예외는 따로 처리해주는 것이 좋다라는 소리!

## 인상 깊었던 챕터

> 조건식 통합하기

- 10-2.js

> 중첩 조건문을 보호 구문으로 바꾸기

- 10-3-1.js
- 10-3-2.js

> 플래그 인수 제거하기 : 그냥 2개로 만들어라!

- 11-3.js
