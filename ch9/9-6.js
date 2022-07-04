// 9-6 매직 리터럴 바꾸기

// 의미 없는 숫자 ex) 9.81이 딱 나오면 뭔지도 모르겠고 기분만 나쁘다!
// 의미가 있는 이름을 갖게 만들어라
function potentialEnergy(mass, height) {
  const STANDARD_GRAVITY = 9.81;
  return mass * STANDARD_GRAVITY * height;
}
