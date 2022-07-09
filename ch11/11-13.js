// 예외를 사전확인으로 바꾸기
// 예외처리는 정말 예외인 경우에만 해주는 것이 좋다.
// 예상 가능한 예외는 따로 처리해주는 것이 좋다라는 소리!

// 지금 예제는 배열의 찾는 값이 없을 때 에러를 던지는 것인데
// 해당 이슈를 해결할 수 있는 데 예외처리를 남용한 경우이다.

const values = [];

function getValueForPeriod(periodNumber) {
  // if (periodNumber < 0 || periodNumber >= values.length) {
  //   return 0;
  // }
  // return values[periodNumber];

  return values[periodNumber] ?? 0;
}

try {
  getValueForPeriod(-10);
} catch (error) {
  console.log("에러 발생!");
}
