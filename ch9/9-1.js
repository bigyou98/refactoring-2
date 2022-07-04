// 변수 쪼개기
// 의미 있는 이름을 부여하자
// 값이 변해야할 이유가 있을 때만 let을 사용하자
// 그게 아니라면 const 만 사용할 것

// 예제 1
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);

// 예제 2
function distanceTraveled(scenario, time) {
  let result;

  // 가속도(a) = 힘(F) / 질량(m)
  const primaryAcceleration = scenario.primaryForce / scenario.mass;

  const primaryTime = Math.main(time, scenario.delay);

  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리

  const secondaryTime = time - scenario.delay;

  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
}

// 예제 3
// 들어온 인자를 변경하는 것은 좋지 않다.
function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}
