// 문장 슬라이드 하기
// 변수는 사용하는 곳과 최대한 가까이 두기
// 그래야 읽을 때 수월하다

// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;

// 예제 2
// 조건문과 상관없는 공통 행위는 조건문 밖으로 위치한다

function someFunc() {
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();
  allocatedResources.push(result);

  return result;
}
