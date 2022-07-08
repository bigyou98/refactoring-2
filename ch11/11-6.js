// 질의함수를 매개변수로 바꾸기
// 외부 모듈의 값을 함수 내부에서 포함하는 것은 결합도가 상승해  side-effect가 발생할 수 있어 좋은 코드는 아님
// 매개변수로 받는 것이 더 낫다

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}

targetTemperature(aPlan, thermostat.currentTemperature);
